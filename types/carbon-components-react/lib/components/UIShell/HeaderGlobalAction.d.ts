import { ReactButtonAttr, ForwardRefReturn } from "../../../typings/shared";

export interface HeaderGlobalActionProps extends Omit<ReactButtonAttr, "type"> {
    isActive?: boolean,
}

declare const HeaderGlobalAction: ForwardRefReturn<HTMLButtonElement, HeaderGlobalActionProps>;

export default HeaderGlobalAction;
