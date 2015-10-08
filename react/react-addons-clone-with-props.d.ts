// Type definitions for React v0.14 (react-addons-clone-with-props)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="react.d.ts" />

declare namespace __React {
    namespace __Addons {
        export function cloneWithProps<P>(element: __React.DOMElement<P>, props: P): __React.DOMElement<P>;
        export function cloneWithProps<P>(element: __React.ClassicElement<P>, props: P): __React.ClassicElement<P>;
        export function cloneWithProps<P>(element: __React.ReactElement<P>, props: P): __React.ReactElement<P>;
    }
}

declare module "react-addons-clone-with-props" {
    export = __React.__Addons.cloneWithProps;
}
