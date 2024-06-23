/// <reference types="chai" />

interface JsxChaiStatic {
    jsxChai: jsxChaiFunction;
}

type jsxChaiFunction = Chai.ChaiPlugin;

declare var jsxChai: JsxChaiStatic;

export = jsxChai;
