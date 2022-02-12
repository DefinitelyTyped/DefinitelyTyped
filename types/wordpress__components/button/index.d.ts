import { ComponentType, HTMLProps } from 'react';

import Icon from '../icon';
import Tooltip from '../tooltip';

declare namespace Button {
    type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link';
    interface BaseProps {
        /**
         * Renders a default button style.
         * @deprecated use `variant="secondary"` instead.
         */
        isDefault?: boolean | undefined;

        /**
         * Renders a primary button style.
         * @deprecated use `variant="primary"` instead.
         */
        isPrimary?: boolean | undefined;

        /**
         * Renders a default button style.
         * @deprecated use `variant="secondary"` instead.
         */
        isSecondary?: boolean | undefined;

        /**
         * Renders a text-based button style.
         * @deprecated use `variant="tertiary"` instead.
         */
        isTertiary?: boolean | undefined;

        /**
         * Renders a button with an anchor style.
         * @deprecated use `variant="link"` instead.
         */
        isLink?: boolean | undefined;

        /**
         * Decreases the size of the button.
         */
        isSmall?: boolean | undefined;

        /**
         * Renders a toggled button style.
         */
        isPressed?: boolean | undefined;

        /**
         * @deprecated Use `isPressed` instead.
         */
        isToggled?: never | undefined;

        /**
         * Indicates activity while a action is being performed.
         */
        isBusy?: boolean | undefined;

        /**
         * Renders a red text-based button style to indicate destructive
         * behavior.
         */
        isDestructive?: boolean | undefined;

        /**
         * An optional additional class name to apply to the rendered button.
         */
        className?: string | undefined;

        /**
         * Renders a disabled button.
         */
        disabled?: boolean | undefined;

        /**
         * The icon to render. Supported values are: Dashicons (specified as
         * strings), functions, WPComponent instances and `null`.
         * @defaultValue null
         */
        icon?: Icon.Props<any>['icon'] | undefined;

        /**
         * The position of the icon within the button.
         * @defaultValue `left`
         */
        iconPosition?: 'left' | 'right';

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

        /**
         * If provided with `showTooltip`, appends the Shortcut label to the
         * tooltip content. If an `Object` is provided, it should contain
         * `display` and `ariaLabel` keys.
         */
        shortcut?: Tooltip.Props['shortcut'] | undefined;

        /**
         * Used as the Tooltip text and `aria-label` if one is not provided.
         */
        label?: string | undefined;

        /**
         * If provided, displays the given text inside the button. If the button
         * contains children elements, the text is displayed before them.
         */
        text?: string | undefined;

        /**
         * Specifies the button's style. The accepted values are 'primary'
         * (the primary button styles), 'secondary' (the default button
         * styles), 'tertiary' (the text-based button styles), and 'link'
         * (the link button styles).
         */
        variant?: ButtonVariant | undefined;
    }
    interface AnchorProps extends BaseProps, HTMLProps<HTMLAnchorElement> {}
    interface ButtonProps extends BaseProps, HTMLProps<HTMLButtonElement> {
        href?: never | undefined;
    }
    type Props = AnchorProps | ButtonProps;
}
declare const Button: ComponentType<Button.Props>;

export default Button;
