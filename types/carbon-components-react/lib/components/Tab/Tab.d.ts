import * as React from "react";
import { ReactAnchorAttr, ReactAttr, ReactLIAttr } from "../../../typings/shared";

type ExcludedAttributes = "aria-controls" | "aria-selected" | "aria-disabled" | "role" | "tabIndex";
interface InheritedProps extends Omit<ReactLIAttr, ExcludedAttributes> {
    href: NonNullable<ReactAnchorAttr["href"]>,
    tabIndex: NonNullable<ReactAttr["tabIndex"]>,
}

export interface TabCustomAnchorProvidedProps {
    "aria-selected": boolean,
    className: NonNullable<ReactAttr["className"]>,
    href: InheritedProps["href"],
    role: "tab",
    tabIndex: NonNullable<ReactAttr["tabIndex"]>,
}

export interface TabProps extends InheritedProps {
    disabled?: boolean;
    handleTabClick(index: TabProps["index"], event: React.MouseEvent<HTMLLIElement>): void,
    handleTabKeyDown(index: TabProps["index"], event: React.KeyboardEvent<HTMLLIElement>): void,
    index?: number,
    label?: React.ReactNode,
    renderAnchor?: React.FC<TabCustomAnchorProvidedProps>,
    role?: string, // marked as required, but render code overwrites it currently
    selected: boolean,
}

declare class Tab extends React.Component<TabProps> { }

export default Tab;
