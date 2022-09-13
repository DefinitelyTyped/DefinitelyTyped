import { ComponentType, ReactNode } from 'react';

import DropdownMenu from '../dropdown-menu';
import IconButton from '../icon-button';
import Button from '../button';

declare namespace ToolbarButton {
    interface Props extends DropdownMenu.Control, Pick<IconButton.Props, 'shortcut'> {
        /**
         * Anything to add into the containing element after the button.
         */
        children?: ReactNode | undefined;
        /**
         * `className` for the button element.
         */
        className?: string | undefined;
        /**
         * `className` for the container.
         */
        containerClassName?: string | undefined;
        /**
         * Any additional props to pass down to `IconButton`.
         */
        extraProps?: Partial<IconButton.Props> | undefined;
        /**
         * Describes whether or not the button is active.
         */
        isActive?: boolean | undefined;
        /**
         * Subscript text to add to the button.
         */
        subscript?: string | undefined;
    }
}
declare const ToolbarButton: ComponentType<ToolbarButton.Props|Button.Props>;

export default ToolbarButton;
