// Type definitions for dva v1.0.0
// Project: https://github.com/dvajs/dva
// Definitions by: nikogu <https://github.com/nikogu/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />
declare module 'dva' {
    /** connecting Container Components */
    export function connect(maps:Object):Function;

    export default function dva(opts?:Object):{

        /** dva plugin */
        use: (hooks:Object)=>void,

        /** dva bootstrap */
        start: (selector?:Object)=>void,

        /** dva add model */
        model: (model:Object)=>void,

        /** dva setting router */
        router: (router:Object)=>void,
    };
}

/**
 * https://github.com/reactjs/react-router
 */
declare module 'dva/router' {
    import React = __React;

    interface RouterProps {
        history?: Object
    }
    export class Router extends React.Component<RouterProps, {}> {
        render(): JSX.Element
    }


    interface RouteProps {
        path?: string,
        component?: React.ReactNode
    }
    export class Route extends React.Component<RouteProps, {}> {
        render(): JSX.Element
    }
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
