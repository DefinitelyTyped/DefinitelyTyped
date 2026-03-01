// JSBox Qrcode API TypeScript Declaration

declare namespace QrcodeTypes {
    interface ScanOptions {
        useFrontCamera?: boolean; // default false
        turnOnFlash?: boolean; // default false
        handler: (result: string) => void;
        cancelled?: () => void;
    }
}

interface JBQrcode {
    encode(text: string): UIImage;
    decode(image: UIImage): string;
    scan(options: QrcodeTypes.ScanOptions | ((result: string) => void)): void;
}

declare const $qrcode: JBQrcode;
