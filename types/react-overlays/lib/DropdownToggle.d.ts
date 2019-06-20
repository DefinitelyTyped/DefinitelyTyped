import * as React from "react";

declare class DropdownToggle extends React.Component<
    DropdownToggle.DropdownToggleProps
> {}
export = DropdownToggle;

declare namespace DropdownToggle {
    interface DropdownToggleRenderProps {
        show: boolean;
        toggle(show: boolean): void;
        props: {
            ref: (popperNode: HTMLElement | null) => void;
            'aria-haspopup': true;
            'aria-expanded': boolean;
        };
    }

    interface DropdownToggleProps {
        /**
         * A render prop that returns a Toggle element. The `props`
         * argument should spread through to **a component that can accept a ref**. Use
         * the `onToggle` argument to toggle the menu open or closed
         */
        children(
            renderProps: DropdownToggleRenderProps
        ): React.ReactElement;
    }
}
