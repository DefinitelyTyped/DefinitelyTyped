import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace Well {
    export interface WellProps extends React.HTMLProps<Well> {
        bsSize?: Sizes;
        bsStyle?: string;
    }
}
declare class Well extends React.Component<Well.WellProps> { render(): React.ReactNode }
export = Well;
