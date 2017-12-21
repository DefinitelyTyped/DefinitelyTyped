import * as React from 'react';
import { Sizes, SelectCallback } from 'react-bootstrap';

declare namespace PanelGroup {
    export interface PanelGroupProps extends React.HTMLProps<PanelGroup> {
        accordion?: boolean;
        activeKey?: any;
        bsSize?: Sizes;
        bsStyle?: string;
        defaultActiveKey?: any;
        onSelect?: SelectCallback;
    }
}
declare class PanelGroup extends React.Component<PanelGroup.PanelGroupProps> { }
export = PanelGroup;
