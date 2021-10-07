'use strict'

import { VNode } from "./vnode"

// '$$' for real dom element
// '__' for virtual dom element

const __root = VNode.create( 
                'div', 
                {
                    class: 'position-relative',
                    id: 'wrapper'
                },
                [
                    VNode.create( 'p', {}, 'Paragraph text 1' ),
                    VNode.create( 'p', {}, 'Paragraph text 2' )
                ]
            ) 

VNode.render( __root )
