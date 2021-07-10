import * as React from 'react';
import { TransitionCallbacks } from 'react-bootstrap';

declare namespace Fade {
    export interface FadeProps extends TransitionCallbacks, React.HTMLProps<Fade> {
        in?: boolean | undefined;
        timeout?: number | undefined;
        mountOnEnter?: boolean | undefined;
        appear?: boolean | undefined;
        unmountOnExit?: boolean | undefined;
    }
}
declare class Fade extends React.Component<Fade.FadeProps> { }
export = Fade;
