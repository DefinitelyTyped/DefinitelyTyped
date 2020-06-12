import { ComponentType } from 'react';

import Shortcut from '../shortcut';

declare namespace MenuItemsChoice {
    interface Props {
        /**
         * Array of choices.
         */
        choices: readonly Choice[];
        /**
         * Value of currently selected choice (should match a `value` property
         * from a choice in `choices`).
         */
        value: string;
        /**
         * Callback function to be called with the selected choice when user
         * selects a new choice.
         */
        onSelect(value: string): void;
    }

    interface Choice {
        /**
         * Human-readable label for choice.
         */
        label: string;
        /**
         * Unique value for choice.
         */
        value: string;
        /**
         * Optional keyboard sequence to trigger choice with keyboard shortcut
         * (e.g. `ctrl+s`).
         */
        shortcut?: Shortcut.ShortcutType;
    }
}
declare const MenuItemsChoice: ComponentType<MenuItemsChoice.Props>;

export default MenuItemsChoice;
