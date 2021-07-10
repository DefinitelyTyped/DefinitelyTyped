import * as React from 'react';

declare namespace TabContent {
    export interface TabContentProps extends React.HTMLProps<TabContent> {
        componentClass?: React.ReactType | undefined,
        animation?: boolean | React.ReactType | undefined;
        mountOnEnter?: boolean | undefined;
        unmountOnExit?: boolean | undefined;
        bsClass?: string | undefined;
    }
}
declare class TabContent extends React.Component<TabContent.TabContentProps> { }
export = TabContent;
