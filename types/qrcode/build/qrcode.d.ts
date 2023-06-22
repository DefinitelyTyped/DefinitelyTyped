import * as QRCodeLib from '../index';

declare global {
    namespace QRCode {
        const create: typeof QRCodeLib.create;
        const toCanvas: typeof QRCodeLib.toCanvas;
        const toDataURL: typeof QRCodeLib.toDataURL;
        const toString: typeof QRCodeLib.toString;
    }
}
