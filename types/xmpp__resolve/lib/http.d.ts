export function resolve(domain: string): Promise<ResolvedEndpoint[]>;

export interface ResolvedEndpoint {
    rel: string;
    href: string;
    uri: string;
    method: string;
}
