import { ComponentType, ReactNode } from 'react';

import Popover from '../popover';

declare namespace Dropdown {
    interface Props {
        /**
         * `className` of the global container.
         */
        className?: string;
        /**
         * If you want to target the dropdown menu for styling purposes, you
         * need to provide a `contentClassName` because it's not being rendered
         * as a children of the container node.
         */
        contentClassName?: string;
        /**
         * The direction in which the popover should open relative to its
         * parent node. Specify y- and x-axis as a space-separated string.
         * @defaultValue "top center"
         */
        position?: Popover.Position;
        /**
         * Opt-in prop to show popovers fullscreen on mobile.
         */
        expandOnMobile?: boolean;
        /**
         * Set this to customize the text that is shown in the dropdown's
         * header when it is fullscreen on mobile.
         */
        headerTitle?: ReactNode;
        /**
         * By default, the first tabblable element in the popover will receive
         * focus when it mounts. This is the same as setting focusOnMount to
         * `"firstElement"`. If you want to focus the container instead, you can
         * set focusOnMount to `"container"`.
         *
         * Set this prop to `false` to disable focus changing entirely. This
         * should only be set when an appropriately accessible substitute
         * behavior exists.
         *
         * @defaultValue "firstElement"
         */
        focusOnMount?: 'firstElement' | 'container' | false;
        renderToggle(props: RenderProps): JSX.Element;
        renderContent(props: RenderProps): JSX.Element;
    }
    interface RenderProps {
        /**
         * Whether the dropdown menu is opened or not.
         */
        isOpen: boolean;
        /**
         * A function switching the dropdown menu's state from open to closed
         * and vice versa.
         */
        onToggle(): void;
        /**
         * A function that closes the menu if invoked.
         */
        onClose(): void;
    }
}
declare const Dropdown: ComponentType<Dropdown.Props>;

export default Dropdown;
