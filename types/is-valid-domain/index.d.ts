declare function isValidDomain(
    text: string,
    opts?: { subdomain?: boolean | undefined; wildcard?: boolean | undefined },
): boolean;

export = isValidDomain;
