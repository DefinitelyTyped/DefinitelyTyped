import * as React from "react";

declare namespace ReactHintFactory {
    interface ReactHintProps {
        /**
         * Allows setting a custom tooltip attribute instead of the default one.
         *
         * @default "data-rh"
         */
        attribute?: string | undefined;

        /**
         * Autopositions tooltips based on closeness to window borders.
         *
         * @default false
         */
        autoPosition?: boolean | undefined;

        /**
         * You can override the tooltip style by passing the className property.
         *
         * @default "react-hint"
         */
        className?: string | undefined;

        /**
         * The default delay (in milliseconds) before showing/hiding the tooltip.
         *
         * @default 0
         */
        delay?: number | { show: number; hide: number } | undefined;

        /**
         * Enables/disables all events or a subset of events.
         *
         * @default false
         */
        events?: boolean | { click: boolean; focus: boolean; hover: boolean } | undefined;

        /**
         * Allows rendering of custom HTML content (with attached event handlers).
         * Pass a function which returns a react node.
         */
        onRenderContent?: ((target: HTMLElement, content: string) => React.ReactNode) | undefined;

        /**
         * Hide the tooltip only on outside click, hover, etc.
         *
         * @default false
         */
        persist?: boolean | undefined;

        /**
         * Allows setting the default tooltip placement.
         *
         * @default "top"
         */
        position?: "top" | "left" | "right" | "bottom" | undefined;
    }
}

declare function ReactHintFactory(react: typeof React): React.ComponentClass<ReactHintFactory.ReactHintProps>;

export = ReactHintFactory;
