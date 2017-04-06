// Type definitions for jsx-chai 3.0.0
// Project: https://github.com/bkonkle/jsx-chai
// Definitions by: Philipp Holzer <https://github.com/nupplaphil/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />


interface JsxChaiStatic {
    jsxChai: jsxChaiFunction;
}

interface jsxChaiFunction {
    (chai: any, utils: any): void;
}

declare var jsxChai: JsxChaiStatic;

export = jsxChai;
