import {
    ReactAttr,
    ReactAnchorAttr,
    RequiresChildrenProps,
    FCReturn,
    ForwardRefRefType,
    FCProps
} from "../../../typings/shared";
import { LinkProps } from "./Link";

interface InheritedProps extends RequiresChildrenProps {
    className?: ReactAttr["className"],
}

export interface SwitcherItemPropsBase extends InheritedProps {
    isSelected?: boolean,
}

export type SwitcherItemProps<E extends object = ReactAnchorAttr> = Omit<LinkProps<E>, "tabIndex"> & SwitcherItemPropsBase;

declare function SwitcherItem<E extends object = ReactAnchorAttr, R extends HTMLElement = HTMLElement>(
    props: FCProps<SwitcherItemProps<E>>, ref: ForwardRefRefType<R>
): FCReturn;

export default SwitcherItem;
