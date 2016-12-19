// Type definitions for Tabris.js v4.0.1
// Project: https://github.com/gajus/table
// Definitions by: Evan Shortiss <http://github.com/evanshortiss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module 'table' {

  type borderType = 'honeywell' | 'norc' | 'ramac' | 'void';

  interface IColumnConfig {
    alignment?: string,
    width?: number,
    truncate?: number,
    paddingLeft?: string
    paddingRight?: string
  }

  interface IJoinStruct {
    topBody?: string,
    topJoin?: string,
    topLeft?: string,
    topRight?: string,

    bottomBody?: string,
    bottomJoin?: string,
    bottomLeft?: string,
    bottomRight?: string,

    bodyLeft?: string,
    bodyRight?: string,
    bodyJoin?: string,

    joinBody?: string,
    joinLeft?: string,
    joinRight?: string,
    joinJoin?: string
  }

  interface ITableUserConfig {
    columns?: {
     [index: number]: IColumnConfig
    }
    drawJoin?: (index: number, size: number) => boolean
    border?: IJoinStruct
    columnDefault?: IColumnConfig
  }

  namespace Table {
    function table (data: Array<any>, userConfig?: ITableUserConfig) : string;

    function createStream (userConfig: ITableUserConfig): { write: (string[]) };

    function getBorderCharacters (templateName: borderType): IJoinStruct;
  }

  export = Table;
}
