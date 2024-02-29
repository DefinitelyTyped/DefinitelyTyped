import { ForwardRefReturn, ReactButtonAttr } from "../../../typings/shared";
import { ButtonProps } from "../Button";

type ExcludedProps = "hasIconOnly" | "iconDescription" | "ref" | "tooltipPosition" | "type";
export interface HeaderGlobalActionProps extends Omit<ButtonProps, ExcludedProps> {
    isActive?: boolean | undefined;
}

declare const HeaderGlobalAction: ForwardRefReturn<HTMLButtonElement, HeaderGlobalActionProps>;

export default HeaderGlobalAction;
