import { ComponentType, ReactNode } from 'react';

declare namespace KeyboardShortcuts {
    interface BaseProps {
        /**
         * An object of shortcut bindings, where each key is a keyboard
         * combination, the value of which is the callback to be invoked when
         * the key combination is pressed.
         *
         * NOTE: The value of each shortcut should be a consistent function
         * reference, not an anonymous function. Otherwise, the callback will
         * not be correctly unbound when the component unmounts.
         *
         * NOTE: The `KeyboardShortcuts` component will not update to reflect a
         * changed `shortcuts` prop. If you need to change shortcuts, mount a
         * separate `KeyboardShortcuts` element, which can be achieved by
         * assigning a unique `key` prop.
         */
        shortcuts: Record<string, () => void>;
        /**
         * By default, a callback will not be invoked if the key combination
         * occurs in an editable field. Pass `bindGlobal` as `true` if the key
         * events should be observed globally, including within editable fields.
         */
        bindGlobal?: boolean;
        /**
         * By default, a callback is invoked in response to the `keydown` event.
         * To override this, pass `eventName` with the name of a specific keyboard
         * event.
         */
        eventName?: 'keydown' | 'keypress' | 'keyup';
    }
    interface PropsWithChildren extends BaseProps {
        children: ReactNode;
    }
    interface PropsWithoutChildren extends BaseProps {
        bindGlobal: true;
        children?: never;
    }
    type Props = PropsWithChildren | PropsWithoutChildren;
}
declare const KeyboardShortcuts: ComponentType<KeyboardShortcuts.Props>;

export default KeyboardShortcuts;
