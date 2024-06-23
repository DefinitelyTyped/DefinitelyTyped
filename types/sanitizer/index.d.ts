export interface ISaxHandler {
    startTag(name: string, attribs: string[], param: any): void;
    endTag(name: string, param: any): void;
    pcdata(text: string, param: any): void;
    cdata(text: string, param: any): void;
    rcdata(text: string, param: any): void;
    comment(text: string, param: any): void;
    startDoc(param: any): void;
    endDoc(param: any): void;
}

export declare function escape(s: string): string;

export declare function makeSaxParser(yourHandler: ISaxHandler): (...any: any[]) => any;

export declare function normalizeRCData(s: string): string;

export declare function sanitize(s: string): string;

export declare function unescapeEntities(s: string): string;
