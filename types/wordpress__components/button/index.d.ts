import { ComponentType, HTMLProps } from 'react';

import Icon from '../icon';
import Tooltip from '../tooltip';

declare namespace Button {
    interface BaseProps {
        /**
         * Renders a default button style.
         * @deprecated use `isSecondary`
         */
        isDefault?: boolean | undefined;
        /**
         * Renders a primary button style.
         */
        isPrimary?: boolean | undefined;
        /**
         * Renders a default button style.
         */
        isSecondary?: boolean | undefined;
        /**
         * Renders a text-based button style.
         */
        isTertiary?: boolean | undefined;
        /**
         * Renders a red text-based button style to indicate destructive
         * behavior.
         */
        isDestructive?: boolean | undefined;
        /**
         * Increases the size of the button.
         */
        isLarge?: boolean | undefined;
        /**
         * Decreases the size of the button.
         */
        isSmall?: boolean | undefined;
        /**
         * Renders a toggled button style.
         */
        isPressed?: boolean | undefined;
        /** @deprecated Use `isPressed` instead. */
        isToggled?: never | undefined;
        /**
         * Indicates activity while a action is being performed.
         */
        isBusy?: boolean | undefined;
        /**
         * Renders a button with an anchor style.
         */
        isLink?: boolean | undefined;
        /**
         * Renders a disabled button.
         */
        disabled?: boolean | undefined;
        className?: string | undefined;
        /**
         * The icon to render. Supported values are: Dashicons (specified as
         * strings), functions, WPComponent instances and `null`.
         * @defaultValue null
         */
        icon?: Icon.Props<any>['icon'] | undefined;
        /**
         * The size (width and height) of the icon.
         * @defaultValue `20` (when using Dashicon), `24` otherwise
         */
        iconSize?: Icon.Props<any>['size'] | undefined;
        /**
         * Renders a with the `label` prop when `true`.
         * @defaultValue false
         */
        showTooltip?: boolean | undefined;
        /**
         * The direction in which the tooltip should open relative to its
         * parent node.
         */
        tooltipPosition?: Tooltip.Props['position'] | undefined;
        shortcut?: Tooltip.Props['shortcut'] | undefined;
        /**
         * Used as the Tooltip text and `aria-label` if one is not provided.
         */
        label?: string | undefined;
    }
    interface AnchorProps extends BaseProps, HTMLProps<HTMLAnchorElement> {}
    interface ButtonProps extends BaseProps, HTMLProps<HTMLButtonElement> {
        href?: never | undefined;
    }
    type Props = AnchorProps | ButtonProps;
}
declare const Button: ComponentType<Button.Props>;

export default Button;
