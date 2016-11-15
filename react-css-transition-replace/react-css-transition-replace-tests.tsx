// React CSS Transition Replace Test
// ================================================================================
///<reference path="react-css-transition-replace.d.ts"/>
///<reference path="../react/react.d.ts"/>
///<reference path="../react/react-dom.d.ts"/>

// Imports
// --------------------------------------------------------------------------------
import * as React from "react"
import { render } from 'react-dom';
import * as CSSTransitionReplace from "react-css-transition-replace"

render(
    <CSSTransitionReplace overflowHidden transitionName="test">
        <div>Test</div>
    </CSSTransitionReplace>,
    document.getElementById("main")
)
