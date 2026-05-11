export * from "uuid";

export interface V6SetupOpts {
    disableRandom: boolean;
}

export function v6(): string;
export function v6setup(opts?: Partial<V6SetupOpts>): typeof v6;
