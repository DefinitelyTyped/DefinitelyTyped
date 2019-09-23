import { ComponentType, ReactNode } from '@wordpress/element';

import IconButton from '../icon-button';

declare namespace MenuItem {
    interface Props extends Partial<IconButton.Props> {
        /**
         * Text to use as description for button text.
         */
        info?: ReactNode;
        /**
         * Whether or not the menu item is currently selected.
         */
        isSelected?: boolean;
    }
}
declare const MenuItem: ComponentType<MenuItem.Props>;

export default MenuItem;
