import { ComponentType, HTMLProps } from 'react';

import Icon from '../icon';
import Tooltip from '../tooltip';

declare namespace Button {
    interface BaseProps {
        /**
         * Renders a default button style.
         * @deprecated use `isSecondary`
         */
        isDefault?: boolean;
        /**
         * Renders a primary button style.
         */
        isPrimary?: boolean;
        /**
         * Renders a default button style.
         */
        isSecondary?: boolean;
        /**
         * Renders a text-based button style.
         */
        isTertiary?: boolean;
        /**
         * Renders a red text-based button style to indicate destructive
         * behavior.
         */
        isDestructive?: boolean;
        /**
         * Increases the size of the button.
         */
        isLarge?: boolean;
        /**
         * Decreases the size of the button.
         */
        isSmall?: boolean;
        /**
         * Renders a toggled button style.
         */
        isPressed?: boolean;
        /** @deprecated Use `isPressed` instead. */
        isToggled?: never;
        /**
         * Indicates activity while a action is being performed.
         */
        isBusy?: boolean;
        /**
         * Renders a button with an anchor style.
         */
        isLink?: boolean;
        /**
         * Renders a disabled button.
         */
        disabled?: boolean;
        className?: string;
        /**
         * The icon to render. Supported values are: Dashicons (specified as
         * strings), functions, WPComponent instances and `null`.
         * @defaultValue null
         */
        icon?: Icon.Props<any>['icon'];
        /**
         * The size (width and height) of the icon.
         * @defaultValue `20` (when using Dashicon), `24` otherwise
         */
        iconSize?: Icon.Props<any>['size'];
        /**
         * Renders a with the `label` prop when `true`.
         * @defaultValue false
         */
        showTooltip?: boolean;
        /**
         * The direction in which the tooltip should open relative to its
         * parent node.
         */
        tooltipPosition?: Tooltip.Props['position'];
        shortcut?: Tooltip.Props['shortcut'];
        /**
         * Used as the Tooltip text and `aria-label` if one is not provided.
         */
        label?: string;
    }
    interface AnchorProps extends BaseProps, HTMLProps<HTMLAnchorElement> {}
    interface ButtonProps extends BaseProps, HTMLProps<HTMLButtonElement> {
        href?: never;
    }
    type Props = AnchorProps | ButtonProps;
}
declare const Button: ComponentType<Button.Props>;

export default Button;
