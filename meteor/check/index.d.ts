export module Match {
    function Maybe(pattern: any): boolean;

    let Any: any;
    let String: any;
    let Integer: any;
    let Boolean: any;
    let undefined: any;
    let Object: any;

    function Optional(pattern: any): boolean;

    function ObjectIncluding(dico: any): boolean;

    function OneOf(...patterns: any[]): any;

    function Where(condition: any): any;

    function test(value: any, pattern: any): boolean;
}

export function check(value: any, pattern: any): void;