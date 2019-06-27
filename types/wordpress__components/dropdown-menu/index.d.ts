import { ComponentType } from '@wordpress/element';

import Dashicon from '../dashicon';
import Dropdown from '../dropdown';
import Popover from '../popover';

declare namespace DropdownMenu {
    interface BaseProps {
        /**
         * The Dashicon icon slug to be shown in the collapsed menu button.
         * @defaultValue "menu"
         */
        icon?: Dashicon.Icon;
        /**
         * A human-readable label to present as accessibility text on the
         * focused collapsed menu button.
         */
        label: string;
        /**
         * A human-readable label to present as accessibility text on the
         * expanded menu container.
         * @defaultValue value of `label`
         */
        menuLabel?: string;

        /**
         * A class name to apply to the dropdown wrapper element.
         */
        className?: string;
        /**
         * The direction in which the menu should open. Specify y- and x-axis
         * as a space-separated string.
         * @defaultValue "top center"
         */
        position?: Popover.Position;
    }
    interface PropsWithChildren extends BaseProps {
        /**
         * A function render prop which should return an element or elements
         * valid for use in a `DropdownMenu`: `MenuItem`, `MenuItemsChoice`, or
         * `MenuGroup`.
         */
        children(props: Dropdown.RenderProps): JSX.Element;
        controls?: never;
    }
    interface PropsWithControls extends BaseProps {
        /**
         * An array of objects describing the options to be shown in the
         * expanded menu.
         */
        controls: Control[];
        children?: never;
    }
    interface Control {
        /**
         * Dashicon icon slug.
         */
        icon: Dashicon.Icon;
        /**
         * Human-readable title for the control.
         */
        title: string;
        /**
         * Describes whether or not the control is disabled.
         */
        isDisabled?: boolean;
        /**
         * Function to invoke when the option is selected.
         */
        onClick(): void;
    }
    type Props = PropsWithChildren | PropsWithControls;
}
declare const DropdownMenu: ComponentType<DropdownMenu.Props>;

export default DropdownMenu;
