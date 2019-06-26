import { ComponentType } from '@wordpress/element';
import Button from '../button';

declare namespace ClipboardButton {
    interface Props extends Button.ButtonProps {
        /**
         * Text to be copied to the clipboard on click.
         */
        text: string;
        /**
         * Function to be called when copy starts.
         */
        onCopy?(): void;
        /**
         * Function to be called when copy finishes.
         */
        onFinishCopy?(): void;
    }
}
declare const ClipboardButton: ComponentType<ClipboardButton.Props>;

export default ClipboardButton;
