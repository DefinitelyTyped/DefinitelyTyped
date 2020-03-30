import * as React from "react";
import { IconGlyph } from "../Icon/Icon";

export type TabProps = {
    className?: string;
    disableStyles?: boolean;
    glyph?: IconGlyph;
    id?: string;
    index?: number;
    linkProps?: any;
    selected?: boolean;
    tabContentProps?: any;
    title?: string;
    onClick?: (...args: any[]) => any;
} & { [x: string]: any };

declare const Tab: React.FunctionComponent<TabProps> & {
    displayName: "Tab";
};

export default Tab;
