import { Permissions } from './operation/option/protectpdf/permissions';
import { PageLayout } from './operation/option/createpdf/page-layout';
import { CreatePDFFromHtmlOptions } from './operation/option/createpdf/create-pdf-from-html-options';
import { CreatePDFFromWordOptions } from './operation/option/createpdf/create-pdf-from-word-options';
import { CreatePDFFromExcelOptions } from './operation/option/createpdf/create-pdf-from-excel-options';
import { CreatePDFFromPPTOptions } from './operation/option/createpdf/create-pdf-from-ppt-options';
import { DocumentMergeOptions, OutputFormat } from './operation/option/documentmerge/document-merge-options';
import { ExtractPdfOptions } from './operation/option/extractpdf/extract-pdf-options';
import { OCROptions } from './operation/option/ocr/ocr-options';
import { CompressionLevel, CompressPDFOptions } from './operation/option/compresspdf/compress-pdf-options';
import { Fragments as FragmentsType } from './operation/option/documentmerge/fragments';
import { PageRanges } from './operation/option/page-ranges';
import {
    PasswordProtectOptions,
    EncryptionAlgorithm,
    ContentEncryption,
    Permission,
} from './operation/option/protectpdf/password-protect-options';

import { CombineFilesOperation } from './operation/combine-file-operation';
import { CompressPDFOperation } from './operation/compress-pdf-operation';
import { CreatePDFOperation } from './operation/create-pdf-operation';
import { DeletePagesOperation } from './operation/delete-pages-operation';
import { DocumentMergeOperation } from './operation/document-merge-operation';
import { ExportPDFOperation } from './operation/export-pdf-operation';
import { ExportPDFToImagesOperation } from './operation/export-pdf-to-images-operation';
import { ExtractPdfOperation } from './operation/extract-pdf-operation';
import { InsertPagesOperation } from './operation/insert-pages-operation';
import { LinearizePDFOperation } from './operation/linearize-pdf-operation';
import { OCROperation } from './operation/ocr-operation';
import { PDFPropertiesOperation } from './operation/pdf-properties-operation';
import { ProtectPDFOperation } from './operation/protect-pdf-operation';
import { RemoveProtectionOperation } from './operation/remove-protection-operation';
import { ReorderPagesOperation } from './operation/reorder-pages-operation';
import { ReplacePagesOperation } from './operation/replace-pages-operation';
import { RotatePagesOperation } from './operation/rotate-pages-operation';
import { SplitPDFOperation } from './operation/split-pdf-operation';

import { ServiceApiError } from './error/service-api-error';
import { ServiceUsageError } from './error/service-usage-error';
import { Credentials } from './auth/credentials';
import { ClientConfig } from './client-config';
import { ExecutionContext } from './execution-context';
import { FileRef } from './io/file-ref';
import { PDFPropertiesOptions } from './operation/option/pdfproperties/pdf-properties-options';
export interface PdfFormat {
    /**
     * Represents "application/pdf" media type
     */
    pdf: 'application/pdf';
}

export namespace CreatePDF {
    export { CreatePDFOperation as Operation };
    export const SupportedMediaTypes: {
        bmp: string;
        doc: string;
        docx: string;
        gif: string;
        html: string;
        jpeg: string;
        jpg: string;
        png: string;
        ppt: string;
        pptx: string;
        rtf: string;
        tif: string;
        tiff: string;
        txt: string;
        xls: string;
        xlsx: string;
        zip: string;
    };
    export const SupportedSourceFormat: {
        bmp: string;
        doc: string;
        docx: string;
        gif: string;
        html: string;
        jpeg: string;
        jpg: string;
        png: string;
        ppt: string;
        pptx: string;
        rtf: string;
        tif: string;
        tiff: string;
        txt: string;
        xls: string;
        xlsx: string;
        zip: string;
    };
    export namespace options {
        namespace html {
            export { CreatePDFFromHtmlOptions };
            export { PageLayout };
        }
        namespace word {
            export { CreatePDFFromWordOptions };
            export const SupportedDocumentLanguage: {
                DA_DK: string;
                LT_LT: string;
                SL_SI: string;
                EL_GR: string;
                RU_RU: string;
                EN_US: string;
                ZH_HK: string;
                HU_HU: string;
                ET_EE: string;
                PT_BR: string;
                UK_UA: string;
                NB_NO: string;
                PL_PL: string;
                LV_LV: string;
                FI_FI: string;
                JA_JP: string;
                ES_ES: string;
                BG_BG: string;
                EN_GB: string;
                CS_CZ: string;
                MT_MT: string;
                DE_DE: string;
                HR_HR: string;
                SK_SK: string;
                SR_SR: string;
                CA_CA: string;
                MK_MK: string;
                KO_KR: string;
                DE_CH: string;
                NL_NL: string;
                ZH_CN: string;
                SV_SE: string;
                IT_IT: string;
                NO_NO: string;
                TR_TR: string;
                FR_FR: string;
                RO_RO: string;
                IW_IL: string;
            };
        }
        namespace excel {
            export { CreatePDFFromExcelOptions };
            export const SupportedDocumentLanguage: {
                DA_DK: string;
                LT_LT: string;
                SL_SI: string;
                EL_GR: string;
                RU_RU: string;
                EN_US: string;
                ZH_HK: string;
                HU_HU: string;
                ET_EE: string;
                PT_BR: string;
                UK_UA: string;
                NB_NO: string;
                PL_PL: string;
                LV_LV: string;
                FI_FI: string;
                JA_JP: string;
                ES_ES: string;
                BG_BG: string;
                EN_GB: string;
                CS_CZ: string;
                MT_MT: string;
                DE_DE: string;
                HR_HR: string;
                SK_SK: string;
                SR_SR: string;
                CA_CA: string;
                MK_MK: string;
                KO_KR: string;
                DE_CH: string;
                NL_NL: string;
                ZH_CN: string;
                SV_SE: string;
                IT_IT: string;
                NO_NO: string;
                TR_TR: string;
                FR_FR: string;
                RO_RO: string;
                IW_IL: string;
            };
        }
        namespace ppt {
            export { CreatePDFFromPPTOptions };
            export const SupportedDocumentLanguage: {
                DA_DK: string;
                LT_LT: string;
                SL_SI: string;
                EL_GR: string;
                RU_RU: string;
                EN_US: string;
                ZH_HK: string;
                HU_HU: string;
                ET_EE: string;
                PT_BR: string;
                UK_UA: string;
                NB_NO: string;
                PL_PL: string;
                LV_LV: string;
                FI_FI: string;
                JA_JP: string;
                ES_ES: string;
                BG_BG: string;
                EN_GB: string;
                CS_CZ: string;
                MT_MT: string;
                DE_DE: string;
                HR_HR: string;
                SK_SK: string;
                SR_SR: string;
                CA_CA: string;
                MK_MK: string;
                KO_KR: string;
                DE_CH: string;
                NL_NL: string;
                ZH_CN: string;
                SV_SE: string;
                IT_IT: string;
                NO_NO: string;
                TR_TR: string;
                FR_FR: string;
                RO_RO: string;
                IW_IL: string;
            };
        }
    }
}
export namespace ExportPDF {
    export { ExportPDFOperation as Operation };
    export const SupportedSourceFormat: {
        pdf: string;
    };
    export const SupportedTargetFormats: {
        DOC: any;
        DOCX: any;
        JPEG: any;
        PNG: any;
        PPTX: any;
        RTF: any;
        XLSX: any;
    };
}
export namespace ExportPDFToImages {
    export { ExportPDFToImagesOperation as Operation };
    export const SupportedSourceFormat: {
        pdf: string;
    };
    export const SupportedTargetFormats: {
        JPEG: any;
        PNG: any;
    };
}
export namespace CombineFiles {
    export { CombineFilesOperation as Operation };
    export const SupportedSourceFormat: {
        pdf: string;
    };
}
export namespace OCR {
    export { OCROperation as Operation };
    export const SupportedSourceFormat: PdfFormat;
    export namespace options {
        export { OCROptions };
        export const OCRSupportedLocale: {
            DA_DK: string;
            LT_LT: string;
            SL_SI: string;
            EL_GR: string;
            RU_RU: string;
            EN_US: string;
            ZH_HK: string;
            HU_HU: string;
            ET_EE: string;
            PT_BR: string;
            UK_UA: string;
            NB_NO: string;
            PL_PL: string;
            LV_LV: string;
            FI_FI: string;
            JA_JP: string;
            ES_ES: string;
            BG_BG: string;
            EN_GB: string;
            CS_CZ: string;
            MT_MT: string;
            DE_DE: string;
            HR_HR: string;
            SK_SK: string;
            SR_SR: string;
            CA_CA: string;
            MK_MK: string;
            KO_KR: string;
            DE_CH: string;
            NL_NL: string;
            ZH_CN: string;
            SV_SE: string;
            IT_IT: string;
            NO_NO: string;
            TR_TR: string;
            FR_FR: string;
            RO_RO: string;
            IW_IL: string;
        };
        export const OCRSupportedType: {
            SEARCHABLE_IMAGE: string;
            SEARCHABLE_IMAGE_EXACT: string;
        };
    }
}
export namespace CompressPDF {
    export { CompressPDFOperation as Operation };
    export const SupportedSourceFormat: PdfFormat;
    export namespace options {
        export { CompressPDFOptions };
        export const CompressionLevel: CompressionLevel;
    }
}
export namespace LinearizePDF {
    export { LinearizePDFOperation as Operation };
    export const SupportedSourceFormat: PdfFormat;
}
export namespace ProtectPDF {
    export { ProtectPDFOperation as Operation };
    export const SupportedSourceFormat: PdfFormat;
    export namespace options {
        export { PasswordProtectOptions };
        export { Permissions };
        export const EncryptionAlgorithm: EncryptionAlgorithm;
        export const ContentEncryption: ContentEncryption;
        export const Permission: Permission;
    }
}
export namespace ExtractPDF {
    export { ExtractPdfOperation as Operation };
    export const SupportedSourceFormat: PdfFormat;
    export namespace options {
        export { ExtractPdfOptions };
        export const TableStructureType: any;
        export const ExtractElementType: any;
        export const ExtractRenditionsElementType: any;
    }
}
export namespace RotatePages {
    export { RotatePagesOperation as Operation };
    export const SupportedSourceFormat: PdfFormat;
    export const Angle: any;
}
export namespace DeletePages {
    export { DeletePagesOperation as Operation };
    export const SupportedSourceFormat: PdfFormat;
}
export namespace ReorderPages {
    export { ReorderPagesOperation as Operation };
    export const SupportedSourceFormat: PdfFormat;
}
export namespace InsertPages {
    export { InsertPagesOperation as Operation };
    export const SupportedSourceFormat: PdfFormat;
}
export namespace ReplacePages {
    export { ReplacePagesOperation as Operation };
    export const SupportedSourceFormat: PdfFormat;
}
export namespace RemoveProtection {
    export { RemoveProtectionOperation as Operation };
    export const SupportedSourceFormat: PdfFormat;
}
export namespace SplitPDF {
    export { SplitPDFOperation as Operation };
    export const SupportedSourceFormat: PdfFormat;
}
export namespace DocumentMerge {
    export { DocumentMergeOperation as Operation };
    export const SupportedSourceFormat: { docx: string };
    export namespace options {
        const DocumentMergeOptions: DocumentMergeOptions;
        const OutputFormat: OutputFormat;
    }
}
export namespace PDFProperties {
    export { PDFPropertiesOperation as Operation };
    export const SupportedSourceFormat: any;
    export namespace options {
        const PDFPropertiesOptions: PDFPropertiesOptions;
    }
}
export namespace Error {
    export { ServiceApiError };
    export { ServiceUsageError };
}
export const Fragments: FragmentsType;
export { Credentials, ClientConfig, ExecutionContext, FileRef, PageRanges };
