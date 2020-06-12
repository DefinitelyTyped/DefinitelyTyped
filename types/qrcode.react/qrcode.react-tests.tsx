import QRCode = require("qrcode.react");
import * as React from "react";

const qrcodes = [
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped"/>,
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" size={64}/>,
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" bgColor="#555555"/>,
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" fgColor="#aaaaaa"/>,
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" level="L"/>,
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" level="H"/>,
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" includeMargin={true}/>,
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" size={256} bgColor="pink" fgColor="red" level="Q"/>,
    // Test imageSettings property:
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" imageSettings={{src: "./some-file.png"}}/>,
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" imageSettings={{
        src: "./some-file.png",
        x: 1,
        y: 1,
        height: 1,
        width: 1,
        excavate: true
    }}/>,
    // Test some passed-through props for svg and canvas elements:
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" renderAs="svg"/>,
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" renderAs="svg" amplitude={1}/>,
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" renderAs="canvas"/>,
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" renderAs="canvas" height={1} width={1}/>,
    <QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" height={1} width={1}/>,
];
