import * as React from 'react';
import { TransitionCallbacks } from 'react-bootstrap';

declare namespace TabPane {
    export interface TabPaneProps extends TransitionCallbacks, React.HTMLProps<TabPane> {
        animation?: boolean | React.ComponentClass<any> | undefined;
        'aria-labelledby'?: string | undefined;
        bsClass?: string | undefined;
        eventKey?: any;
        mountOnEnter?: boolean | undefined;
        unmountOnExit?: boolean | undefined;
    }
}
declare class TabPane extends React.Component<TabPane.TabPaneProps> { }
export = TabPane;
