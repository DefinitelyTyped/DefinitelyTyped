import { ComponentType, Ref } from 'react';
import TextareaAutosize from 'react-autosize-textarea';

declare namespace PlainText {
    interface Props extends Omit<TextareaAutosize.Props, 'onChange'> {
        /**
         * The component forwards the `ref` property to the `TextareaAutosize` component.
         */
        ref?: Ref<typeof TextareaAutosize>;
        /**
         * String value of the textarea
         */
        value: string;
        /**
         * Called when the value changes.
         */
        onChange(value: string): void;
    }
}
declare const PlainText: ComponentType<PlainText.Props>;

export default PlainText;
