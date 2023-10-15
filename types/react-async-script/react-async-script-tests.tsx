import * as React from "react";
import makeAsyncScript = require("react-async-script");

interface Props {
    grecaptcha?: any;
}

function DisplayComponent({ grecaptcha }: Props) {
    return <div>React Async Script</div>;
}

const AsyncHoC = makeAsyncScript(`https://www.google.com/recaptcha/api.js?render=test`, {
    attributes: {
        "data-attr1": "attr1-value",
        "data-attr2": "attr2-value",
    },
    globalName: "grecaptcha",
    removeOnUnmount: true,
})(DisplayComponent);

function WrapperComponent() {
    return <AsyncHoC asyncScriptOnLoad={() => console.log("script loaded")} />;
}
