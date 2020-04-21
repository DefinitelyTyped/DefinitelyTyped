import * as React from "react";
import { EmbeddedIconProps, ReactAttr, ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr, EmbeddedIconProps {
    ariaLabel?: React.AriaAttributes["aria-label"],
}

export interface TabsProps extends InheritedProps {
    onSelectionChange?(index: number): void,
    selected?: number,
    selectionMode?: "automatic" | "manual",
    tabContentClassName?: ReactAttr["className"],
    triggerHref: string,
    type?: "container" | "default";
}

declare class Tabs extends React.Component<TabsProps> { }

export default Tabs;
