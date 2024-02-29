import { ComponentType, FocusEventHandler } from "react";

declare namespace SandBox {
    interface Props {
        /**
         * HTML for the document `<body>` of the sandbox.
         */
        html?: string | undefined;
        /**
         * Text for the document `<title>` of the sandbox.
         */
        title?: string | undefined;
        /**
         * Inline JS to apply to the sandboxed document.
         */
        scripts?: readonly string[] | undefined;
        /**
         * Inline CSS to apply to the sandboxed document.
         */
        styles?: readonly string[] | undefined;
        /**
         * `className` that is applied to both the sandbox `<html>` element and
         * `<body>` element.
         */
        type?: string | undefined;
        onFocus?: FocusEventHandler | undefined;
    }
}
declare const SandBox: ComponentType<SandBox.Props>;

export default SandBox;
