import * as React from "react";

export type TabGroupProps = {
    className?: string | undefined;
    disableStyles?: boolean | undefined;
    selectedIndex?: number | undefined;
    size?: any;
    tabGroupProps?: any;
    onTabClick?: ((event: React.MouseEvent, index: number) => void) | undefined;
} & { [x: string]: any };

declare class TabGroup extends React.Component<TabGroupProps> {
    static displayName: "TabGroup";
}

export default TabGroup;
