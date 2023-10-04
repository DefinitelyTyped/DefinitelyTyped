import { ForwardRefReturn, RequiresChildrenProps } from "../../../typings/shared";

export interface SwitcherProps extends RequiresChildrenProps {
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    className?: string | undefined;
}

declare const Switcher: ForwardRefReturn<HTMLUListElement, SwitcherProps>;

export default Switcher;
