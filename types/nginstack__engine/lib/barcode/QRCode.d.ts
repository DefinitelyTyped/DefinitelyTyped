export = QRCode;
declare function QRCode(): void;
declare class QRCode {}
declare namespace QRCode {
    export {
        ECC_LOW,
        ECC_MEDIUM,
        ECC_QUARTILE,
        ECC_HIGH,
        toUint8Array,
        toDataURL,
        toFile,
        QRCodeOptions,
    };
}
declare let ECC_LOW: string;
declare let ECC_MEDIUM: string;
declare let ECC_QUARTILE: string;
declare let ECC_HIGH: string;
declare function toUint8Array(
    content: string | ArrayBuffer | Uint8Array,
    options?: QRCodeOptions
): Uint8Array;
declare function toDataURL(
    content: string | ArrayBuffer | Uint8Array,
    options?: QRCodeOptions
): Uint8Array;
declare function toFile(
    content: string | ArrayBuffer | Uint8Array,
    path: string,
    options?: QRCodeOptions
): void;
interface QRCodeOptions {
    scale?: number;
    margin?: number;
    width?: number;
    errorCorrection?: string;
    lightColor?: string;
    darkColor?: string;
    ignoreContrastCheck?: boolean;
}
