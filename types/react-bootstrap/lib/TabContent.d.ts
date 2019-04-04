import * as React from 'react';

declare namespace TabContent {
    export interface TabContentProps extends React.HTMLProps<TabContent> {
        componentClass?: React.ElementType,
        animation?: boolean | React.ElementType;
        mountOnEnter?: boolean;
        unmountOnExit?: boolean;
        bsClass?: string;
    }
}
declare class TabContent extends React.Component<TabContent.TabContentProps> { }
export = TabContent;
