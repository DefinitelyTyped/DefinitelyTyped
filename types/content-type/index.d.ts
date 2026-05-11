export function parse(input: RequestLike | ResponseLike | string): ParsedMediaType;
export function format(obj: MediaType): string;

export interface ParsedMediaType {
    type: string;
    parameters: { [key: string]: string };
}

export interface MediaType {
    type: string;
    parameters?: { [key: string]: string } | undefined;
}

export interface RequestLike {
    headers: { [header: string]: string | string[] | undefined };
}

export interface ResponseLike {
    getHeader(name: string): number | string | string[] | undefined;
}
