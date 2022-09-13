import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

declare namespace Tabs {
    export interface TabsProps extends React.HTMLProps<Tabs> {
        activeKey?: any;
        animation?: boolean | undefined;
        bsStyle?: string | undefined;
        defaultActiveKey?: any;
        onSelect?: SelectCallback | undefined;
        paneWidth?: any; // TODO: Add more specific type
        position?: string | undefined;
        tabWidth?: any; // TODO: Add more specific type
        mountOnEnter?: boolean | undefined;
        unmountOnExit?: boolean | undefined;
        justified?: boolean | undefined;
    }
}
declare class Tabs extends React.Component<Tabs.TabsProps> { }
export = Tabs;
