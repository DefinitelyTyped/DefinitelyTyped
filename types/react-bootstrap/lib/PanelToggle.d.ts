import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SelectCallback } from 'react-bootstrap';

declare namespace PanelToggle {
    export interface PanelToggleProps extends ReactDOM.HTMLProps<PanelToggle> {
        componentClass?: string;
    }
}
declare class PanelToggle extends React.Component<PanelToggle.PanelToggleProps> { }
export = PanelToggle;
