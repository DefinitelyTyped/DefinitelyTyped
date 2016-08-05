// Type definitions for react-css-modules 3.7.9
// Project: https://github.com/gajus/react-css-modules
// Definitions by: Kostya Esmukov <https://github.com/KostyaEsmukov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module 'react-css-modules' {

    interface TypeOptions {
        allowMultiple?: boolean;
        errorWhenNotFound?: boolean;
    }

    type StylesObject = any;

    interface CSSModules {
        (defaultStyles: StylesObject, options?: TypeOptions): <C extends Function>(Component: C) => C;
        <C extends Function>(Component: C, defaultStyles: StylesObject, options?: TypeOptions): C;
    }

    module CSSModules {
        interface InjectedCSSModuleProps {
            styles: StylesObject;
        }
    }

    let CSSModules: CSSModules;

    export = CSSModules;
}
