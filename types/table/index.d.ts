// Type definitions for table 4.0
// Project: https://github.com/gajus/table
// Definitions by: Evan Shortiss <https://github.com/evanshortiss>
//                 mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type BorderType = 'honeywell' | 'norc' | 'ramac' | 'void';

export interface ColumnConfig {
    alignment?: 'left' | 'center' | 'right';
    paddingLeft?: number;
    paddingRight?: number;
    truncate?: number;
    width?: number;
    wrapWord?: boolean;
}

export interface JoinStruct {
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

export interface TableUserConfig {
    columns?: {
        [index: number]: ColumnConfig
    };
    drawHorizontalLine?: (index: number, size: number) => boolean;
    border?: JoinStruct;
    columnDefault?: ColumnConfig;
    columnCount?: number;
    singleLine?: boolean;
}

export function table(data: any[], userConfig?: TableUserConfig): string;

export function createStream(userConfig: TableUserConfig): { write: string[] };

export function getBorderCharacters(templateName: BorderType): JoinStruct;
