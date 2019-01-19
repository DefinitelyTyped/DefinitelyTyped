import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace TabContainer {
    export interface TabContainerProps extends ReactDOM.HTMLAttributes<TabContainer> {
        activeKey?: any;
        defaultActiveKey?: any;
        generateChildId?: (eventKey: any, type: any) => string;
    }
}
declare class TabContainer extends React.Component<TabContainer.TabContainerProps> { }
export = TabContainer;
