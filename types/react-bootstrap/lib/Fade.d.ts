import * as React from 'react';
import { TransitionCallbacks } from 'react-bootstrap';

interface FadeProps extends TransitionCallbacks, React.HTMLProps<Fade> {
  in?: boolean;
  timeout?: number;
  transitionAppear?: boolean;
  unmountOnExit?: boolean;
}

export default class Fade extends React.Component<FadeProps> { }
