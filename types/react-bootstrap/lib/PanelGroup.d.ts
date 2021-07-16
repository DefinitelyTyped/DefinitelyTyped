import * as React from 'react';
import { Sizes, SelectCallback } from 'react-bootstrap';

declare namespace PanelGroup {
    export interface PanelGroupProps extends React.HTMLProps<PanelGroup> {
        accordion?: boolean | undefined;
        activeKey?: any;
        defaultActiveKey?: any;
        onSelect?: SelectCallback | undefined;
        role?: string | undefined;
        generateChildId?: Function | undefined;
    }
}
declare class PanelGroup extends React.Component<PanelGroup.PanelGroupProps> { }
export = PanelGroup;
