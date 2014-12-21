

interface jsPDFAPI {
    [idx: string]: (...params: any[]) => void;
}

declare class jsPDF {
    constructor(orientation?: string, unit?: string, format?: string);

    addPage(): void;
    circle(x: number, y: number, r: number, style: string): jsPDF;
    ellipse(x: number, y: number, rx: number, ry: number, style: string): jsPDF;
    getFontList(): { [font: string]: string[] };
    lines(lines: number[][], x: number, y: number, scale: number): jsPDF;
    output(type: string, options: any): jsPDF;
    rect(x: number, y: number, w: number, h: number, style: string): jsPDF;
    setDrawColor(ch1: any, ch2: any, ch3: any, ch4: any): jsPDF;
    setFillColor(ch1: any, ch2: any, ch3: any, ch4: any): jsPDF;
    setFont(fontName: string, fontStyle: string): jsPDF;
    setFontSize(size: number): jsPDF;
    setFontStyle(style: string): jsPDF;
    setLineCap(style: any): jsPDF;
    setLineJoin(style: any): jsPDF;
    setLineWidth(width: number): jsPDF;
    setProperties(props: { [prop: string]: string }): jsPDF;
    setTextColor(r: number, g: number, b: number): jsPDF;
    text(text: string, x: number, y: number, flags: any): jsPDF;
    triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, style: string): jsPDF;
    addImage(data: string, type: string, x?: number, y?: number, width?: number, height?: number): jsPDF;
    fromHTML(element: any, x?: number, y?: number, settings?: { [prop: string]: string }, callback?: () => void): jsPDF;
    save(filename: string): void;
}

declare module 'jsPDF' {
    export = jsPDF;
}

