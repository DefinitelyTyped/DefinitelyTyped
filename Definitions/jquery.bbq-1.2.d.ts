// Type definitions for jquery.bbq 1.2.1
// Project: http://benalman.com/projects/jquery-bbq-plugin/
// Definitions by: https://github.com/sunetos
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface JQueryBBQ {
  pushState(params?: any, merge_mode?: number): void;
  getState(key?: string, coerce?: bool): any;
  removeState(...key: any[]): void;
}

interface JQueryParam {
  (obj: any): string;
  (obj: any, traditional: bool): string;

  querystring(url?: string): string;
  querystring(url: string, params: any, merge_mode?: number): string;
  fragment: {
    noEscape: (chars?: string) => void;
    (url?: string): string;
    (url: string, params: any, merge_mode?: number): string;
  };
}

interface JQueryDeparam {
  (params: string, coerce?: bool): any;
  querystring(url?: string, coerce?: bool): any;
  fragment(url?: string, coerce?: bool): any;
}

interface JQueryStatic {
  bbq: JQueryBBQ;
  param: JQueryParam;
  deparam: JQueryDeparam;

  elemUrlAttr(tag_attr: any): any;
}

interface JQuery {
  querystring(attr?: any, params?: any, merge_mode?: number): JQuery;
  fragment(attr?: any, params?: any, merge_mode?: number): JQuery;
}
