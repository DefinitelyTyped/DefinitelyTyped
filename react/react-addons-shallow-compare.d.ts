// Type definitions for React v0.14 (react-addons-css-transition-group)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="react.d.ts" />

declare namespace __React {
    namespace __Addons {
        export function shallowCompare<P, S>(
            component: __React.Component<P, S>,
            nextProps: P,
            nextState: S): boolean;
    }
}

declare module "react-addons-shallow-compare" {
    export = __React.__Addons.shallowCompare;
}
