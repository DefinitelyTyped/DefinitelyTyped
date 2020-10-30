import { ReCaptcha } from "react-recaptcha-v3";
import * as ReactDOM from "react-dom";
import * as React from "react";

ReactDOM.render(
    <ReCaptcha
        sitekey="xxxxxx"
        action="action"
    />,
    document.getElementById('form-recaptcha')
);
