// Type definitions for tesseract.js
// Project: https://github.com/naptha/tesseract.js
// Definitions by: York Yao <https://github.com/plantain-00/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace Tesseract {
    type ImageLike = string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement
        | CanvasRenderingContext2D | File | Blob | ImageData | Buffer;
    interface Progress {
        status: string;
        progress: number;
        loaded?: number;
    }
    interface Block {
        paragraphs: Paragraph;
        text: string;
        confidence: number;
        baseline: Baseline;
        bbox: Bbox;
        blocktype: string;
        polygon: any;
        page: Page;
        lines: Line[];
        words: Word[];
        symbols: Symbol[];
    }
    interface Baseline {
        x0: number;
        y0: number;
        x1: number;
        y1: number;
        has_baseline: boolean;
    }
    interface Bbox {
        x0: number;
        y0: number;
        x1: number;
        y1: number;
    }
    interface Line {
        words: Word[];
        text: string;
        confidence: number;
        baseline: Baseline;
        bbox: Bbox;
        paragraph: Paragraph;
        block: Block;
        page: Page;
        symbols: Symbol[];
    }
    interface Paragraph {
        lines: Line[];
        text: string;
        confidence: number;
        baseline: Baseline;
        bbox: Bbox;
        is_ltr: boolean;
        block: Block;
        page: Page;
        words: Word[];
        symbols: Symbol[];
    }
    interface Symbol {
        choices: Choice[];
        image: any;
        text: string;
        confidence: number;
        baseline: Baseline;
        bbox: Bbox;
        is_superscript: boolean;
        is_subscript: boolean;
        is_dropcap: boolean;
        word: Word;
        line: Line;
        paragraph: Paragraph;
        block: Block;
        page: Page;
    }
    interface Choice {
        text: string;
        confidence: number;
    }
    interface Word {
        symbols: Symbol[];
        choices: Choice[];
        text: string;
        confidence: number;
        baseline: Baseline;
        bbox: Bbox;
        is_numeric: boolean;
        in_dictionary: boolean;
        direction: string;
        language: string;
        is_bold: boolean;
        is_italic: boolean;
        is_underlined: boolean;
        is_monospace: boolean;
        is_serif: boolean;
        is_smallcaps: boolean;
        font_size: number;
        font_id: number;
        font_name: string;
        line: Line;
        paragraph: Paragraph;
        block: Block;
        page: Page;
    }
    interface Page {
        blocks: Block[];
        confidence: number;
        html: string;
        lines: Line[];
        oem: string;
        paragraphs: Paragraph[];
        psm: string;
        symbols: Symbol[];
        text: string;
        version: string;
        words: Word[];
    }
    interface TesseractJob {
        then: (callback: (result: Page) => void) => TesseractJob;
        progress: (callback: (progress: Progress) => void) => TesseractJob;
        catch: (callback: (error: Error) => void) => TesseractJob;
        finally: (callback: (resultOrError: Error | Page) => void) => TesseractJob;
        error?: (error: Error) => TesseractJob;
    }

    interface TesseractStatic {
        recognize(image: ImageLike): TesseractJob;
        recognize(image: ImageLike, options: any): TesseractJob;
        detect(image: ImageLike): TesseractJob;

        create(paths: {
            workerPath: string;
            langPath: string;
            corePath: string;
        }): TesseractStatic;
    }
}

declare var Tesseract: Tesseract.TesseractStatic;
export = Tesseract;
export as namespace Tesseract;
