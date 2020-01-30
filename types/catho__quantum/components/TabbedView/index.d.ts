import React = require('react');

type TabbedViewProps = {
    fluid?: boolean;
    children: React.ReactNode[] | React.ReactNode;
    activeTab?: string;
    skin?: 'neutral' | 'primary';
    theme?: {
        components?: {
            tabbedView?: object;
        };
        baseFontSize?: number;
        breakpoints?: object;
        spacing?: object;
    };
};

export class TabbedView extends React.Component<TabbedViewProps> {}

type TabProps = {
    title: string;
    badge?: React.ReactNode;
    icon?: React.ReactNode;
    children: React.ReactNode[] | React.ReactNode;
};

export class Tab extends React.Component<TabProps> {}
