import { RequiresChildrenProps, ForwardRefReturn } from "../../../typings/shared";

export interface SwitcherProps extends RequiresChildrenProps {
    "aria-label"?: string,
    "aria-labelledby"?: string,
    className?: string,
}

declare const Switcher: ForwardRefReturn<HTMLUListElement, SwitcherProps>;

export default Switcher;
