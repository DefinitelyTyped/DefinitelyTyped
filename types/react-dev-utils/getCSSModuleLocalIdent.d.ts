import webpack = require('webpack');

/**
 * Creates a class name for CSS Modules that uses either the filename or folder
 * name if named `index.module.css`.
 *
 * For `MyFolder/MyComponent.module.css` and class `MyClass` the output will be
 * `MyComponent.module_MyClass__[hash]`. For `MyFolder/index.module.css` and
 * class `MyClass` the output will be `MyFolder_MyClass__[hash]`
 */
declare function getCSSModuleLocalIdent(
    context: webpack.loader.LoaderContext,
    localIdentName: string,
    localName: string,
    options: object,
): string;

export = getCSSModuleLocalIdent;
