// Type definitions for dva v1.0.0
// Project: https://github.com/dvajs/dva
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'dva' {
    /** connecting Container Components */
    export function connect(maps):Function;

    export default function dva(opts?:Object):{

        /** dva plugin */
        use: (hooks:Object)=>void,

        /** dva bootstrap */
        start: (selector?:Object)=>void,

        /** dva add model */
        model: (model:Object)=>void,

        /** dva setting router */
        router: (router)=>void,
    };
}

/**
 * https://github.com/reactjs/react-router
 */
declare module 'dva/router' {
    export class Router {}
    export class Route {}
}

/**
 * https://github.com/reactjs/react-router-redux
 */
declare module 'dva/routerRedux' {
    export default Object;
}

/**
 * https://github.com/fis-components/whatwg-fetch
 */
declare module 'dva/fetch' {
    export default Function;
}
