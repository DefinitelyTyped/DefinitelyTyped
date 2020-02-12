import { ComponentType, ReactNode } from '@wordpress/element';

import Popover from '../popover';
import Shortcut from '../shortcut';

declare namespace Tooltip {
    interface Props {
        children: JSX.Element;
        /**
         * The direction in which the tooltip should open relative to its
         * parent node.
         */
        position?: Popover.Position;
        /**
         * The tooltip content to show on focus or hover.
         */
        text?: ReactNode;
        shortcut?: Shortcut.ShortcutType;
    }
}
declare const Tooltip: ComponentType<Tooltip.Props>;

export default Tooltip;
