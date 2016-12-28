// Type definitions for json2csv
// Project: https://github.com/zemirco/json2csv
// Definitions by: Mizunashi Mana <https://github.com/mizunashi-mana/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace json2csv {

  interface FieldValueCallback<T> {
      (row: T, field: string, data: string): string;
  }

  interface FieldBase {
      label?: string;
      default?: string;
  }

  interface Field extends FieldBase {
      value: string;
  }

  interface CallbackField<T> extends FieldBase {
      value: FieldValueCallback<T>;
  }

  interface Options<T> {
    data: T[];
    fields?: (string | Field | CallbackField<T>)[];
    fieldNames?: string[];
    del?: string;
    defaultValue?: string;
    quotes?: string;
    doubleQuotes?: string;
    hasCSVColumnTitle?: boolean;
    eol?: string;
    newLine?: string;
    flatten?: boolean;
    unwindPath?: string;
    excelStrings?: boolean;
    includeEmptyRows?: boolean;
  }

  interface Callback {
    (error: Error, csv: string): void;
  }
}

declare function json2csv<T>(options: json2csv.Options<T>, callback: json2csv.Callback): void;
declare function json2csv<T>(options: json2csv.Options<T>): string;

export = json2csv;
