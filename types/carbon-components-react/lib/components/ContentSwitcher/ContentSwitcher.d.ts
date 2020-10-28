import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface ContentSwitcherProps extends Omit<ReactDivAttr, "role"> {
    light?: boolean,
    selectedIndex?: number,
    selectionMode?: "automatic" | "manual";
    size?: "sm" | "xl";
}

declare class ContentSwitcher extends React.Component<ContentSwitcherProps> {}

export default ContentSwitcher;
