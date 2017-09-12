import * as React from 'react';
import { TransitionCallbacks } from 'react-bootstrap';
import * as TabContainer from './TabContainer';
import * as TabPane from './TabPane';
import * as TabContent from './TabContent';

declare namespace Tab {
    export interface TabProps extends TransitionCallbacks, React.HTMLProps<Tab> {
        animation?: boolean;
        'aria-labelledby'?: string;
        bsClass?: string;
        eventKey?: any; // TODO: Add more specific type
        unmountOnExit?: boolean;
        tabClassName?: string;
    }
}
declare class Tab extends React.Component<Tab.TabProps> {
    static Container: typeof TabContainer;
    static Content: typeof TabContent;
    static Pane: typeof TabPane;
}
export = Tab;
