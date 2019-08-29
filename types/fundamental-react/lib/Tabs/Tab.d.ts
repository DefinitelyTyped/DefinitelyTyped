import * as React from "react";

export type TabProps = {
    className?: string;
    disabled?: boolean;
    /* Icon to display on the tab. */
    glyph?: string;
    id?: string;
    /* _INTERNAL USE ONLY._ */
    index?: number;
    /* Additional props to be spread to the tab\'s <a> element. */
    linkProps?: { [x: string]: any };
    /* _INTERNAL USE ONLY._ */
    selected?: boolean;
    /* Additional props to be spread to the tab content's <div> element. */
    tabContentProps?: { [x: string]: any };
    /* Localized text to display on the tab. */
    title?: string;
    /* _INTERNAL USE ONLY._ */
    onClick?: (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        index: number
    ) => void;
} & { [x: string]: any };

declare const Tab: React.FunctionComponent<TabProps>;

export default Tab;
