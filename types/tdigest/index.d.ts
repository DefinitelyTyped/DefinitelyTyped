export class TDigest {
    constructor(delta: number | false, K: number | undefined, CX: number | undefined);
    reset(): void;
    size(): number;
    toArray(everything: boolean): number[];
    summary(): string;
    push(x: number, n?: number): void;
    push_centroid(c: number | ReadonlyArray<number>): void;
    find_nearest(x: number): number;
    bound_mean(x: number): [number, number];
    p_rank(x: number): number;
    p_rank(xlist: ReadonlyArray<number>): number[];
    bound_mean_cumn(cumn: number): [number, number];
    percentile(p: number): number;
    percentile(plist: ReadonlyArray<number>): number[];
    pop_random(choices: number): number[];
    compress(): void;
}

export interface DigestConfiguration {
    mode: 'disc' | 'cont' | 'auto';
    ratio: number;
    thresh: number;
}

export class Digest extends TDigest {
    constructor(config?: Partial<DigestConfiguration>);
    push(x_or_xlist: number | ReadonlyArray<number>): void;
    check_continuous(): boolean;
}
