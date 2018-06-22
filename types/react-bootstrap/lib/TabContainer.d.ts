import * as React from 'react';

declare namespace TabContainer {
    export interface TabContainerProps extends React.HTMLAttributes<TabContainer> {
        activeKey?: any;
        defaultActiveKey?: any;
        generateChildId?: (eventKey: any, type: any) => string;
    }
}
declare class TabContainer extends React.Component<TabContainer.TabContainerProps> { render(): React.ReactNode }
export = TabContainer;
