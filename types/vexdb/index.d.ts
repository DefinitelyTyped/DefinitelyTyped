// Type definitions for vexdb 1.7
// Project: https://github.com/MayorMonty/vexdb#readme
// Definitions by: Brendan McGuire <https://github.com/MayorMonty>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { EventEmitter } from "events";

export type Endpoint =
  | "events"
  | "teams"
  | "matches"
  | "rankings"
  | "season_rankings"
  | "awards"
  | "skills";

/**
 * Parameter Objects
 */
export type StringRequest =
  | string
  | string[]
  | RegExp
  | StringRequestValidatorFunction;
export type StringRequestValidatorFunction = (
  itemValue: string,
  item: ResponseObject
) => Promise<boolean> | boolean;

export type NumberRequest = number | number[] | NumberRequestValidatorFunction;
export type NumberRequestValidatorFunction = (
  itemValue: number,
  item: ResponseObject
) => Promise<boolean> | boolean;

/**
 * Request Objects
 */

export type RequestObject =
  | TeamsRequestObject
  | EventsRequestObject
  | MatchesRequestObject
  | RankingsRequestObject
  | SeasonRankingsRequestObject
  | AwardsRequestObject
  | SkillsRequestObject;

export interface TeamsRequestObject {
  team?: StringRequest;
  number?: StringRequest;
  team_name?: StringRequest;
  robot_name?: StringRequest;
  program?: StringRequest;
  organisation?: StringRequest;
  city?: StringRequest;
  region?: StringRequest;
  country?: StringRequest;
  grade?: StringRequest;
  is_registered?: NumberRequest;
  sku?: StringRequest;
  limit_number?: number;
  limit_start?: number;
}

export interface EventsRequestObject {
  sku?: StringRequest;
  program?: StringRequest;
  date?: StringRequest;
  season?: StringRequest;
  city?: StringRequest;
  region?: StringRequest;
  country?: StringRequest;
  status?: StringRequest;
  limit_number?: number;
  limit_start?: number;

  key?: StringRequest;
  name?: StringRequest;
  loc_venue?: StringRequest;
  loc_address1?: StringRequest;
  loc_address2?: StringRequest;
  loc_city?: StringRequest;
  loc_region?: StringRequest;
  loc_postcode?: StringRequest;
  loc_country?: StringRequest;
  start?: StringRequest;
  end?: StringRequest;
}

export interface MatchesRequestObject {
  sku?: StringRequest;
  division?: StringRequest;
  team?: StringRequest;
  round?: NumberRequest;
  instance?: NumberRequest;
  matchnum?: NumberRequest;
  scheduled?: NumberRequest;
  field?: StringRequest;
  scored?: NumberRequest;
  season?: StringRequest;
  limit_number?: number;
  limit_start?: number;

  red1?: StringRequest;
  red2?: StringRequest;
  red3?: StringRequest;
  redsit?: StringRequest;
  blue1?: StringRequest;
  blue2?: StringRequest;
  blue3?: StringRequest;
  bluesit?: StringRequest;
  redscore?: NumberRequest;
  bluescore?: NumberRequest;
}

export interface RankingsRequestObject {
  sku?: StringRequest;
  division?: StringRequest;
  team?: StringRequest;
  rank?: StringRequest;
  season?: StringRequest;
  limit_number?: number;
  limit_start?: number;

  wins?: NumberRequest;
  losses?: NumberRequest;
  ties?: NumberRequest;
  wp?: NumberRequest;
  ap?: NumberRequest;
  sp?: NumberRequest;
  trsp?: NumberRequest;
  max_score?: NumberRequest;
  opr?: NumberRequest;
  dpr?: NumberRequest;
  ccwm?: NumberRequest;
}

export interface SeasonRankingsRequestObject {
  program?: StringRequest;
  season?: StringRequest;
  team?: StringRequest;
  vrating_rank?: NumberRequest;
  limit_number?: number;
  limit_start?: number;

  vrating?: NumberRequest;
}

export interface AwardsRequestObject {
  sku?: StringRequest;
  name?: StringRequest;
  team?: StringRequest;
  season?: StringRequest;
  limit_number?: number;
  limit_start?: number;

  order?: NumberRequest;
}

export interface SkillsRequestObject {
  sku?: StringRequest;
  program?: StringRequest;
  type?: NumberRequest;
  team?: StringRequest;
  season?: StringRequest;
  rank?: NumberRequest;
  season_rank?: NumberRequest;
  limit_number?: number;
  limit_start?: number;

  attempts?: NumberRequest;
  score?: NumberRequest;
}

/**
 * Response Objects
 */

export type ResponseObject =
  | TeamsResponseObject
  | EventsResponseObject
  | MatchesResponseObject
  | RankingsResponseObject
  | SeasonRankingsResponseObject
  | AwardsResponseObject
  | SkillsResponseObject;

export interface TeamsResponseObject {
  number: string;
  program: string;
  team_name: string;
  robot_name: string;
  organisation: string;
  city: string;
  region: string;
  country: string;
  grade: string;
  is_registered: 0 | 1;
}

export interface EventsResponseObject {
  sku: string;
  key: string;
  program: string;
  name: string;
  loc_venue: string;
  loc_address1: string;
  loc_address2: string;
  loc_city: string;
  loc_region: string;
  loc_postcode: string;
  loc_country: string;
  season: string;
  start: string;
  end: string;
  divisions: string[];
}

export interface MatchesResponseObject {
  sku: string;
  division: string;
  round: 1 | 2 | 3 | 4 | 5 | 6 | 16;
  instance: number;
  matchnum: number;
  field: string;
  red1: string;
  red2: string;
  red3: string;
  redsit: string;
  blue1: string;
  blue2: string;
  blue3: string;
  bluesit: string;
  redscore: number;
  bluescore: number;
  scored: 0 | 1;
  scheduled: string;
}

export interface RankingsResponseObject {
  sku: string;
  division: string;
  rank: number;
  team: string;
  wins: number;
  losses: number;
  ties: number;
  wp: number;
  ap: number;
  sp: number;
  trsp: number;
  max_score: number;
  opr: number;
  dpr: number;
  ccwm: number;
}

export interface SeasonRankingsResponseObject {
  team: string;
  season: string;
  program: string;
  vrating_rank: number;
  vrating: number;
}

export interface AwardsResponseObject {
  sku: string;
  name: string;
  team: string;
  qualifies: string[];
  order: number;
}

export interface SkillsResponseObject {
  sku: string;
  type: number;
  rank: number;
  team: string;
  program: string;
  attempts: number;
  score: number;
}

/**
 * GET
 */
export function get(
  endpoint: "teams",
  params: TeamsRequestObject
): Promise<TeamsResponseObject[]>;

export function get(
  endpoint: "events",
  params: EventsRequestObject
): Promise<EventsResponseObject[]>;

export function get(
  endpoint: "matches",
  params: MatchesRequestObject
): Promise<MatchesResponseObject[]>;

export function get(
  endpoint: "rankings",
  params: RankingsRequestObject
): Promise<RankingsResponseObject[]>;

export function get(
  endpoint: "season_rankings",
  params: SeasonRankingsRequestObject
): Promise<SeasonRankingsResponseObject[]>;

export function get(
  endpoint: "awards",
  params: AwardsRequestObject
): Promise<AwardsResponseObject[]>;

export function get(
  endpoint: "skills",
  params: SkillsRequestObject
): Promise<SkillsResponseObject[]>;

/**
 * SIZE
 */
export function size(
  endpoint: "teams",
  params: TeamsRequestObject
): Promise<number>;

export function size(
  endpoint: "events",
  params: EventsRequestObject
): Promise<number>;

export function size(
  endpoint: "matches",
  params: MatchesRequestObject
): Promise<number>;

export function size(
  endpoint: "rankings",
  params: RankingsRequestObject
): Promise<number>;

export function size(
  endpoint: "season_rankings",
  params: SeasonRankingsRequestObject
): Promise<number>;

export function size(
  endpoint: "awards",
  params: AwardsRequestObject
): Promise<number>;

export function size(
  endpoint: "skills",
  params: SkillsRequestObject
): Promise<number>;

/**
 * LIVE
 */
export interface LiveEventEmitter<Q, R> extends EventEmitter {
  close(): void;
  params(updateParameters: Q): Q;
  current(): R[];

  // Update Events
  on(event: "item", callback: (item: R) => void): this;
  on(event: "fetch", callback: (newItems: R[]) => void): this;
  on(event: "prefetch", callback: (results: R[]) => void): this;
}

export type LiveRequestObject<T> = T & { prefetch?: boolean };

export function live(
  endpoint: "teams",
  params: LiveRequestObject<TeamsRequestObject>
): LiveEventEmitter<TeamsRequestObject, TeamsResponseObject>;

export function live(
  endpoint: "events",
  params: LiveRequestObject<EventsRequestObject>
): LiveEventEmitter<EventsRequestObject, EventsResponseObject>;

export function live(
  endpoint: "matches",
  params: LiveRequestObject<MatchesRequestObject>
): LiveEventEmitter<MatchesRequestObject, MatchesResponseObject>;

export function live(
  endpoint: "rankings",
  params: LiveRequestObject<RankingsRequestObject>
): LiveEventEmitter<RankingsRequestObject, RankingsResponseObject>;

export function live(
  endpoint: "season_rankings",
  params: LiveRequestObject<SeasonRankingsRequestObject>
): LiveEventEmitter<SeasonRankingsRequestObject, SeasonRankingsResponseObject>;

export function live(
  endpoint: "awards",
  params: LiveRequestObject<AwardsRequestObject>
): LiveEventEmitter<AwardsRequestObject, AwardsResponseObject>;

export function live(
  endpoint: "skills",
  params: LiveRequestObject<SkillsRequestObject>
): LiveEventEmitter<SkillsRequestObject, SkillsResponseObject>;

export function live(
  endpoint: Endpoint,
  params: LiveRequestObject<RequestObject>
): LiveEventEmitter<RequestObject, ResponseObject>;

/**
 * CACHE
 */
export interface CacheEntry<T> {
  expiry: number;
  value: {
    status: 0 | 1;
    size: number;
    result: T[];
  };
}

export function cache(
  endpoint: "teams",
  params: TeamsRequestObject,
  value: TeamsResponseObject[]
): Promise<CacheEntry<TeamsResponseObject>>;

export function cache(
  endpoint: "events",
  params: EventsRequestObject,
  value: EventsResponseObject[]
): Promise<CacheEntry<EventsResponseObject>>;

export function cache(
  endpoint: "matches",
  params: MatchesRequestObject,
  value: MatchesResponseObject[]
): Promise<CacheEntry<MatchesResponseObject>>;

export function cache(
  endpoint: "rankings",
  params: RankingsRequestObject,
  value: RankingsResponseObject[]
): Promise<CacheEntry<RankingsResponseObject>>;

export function cache(
  endpoint: "season_rankings",
  params: SeasonRankingsRequestObject,
  value: SeasonRankingsResponseObject[]
): Promise<CacheEntry<SeasonRankingsResponseObject>>;

export function cache(
  endpoint: "awards",
  params: AwardsRequestObject,
  value: AwardsResponseObject[]
): Promise<CacheEntry<AwardsResponseObject>>;

export function cache(
  endpoint: "skills",
  params: SkillsRequestObject,
  value: SkillsResponseObject[]
): Promise<CacheEntry<SkillsResponseObject>>;

export function cache(
  endpoint: Endpoint,
  params: RequestObject,
  value: ResponseObject[]
): Promise<CacheEntry<ResponseObject>>;

export namespace cache {
  const ttl: number;

  function clear(): void;

  function has(endpoint: "teams", params: TeamsRequestObject): Promise<boolean>;

  function has(
    endpoint: "events",
    params: EventsRequestObject
  ): Promise<boolean>;

  function has(
    endpoint: "matches",
    params: MatchesRequestObject
  ): Promise<boolean>;

  function has(
    endpoint: "rankings",
    params: RankingsRequestObject
  ): Promise<boolean>;

  function has(
    endpoint: "season_rankings",
    params: SeasonRankingsRequestObject
  ): Promise<boolean>;

  function has(
    endpoint: "awards",
    params: AwardsRequestObject
  ): Promise<boolean>;

  function has(
    endpoint: "skills",
    params: SkillsRequestObject
  ): Promise<boolean>;

  function resolve(
    endpoint: "teams",
    params: TeamsRequestObject
  ): Promise<CacheEntry<TeamsResponseObject>>;

  function resolve(
    endpoint: "events",
    params: EventsRequestObject
  ): Promise<CacheEntry<EventsResponseObject>>;

  function resolve(
    endpoint: "matches",
    params: MatchesRequestObject
  ): Promise<CacheEntry<MatchesResponseObject>>;

  function resolve(
    endpoint: "rankings",
    params: RankingsRequestObject
  ): Promise<CacheEntry<RankingsResponseObject>>;

  function resolve(
    endpoint: "season_rankings",
    params: SeasonRankingsRequestObject
  ): Promise<CacheEntry<SeasonRankingsResponseObject>>;

  function resolve(
    endpoint: "awards",
    params: AwardsRequestObject
  ): Promise<CacheEntry<AwardsResponseObject>>;

  function resolve(
    endpoint: "skills",
    params: SkillsRequestObject
  ): Promise<CacheEntry<SkillsResponseObject>>;

  function sanitize(endpoint: Endpoint, params: object): object;

  function serialize(url: any, params: object): object;

  function setTTL(ttl: number): object;
}

/**
 * CONSTANT
 */
export namespace constant {
  const endpoints: string[];

  const settings: {
    baseURL: string;
    cache: {
      ttl: number;
    };
    headers: {};
    live: {
      pollTime: number;
    };
    params: {};
  };

  const uniques: {
    events: string;
    teams: string;
  };

  const validParams: {
    awards: string[];
    events: string[];
    matches: string[];
    rankings: string[];
    season_rankings: string[];
    skills: string[];
    teams: string[];
  };

  function header(headers: object): void;

  function isBrowser(): boolean;

  function param(params: RequestObject): void;
}
