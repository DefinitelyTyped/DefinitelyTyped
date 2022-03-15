import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

declare namespace PanelToggle {
    export interface PanelToggleProps extends React.HTMLProps<PanelToggle> {
        componentClass?: string | undefined;
    }
}
declare class PanelToggle extends React.Component<PanelToggle.PanelToggleProps> { }
export = PanelToggle;
