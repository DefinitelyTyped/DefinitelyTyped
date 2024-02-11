import { ComponentType, JSX } from "react";

import Button from "../button";
import Dashicon from "../dashicon";
import Popover from "../popover";
import Shortcut from "../shortcut";

declare namespace IconButton {
    interface Props extends Button.ButtonProps {
        /**
         * Icon to use. Either a Dashicon slug or a custom component.
         */
        icon: Dashicon.Icon | JSX.Element;
        shortcut?: Shortcut.ShortcutType | undefined;
        /**
         * Label for the button.
         */
        label?: string | undefined;
        /**
         * Position for the label.
         * @defaultValue "top"
         */
        labelPosition?: Popover.Position | undefined;
        /**
         * Tooltip text to display.
         * @defaultValue Props.label
         */
        tooltip?: string | undefined;
    }
}
declare const IconButton: ComponentType<IconButton.Props>;

export default IconButton;
