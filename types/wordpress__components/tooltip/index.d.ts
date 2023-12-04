import { ComponentType, JSX, ReactNode } from "react";

import Popover from "../popover";
import Shortcut from "../shortcut";

declare namespace Tooltip {
    interface Props {
        children: JSX.Element;
        /**
         * The direction in which the tooltip should open relative to its
         * parent node.
         */
        position?: Popover.Position | undefined;
        /**
         * The tooltip content to show on focus or hover.
         */
        text?: ReactNode | undefined;
        shortcut?: Shortcut.ShortcutType | undefined;
    }
}
declare const Tooltip: ComponentType<Tooltip.Props>;

export default Tooltip;
