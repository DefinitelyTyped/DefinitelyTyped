import { ComponentType, ReactNode } from "react";

import IconButton from "../icon-button";

declare namespace MenuItem {
    interface Props extends Partial<IconButton.Props> {
        /**
         * Text to use as description for button text.
         */
        info?: ReactNode | undefined;
        /**
         * Whether or not the menu item is currently selected.
         */
        isSelected?: boolean | undefined;
    }
}
declare const MenuItem: ComponentType<MenuItem.Props>;

export default MenuItem;
