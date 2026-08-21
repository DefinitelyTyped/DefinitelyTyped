import * as React from "react";
import ReactHintFactory from "react-hint";

const ReactHint = ReactHintFactory(React); // $ExpectType ComponentClass<ReactHintProps, any>

<ReactHint />;

<ReactHint attribute="data-abc" />;

<ReactHint autoPosition />;

<ReactHint className="custom-classname" />;

<ReactHint delay={300} />;
<ReactHint delay={{ show: 300, hide: 500 }} />;

<ReactHint events />;
<ReactHint events={{ click: true, focus: true, hover: false }} />;

<ReactHint
    onRenderContent={(target, content) => {
        target; // $ExpectType HTMLElement
        content; // $ExpectType string
        return null;
    }}
/>;

<ReactHint persist />;

<ReactHint position="bottom" />;
// @ts-ignore props.position has to be "top" | "left" | "right" | "bottom"
<ReactHint position="invalid" />;
