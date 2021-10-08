import { diff } from 'deep-diff';

export class VNode {

    // collection of all vDOMs created
    static vDoms = []

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
        if ( this.vDoms.length === 2 ) this.vDoms.shift()  
        
        // push new vDom
        this.vDoms.push( __node )

        // mount else update
        this.vDoms[1] 
             ? this.update( this.beforeMount( __node ), $$target )  
             : this.mount( this.beforeMount( __node ), $$target )    
        
    }

    // mount the virtual node on real dom
    static mount ( __node, $$target ) {

        //console.log('mount')

        $$target.appendChild( __node )
        return __node
    }

    // update the virtual node on real dom
    static update ( __node, $$target ) {

        // diff the previous vDOM and current/new vDOM        
        //console.log('update')

        let vDomsDiffs = diff(this.vDoms[0], this.vDoms[1])

        if ( vDomsDiffs ) {
            for ( let vDomsDiff of vDomsDiffs  ) {               
                console.log( vDomsDiff )
            }
        }       
        
    }

}