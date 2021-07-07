import { ReactButtonAttr, ForwardRefReturn } from "../../../typings/shared";
import { ButtonProps } from "../Button";

type ExcludedProps = "hasIconOnly" | "iconDescription" | "ref" | "tooltipPosition" | "type";
export interface HeaderGlobalActionProps extends Omit<ButtonProps, ExcludedProps> {
    isActive?: boolean,
}

declare const HeaderGlobalAction: ForwardRefReturn<HTMLButtonElement, HeaderGlobalActionProps>;

export default HeaderGlobalAction;
