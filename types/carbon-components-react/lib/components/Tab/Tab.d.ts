import * as React from "react";
import { ReactAnchorAttr, ReactAttr, ReactLIAttr } from "../../../typings/shared";

type ExcludedAttributes = "aria-controls" | "aria-selected" | "aria-disabled" | "role" | "tabIndex";
interface InheritedProps extends Omit<ReactLIAttr, ExcludedAttributes> {
    href?: ReactAnchorAttr["href"],
}

export interface TabCustomAnchorProvidedProps {
    className: NonNullable<ReactAttr["className"]>,
    href: InheritedProps["href"],
    id: ReactAttr["id"],
    ref(element: any): void;
    tabIndex: NonNullable<ReactAttr["tabIndex"]>,
}

export interface TabStandaloneProps extends InheritedProps {
    disabled?: boolean;
    handleTabClick(index: TabStandaloneProps["index"], event: React.MouseEvent<HTMLLIElement>): void,
    handleTabKeyDown(index: TabStandaloneProps["index"], event: React.KeyboardEvent<HTMLLIElement>): void,
    index?: number,
    label?: React.ReactNode,
    renderAnchor?: React.FC<TabCustomAnchorProvidedProps>,
    role?: string, // marked as required, but render code overwrites it currently, also has default
    selected: boolean,
}

export interface TabCustomContentProvidedProps {
    "aria-hidden": boolean;
    "aria-labelledby": ReactAttr["aria-labelledby"];
    id: ReactAttr["id"];
    className: NonNullable<ReactAttr["className"]>;
    hidden: boolean;
    selected: boolean;
}

// see Tabs.js
type TabsProvidedPropKeys = "index" | "handleTabClick" | "handleTabKeyDown" | "ref" | "selected" | "tabIndex";
export interface TabProps extends Omit<TabStandaloneProps, TabsProvidedPropKeys> {
    // only props that are used only by the parent "Tabs" component should go here
    // otherwise they should go in TabStandaloneProps interface
    renderContent?: React.ComponentType<TabCustomContentProvidedProps>;
}

declare class Tab extends React.Component<TabProps> { }

export default Tab;
