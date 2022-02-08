import * as React from 'react';

declare namespace TabContent {
    export interface TabContentProps extends React.HTMLProps<TabContent> {
        componentClass?: React.ElementType | undefined,
        animation?: boolean | React.ElementType | undefined;
        mountOnEnter?: boolean | undefined;
        unmountOnExit?: boolean | undefined;
        bsClass?: string | undefined;
    }
}
declare class TabContent extends React.Component<TabContent.TabContentProps> { }
export = TabContent;
