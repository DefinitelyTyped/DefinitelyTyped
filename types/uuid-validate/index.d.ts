declare function validate(uuid: string, version?: number): boolean;
declare namespace validate {
    function version(uuid: string): number;
}
export = validate;
