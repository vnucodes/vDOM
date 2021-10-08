'use strict'

import { VNode } from "./vnode"

// '$$' for real dom element
// '__' for virtual dom element

let __root
let count = 0

function test () {
    
    __root = VNode.create( 
        'div', 
        {
            class: 'position-relative',
            id: 'wrapper'
        },
        [
            VNode.create( 
                'p', 
                {}, 
                [   
                    VNode.create(
                    'span', 
                    {}, 
                    `this is span # ${count}`
                    ),

                    VNode.create(
                        'a', 
                        { href: "https://google.com" }, 
                        `this is link to Google`
                    )
                ] 
            )
        ]
    ) 

    VNode.render( __root, document.getElementById('app') )

    count++

}

setInterval(test, 5000)


