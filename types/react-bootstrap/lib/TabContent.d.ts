import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace TabContent {
    export interface TabContentProps extends ReactDOM.HTMLProps<TabContent> {
        componentClass?: React.ReactType,
        animation?: boolean | React.ReactType;
        mountOnEnter?: boolean;
        unmountOnExit?: boolean;
        bsClass?: string;
    }
}
declare class TabContent extends React.Component<TabContent.TabContentProps> { }
export = TabContent;
