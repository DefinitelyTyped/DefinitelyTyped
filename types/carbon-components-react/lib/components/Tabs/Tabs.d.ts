import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface TabsProps extends Omit<ReactDivAttr, "onScroll"> {
    ariaLabel?: string,
    iconDescription?: string,
    light?: boolean,
    onSelectionChange?(index: number): void,
    selected?: number,
    selectionMode?: "automatic" | "manual",
    tabContentClassName?: string,
    type?: "container" | "default";
}

declare class Tabs extends React.Component<TabsProps> { }

export default Tabs;
