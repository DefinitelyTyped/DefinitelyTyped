// Type definitions for react-css-modules 3.7.9
// Project: https://github.com/gajus/react-css-modules
// Definitions by: Kostya Esmukov <https://github.com/KostyaEsmukov>, Tadas Dailyda <https://github.com/skirsdeda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

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
        // Extend your component's Prop interface with this one to get access to `this.props.styles`
        //
        // interface MyComponentProps extends CSSModules.InjectedCSSModuleProps {}
        interface InjectedCSSModuleProps {
            styles?: StylesObject;
        }
    }

    let CSSModules: CSSModules;

    export = CSSModules;
}

declare module 'react' {
    interface HTMLAttributes<T> {
        styleName?: string;
    }
}
