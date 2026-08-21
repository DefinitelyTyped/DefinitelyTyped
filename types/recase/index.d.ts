export interface Recase {
    camelCopy(orig: any): any;
    snakeCopy(orig: any): any;
}
export function create(opts: {
    exceptions?: {
        [origKey: string]: string;
    } | undefined;
}): Recase;
