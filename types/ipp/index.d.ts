/// <reference types="node" />

import { UrlWithStringQuery } from "url";

export interface ParsedBuffer {
    version: string;
    operation: PrinterOpertaion;
    statusCode: StatusCode;
    id: number;
    data: string;
}

export function parse(buf: Buffer): ParsedBuffer;
export function serialize(msg: object): Buffer;
export function request(
    opts: string | UrlWithStringQuery,
    buffer: Buffer,
    cb: (error: Error | null, response: ParsedBuffer) => void,
): void;
export const attributes: object;
export const attribute: object;
export const keywords: object;
export const versions: object;
export const enums: object;
export const tags: object;
export const operations: object;
export const statusCodes: object;

export class Printer {
    constructor(url: string, options?: PrinterOptions);

    execute(
        operation: PrinterOpertaion,
        message?: FullRequest,
        callback?: (error: Error, response: FullResponse) => void,
    ): void;
    execute(
        operation: "Print-Job",
        message: PrintJobRequest,
        callback?: (error: Error, response: PrintJobResponse) => void,
    ): void;
    execute(
        operation: "Print-URI",
        message: PrintURIRequest,
        callback?: (error: Error, response: PrintJobResponse) => void,
    ): void;
    execute(
        operation: "Validate-Job",
        message: ValidateJobRequest,
        callback?: (error: Error, response: SimpleResponse) => void,
    ): void;
    execute(
        operation: "Create-Job",
        message: CreateJobRequest,
        callback?: (error: Error, response: SimpleResponse) => void,
    ): void;
    execute(
        operation: "Get-Printer-Attributes",
        message: GetPrinterAttributesRequest,
        callback?: (error: Error, response: GetPrinterAttributesResponse) => void,
    ): void;
    execute(
        operation: "Get-Jobs",
        message: GetJobsRequest,
        callback?: (error: Error, response: GetJobsResponse) => void,
    ): void;
    execute(
        operation: "Pause-Printer" | "Resume-Printer" | "Purge-Jobs",
        message: SimpleRequest,
        callback?: (error: Error, response: SimpleResponse) => void,
    ): void;
    execute(
        operation: "Send-Document",
        message: SendDocumentRequest,
        callback?: (error: Error, response: SendDocumentResponse) => void,
    ): void;
    execute(
        operation: "Send-URI",
        message: SendURIRequest,
        callback?: (error: Error, response: SimpleResponse) => void,
    ): void;
    execute(
        operation: "Cancel-Job" | "Release-Job",
        message: CancelReleaseJobRequest,
        callback?: (error: Error, response: SimpleResponse) => void,
    ): void;
    execute(
        operation: "Get-Job-Attributes",
        message: GetJobAttributesRequest,
        callback?: (error: Error, response: GetJobAttributesResponse) => void,
    ): void;
    execute(
        operation: "Hold-Job" | "Restart-Job",
        message: HoldRestartJobRequest,
        callback?: (error: Error, response: SimpleResponse) => void,
    ): void;
}

export interface PrinterOptions {
    version?: IPPVersion | undefined;
    uri?: string | undefined;
    charset?: string | undefined;
    language?: string | undefined;
}

export interface FullRequest {
    "operation-attributes-tag"?: OperationAttributes | undefined;
    "job-attributes-tag"?: JobTemplateAttributes | undefined;
    data?: Buffer | undefined;
}

export interface FullResponse {
    version: IPPVersion;
    statusCode: StatusCode;
    id: number;
    "operation-attributes-tag": OperationAttributes;
    "unsupported-attributes"?: string[] | undefined;
    "job-attributes-tag"?: object | undefined;
    "printer-attributes-tag"?: PrinterDescription | undefined;
}

export interface SimpleRequest {
    "operation-attributes-tag": {
        "requesting-user-name": string;
        "attributes-charset"?: CharacterSet | undefined;
        "attributes-natural-language"?: string | undefined;
        "printer-uri"?: string | undefined;
    };
}

export interface SimpleResponse {
    version: IPPVersion;
    statusCode: StatusCode;
    id: number;
    "operation-attributes-tag": {
        "attributes-charset": CharacterSet;
        "attributes-natural-language": string;
        "detailed-status-message"?: string | undefined;
        "status-message"?: string | undefined;
    };
    "unsupported-attributes"?: string[] | undefined;
}

// PRINT-JOB

export interface PrintJobRequest {
    "operation-attributes-tag": {
        "requesting-user-name": string;
        "attributes-charset"?: CharacterSet | undefined;
        "attributes-natural-language"?: string | undefined;
        compression?: Compression | undefined;
        "document-format"?: MimeMediaType | undefined;
        "document-name"?: string | undefined;
        "document-natural-language"?: string | undefined;
        "ipp-attribute-fidelity"?: boolean | undefined;
        "job-impressions"?: number | undefined;
        "job-k-octets"?: number | undefined;
        "job-media-sheets"?: number | undefined;
        "job-name"?: string | undefined;
        "printer-uri"?: string | undefined;
    };
    "job-attributes-tag"?: JobTemplateAttributes | undefined;
    data: Buffer;
}

export interface PrintJobResponse {
    version: IPPVersion;
    statusCode: StatusCode;
    id: number;
    "operation-attributes-tag": {
        "attributes-charset": CharacterSet;
        "attributes-natural-language": string;
        "detailed-status-message"?: string | undefined;
        "status-message"?: string | undefined;
    };
    "unsupported-attributes"?: string[] | undefined;
    "job-attributes-tag": {
        "job-id": number;
        "job-state": JobState;
        "job-state-reasons": JobStateReasons[];
        "job-uri": string;
        "job-state-message"?: string | undefined;
        "number-of-intervening-jobs"?: number | undefined;
    };
}

// PRINT-URI
// Same response as PRINT-JOB

export interface PrintURIRequest {
    "operation-attributes-tag": {
        "attributes-charset"?: CharacterSet | undefined;
        "requesting-user-name": string;
        "attributes-natural-language"?: string | undefined;
        "document-format"?: MimeMediaType | undefined;
        "printer-uri"?: string | undefined;
        "job-name"?: string | undefined;
        "ipp-attribute-fidelity"?: boolean | undefined;
        "document-name"?: string | undefined;
        "document-natural-language"?: string | undefined;
        compression?: Compression | undefined;
        "job-k-octets"?: number | undefined;
        "job-impressions"?: number | undefined;
        "job-media-sheets"?: number | undefined;
        "document-uri": string;
    };
    "job-attributes-tag"?: JobTemplateAttributes | undefined;
}

// VALIDATE-JOB

export interface ValidateJobRequest {
    "operation-attributes-tag": {
        "attributes-charset"?: CharacterSet | undefined;
        "requesting-user-name": string;
        "attributes-natural-language"?: string | undefined;
        "document-format"?: MimeMediaType | undefined;
        "printer-uri"?: string | undefined;
        "job-name"?: string | undefined;
        "ipp-attribute-fidelity"?: boolean | undefined;
        "document-name"?: string | undefined;
        "document-natural-language"?: string | undefined;
        compression?: Compression | undefined;
        "job-k-octets"?: number | undefined;
        "job-impressions"?: number | undefined;
        "job-media-sheets"?: number | undefined;
    };
    "job-attributes-tag"?: JobTemplateAttributes | undefined;
}

// CREATE-JOB

export interface CreateJobRequest {
    "operation-attributes-tag": {
        "attributes-charset"?: CharacterSet | undefined;
        "requesting-user-name": string;
        "attributes-natural-language"?: string | undefined;
        "printer-uri"?: string | undefined;
        "job-name"?: string | undefined;
        "ipp-attribute-fidelity"?: boolean | undefined;
        "job-k-octets"?: number | undefined;
        "job-impressions"?: number | undefined;
        "job-media-sheets"?: number | undefined;
    };
    "job-attributes-tag"?: JobTemplateAttributes | undefined;
}

// GET-PRINTER-ATTRIBUTES

export interface GetPrinterAttributesRequest {
    "operation-attributes-tag": {
        "attributes-charset"?: CharacterSet | undefined;
        "requesting-user-name": string;
        "attributes-natural-language"?: string | undefined;
        "document-format"?: MimeMediaType | undefined;
        "requested-attributes"?: Array<RequestedPrinterAttributeGroups | keyof PrinterDescription> | undefined;
        "printer-uri"?: string | undefined;
    };
}

export interface GetPrinterAttributesResponse {
    version: IPPVersion;
    statusCode: StatusCode;
    id: number;
    "operation-attributes-tag": {
        "attributes-charset": CharacterSet;
        "attributes-natural-language": string;
        "detailed-status-message"?: string | undefined;
        "status-message"?: string | undefined;
    };
    "unsupported-attributes"?: string[] | undefined;
    "printer-attributes-tag": object;
}

// GET-JOBS

export interface GetJobsRequest {
    "operation-attributes-tag": {
        "attributes-charset"?: CharacterSet | undefined;
        "attributes-natural-language"?: string | undefined;
        "requesting-user-name": string;
        limit?: number | undefined;
        "requested-attributes"?:
            | Array<
                RequestedJobAttributeGroups | keyof JobTemplateAttributes | keyof JobStatusAttributes
            >
            | undefined;
        "which-jobs"?: WhichJobs | undefined;
        "my-jobs"?: boolean | undefined;
        "printer-uri"?: string | undefined;
    };
}

export interface GetJobsResponse {
    version: IPPVersion;
    statusCode: StatusCode;
    id: number;
    "operation-attributes-tag": {
        "attributes-charset": CharacterSet;
        "attributes-natural-language": string;
        "detailed-status-message"?: string | undefined;
        "status-message"?: string | undefined;
    };
    "unsupported-attributes"?: string[] | undefined;
    "job-attributes-tag"?: JobTemplateAttributes | JobTemplateAttributes[] | undefined;
}

// SEND-DOCUMENT

export interface SendDocumentRequest {
    "operation-attributes-tag": {
        "attributes-charset"?: CharacterSet | undefined;
        "attributes-natural-language"?: string | undefined;
        "printer-uri"?: string | undefined;
        "job-id"?: number | undefined;
        "job-uri"?: string | undefined;
        "requesting-user-name": string;
        "document-name"?: string | undefined;
        compression?: Compression | undefined;
        "document-format"?: MimeMediaType | undefined;
        "document-natural-language"?: string | undefined;
        "last-document": boolean;
    };
    data?: Buffer | undefined;
}

export interface SendDocumentResponse {
    version: IPPVersion;
    statusCode: StatusCode;
    id: number;
    "operation-attributes-tag": {
        "attributes-charset": CharacterSet;
        "attributes-natural-language": string;
        "detailed-status-message"?: string | undefined;
        "status-message"?: string | undefined;
    };
    "unsupported-attributes"?: string[] | undefined;
    "job-attributes-tag": {
        "job-id": number;
        "job-uri": string;
        "job-state": JobState;
        "job-state-reasons": JobStateReasons[];
        "job-state-message"?: string | undefined;
        "number-of-intervening-jobs"?: number | undefined;
    };
}

// SEND-URI

export interface SendURIRequest {
    "operation-attributes-tag": {
        "attributes-charset"?: CharacterSet | undefined;
        "attributes-natural-language"?: string | undefined;
        "printer-uri"?: string | undefined;
        "job-id"?: number | undefined;
        "job-uri"?: string | undefined;
        "requesting-user-name": string;
        "document-name"?: string | undefined;
        compression?: Compression | undefined;
        "document-format"?: MimeMediaType | undefined;
        "document-natural-language"?: string | undefined;
        "last-document": boolean;
        "document-uri": string;
    };
}

// CANCEL-/RELEASE-JOB

export interface CancelReleaseJobRequest {
    "operation-attributes-tag": {
        "attributes-charset"?: CharacterSet | undefined;
        "attributes-natural-language"?: string | undefined;
        "printer-uri"?: string | undefined;
        "job-id"?: number | undefined;
        "job-uri"?: string | undefined;
        "requesting-user-name": string;
        message?: string | undefined;
    };
}

// GET-JOB-ATTRIBUTES

export interface GetJobAttributesRequest {
    "operation-attributes-tag": {
        "attributes-charset"?: CharacterSet | undefined;
        "attributes-natural-language"?: string | undefined;
        "printer-uri"?: string | undefined;
        "job-id"?: number | undefined;
        "job-uri"?: string | undefined;
        "requested-attributes"?:
            | Array<
                RequestedJobAttributeGroups | keyof JobTemplateAttributes | keyof JobStatusAttributes
            >
            | undefined;
    };
}

export interface GetJobAttributesResponse {
    version: IPPVersion;
    statusCode: StatusCode;
    id: number;
    "operation-attributes-tag": {
        "attributes-charset": CharacterSet;
        "attributes-natural-language": string;
        "detailed-status-message"?: string | undefined;
        "status-message"?: string | undefined;
    };
    "unsupported-attributes"?: string[] | undefined;
    "job-attributes-tag": JobTemplateAttributes;
}

// HOLD-/RESTARTJOB

export interface HoldRestartJobRequest {
    "operation-attributes-tag": {
        "attributes-charset"?: CharacterSet | undefined;
        "attributes-natural-language"?: string | undefined;
        "printer-uri"?: string | undefined;
        "job-id"?: number | undefined;
        "job-uri"?: string | undefined;
        "requesting-user-name": string;
        message?: string | undefined;
        "job-hold-until"?: JobHoldUntil | undefined;
    };
}

export interface OperationAttributes {
    "attributes-charset"?: string | undefined;
    "attributes-natural-language"?: string | undefined;
    "charge-info-message"?: string | undefined;
    compression?: Compression | undefined;
    "compression-accepted"?: Compression[] | undefined;
    "destination-accesses"?: DestionationAccesses[] | undefined;
    "detailed-status-message"?: string | undefined;
    "document-access"?: DocumentAccess | undefined;
    "document-access-error"?: string | undefined;
    "document-charset"?: string | undefined;
    "document-data-get-interval"?: number | undefined;
    "document-data-wait"?: boolean | undefined;
    "document-digital-signature"?: DocumentDigitalSignature | undefined;
    "document-format"?: MimeMediaType | undefined;
    "document-format-accepted"?: MimeMediaType[] | undefined;
    "document-format-details"?: DocumentFormatDetails | undefined;
    "document-message"?: string | undefined;
    "document-metadata"?: string[] | undefined;
    "document-name"?: string | undefined;
    "document-natural-language"?: string | undefined;
    "document-number"?: number | undefined;
    "document-password"?: string | undefined;
    "document-preprocessed"?: boolean | undefined;
    "fetch-status-code"?: StatusCode | undefined; // Except "successful-ok"
    "fetch-status-message"?: string | undefined;
    "first-index"?: number | undefined;
    "identify-actions"?: IdentifyActions[] | undefined;
    "input-attributes"?: InputAttributes | undefined;
    "ipp-attribute-fidelity"?: boolean | undefined;
    "job-authorization-uri"?: string | undefined;
    "job-hold-until"?: JobHoldUntil | undefined;
    "job-hold-until-time"?: string | undefined;
    "job-id"?: number | undefined;
    "job-ids"?: number[] | undefined;
    "job-impressions"?: number | undefined;
    "job-impressions-col"?: Impressions | undefined;
    "job-impressions-estimated"?: number | undefined;
    "job-k-octets"?: number | undefined;
    "job-mandatory-attributes"?: Array<keyof JobTemplateAttributes> | undefined;
    "job-media-sheets"?: number | undefined;
    "job-media-sheets-col"?: MediaSheets | undefined;
    "job-message-from-operator"?: string | undefined;
    "job-name"?: string | undefined;
    "job-pages"?: number | undefined;
    "job-pages-col"?: Pages | undefined;
    "job-password"?: string | undefined;
    "job-password-encryption"?: JobPasswordEncryption | undefined;
    "job-state"?: JobState | undefined;
    "job-state-message"?: string | undefined;
    "job-state-reasons"?: JobStateReasons[] | undefined;
    "job-uri"?: string | undefined;
    "last-document"?: boolean | undefined;
    limit?: number | undefined;
    message?: string | undefined;
    "my-jobs"?: boolean | undefined;
    "notify-get-interval"?: number | undefined;
    "notify-printer-ids"?: number[] | undefined;
    "notify-resource-id"?: number | undefined;
    "notify-sequence-numbers"?: number[] | undefined;
    "notify-subscription-ids"?: number[] | undefined;
    "notify-wait"?: boolean | undefined;
    "original-requesting-user-name"?: string | undefined;
    "output-attributes"?: OutputAttributes | undefined;
    "output-device-job-states"?: string[] | undefined;
    "output-device-uuid"?: string | undefined;
    "preferred-attributes"?: object | undefined;
    "printer-geo-location"?: string | undefined;
    "printer-id"?: number | undefined;
    "printer-ids"?: number[] | undefined;
    "printer-location"?: string | undefined;
    "printer-message-from-operator"?: string | undefined;
    "printer-service-type"?: PrinterServiceType[] | undefined;
    "printer-up-time"?: number | undefined;
    "printer-uri"?: string | undefined;
    "printer-xri-requested"?: PrinterXri[] | undefined;
    "profile-uri-actual"?: string | undefined;
    "requested-attributes"?:
        | Array<
            | RequestedJobAttributeGroups
            | RequestedPrinterAttributeGroups
            | keyof JobTemplateAttributes
            | keyof JobStatusAttributes
            | keyof PrinterDescription
        >
        | undefined;
    "requesting-user-name"?: string | undefined;
    "requesting-user-uri"?: string | undefined;
    "resource-format"?: MimeMediaType | undefined;
    "resource-format-accepted"?: MimeMediaType[] | undefined;
    "resource-formats"?: MimeMediaType[] | undefined;
    "resource-id"?: number | undefined;
    "resource-ids"?: number[] | undefined;
    "resource-k-octets"?: number | undefined;
    "resource-natural-language"?: string | undefined;
    "resource-patches"?: string | undefined;
    "resource-signature"?: string[] | undefined;
    "resource-states"?: ResourceState[] | undefined;
    "resource-string-version"?: string | undefined;
    "resource-type"?: ResourceType | undefined;
    "resource-types"?: ResourceType[] | undefined;
    "resource-version"?: string | undefined;
    "restart-get-interval"?: number | undefined;
    "status-message"?: string | undefined;
    "system-uri"?: string | undefined;
    "which-jobs"?: WhichJobs | undefined;
    "which-printers"?: string | undefined;
}

export interface JobDescriptionAttributes {
    "current-page-order"?: PageOrder | undefined;
    "document-metadata"?: string[] | undefined;
    "job-charge-info"?: string | undefined;
    "job-mandatory-attributes"?: Array<keyof JobTemplateAttributes> | undefined;
    "job-message-from-operator"?: string | undefined;
    "job-message-to-operator-actual"?: string[] | undefined;
    "job-name"?: string | undefined;
    "job-save-printer-make-and-model"?: string | undefined;
}

export interface JobTemplateAttributes {
    "chamber-humidity"?: number | undefined;
    "chamber-temperature"?: number | undefined;
    "confirmation-sheet-print"?: boolean | undefined;
    copies?: number | undefined;
    "cover-back"?: Cover | undefined;
    "cover-front"?: Cover | undefined;
    "cover-sheet-info"?: CoverSheetInfo | undefined;
    "destination-uris"?: DestinationUris[] | undefined;
    finishings?: Finishings[] | undefined;
    "finishings-col"?: FinishingsInterface[] | undefined;
    "font-name-requested"?: string | undefined;
    "font-size-requested"?: number | undefined;
    "force-front-side"?: number[] | undefined;
    "imposition-template"?: ImpositionTemplate | undefined;
    "insert-sheet"?: InsertSheet[] | undefined;
    "job-account-id"?: string | undefined;
    "job-account-type"?: JobAccountType | undefined;
    "job-accounting-sheets"?: JobAccontingSheets | undefined;
    "job-accounting-user-id"?: string | undefined;
    "job-cancel-after"?: number | undefined;
    "job-copies"?: number | undefined;
    "job-cover-back"?: Cover | undefined;
    "job-cover-front"?: Cover | undefined;
    "job-delay-output-until"?: JobDelayOutputUntil | undefined;
    "job-delay-output-until-time"?: string | undefined;
    "job-error-action"?: JobErrorAction | undefined;
    "job-error-sheet"?: JobErrorSheet | undefined;
    "job-finishings"?: Finishings[] | undefined;
    "job-finishings-col"?: FinishingsInterface | undefined;
    "job-hold-until"?: JobHoldUntil | undefined;
    "job-hold-until-time"?: string | undefined;
    "job-message-to-operator"?: string | undefined;
    "job-pages-per-set"?: number | undefined;
    "job-phone-number"?: string | undefined;
    "job-priority"?: number | undefined;
    "job-recipient-name"?: string | undefined;
    "job-retain-until"?: JobRetainUntil | undefined;
    "job-retain-until-interval"?: number | undefined;
    "job-retain-until-time"?: string | undefined;
    "job-save-disposition"?: JobSaveDisposition | undefined;
    "job-sheet-message"?: string | undefined;
    "job-sheets"?: JobSheets | undefined;
    "job-sheets-col"?: JobSheetsInterface | undefined;
    "materials-col"?: Materials[] | undefined;
    media?: Media | undefined;
    "media-col"?: MediaInterface | undefined;
    "media-input-tray-check"?: MediaIntputTray | undefined;
    "multiple-document-handling"?: MultipleDocumentHandling | undefined;
    "multiple-object-handling"?: MultipleObjectHandling | undefined;
    "number-of-retries"?: number | undefined;
    "number-up"?: number | undefined;
    "orientation-requested"?: OrientationRequested | undefined;
    "output-bin"?: OutputBin | undefined;
    "output-device"?: string | undefined;
    overrides?: Overrides[] | undefined;
    "page-delivery"?: PageDelivery | undefined;
    "page-order-received"?: PageOrder | undefined;
    "page-ranges"?: string | undefined;
    "pages-per-subset"?: number[] | undefined;
    "pclm-source-resolution"?: Resolution | undefined;
    "pdl-init-file"?: PdlInitFile | undefined;
    "platform-temperature"?: number | undefined;
    "presentation-direction-number-up"?: PresentationDirectionNumberUp | undefined;
    "print-accuracy"?: PrintAccuracy | undefined;
    "print-base"?: PrintBase | undefined;
    "print-color-mode"?: PrintColorMode | undefined;
    "print-content-optimize"?: PrintContentOptimize | undefined;
    "print-objects"?: PrintObjects[] | undefined;
    "print-quality"?: PrintQuality | undefined;
    "print-rendering-intent"?: PrintRenderingIntent | undefined;
    "print-scaling"?: PrintScaling | undefined;
    "print-supports"?: PrintSupports | undefined;
    "printer-resolution"?: Resolution | undefined;
    "proof-print"?: ProofPrint | undefined;
    "retry-interval"?: number | undefined;
    "retry-time-out"?: number | undefined;
    "separator-sheets"?: SeparatorSheets | undefined;
    sides?: Sides | undefined;
    "x-image-position"?: XImagePosition | undefined;
    "x-image-shift"?: number | undefined;
    "x-side1-image-shift"?: number | undefined;
    "x-side2-image-shift"?: number | undefined;
    "y-image-position"?: YImagePosition | undefined;
    "y-image-shift"?: number | undefined;
    "y-side1-image-shift"?: number | undefined;
    "y-side2-image-shift"?: number | undefined;
}

export interface JobStatusAttributes {
    "attributes-charset"?: string | undefined;
    "attributes-natural-language"?: string | undefined;
    "chamber-humidity-actual"?: number[] | undefined;
    "chamber-temperature-actual"?: number[] | undefined;
    "compression-supplied"?: Compression | undefined;
    "copies-actual"?: number[] | undefined;
    "cover-back-actual"?: Cover[] | undefined;
    "cover-front-actual"?: Cover[] | undefined;
    "date-time-at-completed"?: string | undefined;
    "date-time-at-creation"?: string | undefined;
    "date-time-at-processing"?: string | undefined;
    "destination-statuses"?: DestinationStatuses[] | undefined;
    "document-charset-supplied"?: string | undefined;
    "document-digital-signature-supplied"?: DocumentDigitalSignature | undefined;
    "document-format-details-supplied"?: DocumentFormatDetails | undefined;
    "document-format-ready"?: MimeMediaType[] | undefined;
    "document-format-supplied"?: MimeMediaType | undefined;
    "document-format-version-supplied"?: string | undefined;
    "document-message-supplied"?: string | undefined;
    "document-name-supplied"?: string | undefined;
    "document-natural-language-supplied"?: string | undefined;
    "errors-count"?: number | undefined;
    "finishings-actual"?: Finishings[] | undefined;
    "finishings-col-actual"?: FinishingsInterface[] | undefined;
    "force-front-side-actual"?: number[][] | undefined;
    "imposition-template-actual"?: ImpositionTemplate[] | undefined;
    "input-attributes-actual"?: InputAttributes | undefined;
    "insert-sheet-actual"?: InsertSheet[] | undefined;
    "job-account-id-actual"?: string[] | undefined;
    "job-account-type-actual"?: JobAccountType | undefined;
    "job-accounting-sheets-actual"?: JobAccontingSheets[] | undefined;
    "job-accounting-user-id-actual"?: string[] | undefined;
    "job-attribute-fidelity"?: boolean | undefined;
    "job-detailed-status-messages"?: string[] | undefined;
    "job-document-access-errors"?: string[] | undefined;
    "job-error-sheet-actual"?: JobErrorSheet[] | undefined;
    "job-hold-until-actual"?: JobHoldUntil[] | undefined;
    "job-id"?: number | undefined;
    "job-impressions"?: number | undefined;
    "job-impressions-col"?: Impressions | undefined;
    "job-impressions-completed"?: number | undefined;
    "job-impressions-completed-col"?: Impressions | undefined;
    "job-k-octets"?: number | undefined;
    "job-k-octets-processed"?: number | undefined;
    "job-media-sheets"?: number | undefined;
    "job-media-sheets-col"?: MediaSheets | undefined;
    "job-media-sheets-completed"?: number | undefined;
    "job-media-sheets-completed-col"?: Impressions | undefined;
    "job-more-info"?: string | undefined;
    "job-originating-user-name"?: string | undefined;
    "job-originating-user-uri"?: string | undefined;
    "job-pages"?: number | undefined;
    "job-pages-col"?: Pages | undefined;
    "job-pages-completed"?: number | undefined;
    "job-pages-completed-col"?: Pages | undefined;
    "job-pages-completed-current-copy"?: number | undefined;
    "job-printer-up-time"?: number | undefined;
    "job-printer-uri"?: string | undefined;
    "job-priority-actual"?: number[] | undefined;
    "job-resource-ids"?: number[] | undefined;
    "job-sheet-message-actual"?: number[] | undefined;
    "job-sheets-actual"?: JobSheets[] | undefined;
    "job-sheets-col-actual"?: JobSheetsInterface[] | undefined;
    "job-state"?: JobState | undefined;
    "job-state-message"?: string | undefined;
    "job-state-reasons"?: JobStateReasons[] | undefined;
    "job-uri"?: string | undefined;
    "job-uuid"?: string | undefined;
    "materials-col-actual"?: Materials[] | undefined;
    "media-actual"?: string[] | undefined;
    "media-col-actual"?: MediaInterface[] | undefined;
    "media-input-tray-check-actual"?: string[] | undefined;
    "multiple-document-handling-actual"?: MultipleDocumentHandling[] | undefined;
    "multiple-object-handling-actual"?: MultipleObjectHandling | undefined;
    "number-of-documents"?: number | undefined;
    "number-of-intervening-jobs"?: number | undefined;
    "number-up-actual"?: number[] | undefined;
    "orientation-requested-actual"?: OrientationRequested[] | undefined;
    "original-requesting-user-name"?: string | undefined;
    "output-attributes-actual"?: OutputAttributes | undefined;
    "output-bin-actual"?: OutputBin[] | undefined;
    "output-device-actual"?: string[] | undefined;
    "output-device-assigned"?: string | undefined;
    "output-device-job-state"?: JobState | undefined;
    "output-device-job-state-message"?: string | undefined;
    "output-device-job-state-reasons"?: JobStateReasons[] | undefined;
    "output-device-uuid-assigned"?: string | undefined;
    "overrides-actual"?: Overrides[] | undefined;
    "page-delivery-actual"?: PageDelivery[] | undefined;
    "page-order-received-actual"?: PageOrder[] | undefined;
    "page-ranges-actual"?: number[] | undefined;
    "platform-temperature-actual"?: number[] | undefined;
    "presentation-direction-number-up-actual"?: PresentationDirectionNumberUp[] | undefined;
    "print-accuracy-actual"?: PrintAccuracy | undefined;
    "print-base-actual"?: PrintBase[] | undefined;
    "print-color-mode-actual"?: PrintColorMode[] | undefined;
    "print-content-optimize-actual"?: PrintContentOptimize[] | undefined;
    "print-objects-actual"?: PrintObjects[] | undefined;
    "print-quality-actual"?: PrintQuality[] | undefined;
    "print-rendering-intent-actual"?: PrintRenderingIntent[] | undefined;
    "print-supports-actual"?: PrintSupports[] | undefined;
    "printer-resolution-actual"?: Resolution[] | undefined;
    "separator-sheets-actual"?: SeparatorSheets[] | undefined;
    "sheet-collate-actual"?: Array<"collated" | "uncollated"> | undefined;
    "sides-actual"?: Sides[] | undefined;
    "time-at-completed"?: number | undefined;
    "time-at-creation"?: number | undefined;
    "time-at-processing"?: number | undefined;
    "warnings-count"?: number | undefined;
    "x-image-position-actual"?: XImagePosition[] | undefined;
    "x-image-shift-actual"?: number[] | undefined;
    "x-side1-image-shift-actual"?: number[] | undefined;
    "x-side2-image-shift-actual"?: number[] | undefined;
    "y-image-position-actual"?: YImagePosition[] | undefined;
    "y-image-shift-actual"?: number[] | undefined;
    "y-side1-image-shift-actual"?: number[] | undefined;
    "y-side2-image-shift-actual"?: number[] | undefined;
}

export interface PrinterDescription {
    "accuracy-units-supported"?: AccuracyUnits[] | undefined;
    "baling-type-supported"?: BalingType[] | undefined;
    "baling-when-supported"?: BalingWhen[] | undefined;
    "binding-reference-edge-supported"?: ReferenceEdge[] | undefined;
    "binding-type-supported"?: BindingType[] | undefined;
    "chamber-humidity-default"?: number | undefined;
    "chamber-humidity-supported"?: boolean | undefined;
    "chamber-temperature-default"?: number | undefined;
    "chamber-temperature-supported"?: Array<number | string> | undefined;
    "charset-configured"?: string | undefined;
    "charset-supported"?: string[] | undefined;
    "coating-sides-supported"?: FinishingSides[] | undefined;
    "coating-type-supported"?: CoatingType[] | undefined;
    "color-supported"?: boolean | undefined;
    "compression-supported"?: Compression[] | undefined;
    "confirmation-sheet-print-default"?: boolean | undefined;
    "copies-default"?: number | undefined;
    "copies-supported"?: number[] | undefined;
    "cover-back-default"?: Cover | undefined;
    "cover-back-supported"?: string[] | undefined;
    "cover-front-default"?: Cover | undefined;
    "cover-front-supported"?: string[] | undefined;
    "cover-sheet-info-default"?: CoverSheetInfo | undefined;
    "cover-sheet-info-supported"?: string[] | undefined;
    "covering-name-supported"?: string[] | undefined;
    "destination-accesses-supported"?: string[] | undefined;
    "destination-uri-ready"?: DestinationUriReady[] | undefined;
    "destination-uri-schemes-supported"?: UriSchemes[] | undefined;
    "destination-uris-supported"?: string[] | undefined;
    "document-access-supported"?: string[] | undefined;
    "document-charset-default"?: string | undefined;
    "document-charset-supported"?: string[] | undefined;
    "document-creation-attributes-supported"?: string[] | undefined;
    "document-digital-signature-default"?: DocumentDigitalSignature | undefined;
    "document-digital-signature-supported"?: DocumentDigitalSignature[] | undefined;
    "document-format-default"?: MimeMediaType | undefined;
    "document-format-details-default"?: DocumentFormatDetails | undefined;
    "document-format-details-supported"?: string[] | undefined;
    "document-format-supported"?: MimeMediaType[] | undefined;
    "document-format-version-default"?: string | undefined;
    "document-format-version-supported"?: string[] | undefined;
    "document-natural-language-default"?: string | undefined;
    "document-natural-language-supported"?: string[] | undefined;
    "document-password-supported"?: number | undefined;
    "document-privacy-attributes"?: string[] | undefined;
    "document-privacy-scope"?: "all" | "default" | "none" | "owner" | undefined;
    "feed-orientation-default"?: FeedOrientation | undefined;
    "feed-orientation-supported"?: FeedOrientation[] | undefined;
    "fetch-document-attributes-supported"?: string[] | undefined;
    "finishing-template-supported"?: Finishings[] | undefined;
    "finishings-col-database"?: FinishingsInterface[] | undefined;
    "finishings-col-default"?: FinishingsInterface | undefined;
    "finishings-col-ready"?: FinishingsInterface[] | undefined;
    "finishings-col-supported"?: Array<keyof FinishingsInterface> | undefined;
    "finishings-default"?: Finishings[] | undefined;
    "finishings-ready"?: Finishings[] | undefined;
    "finishings-supported"?: Finishings[] | undefined;
    "folding-direction-supported"?: FoldingDirection[] | undefined;
    "folding-offset-supported"?: Array<number | string> | undefined;
    "folding-reference-edge-supported"?: ReferenceEdge[] | undefined;
    "font-name-requested-default"?: string | undefined;
    "font-name-requested-supported"?: string[] | undefined;
    "font-size-requested-default"?: number | undefined;
    "font-size-requested-supported"?: string[] | undefined;
    "from-name-supported"?: number | undefined;
    "generated-natural-language-supported"?: string[] | undefined;
    "identify-actions-default"?: IdentifyActions[] | undefined;
    "identify-actions-supported"?: IdentifyActions[] | undefined;
    "imposition-template-default"?: ImpositionTemplate | undefined;
    "imposition-template-supported"?: ImpositionTemplate[] | undefined;
    "input-attributes-default"?: InputAttributes | undefined;
    "input-attributes-supported"?: string[] | undefined;
    "input-color-mode-supported"?: InputColorMode[] | undefined;
    "input-content-type-supported"?: InputContentType[] | undefined;
    "input-film-scan-mode-supported"?: InputFilmScanMode[] | undefined;
    "input-media-supported"?: Array<MediaName | MediaSizeName> | undefined;
    "input-orientation-requested-supported"?: OrientationRequested[] | undefined;
    "input-quality-supported"?: PrintQuality[] | undefined;
    "input-resolution-supported"?: Resolution[] | undefined;
    "input-scan-regions-supported"?: InputScanRegion | undefined;
    "input-sides-supported"?: Sides[] | undefined;
    "input-source-supported"?: InputSource[] | undefined;
    "insert-after-page-number-supported"?: string | undefined;
    "insert-count-supported"?: string | undefined;
    "insert-sheet-default"?: InsertSheet[] | undefined;
    "insert-sheet-supported"?: Array<keyof InsertSheet> | undefined;
    "ipp-features-supported"?:
        | Array<
            | "document-object"
            | "faxout"
            | "icc-color-matching"
            | "infrastructure-printer"
            | "ipp-3d"
            | "ipp-everywhere"
            | "job-save"
            | "none"
            | "page-overrides"
            | "proof-print"
            | "resource-object"
            | "scan"
            | "subscription-object"
            | "system-object"
        >
        | undefined;
    "ipp-versions-supported"?: IPPVersion[] | undefined;
    "ippget-event-life"?: number | undefined;
    "job-account-id-default"?: string | undefined;
    "job-account-id-supported"?: boolean | undefined;
    "job-account-type-default"?: JobAccountType | undefined;
    "job-account-type-supported"?: JobAccountType[] | undefined;
    "job-accounting-sheets-default"?: JobAccontingSheets | undefined;
    "job-accounting-sheets-supported"?: string[] | undefined;
    "job-accounting-user-id-default"?: string | undefined;
    "job-accounting-user-id-supported"?: boolean | undefined;
    "job-authorization-uri-supported"?: boolean | undefined;
    "job-cancel-after-default"?: number | undefined;
    "job-cancel-after-supported"?: string | undefined;
    "job-constraints-supported"?: JobConstraintsSupported[] | undefined;
    "job-creation-attributes-supported"?: Array<keyof JobTemplateAttributes> | undefined;
    "job-delay-output-until-default"?: JobDelayOutputUntil | undefined;
    "job-delay-output-until-interval-supported"?: string | undefined;
    "job-delay-output-until-supported"?: JobDelayOutputUntil[] | undefined;
    "job-delay-output-until-time-supported"?: string | undefined;
    "job-destination-spooling-supported"?: string | undefined;
    "job-error-action-default"?: JobErrorAction | undefined;
    "job-error-action-supported"?: JobErrorAction[] | undefined;
    "job-error-sheet-default"?: JobErrorSheet | undefined;
    "job-error-sheet-supported"?: string[] | undefined;
    "job-history-attributes-configured"?: string[] | undefined;
    "job-history-attributes-supported"?: string[] | undefined;
    "job-history-interval-configured"?: number | undefined;
    "job-history-interval-supported"?: string | undefined;
    "job-hold-until-default"?: JobHoldUntil | undefined;
    "job-hold-until-supported"?: JobHoldUntil[] | undefined;
    "job-hold-until-time-supported"?: string | undefined;
    "job-ids-supported"?: boolean | undefined;
    "job-impressions-supported"?: string | undefined;
    "job-k-octets-supported"?: string | undefined;
    "job-mandatory-attributes-supported"?: boolean | undefined;
    "job-media-sheets-supported"?: string | undefined;
    "job-message-to-operator-default"?: string | undefined;
    "job-message-to-operator-supported"?: boolean | undefined;
    "job-pages-per-set-supported"?: boolean | undefined;
    "job-password-encryption-supported"?: JobPasswordEncryption[] | undefined;
    "job-password-length-supported"?: string | undefined;
    "job-password-repertoire-configured"?: JobPasswordRepertoire | undefined;
    "job-password-repertoire-supported"?: JobPasswordRepertoire[] | undefined;
    "job-password-supported"?: number | undefined;
    "job-phone-number-default"?: string | undefined;
    "job-phone-number-supported"?: boolean | undefined;
    "job-presets-supported"?: JobPresetsSupported[] | undefined;
    "job-priority-default"?: number | undefined;
    "job-priority-supported"?: number | undefined;
    "job-privacy-attributes"?: string[] | undefined;
    "job-privacy-scope"?: "all" | "default" | "none" | "owner" | undefined;
    "job-recipient-name-default"?: string | undefined;
    "job-recipient-name-supported"?: boolean | undefined;
    "job-resolvers-supported"?: JobResolversSupported[] | undefined;
    "job-retain-until-default"?: JobRetainUntil | undefined;
    "job-retain-until-interval-supported"?: string | undefined;
    "job-retain-until-supported"?: JobRetainUntil[] | undefined;
    "job-retain-until-time-supported"?: string | undefined;
    "job-sheet-message-default"?: string | undefined;
    "job-sheet-message-supported"?: boolean | undefined;
    "job-sheets-col-default"?: JobSheetsInterface | undefined;
    "job-sheets-col-supported"?: string[] | undefined;
    "job-sheets-default"?: JobSheets | undefined;
    "job-sheets-supported"?: JobSheets[] | undefined;
    "job-spooling-supported"?: "automatic" | "spool" | "stream" | undefined;
    "job-triggers-supported"?: JobTriggersSupported | undefined;
    "jpeg-features-supported"?:
        | Array<
            "arithmetic" | "cmyk" | "deep" | "hierarchical" | "icc" | "lossless" | "none" | "progressive"
        >
        | undefined;
    "jpeg-k-octets-supported"?: string | undefined;
    "jpeg-x-dimension-supported"?: string | undefined;
    "jpeg-y-dimension-supported"?: string | undefined;
    "laminating-sides-supported"?: FinishingSides[] | undefined;
    "laminating-type-supported"?: LaminatingType[] | undefined;
    "logo-uri-formats-supported"?: MimeMediaType[] | undefined;
    "logo-uri-schemes-supported"?: UriSchemes[] | undefined;
    "material-amount-units-supported"?: MaterialAmountUnits[] | undefined;
    "material-diameter-supported"?: Array<number | string> | undefined;
    "material-nozzle-diameter-supported"?: Array<number | string> | undefined;
    "material-purpose-supported"?: MaterialPurpose[] | undefined;
    "material-rate-supported"?: Array<number | string> | undefined;
    "material-rate-units-supported"?: MaterialRateUnits[] | undefined;
    "material-shell-thickness-supported"?: Array<number | string> | undefined;
    "material-temperature-supported"?: Array<number | string> | undefined;
    "material-type-supported"?: MaterialType[] | undefined;
    "materials-col-database"?: Materials[] | undefined;
    "materials-col-default"?: Materials[] | undefined;
    "materials-col-ready"?: Materials[] | undefined;
    "materials-col-supported"?: Array<keyof Materials> | undefined;
    "max-materials-col-supported"?: number | undefined;
    "max-page-ranges-supported"?: number | undefined;
    "max-save-info-supported"?: number | undefined;
    "max-stitching-locations-supported"?: number | undefined;
    "media-back-coating-supported"?: MediaCoating[] | undefined;
    "media-bottom-margin-supported"?: number[] | undefined;
    "media-col-database"?: MediaInterface[] | undefined;
    // "media-col-database media-source-properties collection;
    // "media-col-database media-source-properties media-source-feed-direction"?: string;
    // "media-col-database media-source-properties media-source-feed-orientation"?: string;
    "media-col-default"?: MediaInterface | undefined;
    "media-col-ready"?: MediaInterface[] | undefined;
    // "media-col-ready media-source-properties collection;
    // "media-col-ready media-source-properties media-source-feed-direction"?: string;
    // "media-col-ready media-source-properties media-source-feed-orientation"?: string;
    "media-col-supported"?: MediaColSupported[] | undefined;
    "media-color-supported"?: MediaColor[] | undefined;
    "media-default"?: Media | undefined;
    "media-front-coating-supported"?: MediaCoating[] | undefined;
    "media-grain-supported"?: MediaGrain[] | undefined;
    "media-hole-count-supported"?: string[] | undefined;
    "media-key-supported"?: Array<MediaSizeName | MediaName> | undefined;
    "media-left-margin-supported"?: number[] | undefined;
    "media-order-count-supported"?: string[] | undefined;
    "media-pre-printed-supported"?: MediaPrePrinted[] | undefined;
    "media-ready"?: Array<MediaSizeName | MediaName> | undefined;
    "media-recycled-supported"?: MediaPrePrinted[] | undefined;
    "media-right-margin-supported"?: number[] | undefined;
    "media-size-supported"?: MediaSizeSupported | undefined;
    "media-source-supported"?: MediaSource[] | undefined;
    "media-supported"?: Media[] | undefined;
    "media-thickness-supported"?: string | undefined;
    "media-tooth-supported"?: MediaTooth[] | undefined;
    "media-top-margin-supported"?: number[] | undefined;
    "media-type-supported"?: MediaType[] | undefined;
    "media-weight-metric-supported"?: string[] | undefined;
    "message-supported"?: number | undefined;
    "multiple-destination-uris-supported"?: boolean | undefined;
    "multiple-document-handling-default"?: MultipleDocumentHandling | undefined;
    "multiple-document-handling-supported"?: MultipleDocumentHandling[] | undefined;
    "multiple-document-jobs-supported"?: boolean | undefined;
    "multiple-object-handling-default"?: MultipleObjectHandling | undefined;
    "multiple-object-handling-supported"?: MultipleObjectHandling[] | undefined;
    "multiple-operation-time-out"?: number | undefined;
    "multiple-operation-time-out-action"?: "abort-job" | "hold-job" | "process-job" | undefined;
    "natural-language-configured"?: string | undefined;
    "notify-attributes-supported"?: string[] | undefined;
    "notify-events-default"?: NotifyEvents[] | undefined;
    "notify-events-supported"?: NotifyEvents[] | undefined;
    "notify-lease-duration-default"?: number | undefined;
    "notify-lease-duration-supported"?: Array<number | string> | undefined;
    "notify-pull-method-supported"?: Array<"ippget"> | undefined;
    "notify-schemes-supported"?: UriSchemes[] | undefined;
    "number-of-retries-default"?: number | undefined;
    "number-of-retries-supported"?: string | undefined;
    "number-up-default"?: number | undefined;
    "number-up-supported"?: number | string | undefined;
    "oauth-authorization-scope"?: string[] | undefined;
    "oauth-authorization-server-uri"?: string | undefined;
    "operations-supported"?: string[] | undefined;
    "organization-name-supported"?: number | undefined;
    "orientation-requested-default"?: OrientationRequested | undefined;
    "orientation-requested-supported"?: OrientationRequested[] | undefined;
    "output-attributes-default"?: OutputAttributes | undefined;
    "output-attributes-supported"?: string[] | undefined;
    "output-bin-default"?: OutputBin | undefined;
    "output-bin-supported"?: OutputBin[] | undefined;
    "output-device-supported"?: string[] | undefined;
    "output-device-uuid-supported"?: string[] | undefined;
    "overrides-supported"?: Overrides[] | undefined;
    "page-delivery-default"?: PageDelivery | undefined;
    "page-delivery-supported"?: PageDelivery[] | undefined;
    "page-order-received-default"?: PageOrder | undefined;
    "page-order-received-supported"?: PageOrder[] | undefined;
    "page-ranges-supported"?: boolean | undefined;
    "pages-per-subset-supported"?: boolean | undefined;
    "parent-printers-supported"?: string[] | undefined;
    "pclm-raster-back-side"?: "flipped" | "normal" | "rotated" | undefined;
    "pclm-source-resolution-supported"?: Resolution[] | undefined;
    "pclm-strip-height-preferred"?: number[] | undefined;
    "pclm-strip-height-supported"?: number | undefined;
    "pdf-features-supported"?: Array<"prc" | "u3d"> | undefined;
    "pdf-k-octets-supported"?: string | undefined;
    "pdf-versions-supported"?:
        | Array<
            | "adobe-1.3"
            | "adobe-1.4"
            | "adobe-1.5"
            | "adobe-1.6"
            | "iso-15930-1_2001"
            | "iso-15930-3_2002"
            | "iso-15930-4_2003"
            | "iso-15930-6_2003"
            | "iso-15930-7_2010"
            | "iso-15930-8_2010"
            | "iso-16612-2_2010"
            | "iso-19005-1_2005"
            | "iso-19005-2_2011"
            | "iso-19005-3_2012"
            | "iso-32000-1_2008"
            | "none"
            | "pwg-5102.3"
        >
        | undefined;
    "pdl-init-file-default"?: PdlInitFile | undefined;
    "pdl-init-file-entry-supported"?: string[] | undefined;
    "pdl-init-file-location-supported"?: string[] | undefined;
    "pdl-init-file-name-subdirectory-supported"?: boolean | undefined;
    "pdl-init-file-name-supported"?: string[] | undefined;
    "pdl-init-file-supported"?:
        | Array<"pdl-init-file-entry" | "pdl-init-file-location" | "pdl-init-file-name">
        | undefined;
    "pdl-override-guaranteed-supported"?: string[] | undefined;
    "pdl-override-supported"?: "attempted" | "guaranteed" | "not-attempted" | undefined;
    "platform-shape"?: string | undefined;
    "platform-temperature-default"?: number | undefined;
    "platform-temperature-supported"?: Array<number | string> | undefined;
    "preferred-attributes-supported"?: boolean | undefined;
    "presentation-direction-number-up-default"?: PresentationDirectionNumberUp | undefined;
    "presentation-direction-number-up-supported"?: PresentationDirectionNumberUp[] | undefined;
    "print-accuracy-supported"?: PrintAccuracySupported | undefined;
    "print-base-default"?: PrintBase | undefined;
    "print-base-supported"?: PrintBase[] | undefined;
    "print-color-mode-default"?: PrintColorMode | undefined;
    "print-color-mode-supported"?: PrintColorMode[] | undefined;
    "print-content-optimize-default"?: PrintContentOptimize | undefined;
    "print-content-optimize-supported"?: PrintContentOptimize[] | undefined;
    "print-objects-supported"?: Array<keyof PrintObjects> | undefined;
    "print-quality-default"?: PrintQuality | undefined;
    "print-quality-supported"?: PrintQuality[] | undefined;
    "print-rendering-intent-default"?: PrintRenderingIntent | undefined;
    "print-rendering-intent-supported"?: PrintRenderingIntent[] | undefined;
    "print-scaling-default"?: PrintScaling | undefined;
    "print-scaling-supported"?: PrintScaling[] | undefined;
    "print-supports-default"?: PrintSupports | undefined;
    "print-supports-supported"?: PrintSupports[] | undefined;
    "printer-camera-image-uri"?: string[] | undefined;
    "printer-charge-info"?: string | undefined;
    "printer-charge-info-uri"?: string | undefined;
    "printer-contact-col"?: PrinterContact | undefined;
    "printer-current-time"?: string | undefined;
    "printer-device-id"?: string | undefined;
    "printer-dns-sd-name"?: string | undefined;
    "printer-driver-installer"?: string | undefined;
    "printer-fax-log-uri"?: string | undefined;
    "printer-fax-modem-info"?: string[] | undefined;
    "printer-fax-modem-name"?: string[] | undefined;
    "printer-fax-modem-number"?: string[] | undefined;
    "printer-geo-location"?: string | undefined;
    "printer-get-attributes-supported"?: Array<keyof JobTemplateAttributes | keyof JobStatusAttributes> | undefined;
    "printer-icc-profiles"?: PrinterIccProfiles[] | undefined;
    "printer-icons"?: string[] | undefined;
    "printer-info"?: string | undefined;
    "printer-kind"?: PrinterKind[] | undefined;
    "printer-location"?: string | undefined;
    "printer-make-and-model"?: string | undefined;
    "printer-mandatory-job-attributes"?: Array<keyof JobTemplateAttributes | keyof JobStatusAttributes> | undefined;
    "printer-more-info-manufacturer"?: string | undefined;
    "printer-name"?: string | undefined;
    "printer-organization"?: string[] | undefined;
    "printer-organizational-unit"?: string[] | undefined;
    "printer-privacy-policy-uri"?: string | undefined;
    "printer-resolution-default"?: Resolution | undefined;
    "printer-resolution-supported"?: Resolution | undefined;
    "printer-static-resource-directory-uri"?: string | undefined;
    "printer-static-resource-k-octets-supported"?: number | undefined;
    "printer-strings-languages-supported"?: string[] | undefined;
    "printer-strings-uri"?: string | undefined;
    "printer-volume-supported"?: PrinterVolumeSupported | undefined;
    "printer-xri-supported"?: PrinterXri[] | undefined;
    "proof-print-default"?: ProofPrint | undefined;
    "proof-print-supported"?: Array<"media" | "media-col" | "proof-print-copies"> | undefined;
    "punching-hole-diameter-configured"?: number | undefined;
    "punching-locations-supported"?: Array<number | string> | undefined;
    "punching-offset-supported"?: Array<number | string> | undefined;
    "punching-reference-edge-supported"?: ReferenceEdge[] | undefined;
    "pwg-raster-document-resolution-supported"?: Resolution[] | undefined;
    "pwg-raster-document-sheet-back"?: "flipped" | "manual-tumble" | "normal" | "rotated" | undefined;
    "pwg-raster-document-type-supported"?: PwgRasterDocumentTypeSupported[] | undefined;
    "pwg-safe-gcode-supported"?: string[] | undefined;
    "reference-uri-schemes-supported"?: UriSchemes[] | undefined;
    "repertoire-supported"?: string[] | undefined;
    "requesting-user-uri-supported"?: boolean | undefined;
    "retry-interval-default"?: number | undefined;
    "retry-interval-supported"?: string | undefined;
    "retry-time-out-default"?: number | undefined;
    "retry-time-out-supported"?: string | undefined;
    "save-disposition-supported"?: SaveDisposition[] | undefined;
    "save-document-format-default"?: MimeMediaType | undefined;
    "save-document-format-supported"?: MimeMediaType[] | undefined;
    "save-location-default"?: string | undefined;
    "save-location-supported"?: string[] | undefined;
    "save-name-subdirectory-supported"?: boolean | undefined;
    "save-name-supported"?: boolean | undefined;
    "separator-sheets-default"?: SeparatorSheets | undefined;
    "separator-sheets-supported"?: SeparatorSheetsType[] | undefined;
    "sides-default"?: Sides | undefined;
    "sides-supported"?: Sides[] | undefined;
    "smi2699-auth-print-group"?: string | undefined;
    "smi2699-auth-proxy-group"?: string | undefined;
    "smi2699-device-command"?: string | undefined;
    "smi2699-device-format"?: MimeMediaType | undefined;
    "smi2699-device-name"?: string | undefined;
    "smi2699-device-uri"?: string | undefined;
    "stitching-angle-supported"?: Array<number | string> | undefined;
    "stitching-locations-supported"?: Array<number | string> | undefined;
    "stitching-method-supported"?: StitchingMethod[] | undefined;
    "stitching-offset-supported"?: Array<number | string> | undefined;
    "stitching-reference-edge-supported"?: ReferenceEdge[] | undefined;
    "subject-supported"?: number | undefined;
    "subordinate-printers-supported"?: string[] | undefined;
    "subscription-privacy-attributes"?: string[] | undefined;
    "subscription-privacy-scope"?: string | undefined;
    "to-name-supported"?: number | undefined;
    "trimming-offset-supported"?: Array<number | string> | undefined;
    "trimming-reference-edge-supported"?: ReferenceEdge[] | undefined;
    "trimming-type-supported"?: TrimmingType[] | undefined;
    "trimming-when-supported"?: string[] | undefined;
    "uri-authentication-supported"?:
        | Array<
            "basic" | "certificate" | "digest" | "negotiate" | "none" | "requesting-user-name"
        >
        | undefined;
    "uri-security-supported"?: Array<"none" | "ssl3" | "tls"> | undefined;
    "user-defined-values-supported"?: string[] | undefined;
    "which-jobs-supported"?: WhichJobs[] | undefined;
    "x-image-position-default"?: XImagePosition | undefined;
    "x-image-position-supported"?: XImagePosition[] | undefined;
    "x-image-shift-default"?: number | undefined;
    "x-image-shift-supported"?: string | undefined;
    "x-side1-image-shift-default"?: number | undefined;
    "x-side1-image-shift-supported"?: string | undefined;
    "x-side2-image-shift-default"?: number | undefined;
    "x-side2-image-shift-supported"?: string | undefined;
    "y-image-position-default"?: YImagePosition | undefined;
    "y-image-position-supported"?: YImagePosition[] | undefined;
    "y-image-shift-default"?: number | undefined;
    "y-image-shift-supported"?: string | undefined;
    "y-side1-image-shift-default"?: number | undefined;
    "y-side1-image-shift-supported"?: string | undefined;
    "y-side2-image-shift-default"?: number | undefined;
    "y-side2-image-shift-supported"?: string | undefined;
}

export interface PrinterStatus {
    "chamber-humidity-current"?: number | undefined;
    "chamber-temperature-current"?: number | undefined;
    "device-service-count"?: number | undefined;
    "device-uuid"?: string | undefined;
    "document-format-varying-attributes"?: Array<keyof JobTemplateAttributes | "none"> | undefined;
    "job-settable-attributes-supported"?: Array<keyof JobTemplateAttributes> | undefined;
    "pages-per-minute"?: number | undefined;
    "pages-per-minute-color"?: number | undefined;
    "printer-alert"?: string[] | undefined;
    "printer-alert-description"?: string[] | undefined;
    "printer-camera-image-uri"?: string[] | undefined;
    "printer-config-change-date-time"?: string | undefined;
    "printer-config-change-time"?: number | undefined;
    "printer-config-changes"?: number | undefined;
    "printer-detailed-status-messages"?: string[] | undefined;
    "printer-finisher"?: string[] | undefined;
    "printer-finisher-description"?: string[] | undefined;
    "printer-finisher-supplies"?: string[] | undefined;
    "printer-finisher-supplies-description"?: string[] | undefined;
    "printer-id"?: number | undefined;
    "printer-impressions-completed"?: number | undefined;
    "printer-impressions-completed-col"?: Impressions | undefined;
    "printer-input-tray"?: string[] | undefined;
    "printer-is-accepting-jobs"?: boolean | undefined;
    "printer-media-sheets-completed"?: number | undefined;
    "printer-media-sheets-completed-col"?: MediaSheets | undefined;
    "printer-message-date-time"?: string | undefined;
    "printer-message-from-operator"?: string | undefined;
    "printer-message-time"?: number | undefined;
    "printer-more-info"?: string | undefined;
    "printer-output-tray"?: string[] | undefined;
    "printer-pages-completed"?: number | undefined;
    "printer-pages-completed-col"?: Pages | undefined;
    "printer-service-type"?: PrinterServiceType | undefined;
    "printer-settable-attributes-supported"?: Array<keyof JobTemplateAttributes | "none"> | undefined;
    "printer-state"?: PrinterState | undefined;
    "printer-state-change-date-time"?: string | undefined;
    "printer-state-change-time"?: number | undefined;
    "printer-state-message"?: string | undefined;
    "printer-state-reasons"?: PrinterStateReasons[] | undefined;
    "printer-static-resource-k-octets-free"?: number | undefined;
    "printer-supply"?: string[] | undefined;
    "printer-supply-description"?: string[] | undefined;
    "printer-supply-info-uri"?: string | undefined;
    "printer-up-time"?: number | undefined;
    "printer-uri-supported"?: string[] | undefined;
    "printer-uuid"?: string | undefined;
    "queued-job-count"?: number | undefined;
    "xri-authentication-supported"?: XriAuthentication[] | undefined;
    "xri-security-supported"?: XriSecurity[] | undefined;
    "xri-uri-scheme-supported"?: UriSchemes[] | undefined;
}

export interface DestionationAccesses {
    "access-oauth-token"?: string[] | undefined;
    "access-oauth-uri"?: string | undefined;
    "access-password"?: string | undefined;
    "access-pin"?: string | undefined;
    "access-user-name"?: string | undefined;
}

export interface DocumentAccess {
    "access-oauth-token"?: string[] | undefined;
    "access-oauth-uri"?: string | undefined;
    "access-password"?: string | undefined;
    "access-pin"?: string | undefined;
    "access-user-name"?: string | undefined;
}

export interface DocumentFormatDetails {
    "document-format"?: MimeMediaType | undefined;
    "document-format-device-id"?: string | undefined;
    "document-format-version"?: string | undefined;
    "document-natural-language"?: string[] | undefined;
    "document-source-application-name"?: string | undefined;
    "document-source-application-version"?: string | undefined;
    "document-source-os-name"?: string | undefined;
    "document-source-os-version"?: string | undefined;
}

export interface InputAttributes {
    "input-auto-scaling"?: boolean | undefined;
    "input-auto-skew-correction"?: boolean | undefined;
    "input-brightness"?: number | undefined;
    "input-color-mode"?: InputColorMode | undefined;
    "input-content-type"?: InputContentType | undefined;
    "input-contrast"?: number | undefined;
    "input-film-scan-mode"?: InputFilmScanMode | undefined;
    "input-images-to-transfer"?: number | undefined;
    "input-media"?: MediaName | MediaSizeName | undefined;
    "input-orientation-requested"?: OrientationRequested | undefined;
    "input-quality"?: PrintQuality | undefined;
    "input-resolution"?: Resolution | undefined;
    "input-scaling-height"?: number | undefined;
    "input-scaling-width"?: number | undefined;
    "input-scan-regions"?: PPScanRegions[] | undefined;
    "input-sharpness"?: number | undefined;
    "input-sides"?: Sides | undefined;
    "input-source"?: InputSource | undefined;
}

export interface PPScanRegions {
    "x-dimension"?: number | undefined;
    "x-origin"?: number | undefined;
    "y-dimension"?: number | undefined;
    "y-origin"?: number | undefined;
}

export interface OutputAttributes {
    "noise-removal"?: number | undefined;
    "output-compression-quality-factor"?: number | undefined;
}

export interface DestinationUriReady {
    "destination-attributes"?: object[] | undefined;
    "destination-attributes-supported"?: string[] | undefined;
    "destination-info"?: string | undefined;
    "destination-is-directory"?: boolean | undefined;
    "destination-mandatory-access-attributes"?: string[] | undefined;
    "destination-name"?: string | undefined;
    "destination-oauth-scope"?: string[] | undefined;
    "destination-oauth-token"?: string[] | undefined;
    "destination-oauth-uri"?: string | undefined;
    "destination-uri"?: string | undefined;
}

export interface InputScanRegion {
    "x-dimension"?: string | undefined;
    "x-origin"?: string | undefined;
    "y-dimension"?: string | undefined;
    "y-origin"?: string | undefined;
}

export interface JobConstraintsSupported {
    "resolver-name"?: string | undefined;
}

export interface JobPresetsSupported {
    "preset-name"?: string | undefined;
}

export interface JobResolversSupported {
    "resolver-name"?: string | undefined;
}

export interface JobTriggersSupported {
    "preset-name"?: string | undefined;
}

export interface MediaSizeSupported {
    "x-dimension"?: number | string | undefined;
    "y-dimension"?: number | string | undefined;
}

export interface PrintAccuracySupported {
    "accuracy-units"?: AccuracyUnits | undefined;
    "x-accuracy"?: number | undefined;
    "y-accuracy"?: number | undefined;
    "z-accuracy"?: number | undefined;
}

export interface PrinterContact {
    "contact-name"?: string | undefined;
    "contact-uri"?: string | undefined;
    "contact-vcard"?: string[] | undefined;
}

export interface PrinterIccProfiles {
    "profile-name"?: string | undefined;
    "profile-url"?: string | undefined;
}

export interface PrinterVolumeSupported {
    "x-dimension"?: number | undefined;
    "y-dimension"?: number | undefined;
    "z-dimension"?: number | undefined;
}

export interface PrinterXri {
    "xri-authentication"?: XriAuthentication | undefined;
    "xri-security"?: XriSecurity | undefined;
    "xri-uri"?: string | undefined;
}

export interface DestinationStatuses {
    "destination-uri"?: string | undefined;
    "images-completed"?: number | undefined;
    "transmission-status"?: TransmissionStatus | undefined;
}

export interface Impressions {
    blank?: number | undefined;
    "blank-two-sided"?: number | undefined;
    "full-color"?: number | undefined;
    "full-color-two-sided"?: number | undefined;
    "highlight-color"?: number | undefined;
    "highlight-color-two-sided"?: number | undefined;
    monochrome?: number | undefined;
    "monochrome-two-sided"?: number | undefined;
}

export interface MediaSheets {
    blank?: number | undefined;
    "full-color"?: number | undefined;
    "highlight-color"?: number | undefined;
    monochrome?: number | undefined;
}

export interface Pages {
    "full-color"?: number | undefined;
    monochrome?: number | undefined;
}

export interface Cover {
    "cover-type"?: CoverType | undefined;
    media?: Media | undefined;
    "media-col"?: MediaInterface[] | undefined;
}

export interface CoverSheetInfo {
    "from-name"?: string | undefined;
    logo?: string | undefined;
    message?: string | undefined;
    "organization-name"?: string | undefined;
    subject?: string | undefined;
    "to-name"?: string | undefined;
}

export interface DestinationUris {
    "destination-attributes"?: object[] | undefined;
    "destination-uri"?: string | undefined;
    "post-dial-string"?: string | undefined;
    "pre-dial-string"?: string | undefined;
    "t33-subaddress"?: number | undefined;
    "feed-orientation"?: FeedOrientation | undefined;
}

export interface FinishingBailing {
    "baling-type"?: BalingType | undefined;
    "baling-when"?: BalingWhen | undefined;
}

export interface FinishingBinding {
    "binding-reference-edge"?: ReferenceEdge | undefined;
    "binding-type"?: BindingType | undefined;
}

export interface FinishingCoating {
    "coating-sides"?: FinishingSides | undefined;
    "coating-type"?: CoatingType | undefined;
}

export interface FinishingCovering {
    "covering-name"?: string | undefined;
}

export interface FinishingFolding {
    "folding-direction"?: FoldingDirection | undefined;
    "folding-offset"?: number | undefined;
    "folding-reference-edge"?: ReferenceEdge | undefined;
}

export interface FinishingLaminating {
    "laminating-sides"?: FinishingSides | undefined;
    "laminating-type"?: LaminatingType | undefined;
}

export interface FinishingPunching {
    "punching-locations"?: number[] | undefined;
    "punching-offset"?: number | undefined;
    "punching-reference-edge"?: ReferenceEdge | undefined;
}

export interface FinishingStitching {
    "stitching-angle"?: number | undefined;
    "stitching-locations"?: number[] | undefined;
    "stitching-method"?: StitchingMethod | undefined;
    "stitching-offset"?: number | undefined;
    "stitching-reference-edge"?: ReferenceEdge | undefined;
}

export interface FinishingTrimming {
    "trimming-offset"?: number | undefined;
    "trimming-reference-edge"?: ReferenceEdge | undefined;
    "trimming-type"?: TrimmingType | undefined;
    "trimming-when"?: string | undefined;
}

export interface FinishingsInterface {
    baling?: FinishingBailing | undefined;
    binding?: FinishingBinding | undefined;
    coating?: FinishingCoating | undefined;
    covering?: FinishingCovering | undefined;
    "finishing-template"?: Finishings | undefined;
    folding?: FinishingFolding[] | undefined;
    "imposition-template"?: ImpositionTemplate | undefined;
    laminating?: FinishingLaminating | undefined;
    "media-sheets-supported"?: string | undefined;
    "media-size"?: MediaSize | undefined;
    "media-size-name"?: string | undefined;
    punching?: FinishingPunching | undefined;
    stitching?: FinishingStitching | undefined;
    trimming?: FinishingTrimming[] | undefined;
}

export interface InsertSheet {
    "insert-after-page-number"?: number | undefined;
    "insert-count"?: number | undefined;
    media?: Media | undefined;
    "media-col"?: MediaInterface | undefined;
}

export interface JobAccontingSheets {
    "job-accounting-output-bin"?: OutputBin | undefined;
    "job-accounting-sheets-type"?: "none" | "standard" | undefined;
    media?: Media | undefined;
    "media-col"?: MediaInterface | undefined;
}

export interface JobErrorSheet {
    "job-error-sheet-type"?: "none" | "standard" | undefined;
    "job-error-sheet-when"?: "always" | "on-error" | undefined;
    media?: Media | undefined;
    "media-col"?: MediaInterface | undefined;
}

export interface JobSaveDisposition {
    "save-disposition"?: SaveDisposition | undefined;
    "save-info"?: SaveInfo[] | undefined;
}

export interface SaveInfo {
    "save-document-format"?: MimeMediaType | undefined;
    "save-location"?: string | undefined;
    "save-name"?: string | undefined;
}

export interface JobSheetsInterface {
    "job-sheets"?: JobSheets | undefined;
    media?: Media | undefined;
    "media-col"?: MediaInterface | undefined;
}

export interface Materials {
    "material-amount"?: number | undefined;
    "material-amount-units"?: MaterialAmountUnits | undefined;
    "material-color"?: string | undefined;
    "material-diameter"?: number | undefined;
    "material-diameter-tolerance"?: number | undefined;
    "material-fill-density"?: number | undefined;
    "material-key"?: string | undefined;
    "material-name"?: string | undefined;
    "material-nozzle-diameter"?: number | undefined;
    "material-purpose"?: MaterialPurpose[] | undefined;
    "material-rate"?: number | undefined;
    "material-rate-units"?: MaterialRateUnits | undefined;
    "material-retraction"?: boolean | undefined;
    "material-shell-thickness"?: number | undefined;
    "material-temperature"?: number | undefined;
    "material-type"?: MaterialType | undefined;
}

export interface MediaInterface {
    "media-back-coating"?: MediaCoating | undefined;
    "media-bottom-margin"?: number | undefined;
    "media-color"?: MediaColor | undefined;
    "media-front-coating"?: MediaCoating | undefined;
    "media-grain"?: MediaGrain | undefined;
    "media-hole-count"?: number | undefined;
    "media-info"?: string | undefined;
    "media-key"?: MediaSizeName | MediaName | undefined;
    "media-left-margin"?: number | undefined;
    "media-order-count"?: number | undefined;
    "media-pre-printed"?: MediaPrePrinted | undefined;
    "media-recycled"?: MediaPrePrinted | undefined;
    "media-right-margin"?: number | undefined;
    "media-size"?: MediaSize | undefined;
    "media-size-name"?: MediaSizeName | undefined;
    "media-source"?: MediaSource | undefined;
    "media-thickness"?: number | undefined;
    "media-tooth"?: MediaTooth | undefined;
    "media-top-margin"?: number | undefined;
    "media-type"?: MediaType | undefined;
    "media-weight-metric"?: number | undefined;
}

export interface MediaSize {
    "x-dimension"?: number | undefined;
    "y-dimension"?: number | undefined;
}

export interface PdlInitFile {
    "pdl-init-file-entry"?: string | undefined;
    "pdl-init-file-location"?: string | undefined;
    "pdl-init-file-name"?: string | undefined;
}

export interface PrintAccuracy {
    "accuracy-units"?: AccuracyUnits | undefined;
    "x-accuracy"?: number | undefined;
    "y-accuracy"?: number | undefined;
    "z-accuracy"?: number | undefined;
}

export interface PrintObjects {
    "document-number"?: number | undefined;
    "object-offset"?: ObjectOffset | undefined;
    "object-size"?: ObjectSize | undefined;
    "object-uuid"?: string | undefined;
}

export interface ObjectOffset {
    "x-offset"?: number | undefined;
    "y-offset"?: number | undefined;
    "z-offset"?: number | undefined;
}

export interface ObjectSize {
    "x-dimension"?: number | undefined;
    "y-dimension"?: number | undefined;
    "z-dimension"?: number | undefined;
}

export interface ProofPrint {
    media?: Media | undefined;
    "media-col"?: MediaInterface | undefined;
    "proof-print-copies"?: number | undefined;
}

export interface SeparatorSheets {
    media?: Media | undefined;
    "media-col"?: MediaInterface | undefined;
    "separator-sheets-type"?: SeparatorSheetsType[] | undefined;
}

export type StatusCode =
    | "successful-ok"
    | "successful-ok-ignored-or-substituted-attributes"
    | "successful-ok-conflicting-attributes"
    | "successful-ok-ignored-subscriptions"
    | "successful-ok-too-many-events"
    | "successful-ok-events-complete"
    | "client-error-bad-request"
    | "client-error-forbidden"
    | "client-error-not-authenticated"
    | "client-error-not-authorized"
    | "client-error-not-possible"
    | "client-error-timeout"
    | "client-error-not-found"
    | "client-error-gone"
    | "client-error-request-entity-too-large"
    | "client-error-request-value-too-long"
    | "client-error-document-format-not-supported"
    | "client-error-attributes-or-values-not-supported"
    | "client-error-uri-scheme-not-supported"
    | "client-error-charset-not-supported"
    | "client-error-conflicting-attributes"
    | "client-error-compression-not-supported"
    | "client-error-compression-error"
    | "client-error-document-format-error"
    | "client-error-document-access-error"
    | "client-error-attributes-not-settable"
    | "client-error-ignored-all-subscriptions"
    | "client-error-too-many-subscriptions"
    | "client-error-document-password-error"
    | "client-error-document-permission-error"
    | "client-error-document-security-error"
    | "client-error-document-unprintable-error"
    | "client-error-account-info-needed"
    | "client-error-account-closed"
    | "client-error-account-limit-reached"
    | "client-error-account-authorization-failed"
    | "client-error-not-fetchable"
    | "server-error-internal-error"
    | "server-error-operation-not-supported"
    | "server-error-service-unavailable"
    | "server-error-version-not-supported"
    | "server-error-device-error"
    | "server-error-temporary-error"
    | "server-error-not-accepting-jobs"
    | "server-error-busy"
    | "server-error-job-canceled"
    | "server-error-multiple-document-jobs-not-supported"
    | "server-error-printer-is-deactivated"
    | "server-error-too-many-jobs"
    | "server-error-too-many-documents";

export type MimeMediaType =
    | "application/activemessage"
    | "application/andrew-inset"
    | "application/applefile"
    | "application/atomicmail"
    | "application/dca-rft"
    | "application/dec-dx"
    | "application/mac-binhex40"
    | "application/mac-compactpro"
    | "application/macwriteii"
    | "application/msword"
    | "application/news-message-id"
    | "application/news-transmission"
    | "application/octet-stream"
    | "application/oda"
    | "application/pdf"
    | "application/postscript"
    | "application/powerpoint"
    | "application/remote-printing"
    | "application/rtf"
    | "application/slate"
    | "application/wita"
    | "application/wordperfect5.1"
    | "application/x-bcpio"
    | "application/x-cdlink"
    | "application/x-compress"
    | "application/x-cpio"
    | "application/x-csh"
    | "application/x-director"
    | "application/x-dvi"
    | "application/x-gtar"
    | "application/x-gzip"
    | "application/x-hdf"
    | "application/x-httpd-cgi"
    | "application/x-koan"
    | "application/x-latex"
    | "application/x-mif"
    | "application/x-netcdf"
    | "application/x-sh"
    | "application/x-shar"
    | "application/x-stuffit"
    | "application/x-sv4cpio"
    | "application/x-sv4crc"
    | "application/x-tar"
    | "application/x-tcl"
    | "application/x-tex"
    | "application/x-texinfo"
    | "application/x-troff"
    | "application/x-troff-man"
    | "application/x-troff-me"
    | "application/x-troff-ms"
    | "application/x-ustar"
    | "application/x-wais-source"
    | "image/gif"
    | "image/ief"
    | "image/jpeg"
    | "image/png"
    | "image/tiff"
    | "image/x-cmu-raster"
    | "image/x-portable-anymap"
    | "image/x-portable-bitmap"
    | "image/x-portable-graymap"
    | "image/x-portable-pixmap"
    | "image/x-rgb"
    | "image/x-xbitmap"
    | "image/x-xpixmap"
    | "image/x-xwindowdump"
    | "message/external-body"
    | "message/news"
    | "message/partial"
    | "message/rfc822"
    | "text/html"
    | "text/plain"
    | "text/richtext"
    | "text/tab-separated-values"
    | "text/x-setext"
    | "text/x-sgml";

export type PrinterOpertaion =
    | "Acknowledge-Document"
    | "Acknowledge-Identify-Printer"
    | "Acknowledge-Job"
    | "Activate-Printer"
    | "Add-Document-Images"
    | "Allocate-Printer-Resources"
    | "Cancel-Current-Job"
    | "Cancel-Document"
    | "Cancel-Job"
    | "Cancel-Jobs"
    | "Cancel-My-Jobs"
    | "Cancel-Resource"
    | "Cancel-Subscription"
    | "Close-Job"
    | "Create-Job"
    | "Create-Job-Subscriptions"
    | "Create-Printer"
    | "Create-Printer-Subscriptions"
    | "Create-Resource"
    | "Create-Resource-Subscriptions"
    | "Create-System-Subscriptions"
    | "Deactivate-Printer"
    | "Deallocate-Printer-Resources"
    | "Delete-Document"
    | "Delete-Printer"
    | "Deregister-Output-Device"
    | "Disable-All-Printers"
    | "Disable-Printer"
    | "Enable-All-Printers"
    | "Enable-Printer"
    | "Fetch-Document"
    | "Fetch-Job"
    | "Get-Document-Attributes"
    | "Get-Documents"
    | "Get-Job-Attributes"
    | "Get-Jobs"
    | "Get-Next-Document-Data"
    | "Get-Notifications"
    | "Get-Output-Device-Attributes"
    | "Get-Printer-Attributes"
    | "Get-Printer-Resources"
    | "Get-Printer-Supported-Values"
    | "Get-Printers"
    | "Get-Resource-Attributes"
    | "Get-Resources"
    | "Get-Subscription-Attributes"
    | "Get-Subscriptions"
    | "Get-System-Attributes"
    | "Get-System-Supported-Values"
    | "Get-User-Printer-Attributes"
    | "Hold-Job"
    | "Hold-New-Jobs"
    | "Identify-Printer"
    | "Install-Resource"
    | "Pause-All-Printers"
    | "Pause-All-Printers-After-Current-Job"
    | "Pause-Printer"
    | "Pause-Printer-After-Current-Job"
    | "Print-Job"
    | "Print-URI"
    | "Promote-Job"
    | "Purge-Jobs"
    | "Register-Output-Device"
    | "Release-Held-New-Jobs"
    | "Release-Job"
    | "Renew-Subscription"
    | "Reprocess-Job"
    | "Restart-Job"
    | "Restart-One-Printer"
    | "Restart-Printer"
    | "Restart-System"
    | "Resubmit-Job"
    | "Resume-All-Printers"
    | "Resume-Job"
    | "Resume-Printer"
    | "Schedule-Job-After"
    | "Send-Document"
    | "Send-Resource-Data"
    | "Send-URI"
    | "Set-Document-Attributes"
    | "Set-Job-Attributes"
    | "Set-Printer-Attributes"
    | "Set-Resource-Attributes"
    | "Set-System-Attributes"
    | "Shutdown-All-Printers"
    | "Shutdown-One-Printer"
    | "Shutdown-Printer"
    | "Startup-All-Printers"
    | "Startup-One-Printer"
    | "Startup-Printer"
    | "Suspend-Current-Job"
    | "Update-Active-Jobs"
    | "Update-Document-Status"
    | "Update-Job-Status"
    | "Update-Output-Device-Attributes"
    | "Validate-Document"
    | "Validate-Job"
    | "Value";

export type Compression = "compress" | "deflate" | "gzip" | "none";

export type CoverType = "no-cover" | "print-back" | "print-both" | "print-front" | "print-none";

export type DocumentDigitalSignature = "dss" | "none" | "pgp" | "smime" | "xmldsig";

export type DocumentStateReasons =
    | "aborted-by-system"
    | "canceled-at-device"
    | "canceled-by-operator"
    | "canceled-by-user"
    | "completed-successfully"
    | "completed-with-errors"
    | "completed-with-warnings"
    | "compression-error"
    | "data-insufficient"
    | "digital-signature-did-not-verify"
    | "digital-signature-type-not-supported"
    | "digital-signature-wait"
    | "document-access-error"
    | "document-format-error"
    | "document-password-error"
    | "document-permission-error"
    | "document-security-error"
    | "document-unprintable-error"
    | "errors-detected"
    | "incoming"
    | "interpreting"
    | "none"
    | "outgoing"
    | "printing"
    | "processing-to-stop-point"
    | "queued"
    | "queued-for-marker"
    | "queued-in-device"
    | "resources-are-not-ready"
    | "resources-are-not-supported"
    | "submission-interrupted"
    | "transforming"
    | "unsupported-compression"
    | "unsupported-document-format"
    | "warnings-detected";

export type FeedOrientation = "long-edge-first" | "short-edge-first";

export type IdentifyActions = "display" | "flash" | "sound" | "speak";

export type ImpositionTemplate = "none" | "signature";

export type JobErrorAction = "abort-job" | "cancel-job" | "continue-job" | "suspend-job";

export type JobHoldUntil =
    | "day-time"
    | "evening"
    | "indefinite"
    | "night"
    | "no-hold"
    | "second-shift"
    | "third-shift"
    | "weekend";

export type JobDelayOutputUntil =
    | "day-time"
    | "evening"
    | "indefinite"
    | "night"
    | "no-delay-output"
    | "second-shift"
    | "third-shift"
    | "weekend";

export type JobPasswordEncryption =
    | "md2"
    | "md4"
    | "md5"
    | "none"
    | "sha"
    | "sha2-224"
    | "sha2-256"
    | "sha2-384"
    | "sha2-512"
    | "sha2-512_224"
    | "sha2-512_256"
    | "sha3-224"
    | "sha3-256"
    | "sha3-384"
    | "sha3-512"
    | "sha3-512_224"
    | "sha3-512_256"
    | "shake-128"
    | "shake-256";

export type JobSheets =
    | "first-print-stream-page"
    | "job-both-sheet"
    | "job-end-sheet"
    | "job-start-sheet"
    | "none"
    | "standard";

export type JobStateReasons =
    | "aborted-by-system"
    | "compression-error"
    | "digital-signature-did-not-verify"
    | "digital-signature-type-not-supported"
    | "document-access-error"
    | "document-format-error"
    | "document-password-error"
    | "document-permission-error"
    | "document-security-error"
    | "document-unprintable-error"
    | "errors-detected"
    | "job-canceled-at-device"
    | "job-canceled-by-operator"
    | "job-canceled-by-user"
    | "job-completed-successfully"
    | "job-completed-with-errors"
    | "job-completed-with-warnings"
    | "job-data-insufficient"
    | "job-delay-output-until-specified"
    | "job-digital-signature-wait"
    | "job-hold-until-specified"
    | "job-incoming"
    | "job-interpreting"
    | "job-outgoing"
    | "job-password-wait"
    | "job-printed-successfully"
    | "job-printed-with-errors"
    | "job-printed-with-warnings"
    | "job-printing"
    | "job-queued"
    | "job-queued-for-marker"
    | "job-restartable"
    | "job-resuming"
    | "job-saved-successfully"
    | "job-saved-with-errors"
    | "job-saved-with-warnings"
    | "job-saving"
    | "job-spooling"
    | "job-streaming"
    | "job-suspended"
    | "job-suspended-by-operator"
    | "job-suspended-by-system"
    | "job-suspended-by-user"
    | "job-suspending"
    | "job-transforming"
    | "none"
    | "printer-stopped"
    | "printer-stopped-partly"
    | "processing-to-stop-point"
    | "queued-in-device"
    | "resources-are-not-ready"
    | "resources-are-not-supported"
    | "service-off-line"
    | "submission-interrupted"
    | "unsupported-compression"
    | "unsupported-document-format"
    | "warnings-detected";

export type MediaCoating = "glossy" | "high-gloss" | "matte" | "none" | "satin" | "semi-gloss";

export type MediaColSupported =
    | "media-bottom-margin"
    | "media-left-margin"
    | "media-right-margin"
    | "media-size-name"
    | "media-source"
    | "media-top-margin";

export type MediaColor =
    | "black"
    | "blue"
    | "brown"
    | "buff"
    | "clear-black"
    | "clear-blue"
    | "clear-brown"
    | "clear-buff"
    | "clear-cyan"
    | "clear-gold"
    | "clear-goldenrod"
    | "clear-gray"
    | "clear-green"
    | "clear-ivory"
    | "clear-magenta"
    | "clear-multi-color"
    | "clear-mustard"
    | "clear-orange"
    | "clear-pink"
    | "clear-red"
    | "clear-silver"
    | "clear-turquoise"
    | "clear-violet"
    | "clear-white"
    | "clear-yellow"
    | "cyan"
    | "dark-blue"
    | "dark-brown"
    | "dark-buff"
    | "dark-cyan"
    | "dark-gold"
    | "dark-goldenrod"
    | "dark-gray"
    | "dark-green"
    | "dark-ivory"
    | "dark-magenta"
    | "dark-mustard"
    | "dark-orange"
    | "dark-pink"
    | "dark-red"
    | "dark-silver"
    | "dark-turquoise"
    | "dark-violet"
    | "dark-yellow"
    | "gold"
    | "goldenrod"
    | "gray"
    | "green"
    | "ivory"
    | "light-black"
    | "light-blue"
    | "light-brown"
    | "light-buff"
    | "light-cyan"
    | "light-gold"
    | "light-goldenrod"
    | "light-gray"
    | "light-green"
    | "light-ivory"
    | "light-magenta"
    | "light-mustard"
    | "light-orange"
    | "light-pink"
    | "light-red"
    | "light-silver"
    | "light-turquoise"
    | "light-violet"
    | "light-yellow"
    | "magenta"
    | "multi-color"
    | "mustard"
    | "no-color"
    | "orange"
    | "pink"
    | "red"
    | "silver"
    | "turquoise"
    | "violet"
    | "white"
    | "yellow";

export type MediaGrain = "x-direction" | "y-direction";

export type MediaPrePrinted = "blank" | "letter-head" | "pre-printed";

export type MediaRecycled = "none" | "standard";

export type MediaSizeName =
    | "a"
    | "arch-a"
    | "arch-b"
    | "arch-c"
    | "arch-d"
    | "arch-e"
    | "asme_f_28x40in"
    | "b"
    | "c"
    | "choice_iso_a4_210x297mm_na_letter_8.5x11in"
    | "d"
    | "e"
    | "executive"
    | "f"
    | "folio"
    | "invoice"
    | "iso-a0"
    | "iso-a1"
    | "iso-a2"
    | "iso-a3"
    | "iso-a4"
    | "iso-a5"
    | "iso-a6"
    | "iso-a7"
    | "iso-a8"
    | "iso-a9"
    | "iso-a10"
    | "iso-b0"
    | "iso-b1"
    | "iso-b2"
    | "iso-b3"
    | "iso-b4"
    | "iso-b5"
    | "iso-b6"
    | "iso-b7"
    | "iso-b8"
    | "iso-b9"
    | "iso-b10"
    | "iso-c3"
    | "iso-c4"
    | "iso-c5"
    | "iso-c6"
    | "iso-designated-long"
    | "iso_2a0_1189x1682mm"
    | "iso_a0_841x1189mm"
    | "iso_a1_594x841mm"
    | "iso_a1x3_841x1783mm"
    | "iso_a1x4_841x2378mm"
    | "iso_a2_420x594mm"
    | "iso_a2x3_594x1261mm"
    | "iso_a2x4_594x1682mm"
    | "iso_a2x5_594x2102mm"
    | "iso_a3-extra_322x445mm"
    | "iso_a3_297x420mm"
    | "iso_a0x3_1189x2523mm"
    | "iso_a3x3_420x891mm"
    | "iso_a3x4_420x1189mm"
    | "iso_a3x5_420x1486mm"
    | "iso_a3x6_420x1783mm"
    | "iso_a3x7_420x2080mm"
    | "iso_a4-extra_235.5x322.3mm"
    | "iso_a4-tab_225x297mm"
    | "iso_a4_210x297mm"
    | "iso_a4x3_297x630mm"
    | "iso_a4x4_297x841mm"
    | "iso_a4x5_297x1051mm"
    | "iso_a4x6_297x1261mm"
    | "iso_a4x7_297x1471mm"
    | "iso_a4x8_297x1682mm"
    | "iso_a4x9_297x1892mm"
    | "iso_a5-extra_174x235mm"
    | "iso_a5_148x210mm"
    | "iso_a6_105x148mm"
    | "iso_a7_74x105mm"
    | "iso_a8_52x74mm"
    | "iso_a9_37x52mm"
    | "iso_a10_26x37mm"
    | "iso_b0_1000x1414mm"
    | "iso_b1_707x1000mm"
    | "iso_b2_500x707mm"
    | "iso_b3_353x500mm"
    | "iso_b4_250x353mm"
    | "iso_b5-extra_201x276mm"
    | "iso_b5_176x250mm"
    | "iso_b6_125x176mm"
    | "iso_b6c4_125x324mm"
    | "iso_b7_88x125mm"
    | "iso_b8_62x88mm"
    | "iso_b9_44x62mm"
    | "iso_b10_31x44mm"
    | "iso_c0_917x1297mm"
    | "iso_c1_648x917mm"
    | "iso_c2_458x648mm"
    | "iso_c3_324x458mm"
    | "iso_c4_229x324mm"
    | "iso_c5_162x229mm"
    | "iso_c6_114x162mm"
    | "iso_c6c5_114x229mm"
    | "iso_c7_81x114mm"
    | "iso_c7c6_81x162mm"
    | "iso_c8_57x81mm"
    | "iso_c9_40x57mm"
    | "iso_c10_28x40mm"
    | "iso_dl_110x220mm"
    | "iso_id-1_53.98x85.6mm"
    | "iso_id-3_88x125mm"
    | "iso_ra0_860x1220mm"
    | "iso_ra1_610x860mm"
    | "iso_ra2_430x610mm"
    | "iso_ra3_305x430mm"
    | "iso_ra4_215x305mm"
    | "iso_sra0_900x1280mm"
    | "iso_sra1_640x900mm"
    | "iso_sra2_450x640mm"
    | "iso_sra3_320x450mm"
    | "iso_sra4_225x320mm"
    | "jis-b0"
    | "jis-b1"
    | "jis-b2"
    | "jis-b3"
    | "jis-b4"
    | "jis-b5"
    | "jis-b6"
    | "jis-b7"
    | "jis-b8"
    | "jis-b9"
    | "jis-b10"
    | "jis_b0_1030x1456mm"
    | "jis_b1_728x1030mm"
    | "jis_b2_515x728mm"
    | "jis_b3_364x515mm"
    | "jis_b4_257x364mm"
    | "jis_b5_182x257mm"
    | "jis_b6_128x182mm"
    | "jis_b7_91x128mm"
    | "jis_b8_64x91mm"
    | "jis_b9_45x64mm"
    | "jis_b10_32x45mm"
    | "jis_exec_216x330mm"
    | "jpn_chou2_111.1x146mm"
    | "jpn_chou3_120x235mm"
    | "jpn_chou4_90x205mm"
    | "jpn_chou40_90x225mm"
    | "jpn_hagaki_100x148mm"
    | "jpn_kahu_240x322.1mm"
    | "jpn_kaku1_270x382mm"
    | "jpn_kaku2_240x332mm"
    | "jpn_kaku3_216x277mm"
    | "jpn_kaku4_197x267mm"
    | "jpn_kaku5_190x240mm"
    | "jpn_kaku7_142x205mm"
    | "jpn_kaku8_119x197mm"
    | "jpn_oufuku_148x200mm"
    | "jpn_you4_105x235mm"
    | "ledger"
    | "monarch"
    | "na-5x7"
    | "na-6x9"
    | "na-7x9"
    | "na-8x10"
    | "na-9x11"
    | "na-9x12"
    | "na-10x13"
    | "na-10x14"
    | "na-10x15"
    | "na-legal"
    | "na-letter"
    | "na-number-9"
    | "na-number-10"
    | "na_5x7_5x7in"
    | "na_6x9_6x9in"
    | "na_7x9_7x9in"
    | "na_9x11_9x11in"
    | "na_10x11_10x11in"
    | "na_10x13_10x13in"
    | "na_10x14_10x14in"
    | "na_10x15_10x15in"
    | "na_11x12_11x12in"
    | "na_11x15_11x15in"
    | "na_12x19_12x19in"
    | "na_a2_4.375x5.75in"
    | "na_arch-a_9x12in"
    | "na_arch-b_12x18in"
    | "na_arch-c_18x24in"
    | "na_arch-d_24x36in"
    | "na_arch-e2_26x38in"
    | "na_arch-e3_27x39in"
    | "na_arch-e_36x48in"
    | "na_b-plus_12x19.17in"
    | "na_c5_6.5x9.5in"
    | "na_c_17x22in"
    | "na_d_22x34in"
    | "na_e_34x44in"
    | "na_edp_11x14in"
    | "na_eur-edp_12x14in"
    | "na_executive_7.25x10.5in"
    | "na_f_44x68in"
    | "na_fanfold-eur_8.5x12in"
    | "na_fanfold-us_11x14.875in"
    | "na_foolscap_8.5x13in"
    | "na_govt-legal_8x13in"
    | "na_govt-letter_8x10in"
    | "na_index-3x5_3x5in"
    | "na_index-4x6-ext_6x8in"
    | "na_index-4x6_4x6in"
    | "na_index-5x8_5x8in"
    | "na_invoice_5.5x8.5in"
    | "na_ledger_11x17in"
    | "na_legal-extra_9.5x15in"
    | "na_legal_8.5x14in"
    | "na_letter-extra_9.5x12in"
    | "na_letter-plus_8.5x12.69in"
    | "na_letter_8.5x11in"
    | "na_monarch_3.875x7.5in"
    | "na_number-9_3.875x8.875in"
    | "na_number-10_4.125x9.5in"
    | "na_number-11_4.5x10.375in"
    | "na_number-12_4.75x11in"
    | "na_number-14_5x11.5in"
    | "na_oficio_8.5x13.4in"
    | "na_personal_3.625x6.5in"
    | "na_quarto_8.5x10.83in"
    | "na_super-a_8.94x14in"
    | "na_super-b_13x19in"
    | "na_wide-format_30x42in"
    | "oe_12x16_12x16in"
    | "oe_14x17_14x17in"
    | "oe_18x22_18x22in"
    | "oe_a2plus_17x24in"
    | "oe_business-card_2x3.5in"
    | "oe_photo-10r_10x12in"
    | "oe_photo-20r_20x24in"
    | "oe_photo-l_3.5x5in"
    | "oe_photo-s10r_10x15in"
    | "oe_square-photo_4x4in"
    | "oe_square-photo_5x5in"
    | "om_16k_184x260mm"
    | "om_16k_195x270mm"
    | "om_business-card_55x85mm"
    | "om_business-card_55x91mm"
    | "om_card_54x86mm"
    | "om_dai-pa-kai_275x395mm"
    | "om_dsc-photo_89x119mm"
    | "om_folio-sp_215x315mm"
    | "om_folio_210x330mm"
    | "om_invite_220x220mm"
    | "om_italian_110x230mm"
    | "om_juuro-ku-kai_198x275mm"
    | "om_large-photo_200x300"
    | "om_medium-photo_130x180mm"
    | "om_pa-kai_267x389mm"
    | "om_postfix_114x229mm"
    | "om_small-photo_100x150mm"
    | "om_square-photo_89x89mm"
    | "om_wide-photo_100x200mm"
    | "prc_1_102x165mm"
    | "prc_2_102x176mm"
    | "prc_3_125x176mm"
    | "prc_4_110x208mm"
    | "prc_5_110x220mm"
    | "prc_6_120x320mm"
    | "prc_7_160x230mm"
    | "prc_8_120x309mm"
    | "prc_10_324x458mm"
    | "prc_16k_146x215mm"
    | "prc_32k_97x151mm"
    | "quarto"
    | "roc_8k_10.75x15.5in"
    | "roc_16k_7.75x10.75in"
    | "super-b"
    | "tabloid";

export type MediaName =
    | "a-translucent"
    | "a-transparent"
    | "a-white"
    | "arch-a-translucent"
    | "arch-a-transparent"
    | "arch-a-white"
    | "arch-axsynchro-translucent"
    | "arch-axsynchro-transparent"
    | "arch-axsynchro-white"
    | "arch-b-translucent"
    | "arch-b-transparent"
    | "arch-b-white"
    | "arch-bxsynchro-translucent"
    | "arch-bxsynchro-transparent"
    | "arch-bxsynchro-white"
    | "arch-c-translucent"
    | "arch-c-transparent"
    | "arch-c-white"
    | "arch-cxsynchro-translucent"
    | "arch-cxsynchro-transparent"
    | "arch-cxsynchro-white"
    | "arch-d-translucent"
    | "arch-d-transparent"
    | "arch-d-white"
    | "arch-dxsynchro-translucent"
    | "arch-dxsynchro-transparent"
    | "arch-dxsynchro-white"
    | "arch-e-translucent"
    | "arch-e-transparent"
    | "arch-e-white"
    | "arch-exsynchro-translucent"
    | "arch-exsynchro-transparent"
    | "arch-exsynchro-white"
    | "auto-fixed-size-translucent"
    | "auto-fixed-size-transparent"
    | "auto-fixed-size-white"
    | "auto-synchro-translucent"
    | "auto-synchro-transparent"
    | "auto-synchro-white"
    | "auto-translucent"
    | "auto-transparent"
    | "auto-white"
    | "axsynchro-translucent"
    | "axsynchro-transparent"
    | "axsynchro-white"
    | "b-translucent"
    | "b-transparent"
    | "b-white"
    | "bxsynchro-translucent"
    | "bxsynchro-transparent"
    | "bxsynchro-white"
    | "c-translucent"
    | "c-transparent"
    | "c-white"
    | "cxsynchro-translucent"
    | "cxsynchro-transparent"
    | "cxsynchro-white"
    | "d-translucent"
    | "d-transparent"
    | "d-white"
    | "default"
    | "dxsynchro-translucent"
    | "dxsynchro-transparent"
    | "dxsynchro-white"
    | "e-translucent"
    | "e-transparent"
    | "e-white"
    | "executive-white"
    | "exsynchro-translucent"
    | "exsynchro-transparent"
    | "exsynchro-white"
    | "folio-white"
    | "invoice-white"
    | "iso-a0-translucent"
    | "iso-a0-transparent"
    | "iso-a0-white"
    | "iso-a0xsynchro-translucent"
    | "iso-a0xsynchro-transparent"
    | "iso-a0xsynchro-white"
    | "iso-a1-translucent"
    | "iso-a1-transparent"
    | "iso-a1-white"
    | "iso-a1x3-translucent"
    | "iso-a1x3-transparent"
    | "iso-a1x3-white"
    | "iso-a1x4-translucent"
    | "iso-a1x4-transparent"
    | "iso-a1x4-white"
    | "iso-a1xsynchro-translucent"
    | "iso-a1xsynchro-transparent"
    | "iso-a1xsynchro-white"
    | "iso-a2-translucent"
    | "iso-a2-transparent"
    | "iso-a2-white"
    | "iso-a2x3-translucent"
    | "iso-a2x3-transparent"
    | "iso-a2x3-white"
    | "iso-a2x4-translucent"
    | "iso-a2x4-transparent"
    | "iso-a2x4-white"
    | "iso-a2x5-translucent"
    | "iso-a2x5-transparent"
    | "iso-a2x5-white"
    | "iso-a2xsynchro-translucent"
    | "iso-a2xsynchro-transparent"
    | "iso-a2xsynchro-white"
    | "iso-a3-colored"
    | "iso-a3-translucent"
    | "iso-a3-transparent"
    | "iso-a3-white"
    | "iso-a3x3-translucent"
    | "iso-a3x3-transparent"
    | "iso-a3x3-white"
    | "iso-a3x4-translucent"
    | "iso-a3x4-transparent"
    | "iso-a3x4-white"
    | "iso-a3x5-translucent"
    | "iso-a3x5-transparent"
    | "iso-a3x5-white"
    | "iso-a3x6-translucent"
    | "iso-a3x6-transparent"
    | "iso-a3x6-white"
    | "iso-a3x7-translucent"
    | "iso-a3x7-transparent"
    | "iso-a3x7-white"
    | "iso-a3xsynchro-translucent"
    | "iso-a3xsynchro-transparent"
    | "iso-a3xsynchro-white"
    | "iso-a4-colored"
    | "iso-a4-translucent"
    | "iso-a4-transparent"
    | "iso-a4-white"
    | "iso-a4x3-translucent"
    | "iso-a4x3-transparent"
    | "iso-a4x3-white"
    | "iso-a4x4-translucent"
    | "iso-a4x4-transparent"
    | "iso-a4x4-white"
    | "iso-a4x5-translucent"
    | "iso-a4x5-transparent"
    | "iso-a4x5-white"
    | "iso-a4x6-translucent"
    | "iso-a4x6-transparent"
    | "iso-a4x6-white"
    | "iso-a4x7-translucent"
    | "iso-a4x7-transparent"
    | "iso-a4x7-white"
    | "iso-a4x8-translucent"
    | "iso-a4x8-transparent"
    | "iso-a4x8-white"
    | "iso-a4x9-translucent"
    | "iso-a4x9-transparent"
    | "iso-a4x9-white"
    | "iso-a4xsynchro-translucent"
    | "iso-a4xsynchro-transparent"
    | "iso-a4xsynchro-white"
    | "iso-a5-colored"
    | "iso-a5-translucent"
    | "iso-a5-transparent"
    | "iso-a5-white"
    | "iso-a6-white"
    | "iso-a7-white"
    | "iso-a8-white"
    | "iso-a9-white"
    | "iso-a10-white"
    | "iso-b0-white"
    | "iso-b1-white"
    | "iso-b2-white"
    | "iso-b3-white"
    | "iso-b4-colored"
    | "iso-b4-white"
    | "iso-b5-colored"
    | "iso-b5-white"
    | "iso-b6-white"
    | "iso-b7-white"
    | "iso-b8-white"
    | "iso-b9-white"
    | "iso-b10-white"
    | "jis-b0-translucent"
    | "jis-b0-transparent"
    | "jis-b0-white"
    | "jis-b1-translucent"
    | "jis-b1-transparent"
    | "jis-b1-white"
    | "jis-b2-translucent"
    | "jis-b2-transparent"
    | "jis-b2-white"
    | "jis-b3-translucent"
    | "jis-b3-transparent"
    | "jis-b3-white"
    | "jis-b4-colored"
    | "jis-b4-translucent"
    | "jis-b4-transparent"
    | "jis-b4-white"
    | "jis-b5-colored"
    | "jis-b5-translucent"
    | "jis-b5-transparent"
    | "jis-b5-white"
    | "jis-b6-white"
    | "jis-b7-white"
    | "jis-b8-white"
    | "jis-b9-white"
    | "jis-b10-white"
    | "ledger-white"
    | "na-legal-colored"
    | "na-legal-white"
    | "na-letter-colored"
    | "na-letter-transparent"
    | "na-letter-white"
    | "quarto-white";

export type MediaEnvelopeName =
    | "iso-b4-envelope"
    | "iso-b5-envelope"
    | "iso-c3-envelope"
    | "iso-c4-envelope"
    | "iso-c5-envelope"
    | "iso-c6-envelope"
    | "iso-designated-long-envelope"
    | "monarch-envelope"
    | "na-6x9-envelope"
    | "na-7x9-envelope"
    | "na-9x11-envelope"
    | "na-9x12-envelope"
    | "na-10x13-envelope"
    | "na-10x14-envelope"
    | "na-10x15-envelope"
    | "na-number-9-envelope"
    | "na-number-10-envelope";

export type MediaIntputTray = "bottom" | "envelope" | "large-capacity" | "main" | "manual" | "middle" | "side" | "top";

export type Media = MediaName | MediaSizeName | MediaIntputTray | MediaEnvelopeName;

export type MediaSource =
    | "alternate"
    | "alternate-roll"
    | "auto"
    | "bottom"
    | "by-pass-tray"
    | "center"
    | "disc"
    | "envelope"
    | "hagaki"
    | "large-capacity"
    | "left"
    | "main"
    | "main-roll"
    | "manual"
    | "middle"
    | "photo"
    | "rear"
    | "right"
    | "roll-1"
    | "roll-2"
    | "roll-3"
    | "roll-4"
    | "roll-5"
    | "roll-6"
    | "roll-7"
    | "roll-8"
    | "roll-9"
    | "roll-10"
    | "side"
    | "top"
    | "tray-1"
    | "tray-2"
    | "tray-3"
    | "tray-4"
    | "tray-5"
    | "tray-6"
    | "tray-7"
    | "tray-8"
    | "tray-9"
    | "tray-10"
    | "tray-11"
    | "tray-12"
    | "tray-13"
    | "tray-14"
    | "tray-15"
    | "tray-16"
    | "tray-17"
    | "tray-18"
    | "tray-19"
    | "tray-20";

export type MediaTooth =
    | "antique"
    | "calendared"
    | "coarse"
    | "fine"
    | "linen"
    | "medium"
    | "smooth"
    | "stipple"
    | "uncalendared"
    | "vellum";

export type MediaType =
    | "aluminum"
    | "auto"
    | "back-print-film"
    | "cardboard"
    | "cardstock"
    | "cd"
    | "continuous"
    | "continuous-long"
    | "continuous-short"
    | "corrugated-board"
    | "disc"
    | "disc-glossy"
    | "disc-high-gloss"
    | "disc-matte"
    | "disc-satin"
    | "disc-semi-gloss"
    | "double-wall"
    | "dry-film"
    | "dvd"
    | "embossing-foil"
    | "end-board"
    | "envelope"
    | "envelope-archival"
    | "envelope-bond"
    | "envelope-coated"
    | "envelope-cotton"
    | "envelope-fine"
    | "envelope-heavyweight"
    | "envelope-inkjet"
    | "envelope-lightweight"
    | "envelope-plain"
    | "envelope-preprinted"
    | "envelope-window"
    | "fabric"
    | "fabric-archival"
    | "fabric-glossy"
    | "fabric-high-gloss"
    | "fabric-matte"
    | "fabric-semi-gloss"
    | "fabric-waterproof"
    | "film"
    | "flexo-base"
    | "flexo-photo-polymer"
    | "flute"
    | "foil"
    | "full-cut-tabs"
    | "glass"
    | "glass-colored"
    | "glass-opaque"
    | "glass-surfaced"
    | "glass-textured"
    | "gravure-cylinder"
    | "image-setter-paper"
    | "imaging-cylinder"
    | "labels"
    | "labels-colored"
    | "labels-glossy"
    | "labels-high-gloss"
    | "labels-inkjet"
    | "labels-matte"
    | "labels-permanent"
    | "labels-satin"
    | "labels-security"
    | "labels-semi-gloss"
    | "laminating-foil"
    | "letterhead"
    | "metal"
    | "metal-glossy"
    | "metal-high-gloss"
    | "metal-matte"
    | "metal-satin"
    | "metal-semi-gloss"
    | "mounting-tape"
    | "multi-layer"
    | "multi-part-form"
    | "other"
    | "paper"
    | "photographic"
    | "photographic-archival"
    | "photographic-film"
    | "photographic-glossy"
    | "photographic-high-gloss"
    | "photographic-matte"
    | "photographic-satin"
    | "photographic-semi-gloss"
    | "plastic"
    | "plastic-archival"
    | "plastic-colored"
    | "plastic-glossy"
    | "plastic-high-gloss"
    | "plastic-matte"
    | "plastic-satin"
    | "plastic-semi-gloss"
    | "plate"
    | "polyester"
    | "pre-cut-tabs"
    | "roll"
    | "screen"
    | "screen-paged"
    | "self-adhesive"
    | "self-adhesive-film"
    | "shrink-foil"
    | "single-face"
    | "single-wall"
    | "sleeve"
    | "stationery"
    | "stationery-archival"
    | "stationery-coated"
    | "stationery-cotton"
    | "stationery-fine"
    | "stationery-heavyweight"
    | "stationery-heavyweight-coated"
    | "stationery-inkjet"
    | "stationery-letterhead"
    | "stationery-lightweight"
    | "stationery-preprinted"
    | "stationery-prepunched"
    | "tab-stock"
    | "tractor"
    | "transfer"
    | "transparency"
    | "triple-wall"
    | "wet-film";

export type MultipleDocumentHandling =
    | "separate-documents-collated-copies"
    | "separate-documents-uncollated-copies"
    | "single-document"
    | "single-document-new-sheet";

export type NotifyEvents =
    | "job-completed"
    | "job-config-changed"
    | "job-created"
    | "job-progress"
    | "job-state-changed"
    | "job-stopped"
    | "none"
    | "printer-config-changed"
    | "printer-finishings-changed"
    | "printer-media-changed"
    | "printer-queue-order-changed"
    | "printer-restarted"
    | "printer-shutdown"
    | "printer-state-changed"
    | "printer-stopped";

export type OutputBin =
    | "bottom"
    | "center"
    | "face-down"
    | "face-up"
    | "large-capacity"
    | "left"
    | "mailbox-1"
    | "mailbox-2"
    | "mailbox-3"
    | "mailbox-4"
    | "mailbox-5"
    | "mailbox-6"
    | "mailbox-7"
    | "mailbox-8"
    | "mailbox-9"
    | "mailbox-10"
    | "middle"
    | "my-mailbox"
    | "rear"
    | "right"
    | "side"
    | "stacker-1"
    | "stacker-2"
    | "stacker-3"
    | "stacker-4"
    | "stacker-5"
    | "stacker-6"
    | "stacker-7"
    | "stacker-8"
    | "stacker-9"
    | "stacker-10"
    | "top"
    | "tray-1"
    | "tray-2"
    | "tray-3"
    | "tray-4"
    | "tray-5"
    | "tray-6"
    | "tray-7"
    | "tray-8"
    | "tray-9"
    | "tray-10";

export type PageDelivery =
    | "reverse-order-face-down"
    | "reverse-order-face-up"
    | "same-order-face-down"
    | "same-order-face-up"
    | "system-specified";

export type PageOrder = "1-to-n-order" | "n-to-1-order";

export type PresentationDirectionNumberUp =
    | "tobottom-toleft"
    | "tobottom-toright"
    | "toleft-tobottom"
    | "toleft-totop"
    | "toright-tobottom"
    | "toright-totop"
    | "totop-toleft"
    | "totop-toright";

export type PrintColorMode =
    | "auto"
    | "auto-monochrome"
    | "bi-level"
    | "color"
    | "highlight"
    | "monochrome"
    | "process-bi-level"
    | "process-monochrome";

export type PrintContentOptimize = "auto" | "graphic" | "photo" | "text" | "text-and-graphic";

export type PrintRenderingIntent = "absolute" | "auto" | "perceptual" | "relative" | "relative-bpc" | "saturation";

export type PrinterStateReasons =
    | "alert-removal-of-binary-change-entry"
    | "bander-added"
    | "bander-almost-empty"
    | "bander-almost-full"
    | "bander-at-limit"
    | "bander-closed"
    | "bander-configuration-change"
    | "bander-cover-closed"
    | "bander-cover-open"
    | "bander-empty"
    | "bander-full"
    | "bander-interlock-closed"
    | "bander-interlock-open"
    | "bander-jam"
    | "bander-life-almost-over"
    | "bander-life-over"
    | "bander-memory-exhausted"
    | "bander-missing"
    | "bander-motor-failure"
    | "bander-near-limit"
    | "bander-offline"
    | "bander-opened"
    | "bander-over-temperature"
    | "bander-power-saver"
    | "bander-recoverable-failure"
    | "bander-recoverable-storage-error"
    | "bander-removed"
    | "bander-resource-added"
    | "bander-resource-removed"
    | "bander-thermistor-failure"
    | "bander-timing-failure"
    | "bander-turned-off"
    | "bander-turned-on"
    | "bander-under-temperature"
    | "bander-unrecoverable-failure"
    | "bander-unrecoverable-storage-error"
    | "bander-warming-up"
    | "binder-added"
    | "binder-almost-empty"
    | "binder-almost-full"
    | "binder-at-limit"
    | "binder-closed"
    | "binder-configuration-change"
    | "binder-cover-closed"
    | "binder-cover-open"
    | "binder-empty"
    | "binder-full"
    | "binder-interlock-closed"
    | "binder-interlock-open"
    | "binder-jam"
    | "binder-life-almost-over"
    | "binder-life-over"
    | "binder-memory-exhausted"
    | "binder-missing"
    | "binder-motor-failure"
    | "binder-near-limit"
    | "binder-offline"
    | "binder-opened"
    | "binder-over-temperature"
    | "binder-power-saver"
    | "binder-recoverable-failure"
    | "binder-recoverable-storage-error"
    | "binder-removed"
    | "binder-resource-added"
    | "binder-resource-removed"
    | "binder-thermistor-failure"
    | "binder-timing-failure"
    | "binder-turned-off"
    | "binder-turned-on"
    | "binder-under-temperature"
    | "binder-unrecoverable-failure"
    | "binder-unrecoverable-storage-error"
    | "binder-warming-up"
    | "cleaner-life-almost-over"
    | "cleaner-life-over"
    | "configuration-change"
    | "connecting-to-device"
    | "cover-open"
    | "deactivated"
    | "developer-empty"
    | "developer-low"
    | "die-cutter-added"
    | "die-cutter-almost-empty"
    | "die-cutter-almost-full"
    | "die-cutter-at-limit"
    | "die-cutter-closed"
    | "die-cutter-configuration-change"
    | "die-cutter-cover-closed"
    | "die-cutter-cover-open"
    | "die-cutter-empty"
    | "die-cutter-full"
    | "die-cutter-interlock-closed"
    | "die-cutter-interlock-open"
    | "die-cutter-jam"
    | "die-cutter-life-almost-over"
    | "die-cutter-life-over"
    | "die-cutter-memory-exhausted"
    | "die-cutter-missing"
    | "die-cutter-motor-failure"
    | "die-cutter-near-limit"
    | "die-cutter-offline"
    | "die-cutter-opened"
    | "die-cutter-over-temperature"
    | "die-cutter-power-saver"
    | "die-cutter-recoverable-failure"
    | "die-cutter-recoverable-storage-error"
    | "die-cutter-removed"
    | "die-cutter-resource-added"
    | "die-cutter-resource-removed"
    | "die-cutter-thermistor-failure"
    | "die-cutter-timing-failure"
    | "die-cutter-turned-off"
    | "die-cutter-turned-on"
    | "die-cutter-under-temperature"
    | "die-cutter-unrecoverable-failure"
    | "die-cutter-unrecoverable-storage-error"
    | "die-cutter-warming-up"
    | "door-open"
    | "folder-added"
    | "folder-almost-empty"
    | "folder-almost-full"
    | "folder-at-limit"
    | "folder-closed"
    | "folder-configuration-change"
    | "folder-cover-closed"
    | "folder-cover-open"
    | "folder-empty"
    | "folder-full"
    | "folder-interlock-closed"
    | "folder-interlock-open"
    | "folder-jam"
    | "folder-life-almost-over"
    | "folder-life-over"
    | "folder-memory-exhausted"
    | "folder-missing"
    | "folder-motor-failure"
    | "folder-near-limit"
    | "folder-offline"
    | "folder-opened"
    | "folder-over-temperature"
    | "folder-power-saver"
    | "folder-recoverable-failure"
    | "folder-recoverable-storage-error"
    | "folder-removed"
    | "folder-resource-added"
    | "folder-resource-removed"
    | "folder-thermistor-failure"
    | "folder-timing-failure"
    | "folder-turned-off"
    | "folder-turned-on"
    | "folder-under-temperature"
    | "folder-unrecoverable-failure"
    | "folder-unrecoverable-storage-error"
    | "folder-warming-up"
    | "fuser-over-temp"
    | "fuser-under-temp"
    | "imprinter-added"
    | "imprinter-almost-empty"
    | "imprinter-almost-full"
    | "imprinter-at-limit"
    | "imprinter-closed"
    | "imprinter-configuration-change"
    | "imprinter-cover-closed"
    | "imprinter-cover-open"
    | "imprinter-empty"
    | "imprinter-full"
    | "imprinter-interlock-closed"
    | "imprinter-interlock-open"
    | "imprinter-jam"
    | "imprinter-life-almost-over"
    | "imprinter-life-over"
    | "imprinter-memory-exhausted"
    | "imprinter-missing"
    | "imprinter-motor-failure"
    | "imprinter-near-limit"
    | "imprinter-offline"
    | "imprinter-opened"
    | "imprinter-over-temperature"
    | "imprinter-power-saver"
    | "imprinter-recoverable-failure"
    | "imprinter-recoverable-storage-error"
    | "imprinter-removed"
    | "imprinter-resource-added"
    | "imprinter-resource-removed"
    | "imprinter-thermistor-failure"
    | "imprinter-timing-failure"
    | "imprinter-turned-off"
    | "imprinter-turned-on"
    | "imprinter-under-temperature"
    | "imprinter-unrecoverable-failure"
    | "imprinter-unrecoverable-storage-error"
    | "imprinter-warming-up"
    | "input-cannot-feed-size-selected"
    | "input-manual-input-request"
    | "input-media-color-change"
    | "input-media-form-parts-change"
    | "input-media-size-change"
    | "input-media-type-change"
    | "input-media-weight-change"
    | "input-tray-elevation-failure"
    | "input-tray-missing"
    | "input-tray-position-failure"
    | "inserter-added"
    | "inserter-almost-empty"
    | "inserter-almost-full"
    | "inserter-at-limit"
    | "inserter-closed"
    | "inserter-configuration-change"
    | "inserter-cover-closed"
    | "inserter-cover-open"
    | "inserter-empty"
    | "inserter-full"
    | "inserter-interlock-closed"
    | "inserter-interlock-open"
    | "inserter-jam"
    | "inserter-life-almost-over"
    | "inserter-life-over"
    | "inserter-memory-exhausted"
    | "inserter-missing"
    | "inserter-motor-failure"
    | "inserter-near-limit"
    | "inserter-offline"
    | "inserter-opened"
    | "inserter-over-temperature"
    | "inserter-power-saver"
    | "inserter-recoverable-failure"
    | "inserter-recoverable-storage-error"
    | "inserter-removed"
    | "inserter-resource-added"
    | "inserter-resource-removed"
    | "inserter-thermistor-failure"
    | "inserter-timing-failure"
    | "inserter-turned-off"
    | "inserter-turned-on"
    | "inserter-under-temperature"
    | "inserter-unrecoverable-failure"
    | "inserter-unrecoverable-storage-error"
    | "inserter-warming-up"
    | "interlock-closed"
    | "interlock-open"
    | "interpreter-cartridge-added"
    | "interpreter-cartridge-deleted"
    | "interpreter-complex-page-encountered"
    | "interpreter-memory-decrease"
    | "interpreter-memory-increase"
    | "interpreter-resource-added"
    | "interpreter-resource-deleted"
    | "interpreter-resource-unavailable"
    | "make-envelope-added"
    | "make-envelope-almost-empty"
    | "make-envelope-almost-full"
    | "make-envelope-at-limit"
    | "make-envelope-closed"
    | "make-envelope-configuration-change"
    | "make-envelope-cover-closed"
    | "make-envelope-cover-open"
    | "make-envelope-empty"
    | "make-envelope-full"
    | "make-envelope-interlock-closed"
    | "make-envelope-interlock-open"
    | "make-envelope-jam"
    | "make-envelope-life-almost-over"
    | "make-envelope-life-over"
    | "make-envelope-memory-exhausted"
    | "make-envelope-missing"
    | "make-envelope-motor-failure"
    | "make-envelope-near-limit"
    | "make-envelope-offline"
    | "make-envelope-opened"
    | "make-envelope-over-temperature"
    | "make-envelope-power-saver"
    | "make-envelope-recoverable-failure"
    | "make-envelope-recoverable-storage-error"
    | "make-envelope-removed"
    | "make-envelope-resource-added"
    | "make-envelope-resource-removed"
    | "make-envelope-thermistor-failure"
    | "make-envelope-timing-failure"
    | "make-envelope-turned-off"
    | "make-envelope-turned-on"
    | "make-envelope-under-temperature"
    | "make-envelope-unrecoverable-failure"
    | "make-envelope-unrecoverable-storage-error"
    | "make-envelope-warming-up"
    | "marker-adjusting-print-quality"
    | "marker-developer-almost-empty"
    | "marker-developer-empty"
    | "marker-fuser-thermistor-failure"
    | "marker-fuser-timing-failure"
    | "marker-ink-almost-empty"
    | "marker-ink-empty"
    | "marker-print-ribbon-almost-empty"
    | "marker-print-ribbon-empty"
    | "marker-supply-empty"
    | "marker-supply-low"
    | "marker-toner-cartridge-missing"
    | "marker-waste-almost-full"
    | "marker-waste-full"
    | "marker-waste-ink-receptacle-almost-full"
    | "marker-waste-ink-receptacle-full"
    | "marker-waste-toner-receptacle-almost-full"
    | "marker-waste-toner-receptacle-full"
    | "media-empty"
    | "media-jam"
    | "media-low"
    | "media-needed"
    | "media-path-cannot-duplex-media-selected"
    | "media-path-media-tray-almost-full"
    | "media-path-media-tray-full"
    | "media-path-media-tray-missing"
    | "moving-to-paused"
    | "none"
    | "opc-life-over"
    | "opc-near-eol"
    | "other"
    | "output-area-almost-full"
    | "output-area-full"
    | "output-mailbox-select-failure"
    | "output-tray-missing"
    | "paused"
    | "perforater-added"
    | "perforater-almost-empty"
    | "perforater-almost-full"
    | "perforater-at-limit"
    | "perforater-closed"
    | "perforater-configuration-change"
    | "perforater-cover-closed"
    | "perforater-cover-open"
    | "perforater-empty"
    | "perforater-full"
    | "perforater-interlock-closed"
    | "perforater-interlock-open"
    | "perforater-jam"
    | "perforater-life-almost-over"
    | "perforater-life-over"
    | "perforater-memory-exhausted"
    | "perforater-missing"
    | "perforater-motor-failure"
    | "perforater-near-limit"
    | "perforater-offline"
    | "perforater-opened"
    | "perforater-over-temperature"
    | "perforater-power-saver"
    | "perforater-recoverable-failure"
    | "perforater-recoverable-storage-error"
    | "perforater-removed"
    | "perforater-resource-added"
    | "perforater-resource-removed"
    | "perforater-thermistor-failure"
    | "perforater-timing-failure"
    | "perforater-turned-off"
    | "perforater-turned-on"
    | "perforater-under-temperature"
    | "perforater-unrecoverable-failure"
    | "perforater-unrecoverable-storage-error"
    | "perforater-warming-up"
    | "power-down"
    | "power-up"
    | "printer-manual-reset"
    | "printer-nms-reset"
    | "printer-ready-to-print"
    | "puncher-added"
    | "puncher-almost-empty"
    | "puncher-almost-full"
    | "puncher-at-limit"
    | "puncher-closed"
    | "puncher-configuration-change"
    | "puncher-cover-closed"
    | "puncher-cover-open"
    | "puncher-empty"
    | "puncher-full"
    | "puncher-interlock-closed"
    | "puncher-interlock-open"
    | "puncher-jam"
    | "puncher-life-almost-over"
    | "puncher-life-over"
    | "puncher-memory-exhausted"
    | "puncher-missing"
    | "puncher-motor-failure"
    | "puncher-near-limit"
    | "puncher-offline"
    | "puncher-opened"
    | "puncher-over-temperature"
    | "puncher-power-saver"
    | "puncher-recoverable-failure"
    | "puncher-recoverable-storage-error"
    | "puncher-removed"
    | "puncher-resource-added"
    | "puncher-resource-removed"
    | "puncher-thermistor-failure"
    | "puncher-timing-failure"
    | "puncher-turned-off"
    | "puncher-turned-on"
    | "puncher-under-temperature"
    | "puncher-unrecoverable-failure"
    | "puncher-unrecoverable-storage-error"
    | "puncher-warming-up"
    | "separation-cutter-added"
    | "separation-cutter-almost-empty"
    | "separation-cutter-almost-full"
    | "separation-cutter-at-limit"
    | "separation-cutter-closed"
    | "separation-cutter-configuration-change"
    | "separation-cutter-cover-closed"
    | "separation-cutter-cover-open"
    | "separation-cutter-empty"
    | "separation-cutter-full"
    | "separation-cutter-interlock-closed"
    | "separation-cutter-interlock-open"
    | "separation-cutter-jam"
    | "separation-cutter-life-almost-over"
    | "separation-cutter-life-over"
    | "separation-cutter-memory-exhausted"
    | "separation-cutter-missing"
    | "separation-cutter-motor-failure"
    | "separation-cutter-near-limit"
    | "separation-cutter-offline"
    | "separation-cutter-opened"
    | "separation-cutter-over-temperature"
    | "separation-cutter-power-saver"
    | "separation-cutter-recoverable-failure"
    | "separation-cutter-recoverable-storage-error"
    | "separation-cutter-removed"
    | "separation-cutter-resource-added"
    | "separation-cutter-resource-removed"
    | "separation-cutter-thermistor-failure"
    | "separation-cutter-timing-failure"
    | "separation-cutter-turned-off"
    | "separation-cutter-turned-on"
    | "separation-cutter-under-temperature"
    | "separation-cutter-unrecoverable-failure"
    | "separation-cutter-unrecoverable-storage-error"
    | "separation-cutter-warming-up"
    | "sheet-rotator-added"
    | "sheet-rotator-almost-empty"
    | "sheet-rotator-almost-full"
    | "sheet-rotator-at-limit"
    | "sheet-rotator-closed"
    | "sheet-rotator-configuration-change"
    | "sheet-rotator-cover-closed"
    | "sheet-rotator-cover-open"
    | "sheet-rotator-empty"
    | "sheet-rotator-full"
    | "sheet-rotator-interlock-closed"
    | "sheet-rotator-interlock-open"
    | "sheet-rotator-jam"
    | "sheet-rotator-life-almost-over"
    | "sheet-rotator-life-over"
    | "sheet-rotator-memory-exhausted"
    | "sheet-rotator-missing"
    | "sheet-rotator-motor-failure"
    | "sheet-rotator-near-limit"
    | "sheet-rotator-offline"
    | "sheet-rotator-opened"
    | "sheet-rotator-over-temperature"
    | "sheet-rotator-power-saver"
    | "sheet-rotator-recoverable-failure"
    | "sheet-rotator-recoverable-storage-error"
    | "sheet-rotator-removed"
    | "sheet-rotator-resource-added"
    | "sheet-rotator-resource-removed"
    | "sheet-rotator-thermistor-failure"
    | "sheet-rotator-timing-failure"
    | "sheet-rotator-turned-off"
    | "sheet-rotator-turned-on"
    | "sheet-rotator-under-temperature"
    | "sheet-rotator-unrecoverable-failure"
    | "sheet-rotator-unrecoverable-storage-error"
    | "sheet-rotator-warming-up"
    | "shutdown"
    | "slitter-added"
    | "slitter-almost-empty"
    | "slitter-almost-full"
    | "slitter-at-limit"
    | "slitter-closed"
    | "slitter-configuration-change"
    | "slitter-cover-closed"
    | "slitter-cover-open"
    | "slitter-empty"
    | "slitter-full"
    | "slitter-interlock-closed"
    | "slitter-interlock-open"
    | "slitter-jam"
    | "slitter-life-almost-over"
    | "slitter-life-over"
    | "slitter-memory-exhausted"
    | "slitter-missing"
    | "slitter-motor-failure"
    | "slitter-near-limit"
    | "slitter-offline"
    | "slitter-opened"
    | "slitter-over-temperature"
    | "slitter-power-saver"
    | "slitter-recoverable-failure"
    | "slitter-recoverable-storage-error"
    | "slitter-removed"
    | "slitter-resource-added"
    | "slitter-resource-removed"
    | "slitter-thermistor-failure"
    | "slitter-timing-failure"
    | "slitter-turned-off"
    | "slitter-turned-on"
    | "slitter-under-temperature"
    | "slitter-unrecoverable-failure"
    | "slitter-unrecoverable-storage-error"
    | "slitter-warming-up"
    | "spool-area-full"
    | "stacker-added"
    | "stacker-almost-empty"
    | "stacker-almost-full"
    | "stacker-at-limit"
    | "stacker-closed"
    | "stacker-configuration-change"
    | "stacker-cover-closed"
    | "stacker-cover-open"
    | "stacker-empty"
    | "stacker-full"
    | "stacker-interlock-closed"
    | "stacker-interlock-open"
    | "stacker-jam"
    | "stacker-life-almost-over"
    | "stacker-life-over"
    | "stacker-memory-exhausted"
    | "stacker-missing"
    | "stacker-motor-failure"
    | "stacker-near-limit"
    | "stacker-offline"
    | "stacker-opened"
    | "stacker-over-temperature"
    | "stacker-power-saver"
    | "stacker-recoverable-failure"
    | "stacker-recoverable-storage-error"
    | "stacker-removed"
    | "stacker-resource-added"
    | "stacker-resource-removed"
    | "stacker-thermistor-failure"
    | "stacker-timing-failure"
    | "stacker-turned-off"
    | "stacker-turned-on"
    | "stacker-under-temperature"
    | "stacker-unrecoverable-failure"
    | "stacker-unrecoverable-storage-error"
    | "stacker-warming-up"
    | "stapler-added"
    | "stapler-almost-empty"
    | "stapler-almost-full"
    | "stapler-at-limit"
    | "stapler-closed"
    | "stapler-configuration-change"
    | "stapler-cover-closed"
    | "stapler-cover-open"
    | "stapler-empty"
    | "stapler-full"
    | "stapler-interlock-closed"
    | "stapler-interlock-open"
    | "stapler-jam"
    | "stapler-life-almost-over"
    | "stapler-life-over"
    | "stapler-memory-exhausted"
    | "stapler-missing"
    | "stapler-motor-failure"
    | "stapler-near-limit"
    | "stapler-offline"
    | "stapler-opened"
    | "stapler-over-temperature"
    | "stapler-power-saver"
    | "stapler-recoverable-failure"
    | "stapler-recoverable-storage-error"
    | "stapler-removed"
    | "stapler-resource-added"
    | "stapler-resource-removed"
    | "stapler-thermistor-failure"
    | "stapler-timing-failure"
    | "stapler-turned-off"
    | "stapler-turned-on"
    | "stapler-under-temperature"
    | "stapler-unrecoverable-failure"
    | "stapler-unrecoverable-storage-error"
    | "stapler-warming-up"
    | "stitcher-added"
    | "stitcher-almost-empty"
    | "stitcher-almost-full"
    | "stitcher-at-limit"
    | "stitcher-closed"
    | "stitcher-configuration-change"
    | "stitcher-cover-closed"
    | "stitcher-cover-open"
    | "stitcher-empty"
    | "stitcher-full"
    | "stitcher-interlock-closed"
    | "stitcher-interlock-open"
    | "stitcher-jam"
    | "stitcher-life-almost-over"
    | "stitcher-life-over"
    | "stitcher-memory-exhausted"
    | "stitcher-missing"
    | "stitcher-motor-failure"
    | "stitcher-near-limit"
    | "stitcher-offline"
    | "stitcher-opened"
    | "stitcher-over-temperature"
    | "stitcher-power-saver"
    | "stitcher-recoverable-failure"
    | "stitcher-recoverable-storage-error"
    | "stitcher-removed"
    | "stitcher-resource-added"
    | "stitcher-resource-removed"
    | "stitcher-thermistor-failure"
    | "stitcher-timing-failure"
    | "stitcher-turned-off"
    | "stitcher-turned-on"
    | "stitcher-under-temperature"
    | "stitcher-unrecoverable-failure"
    | "stitcher-unrecoverable-storage-error"
    | "stitcher-warming-up"
    | "stopped-partly"
    | "stopping"
    | "subunit-added"
    | "subunit-almost-empty"
    | "subunit-almost-full"
    | "subunit-at-limit"
    | "subunit-closed"
    | "subunit-empty"
    | "subunit-full"
    | "subunit-life-almost-over"
    | "subunit-life-over"
    | "subunit-memory-exhausted"
    | "subunit-missing"
    | "subunit-motor-failure"
    | "subunit-near-limit"
    | "subunit-offline"
    | "subunit-opened"
    | "subunit-over-temperature"
    | "subunit-power-saver"
    | "subunit-recoverable-failure"
    | "subunit-recoverable-storage-error"
    | "subunit-removed"
    | "subunit-resource-added"
    | "subunit-resource-removed"
    | "subunit-thermistor-failure"
    | "subunit-timing-Failure"
    | "subunit-turned-off"
    | "subunit-turned-on"
    | "subunit-under-temperature"
    | "subunit-unrecoverable-failure"
    | "subunit-unrecoverable-storage-error"
    | "subunit-warming-up"
    | "timed-out"
    | "toner-empty"
    | "toner-low"
    | "trimmer-added"
    | "trimmer-almost-empty"
    | "trimmer-almost-full"
    | "trimmer-at-limit"
    | "trimmer-closed"
    | "trimmer-configuration-change"
    | "trimmer-cover-closed"
    | "trimmer-cover-open"
    | "trimmer-empty"
    | "trimmer-full"
    | "trimmer-interlock-closed"
    | "trimmer-interlock-open"
    | "trimmer-jam"
    | "trimmer-life-almost-over"
    | "trimmer-life-over"
    | "trimmer-memory-exhausted"
    | "trimmer-missing"
    | "trimmer-motor-failure"
    | "trimmer-near-limit"
    | "trimmer-offline"
    | "trimmer-opened"
    | "trimmer-over-temperature"
    | "trimmer-power-saver"
    | "trimmer-recoverable-failure"
    | "trimmer-recoverable-storage-error"
    | "trimmer-removed"
    | "trimmer-resource-added"
    | "trimmer-resource-removed"
    | "trimmer-thermistor-failure"
    | "trimmer-timing-failure"
    | "trimmer-turned-off"
    | "trimmer-turned-on"
    | "trimmer-under-temperature"
    | "trimmer-unrecoverable-failure"
    | "trimmer-unrecoverable-storage-error"
    | "trimmer-warming-up"
    | "unknown"
    | "wrapper-added"
    | "wrapper-almost-empty"
    | "wrapper-almost-full"
    | "wrapper-at-limit"
    | "wrapper-closed"
    | "wrapper-configuration-change"
    | "wrapper-cover-closed"
    | "wrapper-cover-open"
    | "wrapper-empty"
    | "wrapper-full"
    | "wrapper-interlock-closed"
    | "wrapper-interlock-open"
    | "wrapper-jam"
    | "wrapper-life-almost-over"
    | "wrapper-life-over"
    | "wrapper-memory-exhausted"
    | "wrapper-missing"
    | "wrapper-motor-failure"
    | "wrapper-near-limit"
    | "wrapper-offline"
    | "wrapper-opened"
    | "wrapper-over-temperature"
    | "wrapper-power-saver"
    | "wrapper-recoverable-failure"
    | "wrapper-recoverable-storage-error"
    | "wrapper-removed"
    | "wrapper-resource-added"
    | "wrapper-resource-removed"
    | "wrapper-thermistor-failure"
    | "wrapper-timing-failure"
    | "wrapper-turned-off"
    | "wrapper-turned-on"
    | "wrapper-under-temperature"
    | "wrapper-unrecoverable-failure"
    | "wrapper-unrecoverable-storage-error"
    | "wrapper-warming-up";

export type PwgRasterDocumentTypeSupported =
    | "adobe-rgb_8"
    | "adobe-rgb_16"
    | "black_1"
    | "black_8"
    | "black_16"
    | "cmyk_8"
    | "cmyk_16"
    | "device1_8"
    | "device1_16"
    | "device2_8"
    | "device2_16"
    | "device3_8"
    | "device3_16"
    | "device4_8"
    | "device4_16"
    | "device5_8"
    | "device5_16"
    | "device6_8"
    | "device6_16"
    | "device7_8"
    | "device7_16"
    | "device8_8"
    | "device8_16"
    | "device9_8"
    | "device9_16"
    | "device10_8"
    | "device10_16"
    | "device11_8"
    | "device11_16"
    | "device12_8"
    | "device12_16"
    | "device13_8"
    | "device13_16"
    | "device14_8"
    | "device14_16"
    | "device15_8"
    | "device15_16"
    | "rgb_8"
    | "rgb_16"
    | "sgray_1"
    | "sgray_8"
    | "sgray_16"
    | "srgb_8"
    | "srgb_16";

export type PrintQuality = "draft" | "normal" | "high";

export type RequestedPrinterAttributeGroups = "all" | "job-template" | "printer-description";

export type RequestedJobAttributeGroups = "all" | "job-description" | "job-template";

export type SaveDisposition = "none" | "print-save" | "save-only";

export type SeparatorSheetsType = "both-sheets" | "end-sheet" | "none" | "slip-sheets" | "start-sheet";

export type Sides = "one-sided" | "two-sided-long-edge" | "two-sided-short-edge";

export type WhichJobs =
    | "aborted"
    | "all"
    | "canceled"
    | "completed"
    | "not-completed"
    | "pending"
    | "pending-held"
    | "processing"
    | "processing-stopped"
    | "proof-print"
    | "saved";

export type XImagePosition = "center" | "left" | "none" | "right";

export type YImagePosition = "bottom" | "center" | "none" | "top";

export type CharacterSet =
    | "ASMO-708"
    | "DOS-720"
    | "iso-8859-6"
    | "x-mac-arabic"
    | "windows-1256"
    | "ibm775"
    | "iso-8859-4"
    | "windows-1257"
    | "ibm852"
    | "iso-8859-2"
    | "x-mac-ce"
    | "windows-1250"
    | "EUC-CN"
    | "gb2312"
    | "hz-gb-2312"
    | "x-mac-chinesesimp"
    | "big5"
    | "x-Chinese-CNS"
    | "x-Chinese-Eten"
    | "cp866"
    | "iso-8859-5"
    | "koi8-r"
    | "koi8-u"
    | "x-mac-cyrillic"
    | "windows-1251"
    | "x-Europa"
    | "x-IA5-German"
    | "ibm737"
    | "iso-8859-7"
    | "x-mac-greek"
    | "ibm869"
    | "DOS-862"
    | "iso-8859-8-i"
    | "iso-8859-8"
    | "x-mac-hebrew"
    | "windows-1255"
    | "x-EBCDIC-Arabic"
    | "x-EBCDIC-CyrillicRussian"
    | "x-EBCDIC-CyrillicSerbianBulgarian"
    | "x-EBCDIC-DenmarkNorway"
    | "x-ebcdic-denmarknorway-euro"
    | "x-EBCDIC-FinlandSweden"
    | "x-ebcdic-finlandsweden-euro"
    | "x-ebcdic-france-euro"
    | "x-EBCDIC-Germany"
    | "x-ebcdic-germany-euro"
    | "x-EBCDIC-GreekModern"
    | "x-EBCDIC-Greek"
    | "x-EBCDIC-Hebrew"
    | "x-EBCDIC-Icelandic"
    | "x-ebcdic-icelandic-euro"
    | "x-ebcdic-international-euro"
    | "x-EBCDIC-Italy"
    | "x-ebcdic-italy-euro"
    | "x-EBCDIC-JapaneseAndKana"
    | "x-EBCDIC-JapaneseAndJapaneseLatin"
    | "x-EBCDIC-JapaneseAndUSCanada"
    | "x-EBCDIC-JapaneseKatakana"
    | "x-EBCDIC-KoreanAndKoreanExtended"
    | "x-EBCDIC-KoreanExtended"
    | "CP870"
    | "x-EBCDIC-SimplifiedChinese"
    | "X-EBCDIC-Spain"
    | "x-ebcdic-spain-euro"
    | "x-EBCDIC-Thai"
    | "x-EBCDIC-TraditionalChinese"
    | "CP1026"
    | "x-EBCDIC-Turkish"
    | "x-EBCDIC-UK"
    | "x-ebcdic-uk-euro"
    | "ebcdic-cp-us"
    | "x-ebcdic-cp-us-euro"
    | "ibm861"
    | "x-mac-icelandic"
    | "x-iscii-as"
    | "x-iscii-be"
    | "x-iscii-de"
    | "x-iscii-gu"
    | "x-iscii-ka"
    | "x-iscii-ma"
    | "x-iscii-or"
    | "x-iscii-pa"
    | "x-iscii-ta"
    | "x-iscii-te"
    | "x-euc-jp"
    | "iso-2022-jp"
    | "csISO2022JP"
    | "x-mac-japanese"
    | "shift_jis"
    | "ks_c_5601-1987"
    | "euc-kr"
    | "iso-2022-kr"
    | "Johab"
    | "x-mac-korean"
    | "iso-8859-3"
    | "iso-8859-15"
    | "x-IA5-Norwegian"
    | "IBM437"
    | "x-IA5-Swedish"
    | "windows-874"
    | "ibm857"
    | "iso-8859-9"
    | "x-mac-turkish"
    | "windows-1254"
    | "unicode"
    | "unicodeFFFE"
    | "utf-7"
    | "utf-8"
    | "us-ascii"
    | "windows-1258"
    | "ibm850"
    | "x-IA5"
    | "iso-8859-1"
    | "macintosh"
    | "Windows-1252 ";

export type UriSchemes =
    | "aaa"
    | "aaas"
    | "about"
    | "acap"
    | "acct"
    | "acd"
    | "acr"
    | "adiumxtra"
    | "adt"
    | "afp"
    | "afs"
    | "aim"
    | "amss"
    | "android"
    | "appdata"
    | "apt"
    | "ark"
    | "attachment"
    | "aw"
    | "barion"
    | "beshare"
    | "bitcoin"
    | "bitcoincash"
    | "blob"
    | "bolo"
    | "browserext"
    | "calculator"
    | "callto"
    | "cap"
    | "cast"
    | "casts"
    | "chrome"
    | "chrome-extension"
    | "cid"
    | "coap"
    | "coap+tcp"
    | "coap+ws"
    | "coaps"
    | "coaps+tcp"
    | "coaps+ws"
    | "com-eventbrite-attendee"
    | "content"
    | "conti"
    | "crid"
    | "cvs"
    | "dab"
    | "data"
    | "dav"
    | "diaspora"
    | "dict"
    | "did"
    | "dis"
    | "dlna-playcontainer"
    | "dlna-playsingle"
    | "dns"
    | "dntp"
    | "dpp"
    | "drm"
    | "drop"
    | "dtn"
    | "dvb"
    | "ed2k"
    | "elsi"
    | "example"
    | "facetime"
    | "fax"
    | "feed"
    | "feedready"
    | "file"
    | "filesystem"
    | "finger"
    | "first-run-pen-experience"
    | "fish"
    | "fm"
    | "ftp"
    | "fuchsia-pkg"
    | "geo"
    | "gg"
    | "git"
    | "gizmoproject"
    | "go"
    | "gopher"
    | "graph"
    | "gtalk"
    | "h323"
    | "ham"
    | "hcap"
    | "hcp"
    | "http"
    | "https"
    | "hxxp"
    | "hxxps"
    | "hydrazone"
    | "iax"
    | "icap"
    | "icon"
    | "im"
    | "imap"
    | "info"
    | "iotdisco"
    | "ipn"
    | "ipp"
    | "ipps"
    | "irc"
    | "irc6"
    | "ircs"
    | "iris"
    | "iris.beep"
    | "iris.lwz"
    | "iris.xpc"
    | "iris.xpcs"
    | "isostore"
    | "itms"
    | "jabber"
    | "jar"
    | "jms"
    | "keyparc"
    | "lastfm"
    | "ldap"
    | "ldaps"
    | "leaptofrogans"
    | "lorawan"
    | "lvlt"
    | "magnet"
    | "mailserver"
    | "mailto"
    | "maps"
    | "market"
    | "message"
    | "microsoft.windows.camera"
    | "microsoft.windows.camera.multipicker"
    | "microsoft.windows.camera.picker"
    | "mid"
    | "mms"
    | "modem"
    | "mongodb"
    | "moz"
    | "ms-access"
    | "ms-browser-extension"
    | "ms-calculator"
    | "ms-drive-to"
    | "ms-enrollment"
    | "ms-excel"
    | "ms-eyecontrolspeech"
    | "ms-gamebarservices"
    | "ms-gamingoverlay"
    | "ms-getoffice"
    | "ms-help"
    | "ms-infopath"
    | "ms-inputapp"
    | "ms-lockscreencomponent-config"
    | "ms-media-stream-id"
    | "ms-mixedrealitycapture"
    | "ms-mobileplans"
    | "ms-officeapp"
    | "ms-people"
    | "ms-project"
    | "ms-powerpoint"
    | "ms-publisher"
    | "ms-restoretabcompanion"
    | "ms-screenclip"
    | "ms-screensketch"
    | "ms-search"
    | "ms-search-repair"
    | "ms-secondary-screen-controller"
    | "ms-secondary-screen-setup"
    | "ms-settings"
    | "ms-settings-airplanemode"
    | "ms-settings-bluetooth"
    | "ms-settings-camera"
    | "ms-settings-cellular"
    | "ms-settings-cloudstorage"
    | "ms-settings-connectabledevices"
    | "ms-settings-displays-topology"
    | "ms-settings-emailandaccounts"
    | "ms-settings-language"
    | "ms-settings-location"
    | "ms-settings-lock"
    | "ms-settings-nfctransactions"
    | "ms-settings-notifications"
    | "ms-settings-power"
    | "ms-settings-privacy"
    | "ms-settings-proximity"
    | "ms-settings-screenrotation"
    | "ms-settings-wifi"
    | "ms-settings-workplace"
    | "ms-spd"
    | "ms-sttoverlay"
    | "ms-transit-to"
    | "ms-useractivityset"
    | "ms-virtualtouchpad"
    | "ms-visio"
    | "ms-walk-to"
    | "ms-whiteboard"
    | "ms-whiteboard-cmd"
    | "ms-word"
    | "msnim"
    | "msrp"
    | "msrps"
    | "mss"
    | "mtqp"
    | "mumble"
    | "mupdate"
    | "mvn"
    | "news"
    | "nfs"
    | "ni"
    | "nih"
    | "nntp"
    | "notes"
    | "ocf"
    | "oid"
    | "onenote"
    | "onenote-cmd"
    | "opaquelocktoken"
    | "openpgp4fpr"
    | "pack"
    | "palm"
    | "paparazzi"
    | "payment"
    | "payto"
    | "pkcs11"
    | "platform"
    | "pop"
    | "pres"
    | "prospero"
    | "proxy"
    | "pwid"
    | "psyc"
    | "pttp"
    | "qb"
    | "query"
    | "quic-transport"
    | "redis"
    | "rediss"
    | "reload"
    | "res"
    | "resource"
    | "rmi"
    | "rsync"
    | "rtmfp"
    | "rtmp"
    | "rtsp"
    | "rtsps"
    | "rtspu"
    | "secondlife"
    | "service"
    | "session"
    | "sftp"
    | "sgn"
    | "shttp"
    | "sieve"
    | "simpleledger"
    | "sip"
    | "sips"
    | "skype"
    | "smb"
    | "sms"
    | "smtp"
    | "snews"
    | "snmp"
    | "soap.beep"
    | "soap.beeps"
    | "soldat"
    | "spiffe"
    | "spotify"
    | "ssh"
    | "steam"
    | "stun"
    | "stuns"
    | "submit"
    | "svn"
    | "tag"
    | "teamspeak"
    | "tel"
    | "teliaeid"
    | "telnet"
    | "tftp"
    | "things"
    | "thismessage"
    | "tip"
    | "tn3270"
    | "tool"
    | "turn"
    | "turns"
    | "tv"
    | "udp"
    | "unreal"
    | "urn"
    | "ut2004"
    | "v-event"
    | "vemmi"
    | "ventrilo"
    | "videotex"
    | "vnc"
    | "view-source"
    | "wais"
    | "webcal"
    | "wpid"
    | "ws"
    | "wss"
    | "wtai"
    | "wyciwyg"
    | "xcon"
    | "xcon-userid"
    | "xfire"
    | "xmlrpc.beep"
    | "xmlrpc.beeps"
    | "xmpp"
    | "xri"
    | "ymsgr"
    | "z39.50"
    | "z39.50r"
    | "z39.50s";

export type PrinterServiceType = "copy" | "faxin" | "faxout" | "print" | "print3d" | "scan" | "transform";

export type PrinterKind =
    | "disc"
    | "document"
    | "envelope"
    | "label"
    | "large"
    | "photo"
    | "postcard"
    | "receipt"
    | "roll";

export type PrinterState = "idle" | "processing" | "stopped";

export type SystemState = "idle" | "processing" | "stopped";

export type PowerState =
    | "on"
    | "on-vendor1"
    | "on-vendor2"
    | "on-vendor3"
    | "on-vendor4"
    | "on-vendor5"
    | "standby"
    | "standby-vendor1"
    | "standby-vendor2"
    | "standby-vendor3"
    | "standby-vendor4"
    | "standby-vendor5"
    | "suspend"
    | "suspend-vendor1"
    | "suspend-vendor2"
    | "suspend-vendor3"
    | "suspend-vendor4"
    | "suspend-vendor5"
    | "reset-soft"
    | "off-hard"
    | "hibernate"
    | "hibernate-vendor1"
    | "hibernate-vendor2"
    | "hibernate-vendor3"
    | "hibernate-vendor4"
    | "hibernate-vendor5"
    | "off-soft"
    | "off-soft-vendor1"
    | "off-soft-vendor2"
    | "off-soft-vendor3"
    | "off-soft-vendor4"
    | "off-soft-vendor5"
    | "reset-hard"
    | "reset-mbr"
    | "reset-nmi"
    | "off-soft-graceful"
    | "off-hard-graceful"
    | "reset-mbr-graceful"
    | "reset-soft-graceful"
    | "reset-hard-graceful"
    | "reset-init"
    | "not-applicable"
    | "no-change";

export type DocumentState = "pending" | "processing" | "processing-stopped" | "canceled" | "aborted" | "completed";

export type JobState =
    | "pending"
    | "pending-held"
    | "processing"
    | "processing-stopped"
    | "canceled"
    | "aborted"
    | "completed";

export type ResourceState = "pending" | "available" | "installed" | "canceled" | "aborted";

export type TransmissionStatus = "pending" | "pending-retry" | "processing" | "canceled" | "aborted" | "completed";

export type OrientationRequested = "portrait" | "landscape" | "reverse-landscape" | "reverse-portrait" | "none";

export type AccuracyUnits = "mm" | "nm" | "um";

export type BalingType = "band" | "shrink-wrap" | "wrap";

export type BalingWhen = "after-job" | "after-sets";

export type XriAuthentication = "basic" | "certificate" | "digest" | "none" | "requesting-user-name";

export type XriSecurity = "none" | "ssl3" | "tls";

export type TrimmingType = "draw-line" | "full" | "partial" | "perforate" | "score" | "tab";

export type ReferenceEdge = "bottom" | "left" | "right" | "top";

export type StitchingMethod = "auto" | "crimp" | "wire";

export type TimeoutPredicate = "activity" | "inactivity" | "none";

export type SystemTimeoutSource = "dhcp" | "ntp" | "onboard" | "sntp";

export type ResourceType =
    | "executable-firmware"
    | "executable-software"
    | "static-font"
    | "static-form"
    | "static-icc-profile"
    | "static-image"
    | "static-logo"
    | "static-other"
    | "static-strings"
    | "template-document"
    | "template-job"
    | "template-printer";

export type PrintSupports = "material" | "none" | "standard";

export type PrintScaling = "auto" | "auto-fit" | "fill" | "fit" | "none";

export type PrintBase = "brim" | "none" | "raft" | "skirt" | "standard";

export type MaterialType =
    | "abs"
    | "abs-carbon-fiber"
    | "abs-carbon-nanotube"
    | "chocolate"
    | "gold"
    | "nylon"
    | "pet"
    | "photopolymer"
    | "pla"
    | "pla-conductive"
    | "pla-dissolvable"
    | "pla-flexible"
    | "pla-magnetic"
    | "pla-steel"
    | "pla-stone"
    | "pla-wood"
    | "polycarbonate"
    | "pva-dissolvable"
    | "silver"
    | "titanium"
    | "wax";

export type MaterialRateUnits = "mg_second" | "ml_second" | "mm_second";

export type MaterialPurpose = "all" | "base" | "in-fill" | "shell" | "support";

export type MaterialAmountUnits = "g" | "kg" | "l" | "m" | "ml" | "mm";

export type LaminatingType = "archival" | "glossy" | "high-gloss" | "matte" | "semi-gloss" | "translucent";

export type FinishingSides = "back" | "both" | "front";

export type JobRetainUntil = "end-of-day" | "end-of-month" | "end-of-week" | "indefinite" | "none";

export type JobPasswordRepertoire =
    | "iana_us-ascii_any"
    | "iana_us-ascii_complex"
    | "iana_us-ascii_digits"
    | "iana_us-ascii_letters"
    | "iana_utf-8_any"
    | "iana_utf-8_digits"
    | "iana_utf-8_letters";

export type InputSource = "adf" | "film-reader" | "platen";

export type InputFilmScanMode =
    | "black-and-white-negative-film"
    | "color-negative-film"
    | "color-slide-film"
    | "not-applicable";

export type InputContentType = "auto" | "halftone" | "line-art" | "magazine" | "photo" | "text" | "text-and-photo";

export type InputColorMode =
    | "auto"
    | "bi-level"
    | "cmyk_8"
    | "cmyk_16"
    | "color"
    | "color_8"
    | "monochrome"
    | "monochrome_4"
    | "monochrome_8"
    | "monochrome_16"
    | "rgb_16"
    | "rgba_8"
    | "rgba_16";

export type FoldingDirection = "inward" | "outward";

export type Finishings =
    | "bale"
    | "bind"
    | "bind-bottom"
    | "bind-left"
    | "bind-right"
    | "bind-top"
    | "booklet-maker"
    | "coat"
    | "cover"
    | "edge-stitch"
    | "edge-stitch-bottom"
    | "edge-stitch-left"
    | "edge-stitch-right"
    | "edge-stitch-top"
    | "fold"
    | "fold-accordion"
    | "fold-double-gate"
    | "fold-engineering-z"
    | "fold-gate"
    | "fold-half"
    | "fold-half-z"
    | "fold-left-gate"
    | "fold-letter"
    | "fold-parallel"
    | "fold-poster"
    | "fold-right-gate"
    | "fold-z"
    | "jdf-f2-1"
    | "jdf-f4-1"
    | "jdf-f4-2"
    | "jdf-f6-1"
    | "jdf-f6-2"
    | "jdf-f6-3"
    | "jdf-f6-4"
    | "jdf-f6-5"
    | "jdf-f6-6"
    | "jdf-f6-7"
    | "jdf-f6-8"
    | "jdf-f8-1"
    | "jdf-f8-2"
    | "jdf-f8-3"
    | "jdf-f8-4"
    | "jdf-f8-5"
    | "jdf-f8-6"
    | "jdf-f8-7"
    | "jdf-f10-1"
    | "jdf-f10-2"
    | "jdf-f10-3"
    | "jdf-f12-1"
    | "jdf-f12-2"
    | "jdf-f12-3"
    | "jdf-f12-4"
    | "jdf-f12-5"
    | "jdf-f12-6"
    | "jdf-f12-7"
    | "jdf-f12-8"
    | "jdf-f12-9"
    | "jdf-f12-10"
    | "jdf-f12-11"
    | "jdf-f12-12"
    | "jdf-f12-13"
    | "jdf-f12-14"
    | "jdf-f14-1"
    | "jdf-f16-1"
    | "jdf-f16-2"
    | "jdf-f16-3"
    | "jdf-f16-4"
    | "jdf-f16-5"
    | "jdf-f16-6"
    | "jdf-f16-7"
    | "jdf-f16-8"
    | "jdf-f16-9"
    | "jdf-f16-10"
    | "jdf-f16-11"
    | "jdf-f16-12"
    | "jdf-f16-13"
    | "jdf-f16-14"
    | "jdf-f18-1"
    | "jdf-f18-2"
    | "jdf-f18-3"
    | "jdf-f18-4"
    | "jdf-f18-5"
    | "jdf-f18-6"
    | "jdf-f18-7"
    | "jdf-f18-8"
    | "jdf-f18-9"
    | "jdf-f20-1"
    | "jdf-f20-2"
    | "jdf-f24-1"
    | "jdf-f24-2"
    | "jdf-f24-3"
    | "jdf-f24-4"
    | "jdf-f24-5"
    | "jdf-f24-6"
    | "jdf-f24-7"
    | "jdf-f24-8"
    | "jdf-f24-9"
    | "jdf-f24-10"
    | "jdf-f24-11"
    | "jdf-f28-1"
    | "jdf-f32-1"
    | "jdf-f32-2"
    | "jdf-f32-3"
    | "jdf-f32-4"
    | "jdf-f32-5"
    | "jdf-f32-6"
    | "jdf-f32-7"
    | "jdf-f32-8"
    | "jdf-f32-9"
    | "jdf-f36-1"
    | "jdf-f36-2"
    | "jdf-f40-1"
    | "jdf-f48-1"
    | "jdf-f48-2"
    | "jdf-f64-1"
    | "jdf-f64-2"
    | "jog-offset"
    | "laminate"
    | "punch"
    | "punch-bottom-left"
    | "punch-bottom-right"
    | "punch-dual-bottom"
    | "punch-dual-left"
    | "punch-dual-right"
    | "punch-dual-top"
    | "punch-multiple-bottom"
    | "punch-multiple-left"
    | "punch-multiple-right"
    | "punch-multiple-top"
    | "punch-quad-bottom"
    | "punch-quad-left"
    | "punch-quad-right"
    | "punch-quad-top"
    | "punch-top-left"
    | "punch-top-right"
    | "punch-triple-bottom"
    | "punch-triple-left"
    | "punch-triple-right"
    | "punch-triple-top"
    | "saddle-stitch"
    | "staple"
    | "staple-bottom-left"
    | "staple-bottom-right"
    | "staple-dual-bottom"
    | "staple-dual-left"
    | "staple-dual-right"
    | "staple-dual-top"
    | "staple-top-left"
    | "staple-top-right"
    | "staple-triple-bottom"
    | "staple-triple-left"
    | "staple-triple-right"
    | "staple-triple-top"
    | "trim"
    | "trim-after-copies"
    | "trim-after-documents"
    | "trim-after-job"
    | "trim-after-pages";

export type BindingType = "adhesive" | "comb" | "flat" | "padding" | "perfect" | "spiral" | "tape" | "velo";

export type CoatingType =
    | "archival"
    | "archival-glossy"
    | "archival-matte"
    | "archival-semi-gloss"
    | "glossy"
    | "high-gloss"
    | "matte"
    | "semi-gloss"
    | "silicone"
    | "translucent";

export type IPPVersion = "1.0" | "1.1" | "2.0" | "2.1" | "2.2";

export type JobAccountType = "general" | "group" | "none";

export type MultipleObjectHandling = "auto" | "best-fit" | "best-quality" | "best-speed" | "one-at-a-time";

export type Overrides = keyof JobTemplateAttributes | "document-copies" | "document-numbers" | "pages";

export type Resolution = [number, number, string];
