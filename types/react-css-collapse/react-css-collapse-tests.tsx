import * as React from "react";
import { FC } from "react";
import { render } from "react-dom";
import Collapse from "react-css-collapse";

const TestOpen: FC = () => (
    <Collapse isOpen>
        <div>
            i am open
        </div>
    </Collapse>
);

render(<TestOpen />, document.getElementById("main"));
