import * as React from 'react';
import { TransitionCallbacks } from 'react-bootstrap';

declare class Fade extends React.Component<FadeProps> { }
declare namespace Fade { }
export = Fade

interface FadeProps extends TransitionCallbacks, React.HTMLProps<Fade> {
  in?: boolean;
  timeout?: number;
  transitionAppear?: boolean;
  unmountOnExit?: boolean;
}
