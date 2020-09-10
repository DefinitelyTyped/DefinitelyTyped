import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends Omit<ReactDivAttr, "role"> { }

interface ContentSwitcherOnChangeSelection {
    index: number;
    name: string;
    text: string;
}

export interface ContentSwitcherProps extends InheritedProps {
    selectedIndex?: number,
    selectionMode?: "automatic" | "manual";
    onChange: (selection: ContentSwitcherOnChangeSelection) => void;
}

declare class ContentSwitcher extends React.Component<ContentSwitcherProps> {}

export default ContentSwitcher;
