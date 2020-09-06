import Example1 from "./examples/1/example1";
import Example2 from "./examples/2/example2";
import Example3 from "./examples/3/example3";
import Example4 from "./examples/4/example4";
import Example5 from "./examples/5/example5";
import Example6 from "./examples/6/example6";
import Example7 from "./examples/7/example7";
import Example8 from "./examples/8/example8";
import Example8My from "./examples/8/example8-my";
import Example9 from "./examples/9/example9";
import Example10 from "./examples/10/example10";
import Example10_2 from "./examples/10/example10-2";
import {About} from './examples/about'; //注意非函数、非表达式等导入要用{}括住

const routes = [
    {
        path:'/',
        component: Example1,
        exact:true
    },
    {
        path:'/about',
        component: About,
        childrens:[
            {
                path:'/about/my',
                component:Example2
            },
            {
                path:'/about/you',
                component:Example3
            }
        ]
    },
    {
        path:'/discover',
        component: Example4,
        childrens:[
            {
                path:'/discover/earth',
                component:Example5
            },
            {
                path:'/discover/star',
                component:Example6
            }
        ]
    },
    {
        path:'/example7',
        component: Example7,
        exact:true
    },
    {
        path:'/example8',
        component: Example8,
        childrens:[
            {
                path:'/example8/my',
                component: Example8My
            }
        ]
    },
    {
        path:'/example9',
        component: Example9,
        exact:true
    },
    {
        path:'/example10',
        component: Example10,
        childrens:[
            {
                path:'/example10/2',
                component: Example10_2
            }
        ]
    }
];

export {routes}
