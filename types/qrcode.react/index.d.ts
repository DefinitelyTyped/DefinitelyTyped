// Type definitions for qrcode.react 1.0
// Project: https://github.com/zpao/qrcode.react, http://zpao.github.io/qrcode.react
// Definitions by: Mleko <https://github.com/mleko>,
//                 Yonas <https://github.com/yonasadiel>,
//                 Bjoluc <https://github.com/bjoluc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />

declare namespace qrcode {
    interface ImageSettings {
        src: string;
        x?: number;
        y?: number;
        height?: number;
        width?: number;
        excavate?: boolean;
    }

    interface BaseQRCodeProps {
        value: string;
        size?: number;
        includeMargin?: boolean;
        bgColor?: string;
        fgColor?: string;
        level?: "L"|"M"|"Q"|"H";
        imageSettings?: ImageSettings;
    }

    type CanvasQRCodeProps = BaseQRCodeProps & {
        renderAs?: "canvas"
    } & React.CanvasHTMLAttributes<HTMLCanvasElement>;

    type SvgQRCodeProps = BaseQRCodeProps & {
        renderAs: "svg"
    } & React.SVGProps<SVGSVGElement>;

    type QRCode = React.ComponentClass<CanvasQRCodeProps | SvgQRCodeProps>;
}

declare const qrcode: qrcode.QRCode;
export = qrcode;
