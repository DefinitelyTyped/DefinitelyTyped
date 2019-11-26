import * as React from "react";

import Overlay = require("./Overlay");

declare class DropdownMenu extends React.Component<
    DropdownMenu.DropdownMenuProps
> {}
export = DropdownMenu;

declare namespace DropdownMenu {
    interface DropdownMenuRenderProps extends Overlay.OverlayRenderProps {
        alignEnd: boolean;
        close(event: React.SyntheticEvent<any>): void;
    }

    interface DropdownMenuProps {
        /**
         * A render prop that returns a Menu element. The `props`
         * argument should spread through to **a component that can accept a ref**.
         */
        children(renderProps: DropdownMenuRenderProps): React.ReactElement;

        /**
         * Controls the visible state of the menu, generally this is
         * provided by the parent `Dropdown` component,
         * but may also be specified as a prop directly.
         */
        show?: boolean;

        /**
         * Aligns the dropdown menu to the 'end' of it's placement position.
         * Generally this is provided by the parent `Dropdown` component,
         * but may also be specified as a prop directly.
         */
        alignEnd?: boolean;

        /**
         * Enables the Popper.js `flip` modifier, allowing the Dropdown to
         * automatically adjust it's placement in case of overlap with the viewport or toggle.
         */
        flip?: boolean;

        usePopper?: boolean;

        /**
         * A set of popper options and props passed directly to react-popper's Popper component.
         */
        popperConfig?: object;

        /**
         * Override the default event used by RootCloseWrapper.
         */
        rootCloseEvent?: string;
    }
}
