import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface ContentSwitcherProps extends Omit<ReactDivAttr, "role"> {
    light?: boolean,
    selectedIndex?: number,
    selectionMode?: "automatic" | "manual";
}

declare class ContentSwitcher extends React.Component<ContentSwitcherProps> {}

export default ContentSwitcher;
