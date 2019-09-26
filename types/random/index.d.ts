// Type definitions for random 2.1
// Project: https://github.com/transitive-bullshit/random
// Definitions by: Nathan Shively-Sanders <https://github.com/sandersn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export function float(min?: number, max?: number): number;
export function int(min?: number, max?: number): number;
export function boolean(): boolean;

export function uniform(min: number, max: number): () => number;
export function uniformInt(min: number, max: number): () => number;
export function uniformBoolean(): () => boolean;

export function normal(mu: number, sigma: number): () => number;
export function logNormal(mu: number, sigma: number): () => number;

export function bernoulli(p: number): () => number;
export function binomial(n: number, p: number): () => number;
export function geometric(p: number): () => number;

export function poisson(lambda: number): () => number;
export function exponential(lambda: number): () => number;

export function irwinHall(n: number): () => number;
export function bates(n: number): () => number;
export function pareto(alpha: number): () => number;

export function use(n: number): void;

export function patch(): void;
export function unpatch(): void;
