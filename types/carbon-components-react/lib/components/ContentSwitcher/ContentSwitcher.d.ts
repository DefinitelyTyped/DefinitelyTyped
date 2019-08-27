import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";
import { SwitchProps } from "./Switch";

interface InheritedProps extends Omit<ReactDivAttr, "onChange"> {
    onChange: NonNullable<SwitchProps["onClick"]>,
}

export interface ContentSwitcherProps extends InheritedProps {
    selectedIndex?: number,
}

declare const ContentSwitcher: React.FC<ContentSwitcherProps>;

export default ContentSwitcher;
