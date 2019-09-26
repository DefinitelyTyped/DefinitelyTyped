import { ComponentType, HTMLProps } from '@wordpress/element';

declare namespace Button {
    interface BaseProps {
        /**
         * Renders a default button style.
         */
        isDefault?: boolean;
        /**
         * Renders a primary button style.
         */
        isPrimary?: boolean;
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
        isToggled?: boolean;
        /**
         * Indicates activity while a action is being performed.
         */
        isBusy?: boolean;
        /**
         * Renders a button with an anchor style.
         */
        isLink?: boolean;
        disabled?: boolean;
        className?: string;
    }
    interface AnchorProps extends BaseProps, HTMLProps<HTMLAnchorElement> {}
    interface ButtonProps extends BaseProps, HTMLProps<HTMLButtonElement> {
        href?: never;
    }
    type Props = AnchorProps | ButtonProps;
}
declare const Button: ComponentType<Button.Props>;

export default Button;
