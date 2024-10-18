export interface Names {
    claim: string;
    source: string;
}

export function generate(token: string, alg: string, crv?: string): string;

export function validate(names: Names, actual: string, source: string, alg: string, crv?: string): void;
