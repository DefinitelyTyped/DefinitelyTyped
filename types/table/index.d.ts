// Type definitions for table 6.0
// Project: https://github.com/gajus/table
// Definitions by: Evan Shortiss <https://github.com/evanshortiss>
//                 mrmlnc <https://github.com/mrmlnc>
//                 Daniel Perez Alvarez <https://github.com/unindented>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type TableBorderTemplate = 'honeywell' | 'norc' | 'ramac' | 'void';

export interface TableBorder {
    topBody?: string;
    topJoin?: string;
    topLeft?: string;
    topRight?: string;

    bottomBody?: string;
    bottomJoin?: string;
    bottomLeft?: string;
    bottomRight?: string;

    bodyLeft?: string;
    bodyRight?: string;
    bodyJoin?: string;

    joinBody?: string;
    joinLeft?: string;
    joinRight?: string;
    joinJoin?: string;
}

export interface TableColumns {
    alignment?: 'left' | 'center' | 'right';
    paddingLeft?: number;
    paddingRight?: number;
    truncate?: number;
    width?: number;
    wrapWord?: boolean;
}

export type TableDrawHorizontalLine = (index: number, size: number) => boolean;

export interface TableUserConfig {
    border?: TableBorder;
    columns?: {
        [index: number]: TableColumns;
    };
    columnDefault?: TableColumns;
    columnCount?: number;
    drawHorizontalLine?: TableDrawHorizontalLine;
    singleLine?: boolean;
}

export interface TableStream {
    write(row: string[]): void;
}

export function table(data: any[], userConfig?: TableUserConfig): string;

export function createStream(userConfig: TableUserConfig): TableStream;

export function getBorderCharacters(templateName: TableBorderTemplate): TableBorder;
