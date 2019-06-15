// Type definitions for @wordpress/element 2.4
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/element/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import * as R from "react";
import * as RD from "react-dom";

declare global {
    namespace React {
        //
        // ReactDOM re-exports
        //
        const createPortal: typeof RD.createPortal;
        const findDOMNode: typeof RD.findDOMNode;
        const render: typeof RD.render;
        const unmountComponentAtNode: typeof RD.unmountComponentAtNode;

        /**
         * Component used as equivalent of Fragment with unescaped HTML, in cases where
         * it is desirable to render dangerous HTML without needing a wrapper element.
         * To preserve additional props, a `div` wrapper _will_ be created if any props
         * aside from `children` are passed.
         *
         * @param props.children - HTML to render.
         *
         * @return Dangerously-rendering element.
         */
        function RawHTML(
            props: { children: string } & HTMLProps<HTMLDivElement>
        ): JSX.Element;

        /**
         * Checks if the provided WP element is empty.
         *
         * @param element - WP element to check.
         * @return True when an element is considered empty.
         */
        function isEmptyElement(element: ReactNode): boolean;

        /**
         * Serializes a React element to string.
         *
         * @param element       - Element to serialize.
         * @param context       - Context object.
         * @param legacyContext - Legacy context object.
         *
         * @return Serialized element.
         */
        function renderToString(
            element: ReactNode,
            context?: any,
            legacyContext?: any
        ): string;
    }
}

export = React;
