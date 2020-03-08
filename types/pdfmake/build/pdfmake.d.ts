import { TFontFamily, TFontFamilyTypes, TDocumentDefinitions, TCreatedPdf, pdfMakeStatic } from "../interfaces";

export let vfs: TFontFamily;
export let fonts: { [name: string]: TFontFamilyTypes };
export function createPdf(
    documentDefinitions: TDocumentDefinitions,
    tableLayouts?: any,
    fonts?: any,
    vfs?: any
): TCreatedPdf;

export let pdfMake: pdfMakeStatic;
