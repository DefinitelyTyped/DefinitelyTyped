// Type definitions for phonegap-plugin-barcodescanner
// Project: https://github.com/phonegap/phonegap-plugin-barcodescanner
// Definitions by: Nathan Ainslie <https://www.github.com/nainslie>
//                 Jeff Wu <https://www.github.com/jeffwu85182>
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
        showTorchButton?: boolean;
        torchOn?: boolean;
        saveHistory?: boolean;
        resultDisplayDuration? :number;
        disableAnimations: boolean;
        prompt?: string;
        formats?: string;
        orientation?: "landscape" | "portrait";
        disableSuccessBeep?: boolean;
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
