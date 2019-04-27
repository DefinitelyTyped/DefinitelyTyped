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

export type TabGroupProps = {
    className?: string;
    /* The index of the selected tab. */
    selectedIndex?: number;
    /* Callback function when the user clicks on a tab. Parameters passed to the function are `event` and `index`. */
    onTabClick?: (event: React.MouseEvent, index?: number) => void;
} & { [x: string]: any };

export const Tab: React.FunctionComponent<TabProps>;

export class TabGroup extends React.Component<TabGroupProps> {}
