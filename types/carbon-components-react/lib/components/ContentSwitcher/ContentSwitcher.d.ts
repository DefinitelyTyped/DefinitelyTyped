import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends Omit<ReactDivAttr, "role"> { }

export interface ContentSwitcherProps extends InheritedProps {
    selectedIndex?: number,
    selectionMode?: "automatic" | "manual";
}

declare class ContentSwitcher extends React.Component<ContentSwitcherProps> {}

export default ContentSwitcher;
