import * as React from 'react';

declare namespace PageHeader {
    export interface PageHeaderProps extends React.HTMLProps<PageHeader> {
        bsClass?: string | undefined;
    }
}
declare class PageHeader extends React.Component<PageHeader.PageHeaderProps> { }
export = PageHeader;
