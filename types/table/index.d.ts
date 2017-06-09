// Type definitions for Tabris.js 4.0
// Project: https://github.com/gajus/table
// Definitions by: Evan Shortiss <http://github.com/evanshortiss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type borderType = 'honeywell' | 'norc' | 'ramac' | 'void';

export interface ColumnConfig {
  alignment?: string;
  width?: number;
  truncate?: number;
  paddingLeft?: string;
  paddingRight?: string;
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
  drawJoin?(index: number, size: number): boolean;
  border?: JoinStruct;
  columnDefault?: ColumnConfig;
}

export function table(data: any[], userConfig?: TableUserConfig): string;

export function createStream(userConfig: TableUserConfig): { write: string[] };

export function getBorderCharacters(templateName: borderType): JoinStruct;
