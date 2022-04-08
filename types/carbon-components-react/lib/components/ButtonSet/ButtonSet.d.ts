import { ForwardRefReturn, ReactDivAttr } from "../../../typings/shared";

export interface ButtonSetProps extends ReactDivAttr  {
    stacked?: boolean;
}

declare const ButtonSet: ForwardRefReturn<HTMLDivElement, ButtonSetProps>;

export default ButtonSet;
