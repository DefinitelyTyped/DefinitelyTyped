import * as React from "react";

import { CSSTransition } from "react-transition-group";
import { TransitionProps } from "react-transition-group/Transition";

export function OverlayFade(props: TransitionProps): JSX.Element {
    return (
        <CSSTransition
            {...props}
            classNames="overlay-fade"
            appear={true}
            timeout={150}
        />
    );
}
