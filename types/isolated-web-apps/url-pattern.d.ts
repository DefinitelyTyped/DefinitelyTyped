/**
 * Generated from:
 * - url_pattern.idl
 * - url_pattern_component_result.idl
 * - url_pattern_init.idl
 * - url_pattern_options.idl
 * - url_pattern_result.idl
 *
 * @see https://wicg.github.io/urlpattern/
 */

export interface URLPatternResult {
  inputs?: URLPatternInput[];
  protocol?: URLPatternComponentResult;
  username?: URLPatternComponentResult;
  password?: URLPatternComponentResult;
  hostname?: URLPatternComponentResult;
  port?: URLPatternComponentResult;
  pathname?: URLPatternComponentResult;
  search?: URLPatternComponentResult;
  hash?: URLPatternComponentResult;
}

export interface URLPatternOptions {
  /** @default false */
  ignoreCase?: boolean;
}

export interface URLPatternInit {
  protocol?: string;
  username?: string;
  password?: string;
  hostname?: string;
  port?: string;
  pathname?: string;
  search?: string;
  hash?: string;
  baseURL?: string;
}

export interface URLPatternComponentResult {
  input?: string;
  groups?: Record<string, any>;
}

export type URLPatternInput = (string | URLPatternInit);

export type URLPatternCompatible = (string | URLPatternInit | URLPattern);

export type URLPatternComponent =
  | "protocol"
  | "username"
  | "password"
  | "hostname"
  | "port"
  | "pathname"
  | "search"
  | "hash";

/** @remarks Extended attributes: [Exposed=Window, Worker, ShadowRealm] */
export class URLPattern {
  /** @remarks Extended attributes: [RaisesException, CallWith=Isolate, Measure] */
  constructor(input: URLPatternInput, baseURL: string, options?: URLPatternOptions)
  /** @remarks Extended attributes: [RaisesException, CallWith=Isolate, Measure] */
  constructor(input?: URLPatternInput, options?: URLPatternOptions)
  /** @remarks Extended attributes: [RaisesException, CallWith=Isolate, Measure] */
  test(input?: URLPatternInput, baseURL?: string): boolean;
  /** @remarks Extended attributes: [RaisesException, CallWith=Isolate, Measure] */
  exec(input?: URLPatternInput, baseURL?: string): URLPatternResult | null;
  /** @remarks Extended attributes: [RuntimeEnabled=URLPatternGenerate, RaisesException, Measure] */
  generate(component: URLPatternComponent, groups: Record<string, string>): string;
  readonly protocol: string;
  readonly username: string;
  readonly password: string;
  readonly hostname: string;
  readonly port: string;
  readonly pathname: string;
  readonly search: string;
  readonly hash: string;
  readonly hasRegExpGroups: boolean;
  /** @remarks Extended attributes: [RuntimeEnabled=URLPatternCompareComponent, Measure] */
  compareComponent(component: URLPatternComponent, left: URLPattern, right: URLPattern): number;
}

