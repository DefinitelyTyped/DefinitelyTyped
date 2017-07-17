// Type definitions for react-tabs 1.0.0
// Project: https://github.com/reactjs/react-tabs/
// Definitions by: Yuu Igarashi <https://github.com/yu-i9/>, Daniel Tschinder <https://github.com/danez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export as namespace ReactTabs;

declare namespace ReactTabs {

    interface TabsProps {
        className?: string | Array<string> | { [name: string]: boolean; };
        defaultFocus?: boolean;
        defaultIndex?: number;
        disabledTabClassName?: string;
        forceRenderTabPanel?: boolean;
        onSelect?: (index: number, last: number, event: Event) => boolean | void;
        selectedIndex?: number;
        selectedTabClassName?: string;
        selectedTabPanelClassName?: string;
    }

    interface Tabs extends React.ComponentClass<TabsProps> {}

    interface TabListProps {
        className?: string | Array<string> | { [name: string]: boolean; };
    }

    interface TabList extends React.ComponentClass<TabListProps> {}

    interface TabProps {
        className?: string | Array<string> | { [name: string]: boolean; };
        disabled?: boolean;
        disabledClassName?: string;
        selectedClassName?: boolean;
    }

    interface Tab extends React.ComponentClass<TabProps> {}

    interface TabPanelProps {
        className?: string | Array<string> | { [name: string]: boolean; };
        forceRender?: boolean;
        selectedClassName?: string;
    }

    interface TabPanel extends React.ComponentClass<TabPanelProps> {}
}

declare const Tabs: ReactTabs.Tabs;
declare const TabList: ReactTabs.TabList;
declare const Tab: ReactTabs.Tab;
declare const TabPanel: ReactTabs.TabPanel;

declare function resetIdCounter(): void;

export {
    Tabs,
    TabList,
    Tab,
    TabPanel,
    resetIdCounter
};
