import * as React from "react"
import { render } from 'react-dom';
import Scrollbars from "react-custom-scrollbars"

render(
    <Scrollbars>
        <div>Test</div>
    </Scrollbars>,
    document.getElementById("main")
)
