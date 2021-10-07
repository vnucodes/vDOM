'use strict'

import { VNode } from "./vnode"

// '$$' for real dom element
// '__' for virtual dom element

let __root
let count = 0

for ( let i = 1; i < 4; i++ ) {

    __root = VNode.create( 
        'div', 
        {
            class: 'position-relative',
            id: 'wrapper'
        },
        [
            VNode.create( 'p', {}, `Paragraph # ${i}` )
        ]
    ) 

    VNode.render( __root, document.getElementById('app') )
}


