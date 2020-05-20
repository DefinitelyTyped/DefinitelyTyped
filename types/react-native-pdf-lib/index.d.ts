// Type definitions for react-native-pdf-lib 0.2
// Project: https://github.com/Hopding/react-native-pdf-lib#readme
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare let PDFLib: {
    getDocumentsDirectory(): string;
};

export default PDFLib;

export class PDFDocument {
    static create(path: string): PDFDocument;

    addPages(pages: PDFPage[]): PDFDocument;

    /* Saves the document and returns the path to the file it wrote */
    write(): Promise<string>;
}

export interface SetMediaBoxOptions {
    x?: number;
    y?: number;
}

export interface TextDrawingOptions {
    x?: number;
    y?: number;
    color?: string;
    fontName?: string;
    fontSize?: number;
}

export interface RectangleDrawingOptions {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    color?: string;
}

export interface ImageDrawingOptions {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}

export class PDFPage {
    static create(): PDFPage;

    setMediaBox(width: number, height: number, options?: SetMediaBoxOptions): PDFPage;

    drawText(text: string, options?: TextDrawingOptions): PDFPage;
    drawRectangle(options?: RectangleDrawingOptions): PDFPage;
    drawImage(imageUri: string, options?: ImageDrawingOptions): PDFPage;
}
