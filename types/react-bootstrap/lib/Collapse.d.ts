import * as React from 'react';
import { TransitionCallbacks } from 'react-bootstrap';

declare namespace Collapse {
    export interface CollapseProps extends TransitionCallbacks, React.ClassAttributes<Collapse> {
        children?: React.ReactNode;
        dimension?: 'height' | 'width' | { ( ):string } | undefined;
        getDimensionValue?: (( dimension:number, element:React.ReactElement ) => number) | undefined;
        in?: boolean | undefined;
        timeout?: number | undefined;
        transitionAppear?: boolean | undefined;
        mountOnEnter?: boolean | undefined;
        unmountOnExit?: boolean | undefined;
    }
}
declare class Collapse extends React.Component<Collapse.CollapseProps> { }
export = Collapse;
