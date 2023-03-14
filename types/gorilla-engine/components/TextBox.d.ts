declare namespace GorillaEngine.UI {
    interface TextBoxProps extends Font, Clickable, Bounds, Background {
        text: string;
        palceholder: string;
        unit: string;
        placeHolderColor: string;
        highlightTextColor: string;
        highlightColor: string;
        cartColor: string;
        maxLength: number;
        passwordCharacter: string;
        multiLine: boolean;
        readOnly: boolean;
        acceptedDataType: 'integer' | 'int' | 'float' | 'string';
        minValue: number;
        maxValue: number;
    }

    interface TextBox extends TextBoxProps {}

    class TextBox extends Component {
        constructor(props: Partial<TextBoxProps>);
    }
}
