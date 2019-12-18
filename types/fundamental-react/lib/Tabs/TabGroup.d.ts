import * as React from "react";

export type TabGroupProps = {
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    /* The index of the selected tab. */
    selectedIndex?: number;
    /* Callback function when the user clicks on a tab. Parameters passed to the function are `event` and `index`. */
    onTabClick?: (event: React.MouseEvent, index: number) => void;
} & { [x: string]: any };

declare class TabGroup extends React.Component<TabGroupProps> {
    static displayName: "TabGroup";
}

export default TabGroup;
