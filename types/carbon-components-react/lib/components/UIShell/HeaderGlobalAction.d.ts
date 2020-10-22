import { ReactButtonAttr, ForwardRefReturn } from "../../../typings/shared";

interface InheritedProps extends Omit<ReactButtonAttr, "type"> { }

export interface HeaderGlobalActionProps extends InheritedProps {
    isActive?: boolean,
}

declare const HeaderGlobalAction: ForwardRefReturn<HTMLButtonElement, HeaderGlobalActionProps>;

export default HeaderGlobalAction;
