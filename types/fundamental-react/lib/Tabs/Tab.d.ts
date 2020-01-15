import * as React from "react";

export type TabProps = {
    className?: string;
    customStyles?: {[x: string]: any};
    disabled?: boolean;
    disableStyles?: boolean;
    /* Icon to display on the tab. */
    glyph?: string;
    id?: string;
    /* Additional props to be spread to the tab\'s <a> element. */
    linkProps?: { [x: string]: any };
    /* Additional props to be spread to the tab content's <div> element. */
    tabContentProps?: { [x: string]: any };
    /* Localized text to display on the tab. */
    title?: string;
} & { [x: string]: any };

declare const Tab: React.FunctionComponent<TabProps> & {
    displayName: "Tab";
};

export default Tab;
