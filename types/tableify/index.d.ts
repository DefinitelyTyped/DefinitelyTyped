export = tableify;

declare function tableify<T extends Record<string, any>>(
    obj: T | ReadonlyArray<T>,
    columns?: ReadonlyArray<keyof T> | false,
    parents?: any[],
): string;
declare function tableify(obj: any): string;
declare namespace tableify {
    interface Config {
        classes?: boolean | undefined;
        classPrefix?: string | undefined;
    }
    function defaults(config: Config): {
        <T extends Record<string, any>>(
            obj: T | ReadonlyArray<T>,
            columns?: ReadonlyArray<keyof T> | false,
            parents?: any[],
        ): string;
        (obj: any): string;
    };
}
