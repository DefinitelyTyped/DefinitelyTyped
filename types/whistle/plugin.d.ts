 /// <reference types="node" />

 import { ParsedUrlQuery } from 'querystring';
 import LRU from 'lru-cache';

export interface WhistleFile {
  index: number;
  name: string;
  data: string;
  selected: boolean;
}

export class WhistleStorage {
  constructor(dir, filters?: object, disabled?: boolean);
  count(): number;
  existsFile(file: string): false | WhistleFile;
  getFileList(origin: boolean): WhistleFile[];
  writeFile(file: string, data: string): boolean;
  updateFile(file: string, data: string): boolean;
  readFile(file: string): string;
  removeFile(file: string): boolean;
  renameFile(file: string, newFile: string): boolean;
  moveTo(fromName: string, toName: string): boolean;
  setProperty(name: string, value: string): void;
  hasProperty(file: string): boolean;
  setProperties(obj: object): boolean;
  getProperty(name: string): any;
  removeProperty(name): void;
}

export interface WhistleRuntimeInfo {
  memUsage: NodeJS.MemoryUsage;
  uptime: number;
  cpuPercent: string;
  startupTime: number;
  updateTime: number;
  httpRequests: number;
  allHttpRequests: number;
  wsRequests: number;
  allWsRequests: number;
  tunnelRequests: number;
  totalHttpRequests: number;
  totalWsRequests: number;
  totalTunnelRequests: number;
  totalAllHttpRequests: number;
  totalAllWsRequests: number;
  httpQps: number;
  tunnelQps: number;
  wsQps: number;
  totalQps: number;
  maxQps: number;
  maxAllQps: number;
  maxRss: number;
  maxCpu: number;
}

export interface WhistlePluginOptions {
  name: string;
  version: string;
  debugMode?: boolean;
  CUSTOM_CERT_HEADER: string;
  ENABLE_CAPTURE_HEADER: string;
  RULE_VALUE_HEADER: string;
  SNI_VALUE_HEADER: string;
  RULE_URL_HEADER: string;
  MAX_AGE_HEADER: string;
  ETAG_HEADER: string;
  FULL_URL_HEADER: string;
  REAL_URL_HEADER: string;
  RELATIVE_URL_HEADER: string;
  REQ_ID_HEADER: string;
  PIPE_VALUE_HEADER: string;
  CUSTOM_PARSER_HEADER: string;
  STATUS_CODE_HEADER: string;
  PLUGIN_REQUEST_HEADER: string;
  LOCAL_HOST_HEADER: string;
  HOST_VALUE_HEADER: string;
  PROXY_VALUE_HEADER: string;
  PAC_VALUE_HEADER: string;
  METHOD_HEADER: string;
  CLIENT_IP_HEADER: string;
  CLIENT_PORT_HEAD: string;
  UI_REQUEST_HEADER: string;
  GLOBAL_VALUE_HEAD: string;
  SERVER_NAME_HEAD: string;
  COMMON_NAME_HEAD: string;
  CERT_CACHE_INFO: string;
  HOST_IP_HEADER: string;
  REQ_FROM_HEADER: string;
  config: {
    name: string;
    version: string;
    localUIHost: string;
    port: number;
    sockets: number;
    timeout: number;
    baseDir: string;
    uiport: number;
    clientId: string;
    uiHostList: string[];
    pluginHosts: object;
    host: string;
    [propName: string]: any;
  };
  parseUrl(url: string): ParsedUrlQuery;
  wsParser: {
    getExtensions(res: any, isServer?: boolean): any;
    getSender(socket: any, toServer?: boolean): any;
    getReceiver(res: any, fromServer?: boolean, maxPayload?: number): any;
  };
  wrapWsReader(socket?: any, maxPayload?: number): any;
  wrapWsWriter(socket?: any): any;
  shortName: string;
  Storage: WhistleStorage;
  localStorage: WhistleStorage;
  storage: WhistleStorage;
  baseUrl: string;
  LRU: LRU<string, any>;
  getValue(key: string, cb: (value: string) => void): void;
  getCert(domain: string, cb: (cert: any) => void): void;
  getRootCA(cb: (cert: any) => void): void;
  getHttpsStatus(cb: (status: any) => void): void;
  getRuntimeInfo(cb: (info: any) => void): void;
  updateRules(): void;
  compose(options: any, cb: (err: any, data?: any) => void): void;
  getRules(cb: (rules: any) => void): void;
  getValues(cb: (values: any) => void): void;
  getCustomCertsInfo(cb: (certs: any) => void): void;
  isActive(cb: (active: boolean) => void): void;
  ctx: any;
  connect(opts: any, cb?: Function): any;
  request(opts: any, cb?: Function): any;
  [propName: string]: any;
}
