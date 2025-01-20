import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";
import { SwitchOnKeyDownData } from "../Switch";

export type ContentSwitcherOnChangeData = Omit<SwitchOnKeyDownData, "key"> & Partial<Pick<SwitchOnKeyDownData, "key">>;

export interface ContentSwitcherProps extends Omit<ReactDivAttr, "onChange" | "role"> {
    /**
     * @deprecated
     */
    light?: boolean | undefined;
    onChange?(data: ContentSwitcherOnChangeData): void;
    selectedIndex?: number | undefined;
    selectionMode?: "automatic" | "manual" | undefined;
    size?: "sm" | "md" | "lg" | "xl" | undefined;
}

declare class ContentSwitcher extends React.Component<ContentSwitcherProps> {}

export default ContentSwitcher;
