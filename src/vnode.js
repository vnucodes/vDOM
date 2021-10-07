export class VNode {

    // create virtual nodes/elements
    static create ( type, props = null, children = [] ) {

        // update props
        props = typeof props === 'null' || typeof props === 'undefined'
                ? Object.create( null )
                : Object.assign( Object.create( null ), {...props} )

        return {
            type,
            props,
            children
        }
    }

    // render virtual node/s
    static render ( {type, props, children} ) {

        let $$elm

        // create dom element
        $$elm = document.createElement( type )

        // create props for the element
        for ( const [propName, propVal] of Object.entries(props)  ) {
            $$elm.setAttribute( propName, propVal )
        }

        // create and append children
        if ( typeof children === 'string' ) {
            // create text node and append to elem/parent
            $$elm.appendChild( document.createTextNode( children ) )

        } else {
            // create and append element child node
            for (const child of children) {                     
                $$elm.appendChild( VNode.render(child) )
            }
        }
        
        // return
        return $$elm
    }
}