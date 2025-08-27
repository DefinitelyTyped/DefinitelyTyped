export function linkify(source: string, options?: LinkifyOptions): string;
export interface LinkifyOptions {
    strong?: boolean | undefined;
    repository?: string | undefined;
}
