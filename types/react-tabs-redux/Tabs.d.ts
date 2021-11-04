import * as React from 'react';

export interface TabsProps {
    children?: React.ReactNode;
    name?: string | undefined;
    onChange?: ((selectedTab: string, name: string) => void) | undefined;
    handleSelect?: ((tab: string, name: string) => void) | undefined;
    selectedTab?: string | undefined;
    activeLinkStyle?: object | undefined;
    visibleTabStyle?: object | undefined;
    disableInlineStyles?: boolean | undefined;
    renderActiveTabContentOnly?: boolean | undefined;
}

export class Tabs extends React.Component<TabsProps> {}
