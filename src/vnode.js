import { diff } from 'deep-diff';

export class VNode {

    // collection of all vNodes created
    static vNodes = []

    // create virtual nodes/elements
    static create ( type, props = null, children = [] ) {

        // update props
        props = typeof props === 'null' || typeof props === 'undefined'
                ? Object.create( null )
                : Object.assign( Object.create( null ), {...props} )        

        // return last/recent vNode
        return {type, props, children}
    }

    // crate virtual dom before mounting on real dom
    static beforeMount ( {type, props, children} ) {

        let __elm

        // create dom element
        __elm = document.createElement( type )

        // create props for the element
        for ( const [propName, propVal] of Object.entries(props)  ) {
            __elm.setAttribute( propName, propVal )
        }

        // create and append children
        if ( typeof children === 'string' ) {
            // create text node and append to elem/parent
            __elm.appendChild( document.createTextNode( children ) )

        } else {
            
            // create and append element child node
            for (const child of children) {                     
                __elm.appendChild( this.beforeMount(child) )
            }
        }
        
        // return
        return __elm
    }

    // render virtual node/s and then mount on real DOM
    static render ( __node, $$target ) {        
        
        // remove previous vDom
        if ( this.vNodes.length === 2 ) this.vNodes.shift()  
        
        // push new vDom
        this.vNodes.push( __node )

        // mount else update
        this.vNodes[1] 
             ? this.update( this.beforeMount( __node ), $$target )  
             : this.mount( this.beforeMount( __node ), $$target )    
        
    }

    // mount the virtual node on real dom
    static mount ( __node, $$target ) {

        //console.log('mount')

        $$target.appendChild( __node )
    }

    // update the virtual node on real dom
    static update ( __node, $$target ) {

        // diff the previous vDOM and current/new vDOM        
        //console.log('update')

        let vNodesDiffs = diff(this.vNodes[0], this.vNodes[1])

        if ( vNodesDiffs ) {
            for ( let vNodesDiff of vNodesDiffs  ) {
                
                // if an 'update'
                if ( vNodesDiff.kind === 'E' ) {
                    this.diffUpdate( __node, $$target, vNodesDiff )
                }

            }
        }   
        
    }

    // diff update
    static diffUpdate( __node, $$target, diff ) {
        
        let targetElm = Array.from( $$target.children )[0]

        diff.path.forEach( (path, index) => {  
            
            if ( index === diff.path.length - 1 ) return
            
            if ( path === 'children' ) {

                targetElm = Array.from( targetElm.children )
                console.log(index, path, targetElm)

            } else {

                targetElm = targetElm[ path ]
                console.log(index, path, targetElm)
            }

        })

        // if diff.rhs === string add textNode
        if( typeof diff.rhs === 'string' ) {
            let textNode = document.createTextNode( diff.rhs )
            targetElm.removeChild( targetElm.firstChild )
            targetElm.appendChild( textNode )
        }
    }

}