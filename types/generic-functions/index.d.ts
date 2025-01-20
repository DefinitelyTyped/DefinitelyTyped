declare module "generic-functions" {
    function strcmp(str1: string, str2: string): boolean;
    function icstrcmp(str1: string, str2: string): boolean;
    function strendswith(str: string, suffix: string): boolean;
    function icstrendswith(str: string, suffix: string): boolean;
    function endswithdot(str: string): string;
    function println(message: string): void;
    function printlns(message: string[]): void;
    function objGetKeyByValue(object: Object, value: any): string;
}
