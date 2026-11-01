import { ComponentType, Ref, TextareaHTMLAttributes } from "react";

declare namespace PlainText {
    interface Props extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
        /**
         * The component forwards the `ref` property to the `textarea` element.
         */
        ref?: Ref<HTMLTextAreaElement> | undefined;
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
