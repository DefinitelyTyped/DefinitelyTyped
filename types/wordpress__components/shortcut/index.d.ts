import { ComponentType } from 'react';

declare namespace Shortcut {
    interface ShortcutObj {
        /**
         * The visible text.
         */
        display: string;
        /**
         * Optional `aria-label` for the `<span>` element.
         */
        ariaLabel?: string;
    }

    type ShortcutType = string | ShortcutObj;

    interface Props {
        shortcut?: ShortcutType;
        className?: string;
    }
}
declare const Shortcut: ComponentType<Shortcut.Props>;

export default Shortcut;
