// tslint:disable:jsdoc-format

/*!
* Product: Dynamsoft Web Twain
* Web Site: http://www.dynamsoft.com
*
* Copyright 2019, Dynamsoft Corporation
* Author: Dynamsoft Support Team
*/

interface RunTimeSetting {
    mAntiDamageLevel: number;
    mBarcodeFormatIds: number;
    mBarcodeInvertMode: number;
    mBinarizationBlockSize: number;
    mColourImageConvertMode: number;
    mDeblurLevel: number;
    mEnableFillBinaryVacancy: number;
    mExpectedBarcodesCount: number;
    mGrayEqualizationSensitivity: number;
    mLocalizationAlgorithmPriority: string;
    mMaxAlgorithmThreadCount: number;
    mMaxBarcodesCount: number;
    mMaxDimOfFullImageAsBarcodeZone: number;
    mPDFRasterDPI: number;
    mRegionPredetectionMode: number;
    mReserved: string;
    mScaleDownThreshold: number;
    mTextFilterMode: number;
    mTextureDetectionSensitivity: number;
    mTimeout: number;
}

interface dbrEnv {
    bAutoConnectService: boolean;
    logLevel: number;
    productKey: string;
    resourcesPath: string;
    onAutoConnectServiceSuccess(): void;
    onAutoConnectServiceError(status: any): void;
}

interface TaskQueue {
    push(task: (bLoadingWhenPush: boolean) => void, context?: any, args?: []): void;
    unshift(task: (bLoadingWhenPush: boolean) => void, context?: any, args?: []): void;
    next(): void;
}

declare namespace dynamsoft {
    namespace BarcodeReader {
        /** Barcode Formats */
        enum EnumBarcodeFormat {
            All = 503317503,
            OneD = 0x3FF,
            CODE_39 = 0x1,
            CODE_128 = 0x2,
            CODE_93 = 0x4,
            CODABAR = 0x8,
            ITF = 0x10,
            EAN_13 = 0x20,
            EAN_8 = 0x40,
            UPC_A = 0x80,
            UPC_E = 0x100,
            INDUSTRIAL_25 = 0x200,
            PDF417 = 0x2000000,
            QR_CODE = 0x4000000,
            DATAMATRIX = 0x8000000,
            AZTEC = 0x10000000
        }

        enum EnumErrorCode {
            DBR_SYSTEM_EXCEPTION = 1,
            DBR_SUCCESS = 0,
            DBR_UNKNOWN = -10000,
            DBR_NO_MEMORY = -10001,
            DBR_NULL_REFERENCE = -10002,
            DBR_LICENSE_INVALID = -10003,
            DBR_LICENSE_EXPIRED = -10004,
            DBR_FILE_NOT_FOUND = -10005,
            DBR_FILETYPE_NOT_SUPPORTED = -10006,
            DBR_BPP_NOT_SUPPORTED = -10007,
            DBR_INDEX_INVALID = -10008,
            DBR_BARCODE_FORMAT_INVALID = -10009,
            DBR_CUSTOM_REGION_INVALID = -10010,
            DBR_MAX_BARCODE_NUMBER_INVALID = -10011,
            DBR_IMAGE_READ_FAILED = -10012,
            DBR_TIFF_READ_FAILED = -10013,
            DBR_QR_LICENSE_INVALID = -10016,
            DBR_1D_LICENSE_INVALID = -10017,
            DBR_DIB_BUFFER_INVALID = -10018,
            DBR_PDF417_LICENSE_INVALID = 10019,
            DBR_DATAMATRIX_LICENSE_INVALID = -10020,
            DBR_PDF_READ_FAILED = -10021,
            DBR_PDF_DLL_MISSING = -10022,
            DBR_PAGE_NUMBER_INVALID = -10023,
            DBR_CUSTOM_SIZE_INVALID = -10024,
            DBR_CUSTOM_MODULESIZE_INVALID = -10025,
            DBR_RECOGNITION_TIMEOUT = -10026,
            DBR_JSON_PARSE_FAILED = -10030,
            DBR_JSON_TYPE_INVALID = -10031,
            DBR_JSON_KEY_INVALID = -10032,
            DBR_JSON_VALUE_INVALID = -10033,
            DBR_JSON_NAME_KEY_MISSING = -10034,
            DBR_JSON_NAME_VALUE_DUPLICATED = -10035,
            DBR_TEMPLATE_NAME_INVALID = -10036,
            DBR_JSON_NAME_REFERENCE_INVALID = -10037,
            DBR_PARAMETER_VALUE_INVALID = 10038,
            DBR_DOMAIN_NOT_MATCHED = -10039,
            DBR_RESERVEDINFO_NOT_MATCHED = -10040,
            DBR_DBRERR_AZTEC_LICENSE_INVALID = -10041
        }
        
        enum EnumConflictMode {
            ECM_Ignore = 1,
            ECM_Overwrite = 2
        }
        
        enum EnumImagePixelFormat {
            IPF_Binary = 0,
            IPF_BinaryInverted = 1,
            IPF_GrayScaled = 2,
            IPF_NV21 = 3,
            IPF_RGB_565 = 4,
            IPF_RGB_555 = 5,
            IPF_RGB_888 = 6,
            IPF_ARGB_8888 = 7
        }
        
        enum EnumResultType {
            EDT_CandidateText = 2,
            EDT_PartialText = 3,
            EDT_RawText = 1,
            EDT_StandardText = 0
        }
        
        enum EnumTerminateStage {
            ETS_Localized = 1,
            ETS_Prelocalized = 0,
            ETS_Recognized = 2
        }
    }
    
    class BarcodeReader {
        /**
         * Constructs a new KPainter
         */
        constructor(dbrKey?: string);

        static BarcodeReaderException(): any;
        static initServiceConnection(): Promise<any>;
        static name: string;
        static length: number;
        static version: string;
        
        // appendTplStringToRuntimeSettings(b, d):
        /** 
         * Read barcode from the source image.
         * @method BarcodeReader#decode
         * @param {string} source specifies the image to read on
         * @return {Promise}
         * @example
    ```javascript
    // dwtUrl: HTML5 Edition only
    reader.decode('dwt://dwt_trial_13000404/img?id=306159652&index=0&t=1502184632022').then(
        results=>{
        for(var i = 0; i < results.length; ++i){
            console.log(results[i].BarcodeText);
            // Confidence >= 30 is reliable
            console.log(results[i].LocalizationResult.ExtendedResultArray[0].Confidence);
        }
    });
    // dcsUrl
    reader.decode('dcs://dcs_trial_6110531/img?id=306159652&index=0&t=1502184632022').then(
        function(results){
        // ie6-7 does not support console.log
        var messageArr = [];
        for(var i = 0; i < results.length; ++i){
            messageArr.push(results[i].BarcodeText);
            // Confidence >= 30 is reliable
            messageArr.push(results[i].LocalizationResult.ExtendedResultArray[0].Confidence);
        }
        alert(messageArr.join(''));
    })['catch'](function(ex){
        // ie6-9 does not support '.catch(function(ex){...})'
        if(ex){alert(ex.message||ex);}
    });
    ```
     
         */
        decode(source: string): Promise<any>;

        /**
         * Read barcode from base64 string
         */
        decodeBase64String(base64String: string): Promise<any>;
        getAllLocalizationResults(): any;
        getAllParameterTemplateNames(): any;
        getRuntimeSettings(): RunTimeSetting;
        initRuntimeSettingsWithString(): any;
        outputSettingsToString(): any;
        resetRuntimeSettings(): void;
        updateRuntimeSettings(setting: RunTimeSetting): void;
    }
    
    let TaskQueue: TaskQueue;
    let dbrEnv: dbrEnv;
    /**dbrMasterPage20170526 */
    let dcp: {
        ifCheck64bitServiceFirst: boolean;
    };
    /**dwtDbrDemo20170613 */
    let initOrder: any;
    let lib: any;
    let managerEnv: any;
    let navInfo: any;
}
