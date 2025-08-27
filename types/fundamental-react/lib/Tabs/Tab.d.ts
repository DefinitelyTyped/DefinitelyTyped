import * as React from "react";
import { IconGlyph } from "../Icon/Icon";

export type TabProps = {
    className?: string | undefined;
    disableStyles?: boolean | undefined;
    glyph?: IconGlyph | undefined;
    id?: string | undefined;
    index?: number | undefined;
    linkProps?: any;
    selected?: boolean | undefined;
    tabContentProps?: any;
    title?: string | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
} & { [x: string]: any };

declare const Tab: React.FunctionComponent<TabProps> & {
    displayName: "Tab";
};

export default Tab;
