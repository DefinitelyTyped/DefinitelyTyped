declare namespace GorillaEngine.UI {
    interface TextBoxProps extends Font, Clickable, Bounds, Background, Margin, Keyable {
        /**
         * The initial text value of the text box.
         */
        text: string;
        /**
         * The placeholder text of the text box.
         */
        placeholder: string;
        /** TODO:: check if it works
         * An additional suffix displayed in the textbox without alterting the text value.
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

        /** TODO:: what is even the point of this?
         * If true, the text box will not allow user input and will be read-only.
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
        highlightStart: number;
        highlightEnd: number;
        keyDownAction: string;
        textChangedAction: string;
        focusLostUpdate: boolean;
    }

    interface TextBox extends TextBoxProps {
        grabKeyboardFocus(): void;
    }

    class TextBox extends Component {
        constructor(props: Partial<TextBoxProps>);
    }
}
