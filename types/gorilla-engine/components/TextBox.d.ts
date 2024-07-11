declare namespace GorillaEngine.UI {
    interface TextBoxProps extends Font, Clickable, Bounds, Background, Margin, Keyable {
        text: string;
        palceholder: string;
        unit: string;
        placeHolderColor: string;
        highlightTextColor: string;
        highlightColor: string;
        caretColor: string;
        maxLength: number;
        passwordCharacter: string;
        multiLine: boolean;
        readOnly: boolean;
        acceptedDataType: "integer" | "int" | "float" | "string";
        minValue: number;
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
