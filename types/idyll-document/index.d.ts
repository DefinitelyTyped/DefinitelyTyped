// Type definitions for idyll-document 2.9
// Project: https://github.com/idyll-lang/idyll/tree/master/packages/idyll-document
// Definitions by: Thanh Ngo <https://github.com/iocat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ElementType, PureComponent } from "react";
import { Options as CompilerOptions, AST } from "idyll-compiler";

export interface IdyllDocumentProps {
    /**
     * Components to be rendered with
     */
    components: any;
    /**
     * the AST to be rendered on the page
     * If provided, this will be used insteaed of
     * the markup
     */
    ast?: AST | undefined;
    /**
     * The Idyll markup to be compiled into AST
     */
    markup?: string | undefined;
    /**
     * Initial data set
     */
    datasets?: object | undefined;

    /**
     * The theme for idyll document
     * Will correspond to one theme in idyll-theme package
     */
    theme?: string | undefined;
    /**
     * The layout for idyll document
     * Will correspond to one one layout in idyll-layouts package
     */
    layout?: string | undefined;
    /**
     * Callback function if error happens during compilation
     */
    onError?: ((err: Error) => void) | undefined;
    /**
     * The React component rendered when an error occurs
     */
    errorComponent?: ElementType<{
        className?: string | undefined;
        children: Error["message"] | null;
    }> | undefined;
    /**
     * Compiler option for Idyll compiler when compiling markup
     */
    compilerOptions?: CompilerOptions | undefined;

    context?: ((context: any) => void) | undefined;
    initialState?: any;
}

declare class IdyllDocument extends PureComponent<IdyllDocumentProps, any> {}

export default IdyllDocument;
