import * as React from "react";

export type TabGroupProps = {
    className?: string;
    disableStyles?: boolean;
    selectedIndex?: number;
    size?: any;
    tabGroupProps?: any;
    onTabClick?: (event: React.MouseEvent, index: number) => void;
} & { [x: string]: any };

declare class TabGroup extends React.Component<TabGroupProps> {
    static displayName: "TabGroup";
}

export default TabGroup;
