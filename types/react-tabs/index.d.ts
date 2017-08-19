// Type definitions for react-tabs 0.5.3
// Project: https://github.com/reactjs/react-tabs/
// Definitions by: Yuu Igarashi <https://github.com/yu-i9/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from 'react';

export as namespace ReactTabs;

declare namespace ReactTabs {

    interface TabsProps {
        className?: string;
        selectedIndex?: number;
        focus?: boolean;
        forceRenderTabPanel?: boolean;
        onSelect?: (index: number, last: number) => void;
    }

    interface Tabs extends React.ComponentClass<TabsProps> {
        setUseDefaultStyles: (use: boolean) => void;
    }

    interface TabListProps {
        className?: string;
        activeTabClassName?: string;
        disabledTabClassName?: string;
    }

    interface TabList extends React.ComponentClass<TabListProps> {}

    interface TabProps {
        className?: string;
        focus?: boolean;
        selected?: boolean;
        id?: string;
        panelId?: string;
    }

    interface Tab extends React.ComponentClass<TabProps> {}

    interface TabPanelProps {
        className?: string;
        selected?: boolean;
        id?: string;
        tabId?: string;
    }

    interface TabPanel extends React.ComponentClass<TabPanelProps> {}
}

declare const Tabs: ReactTabs.Tabs;
declare const TabList: ReactTabs.TabList;
declare const Tab: ReactTabs.Tab;
declare const TabPanel: ReactTabs.TabPanel;

export {
    Tabs,
    TabList,
    Tab,
    TabPanel
};
