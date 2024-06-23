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
    x?: number | undefined;
    y?: number | undefined;
}

export interface TextDrawingOptions {
    x?: number | undefined;
    y?: number | undefined;
    color?: string | undefined;
    fontName?: string | undefined;
    fontSize?: number | undefined;
}

export interface RectangleDrawingOptions {
    x?: number | undefined;
    y?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    color?: string | undefined;
}

export interface ImageDrawingOptions {
    x?: number | undefined;
    y?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
}

export class PDFPage {
    static create(): PDFPage;

    setMediaBox(width: number, height: number, options?: SetMediaBoxOptions): PDFPage;

    drawText(text: string, options?: TextDrawingOptions): PDFPage;
    drawRectangle(options?: RectangleDrawingOptions): PDFPage;
    drawImage(imageUri: string, options?: ImageDrawingOptions): PDFPage;
}
