import * as React from "react";
import { ReactDivAttr, ThemeProps } from "../../../typings/shared";

interface InheritedProps extends Omit<ReactDivAttr, "role">, ThemeProps { }

export interface ContentSwitcherProps extends InheritedProps {
    selectedIndex?: number,
    selectionMode?: "automatic" | "manual";
}

declare class ContentSwitcher extends React.Component<ContentSwitcherProps> {}

export default ContentSwitcher;
