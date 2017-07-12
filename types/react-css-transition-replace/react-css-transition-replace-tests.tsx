import * as React from "react"
import { render } from 'react-dom';
import * as CSSTransitionReplace from "react-css-transition-replace"

render(
    <CSSTransitionReplace overflowHidden transitionName="test">
        <div>Test</div>
    </CSSTransitionReplace>,
    document.getElementById("main")
)
