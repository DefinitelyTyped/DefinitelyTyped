// Type definitions for qrcode.react 0.6
// Project: https://github.com/zpao/qrcode.react
// Definitions by: Mleko <https://github.com/mleko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="react" />

declare namespace qrcode {
	export interface QRCodeProps {
		value: string;
		size?: number;
		bgColor?: string;
		fgColor?: string;
		level?: "L"|"M"|"Q"|"H";
	}

	export type QRCode = React.ComponentClass<QRCodeProps>;
}

declare const qrcode: qrcode.QRCode;
export = qrcode;
