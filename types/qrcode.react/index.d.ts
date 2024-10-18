/// <reference types="react" />

declare namespace qrcode {
    interface ImageSettings {
        src: string;
        x?: number | undefined;
        y?: number | undefined;
        height?: number | undefined;
        width?: number | undefined;
        excavate?: boolean | undefined;
    }

    interface BaseQRCodeProps {
        value: string;
        size?: number | undefined;
        includeMargin?: boolean | undefined;
        bgColor?: string | undefined;
        fgColor?: string | undefined;
        level?: "L" | "M" | "Q" | "H" | undefined;
        imageSettings?: ImageSettings | undefined;
    }

    type CanvasQRCodeProps = BaseQRCodeProps & {
        renderAs?: "canvas" | undefined;
    } & React.CanvasHTMLAttributes<HTMLCanvasElement>;

    type SvgQRCodeProps = BaseQRCodeProps & {
        renderAs: "svg";
    } & React.SVGProps<SVGSVGElement>;

    type QRCode = React.ComponentClass<CanvasQRCodeProps | SvgQRCodeProps>;
}

declare const qrcode: qrcode.QRCode;
export = qrcode;
