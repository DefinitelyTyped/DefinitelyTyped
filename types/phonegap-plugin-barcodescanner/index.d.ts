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
        preferFrontCamera?: boolean | undefined;
        showFlipCameraButton?: boolean | undefined;
        showTorchButton?: boolean | undefined;
        torchOn?: boolean | undefined;
        saveHistory?: boolean | undefined;
        resultDisplayDuration?: number | undefined;
        disableAnimations: boolean;
        prompt?: string | undefined;
        formats?: string | undefined;
        orientation?: "landscape" | "portrait" | undefined;
        disableSuccessBeep?: boolean | undefined;
    }

    interface EncodingType {
        TEXT_TYPE: any;
        EMAIL_TYPE: any;
        PHONE_TYPE: any;
        SMS_TYPE: any;
    }

    interface BarcodeScanner {
        scan: (
            success: (result: BarcodeScanResult) => any,
            failure?: (err: any) => any,
            opts?: BarcodeScanOptions,
        ) => void;
        encode: (
            encodingType: EncodingType,
            data: string,
            success: (result: any) => any,
            failure?: (err: any) => any,
        ) => void;
        Encode: EncodingType;
    }
}
