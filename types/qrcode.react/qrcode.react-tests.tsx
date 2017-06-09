import * as QRCode from "qrcode.react";
import * as React from "react";

const qrcodes = [
	<QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped"/>,
	<QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" size={64}/>,
	<QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" bgColor="#555555"/>,
	<QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" fgColor="#aaaaaa"/>,
	<QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" level="L"/>,
	<QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" level="H"/>,
	<QRCode value="https://github.com/DefinitelyTyped/DefinitelyTyped" size={256} bgColor="pink" fgColor="red" level="Q"/>,
];
