import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace Well {
    export interface WellProps extends React.HTMLProps<Well> {
        bsSize?: Sizes | undefined;
        bsStyle?: string | undefined;
        bsClass?: string | undefined;
    }
}
declare class Well extends React.Component<Well.WellProps> { }
export = Well;
