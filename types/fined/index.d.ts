export = fined;

declare function fined(path: string | fined.PathSpec, opts?: fined.PathSpec): fined.Result | null;

declare namespace fined {
    interface PathSpec {
        path?: string | undefined;
        name?: string | undefined;
        extensions?: string | string[] | { [extension: string]: string | null } | undefined;
        cwd?: string | undefined;
        findUp?: boolean | undefined;
    }

    interface Result {
        path: string;
        extension: string | { [extension: string]: string };
    }
}
