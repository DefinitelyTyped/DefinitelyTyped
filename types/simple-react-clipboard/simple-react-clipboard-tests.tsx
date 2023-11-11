import * as React from "react";
import { render } from "react-dom";
import Clipboard from "simple-react-clipboard";

const text = "Hello World";
const children: React.ReactNode = <button>Copy</button>;
const props = {};
const onSuccess = () => {};
const onError = () => {};

render(
    <Clipboard
        render={() => children}
        text={text}
        props={props}
        onSuccess={onSuccess}
        onError={onError}
    />,
    document.getElementById("root"),
);
