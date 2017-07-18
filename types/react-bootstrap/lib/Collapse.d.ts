import * as React from 'react';
import { TransitionCallbacks } from 'react-bootstrap';

interface CollapseProps extends TransitionCallbacks, React.Props<Collapse> {
  dimension?: 'height' | 'width' | { ( ):string };
  getDimensionValue?: ( dimension:number, element:React.ReactElement<any> ) => number;
  in?: boolean;
  timeout?: number;
  transitionAppear?: boolean;
  unmountOnExit?: boolean;
}

export default class Collapse extends React.Component<CollapseProps> { }
