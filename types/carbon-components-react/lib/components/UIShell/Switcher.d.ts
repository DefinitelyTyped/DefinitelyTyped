import { ReactAttr, RequiresChildrenProps, ForwardRefReturn } from "../../../typings/shared";

interface InheritedProps extends RequiresChildrenProps {
    "aria-label"?: ReactAttr["aria-label"],
    "aria-labelledby"?: ReactAttr["aria-labelledby"],
    className?: ReactAttr["className"],
}

export interface SwitcherProps extends InheritedProps { }

declare const Switcher: ForwardRefReturn<HTMLUListElement, SwitcherProps>;

export default Switcher;
