import { ComponentType, HTMLProps, KeyboardEventHandler, ReactNode } from 'react';

declare namespace TabbableContainer {
    interface Props extends HTMLProps<HTMLDivElement> {
        /**
         * A boolean which tells the component whether or not to cycle from the
         * end back to the beginning and vice versa.
         * @defaultValue true
         */
        cycle?: boolean;
        /**
         * A callback invoked when the menu navigates to one of its children
         * passing the index and child as an argument.
         */
        onNavigate?(nextIndex: number, focusedElement: HTMLElement): void;
        onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
        children: ReactNode;
    }
}
declare const TabbableContainer: ComponentType<TabbableContainer.Props>;

export default TabbableContainer;
