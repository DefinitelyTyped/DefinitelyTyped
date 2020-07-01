// Type definitions for probability-distributions 0.1
// Project: https://github.com/Mattasher/probability-distributions
// Definitions by: Sophie Dankel <https://github.com/sdankel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function prng(len: number): number;
export function rbeta(
  n: number,
  alpha: number,
  beta: number,
  loc: number
): number[];
export function rbinom(n: number, size: number, p: number): number[];
export function rcauchy(n: number, loc: number, scale: number): number[];
export function rchisq(n: number, df: number, ncp: number): number[];
export function dexp(x: number, rate: number): number;
export function rexp(n: number, rate: number): number[];
export function rf(n: number, df1: number, df2: number): number[];
export function rgamma(n: number, alpha: number, rate: number): number[];
export function rint(
  n: number,
  min: number,
  max: number,
  inclusive: number
): number[];
export function rlaplace(n: number, loc: number, scale: number): number[];
export function rlnorm(n: number, meanlog: number, sdlog: number): number[];
export function rnbinom(
  n: number,
  size: number,
  p: number,
  mu: number
): number[];
export function dnorm(x: number, mean: number, sd: number): number[];
export function rnorm(n: number, mean: number, sd: number): number[];
export function dpois(x: number, lambda: number): number[];
export function rpois(n: number, lambda: number): number[];
export function dunif(x: number, min: number, max: number): number;
export function runif(n: number, min: number, max: number): number[];
export function rword(len: number, alphabet: string): string;
export function sample(
  collection: any[],
  n: number,
  replace: boolean,
  ratios: number
): any[];
export function visualize(data: any[], domID: string, options: any): any;
export function rfml(
  n: number,
  loc: number,
  p: number,
  cap: number,
  trace: any
): number[];
export function ruf(n: number): number[];
