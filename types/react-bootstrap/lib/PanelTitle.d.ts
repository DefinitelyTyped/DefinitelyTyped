import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

declare namespace PanelTitle {
    export interface PanelTitleProps extends React.HTMLProps<PanelTitle> {
        componentClass?: string | undefined;
        bsClass?: string | undefined;
        toggle?: boolean | undefined;
    }
}
declare class PanelTitle extends React.Component<PanelTitle.PanelTitleProps> { }
export = PanelTitle;
