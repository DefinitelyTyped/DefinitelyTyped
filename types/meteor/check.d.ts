
declare module Match {
    var Any: any;
    var String: any;
    var Integer: any;
    var Boolean: any;
    var undefined: any;
    var Object: any;

    function Maybe(pattern: any): boolean;

    function Optional(pattern: any): boolean;

    function ObjectIncluding(dico: any): boolean;

    function OneOf(...patterns: any[]): any;

    function Where(condition: any): any;

    function test(value: any, pattern: any): boolean;
}

declare function check(value: any, pattern: any): void;

declare module "meteor/check" {
    module Match {
        var Any: any;
        var String: any;
        var Integer: any;
        var Boolean: any;
        var undefined: any;
        var Object: any;

        function Maybe(pattern: any): boolean;

        function Optional(pattern: any): boolean;

        function ObjectIncluding(dico: any): boolean;

        function OneOf(...patterns: any[]): any;

        function Where(condition: any): any;

        function test(value: any, pattern: any): boolean;
    }

    function check(value: any, pattern: any): void;
}
