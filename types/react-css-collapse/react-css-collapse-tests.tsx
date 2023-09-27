import * as React from "react";
import { FC } from "react";
import Collapse from "react-css-collapse";
import { render } from "react-dom";

const TestOpen: FC = () => (
    <Collapse isOpen>
        <div>
            i am open
        </div>
    </Collapse>
);

render(<TestOpen />, document.getElementById("main"));
