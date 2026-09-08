declare namespace GorillaEngine.UI {
    /**
     * Properties for an editable or read-only text field.
     */
    interface TextBoxProps extends Font, Clickable, Bounds, Background, Margin, Keyable {
        /**
         * The initial text value of the text box.
         */
        text: string;
        /**
         * The placeholder text of the text box.
         */
        placeholder: string;
        /**
         * A suffix displayed after the text without changing the text value.
         */
        unit: string;
        /**
         * The textcolor of the placeholder
         */
        placeHolderColor: string;
        /**
         * When highlighted via automation in AAX this is the color used to highlight the text.
         */
        highlightTextColor: string;
        /**
         * When highlighted via automation in AAX this is the color used to highlight the background.
         */
        highlightColor: string;
        /**
         * The color of the caret in the text box.
         */
        caretColor: string;
        /**
         * The maximum length of the text in the text box.
         */
        maxLength: number;
        /**
         * If set, the text box will display a password character instead of the actual text.
         */
        passwordCharacter: string;
        /**
         * If true, the text box will allow multiple lines of text.
         */
        multiLine: boolean;

        /**
         * Whether user input is disabled while the text remains selectable and readable.
         */
        readOnly: boolean;
        /**
         * The type of data that accepted by the text box.
         */
        acceptedDataType: "integer" | "int" | "float" | "string";

        /**
         * If acceptedDataType is numeric, this is the minimum value allowed in the text box.
         */
        minValue: number;
        /**
         * If acceptedDataType is numeric, this is the maximum value allowed in the text box.
         */
        maxValue: number;
        /** Zero-based index of the first selected character. */
        highlightStart: number;
        /** Zero-based index after the last selected character. */
        highlightEnd: number;
        /** Name of the action invoked when a key is pressed while the text box has focus. */
        keyDownAction: string;
        /** Name of the action invoked after the user changes the text. */
        textChangedAction: string;
        /** Whether text changes are committed when the text box loses keyboard focus. */
        focusLostUpdate: boolean;
    }

    interface TextBox extends TextBoxProps {
        grabKeyboardFocus(): void;
    }

    /**
     * A text field for displaying and editing string or numeric input.
     */
    class TextBox extends Component {
        constructor(props: Partial<TextBoxProps>);
    }
}
