import * as React from "react";
import { ReactDivAttr, ReactButtonAttr } from "../../../typings/shared";

type OverflowButtonProps = Omit<ReactButtonAttr, "ref">;

export interface TabsProps extends Omit<ReactDivAttr, "onScroll"> {
    ariaLabel?: string | undefined,
    iconDescription?: string | undefined,
    leftOverflowButtonProps?: ReactButtonAttr | undefined,
    light?: boolean | undefined,
    onSelectionChange?(index: number): void,
    rightOverflowButtonProps?: ReactButtonAttr | undefined,
    scrollIntoView?: boolean | undefined,
    selected?: number | undefined,
    selectionMode?: "automatic" | "manual" | undefined,
    tabContentClassName?: string | undefined,
    type?: "container" | "default" | undefined;
}

declare class Tabs extends React.Component<TabsProps> { }

export default Tabs;
