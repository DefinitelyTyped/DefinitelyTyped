import { Popover } from '@wordpress/components';
import { ComponentType, ReactNode } from 'react';

declare namespace URLPopover {
    interface Props extends Popover.Props {
        additionalControls?: ReactNode;
        /**
         * Callback used to return the React Elements that will be rendered inside the settings
         * drawer. When this function is provided, a toggle button will be rendered in the popover
         * that allows the user to open and close the settings drawer.
         */
        renderSettings?(): JSX.Element;
    }
}
declare const URLPopover: ComponentType<URLPopover.Props>;

export default URLPopover;
