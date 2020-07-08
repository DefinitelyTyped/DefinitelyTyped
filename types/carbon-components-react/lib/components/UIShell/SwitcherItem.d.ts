import {
    ReactAttr,
    ReactAnchorAttr,
    RequiresChildrenProps,
    FCReturn,
    ForwardRefProps,
} from '../../../typings/shared';
import { LinkProps } from "./Link";

interface InheritedProps extends RequiresChildrenProps {
    className?: ReactAttr["className"],
}

export interface SwitcherItemPropsBase extends InheritedProps {
    isSelected?: boolean,
}

export type SwitcherItemProps<E extends object = ReactAnchorAttr> = Omit<LinkProps<E>, "tabIndex"> & SwitcherItemPropsBase;

declare function SwitcherItem<E extends object = ReactAnchorAttr, R = HTMLElement>(
    props: ForwardRefProps<R, SwitcherItemProps<E>>
): FCReturn;

export default SwitcherItem;
