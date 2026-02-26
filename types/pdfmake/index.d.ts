import {
    BufferOptions,
    CustomTableLayout,
    ProgressCallback,
    TCreatedPdf,
    TDocumentDefinitions,
    TFontContainer,
    TFontDictionary,
    TVirtualFileSystem,
} from "./interfaces";

export type { TCreatedPdf };
export type { Alignment, Content, CustomTableLayout, Style, Table, TableCell, TableLayout } from "./interfaces";

export function createPdf(
    documentDefinitions: TDocumentDefinitions,
    options?: BufferOptions,
): TCreatedPdf;

export function setProgressCallback(callback: ProgressCallback): void;

export function addTableLayouts(tableLayouts: Record<string, CustomTableLayout>): void;
export function setTableLayouts(tableLayouts: Record<string, CustomTableLayout>): void;
export function clearTableLayouts(): void;

export let fonts: TFontDictionary;
export function addFonts(fonts: TFontDictionary): void;
export function setFonts(fonts: TFontDictionary): void;
export function clearFonts(): void;

/**
 * **Note:** Only supported in the browser.
 */
export function addVirtualFileSystem(vfs: TVirtualFileSystem): void;

/**
 * **Note:** Only supported in the browser.
 */
export function addFontContainer(fontContainer: TFontContainer): void;

export as namespace pdfMake;
