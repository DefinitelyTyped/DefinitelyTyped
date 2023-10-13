import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReCaptcha } from "react-recaptcha-v3";

ReactDOM.render(
    <ReCaptcha
        sitekey="xxxxxx"
        action="action"
    />,
    document.getElementById("form-recaptcha"),
);
