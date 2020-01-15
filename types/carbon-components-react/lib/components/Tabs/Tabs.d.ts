import * as React from "react";
import { EmbeddedIconProps, ReactAttr, ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr, EmbeddedIconProps {
    ariaLabel?: React.AriaAttributes["aria-label"],
}

export interface TabsProps extends InheritedProps {
    onSelectionChange?(index: number): void,
    selected?: number,
    tabContentClassName?: ReactAttr["className"],
    triggerHref: string,
}

declare class Tabs extends React.Component<TabsProps> { }

export default Tabs;
