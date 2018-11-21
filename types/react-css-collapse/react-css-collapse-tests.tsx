import * as React from "react";
import { SFC } from "react";
import { render } from "react-dom";
import { default as Collapse } from "react-css-collapse";

const TestOpen: SFC<{}> = () => (
    <Collapse isOpen={true}>
        <div>
            i am open
        </div>
    </Collapse>
);

render(<TestOpen />, document.getElementById("main"));
