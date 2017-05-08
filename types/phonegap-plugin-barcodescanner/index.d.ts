// Type definitions for phonegap-plugin-barcodescanner
// Project: https://github.com/phonegap/phonegap-plugin-barcodescanner
// Definitions by: Nathan Ainslie <https://www.github.com/nainslie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface CordovaPlugins {
    barcodeScanner: phonegapBarcode.BarcodeScanner;
}

declare namespace phonegapBarcode {
    interface BarcodeScanResult {
        text: string;
        format: string;
        cancelled: boolean;
    }
    
    interface BarcodeScanOptions {
        preferFrontCamera?: boolean;
        showFlipCameraButton?: boolean;
        prompt?: string;
        formats?: string;
        orientation?: "landscape" | "portrait";
    }

    interface EncodingType {
        TEXT_TYPE: any;
        EMAIL_TYPE: any;
        PHONE_TYPE: any;
        SMS_TYPE: any;
    }

    interface BarcodeScanner {
        scan: (success: ((result: BarcodeScanResult) => any), failure?: ((err: any) => any), opts?: BarcodeScanOptions) => void;
        encode: (encodingType: EncodingType, data: string, success: ((result: any) => any), failure?: ((err: any) => any)) => void;
        Encode: EncodingType;
    }
}