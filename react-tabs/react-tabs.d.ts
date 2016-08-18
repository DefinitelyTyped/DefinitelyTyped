// Type definitions for react-tabs 0.5.3
// Project: https://github.com/reactjs/react-tabs/
// Definitions by: Yuu Igarashi <https://github.com/yu-i9/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare namespace ReactTabs {

    interface TabsProps {
        className?: string;
        selectedIndex?: number;
        focus?: boolean;
        forceRenderTabPanel?: boolean;
        onSelect?: (index: number, last: number) => void;
    }

    interface Tabs extends __React.ComponentClass<TabsProps> {
        setUseDefaultStyles: (use: boolean) => void;
    }

    interface TabListProps {
        className?: string;
        activeTabClassName?: string;
        disabledTabClassName?: string;
    }

    interface TabList extends __React.ComponentClass<TabListProps> {}

    interface TabProps {
        className?: string;
        focus?: boolean;
        selected?: boolean;
        id?: string;
        panelId?: string;
    }

    interface Tab extends __React.ComponentClass<TabProps> {}

    interface TabPanelProps {
        className?: string;
        selected?: boolean;
        id?: string;
        tabId?: string;
    }

    interface TabPanel extends __React.ComponentClass<TabPanelProps> {}
}


declare module "react-tabs" {

    var Tabs: ReactTabs.Tabs;
    var TabList: ReactTabs.TabList;
    var Tab: ReactTabs.Tab;
    var TabPanel: ReactTabs.TabPanel;

    export {
        Tabs,
        TabList,
        Tab,
        TabPanel
    }

}
