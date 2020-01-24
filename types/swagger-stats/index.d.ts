// Type definitions for swagger-stats 0.95
// Project: http://swaggerstats.io
// Definitions by: Connor Fitzgerald <https://github.com/connorjayfitzgerald>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.9

/// <reference types="node" />

import { Server } from '@hapi/hapi';
import { RequestHandler } from 'express';
import { FastifyInstance } from 'fastify';
import * as PromClient from 'prom-client';

export interface SWStats {
  hostname: string;
  name: string;
  version: string;
  ip: string;
  swaggerSpec: null | Record<any, any>;
  uriPath: string;
  timelineBucketDuration: number;
  durationBuckets: number[];
  requestSizeBuckets: number[];
  responseSizeBuckets: number[];
  apdexThreshold: number;
  onResponseFinish: null | (() => void);
  authentication: boolean;
  onAuthenticate: null | (() => void);
  sessionMaxAge: number;
  elasticsearch: null | string;
  elasticsearchIndexPrefix: string;
  elasticsearchUsername: string | null;
  elasticsearchPassword: string | null;
  swaggerOnly: boolean;
  metricsPrefix: string;
  enableEgress: boolean;
  pathUI: string;
  pathDist: string;
  pathStats: string;
  pathMetrics: string;
  pathLogout: string;
}

export namespace getHapiPlugin {
  const name: string;
  const version: string;
  function register(server: Server, opts?: Partial<SWStats>): Promise<void>;
}

export function getFastifyPlugin(
  fastify: FastifyInstance,
  opts: Partial<SWStats>,
  done: () => void,
): void;

export function getMiddleware(opts: Partial<SWStats>): RequestHandler;

export interface ReqResStats {
  requests: number;
  responses: number;
  errors: number;
  info: number;
  success: number;
  redirect: number;
  client_error: number;
  server_error: number;
  total_time: number;
  max_time: number;
  avg_time: number;
  total_req_clength: number;
  max_req_clength: number;
  avg_req_clength: number;
  total_res_clength: number;
  max_res_clength: number;
  avg_res_clength: number;
  req_rate: number;
  err_rate: number;
  apdex_threshold: number;
  apdex_satisfied: number;
  apdex_tolerated: number;
  apdex_score: number;
}

export interface SysStats {
  rss: number;
  heapTotal: number;
  heapUsed: number;
  external: number;
  cpu: number;
}

export interface TimelineStatsData {
  stats: ReqResStats;
  sys: SysStats;
}

export interface TimelineStats {
  settings: {
    bucket_duration: number;
    bucket_current: number;
    length: number;
  };
  data: Record<string, TimelineStatsData>;
}

type HTTPMethodSubset = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type HTTPMethod =
  | HTTPMethodSubset
  | 'HEAD'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export interface RequestResponseRecord {
  path: string;
  method: string;
  query: string;
  startts: number;
  endts: number;
  responsetime: number;
  node: {
    name: string;
    version: string;
    hostname: string;
    ip: string;
  };
  http: {
    request: {
      url: string;
      headers?: Record<string, string>;
      clength?: number;
      route_path?: string;
      params?: Record<string, any>;
      query?: Record<string, any>;
      body?: any;
    };
    response: {
      code: string;
      class: string;
      phrase: string;
      headers?: Record<string, string>;
      clength?: number;
    };
  };
  ip: string;
  real_ip: string;
  port: string;
  '@timestamp': string;
  api: {
    path: string;
    query: string;
    swagger?: string;
    deprecated?: string;
    operationId?: string;
    tags?: string;
    params?: string;
  };
}

export interface APIOperationDefinition {
  swagger: boolean;
  deprecated: boolean;
  description?: string;
  operationId?: string;
  summary?: string;
  tags?: any;
}

export interface ErrorsStats {
  statuscode: Record<number, number>;
  topnotfound: Record<string, number>;
  topservererror: Record<string, number>;
}

export interface APIOperationStats {
  defs?: APIOperationDefinition;
  stats?: APIOperationDefinition;
  details?: APIOperationDefinition;
}

export interface CoreStats {
  startts: number;
  all: ReqResStats;
  egress: ReqResStats;
  sys: SysStats;
  name: string;
  version: string;
  hostname: string;
  ip: string;
  apdexThreshold: number;
  method?: Record<HTTPMethodSubset, ReqResStats>;
  timeline?: TimelineStats;
  lasterrors?: RequestResponseRecord[];
  longestreq?: RequestResponseRecord[];
  apidefs?: Record<string, Record<HTTPMethod, APIOperationDefinition>>;
  apistats?: Record<string, Record<HTTPMethod, ReqResStats>>;
  errors?: ErrorsStats;
  apiop?: Record<string, Record<HTTPMethod, APIOperationStats>>;
}

export function getCoreStats(): CoreStats;

export function getPromStats(): string;

export function getPromClient(): typeof PromClient;

export function stop(): void;

export {};
