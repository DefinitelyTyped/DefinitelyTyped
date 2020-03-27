import * as React from "react";
import { ReactAttr, ReactAnchorAttr, RequiresChildrenProps } from "../../../typings/shared";
import { LinkProps } from "./Link";

interface InheritedProps extends RequiresChildrenProps {
    className?: ReactAttr["className"],
}

export interface SwitcherItemPropsBase extends InheritedProps {
    isSelected?: boolean,
}

export type SwitcherItemProps<E extends object = ReactAnchorAttr> = Omit<LinkProps<E>, "tabIndex"> & SwitcherItemPropsBase;

declare function SwitcherItem<E extends object = ReactAnchorAttr>(props: React.PropsWithChildren<SwitcherItemProps<E>>, ref: React.Ref<HTMLElement>): React.ReactElement | null;

export default SwitcherItem;
