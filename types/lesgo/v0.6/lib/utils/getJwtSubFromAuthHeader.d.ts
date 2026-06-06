export function getTokenData(authHeader: string): {
    sub?: string;
};

declare function getJwtSubFromAuthHeader(authHeader: string): Promise<string | null>;

export default getJwtSubFromAuthHeader;
