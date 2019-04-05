import * as React from 'react';

export interface TabsProps {
    name?: string;
    onChange?: (selectedTab: string, name: string) => void;
    handleSelect?: (tab: string, name: string) => void;
    selectedTab?: string;
    activeLinkStyle?: object;
    visibleTabStyle?: object;
    disableInlineStyles?: boolean;
    renderActiveTabContentOnly?: boolean;
}

export class Tabs extends React.Component<TabsProps> {}
