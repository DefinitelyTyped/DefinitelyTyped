import { ComponentType, ReactNode } from '@wordpress/element';

import DropdownMenu from '../dropdown-menu';
import IconButton from '../icon-button';

declare namespace ToolbarButton {
    interface Props extends DropdownMenu.Control, Pick<IconButton.Props, 'shortcut'> {
        /**
         * Anything to add into the containing element after the button.
         */
        children?: ReactNode;
        /**
         * `className` for the button element.
         */
        className?: string;
        /**
         * `className` for the container.
         */
        containerClassName?: string;
        /**
         * Any additional props to pass down to `IconButton`.
         */
        extraProps?: Partial<IconButton.Props>;
        /**
         * Describes whether or not the button is active.
         */
        isActive?: boolean;
        /**
         * Subscript text to add to the button.
         */
        subscript?: string;
    }
}
declare const ToolbarButton: ComponentType<ToolbarButton.Props>;

export default ToolbarButton;
