import * as React from "react";
import { ReactDivAttr, ReactButtonAttr } from "../../../typings/shared";

type OverflowButtonProps = Omit<ReactButtonAttr, "ref">;

export interface TabsProps extends Omit<ReactDivAttr, "onScroll"> {
    ariaLabel?: string,
    iconDescription?: string,
    leftOverflowButtonProps?: ReactButtonAttr,
    light?: boolean,
    onSelectionChange?(index: number): void,
    rightOverflowButtonProps?: ReactButtonAttr,
    scrollIntoView?: boolean,
    selected?: number,
    selectionMode?: "automatic" | "manual",
    tabContentClassName?: string,
    type?: "container" | "default";
}

declare class Tabs extends React.Component<TabsProps> { }

export default Tabs;
