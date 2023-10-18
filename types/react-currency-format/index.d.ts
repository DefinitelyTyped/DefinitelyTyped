import { Component, ComponentType, HTMLAttributes, InputHTMLAttributes } from "react";

declare namespace CurrencyFormat {
    /**
     * Available input type attributes which the component supports.
     */
    type InputType = "text" | "tel";

    /**
     * A value object containing the formatted value, the original value and the float value.
     * @see {@link https://github.com/mohitgupta8888/react-currency-format#values-object}
     */
    interface Values {
        formattedValue: string;
        value: string;
        floatValue: number;
    }

    // The component accepts all the props which can be given to a input or span based on displayType selected.
    type DisplayTypeInput = InputHTMLAttributes<HTMLInputElement> & {
        displayType?: "input";
        customInput?: ComponentType<any>;
    };

    type DisplayTypeText = HTMLAttributes<HTMLSpanElement> & {
        displayType?: "text";
        customInput?: never;
    };

    /**
     * Props accepted by the component.
     * @see {@link https://github.com/mohitgupta8888/react-currency-format#props}
     */
    type StrictProps =
        & Partial<{
            thousandSeparator: string | boolean;
            thousandSpacing: "2" | "2s" | "3" | "4";
            decimalSeparator: string;
            decimalScale: number;
            fixedDecimalScale: boolean;
            allowNegative: boolean;
            prefix: string;
            suffix: string;
            value: number | string | null;
            isNumericString: boolean;
            type: InputType;
            format: string | ((unformatedInput: string) => string);
            removeFormatting: (formattedValue: string) => string;
            mask: string | string[];
            onValueChange: (values: Values) => void;
            isAllowed: (values: Values) => boolean;
            renderText: (formattedValue: string) => JSX.Element;
        }>
        & (DisplayTypeText | DisplayTypeInput);

    /**
     * Props accepted by the component and any other prop of the customInput.
     */
    type Props = StrictProps & {
        [key: string]: unknown;
    };
}

declare class CurrencyFormat extends Component<CurrencyFormat.Props> {}

export = CurrencyFormat;
