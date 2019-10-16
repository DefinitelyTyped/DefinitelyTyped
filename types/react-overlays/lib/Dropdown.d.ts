import * as React from "react";

import DropdownMenu = require("./DropdownMenu");
import DropdownToggle = require("./DropdownToggle");

declare class Dropdown extends React.Component<Dropdown.DropdownProps> {
    static Menu: typeof DropdownMenu;
    static Toggle: typeof DropdownToggle;
}
export = Dropdown;

declare namespace Dropdown {
    interface DropdownRenderProps {
        props: {
            onKeyDown(event: React.SyntheticEvent<any>): void;
        };
    }

    type Directions = 'up' | 'left' | 'right' | 'down';

    interface DropdownProps {
        /**
         * A render prop that returns the root dropdown element. The `props`
         * argument should spread through to an element containing _both_ the
         * menu and toggle in order to handle keyboard events for focus management.
         */
        children(renderProps: DropdownRenderProps): React.ReactElement;

        /**
         * Determines the direction and location of the Menu in relation to it's Toggle.
         */
        drop?: Directions;

        /**
         * A css slector string that will return __focusable__ menu items.
         * Selectors should be relative to the menu component:
         * e.g. ` > li:not('.disabled')`
         */
        itemSelector?: string;

        /**
         * Align the menu to the 'end' side of the placement side of the Dropdown toggle. The default placement is `top-start` or `bottom-start`.
         */
        alignEnd?: boolean;

        /**
         * Whether or not the Dropdown is visible
         */
        show?: boolean;

        /**
         * A callback fired when the Dropdown wishes to change visibility. Called with the requested
         * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
         */
        onToggle?(isOpen: boolean, event: React.SyntheticEvent<any>): void;
    }
}
