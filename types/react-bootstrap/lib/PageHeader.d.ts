import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace PageHeader {
    export interface PageHeaderProps extends ReactDOM.HTMLProps<PageHeader> {
        bsClass?: string;
    }
}
declare class PageHeader extends React.Component<PageHeader.PageHeaderProps> { }
export = PageHeader;
