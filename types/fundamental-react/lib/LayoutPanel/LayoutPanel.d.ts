import * as React from 'react';

export type LayoutPanelHeadProps = {
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    headingStyle?: 2 | 3 | 4 | 5 | 6;
    title?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

declare class LayoutPanel extends React.Component<React.HTMLAttributes<HTMLDivElement>> {
    displayName: 'LayoutPanel';
    static Actions: React.ComponentClass<React.HTMLAttributes<HTMLDivElement>> & { displayName: 'LayoutPanel.Actions' };
    static Body: React.ComponentClass<React.HTMLAttributes<HTMLDivElement>> & { displayName: 'LayoutPanel.Body' };
    static Filters: React.ComponentClass<React.HTMLAttributes<HTMLDivElement>> & { displayName: 'LayoutPanel.Filters' };
    static Footer: React.ComponentClass<React.HTMLAttributes<HTMLDivElement>> & { displayName: 'LayoutPanel.Footer' };
    static Head: React.ComponentClass<LayoutPanelHeadProps> & { displayName: 'LayoutPanel.Head' };
    static Header: React.ComponentClass<React.HTMLAttributes<HTMLDivElement>> & { displayName: 'LayoutPanel.Header' };
}

export default LayoutPanel;
