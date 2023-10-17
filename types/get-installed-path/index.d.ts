export function getInstalledPath(name: string, opts?: Options): Promise<string>;
export function getInstalledPathSync(name: string, opts?: Options): string;

export interface Options {
    cwd?: string | undefined;
    local?: boolean | undefined;
    paths?: readonly string[] | undefined;
}
