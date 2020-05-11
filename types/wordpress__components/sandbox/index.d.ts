import { ComponentType, FocusEventHandler } from 'react';

declare namespace SandBox {
    interface Props {
        /**
         * HTML for the document `<body>` of the sandbox.
         */
        html?: string;
        /**
         * Text for the document `<title>` of the sandbox.
         */
        title?: string;
        /**
         * Inline JS to apply to the sandboxed document.
         */
        scripts?: readonly string[];
        /**
         * Inline CSS to apply to the sandboxed document.
         */
        styles?: readonly string[];
        /**
         * `className` that is applied to both the sandbox `<html>` element and
         * `<body>` element.
         */
        type?: string;
        onFocus?: FocusEventHandler;
    }
}
declare const SandBox: ComponentType<SandBox.Props>;

export default SandBox;
