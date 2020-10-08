import { ForwardRefReturn, ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr {}

export interface ButtonSetProps extends InheritedProps {
    stacked?: boolean;
}

declare const ButtonSet: ForwardRefReturn<HTMLDivElement, ButtonSetProps>;

export default ButtonSet;
