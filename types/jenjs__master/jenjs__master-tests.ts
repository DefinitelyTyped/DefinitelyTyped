/** @jsx h */
/**
 * Type tests for Jen.js framework
 * Tests follow DefinitelyTyped conventions with $ExpectType and @ts-expect-error
 */

import { h } from "preact";
import type {
  FrameworkConfig,
  RenderMode,
  RouteModule,
  LoaderContext,
  RouteEntry,
  ApiRouteModule,
  ApiRouteContext,
  ApiHandler,
  MiddlewareContext,
  AppOptions,
  Plugin,
  CacheStore,
  IDBDriver,
  Island,
  IslandRegistry,
  PageRenderContext,
  MinifyOptions,
  AssetHasherOptions,
  AuthToken,
  Session,
  DBConfig,
  DBType,
} from "./index";

// ============================================================================
// Framework Config Tests
// ============================================================================

const renderMode: RenderMode = "ssr";
// $ExpectType "ssr" | "ssg" | "isr" | "ppr"
renderMode;

const config: FrameworkConfig = {
  siteDir: "src",
  distDir: "dist",
  routes: {
    fileExtensions: [".tsx", ".ts"],
    routeFilePattern: /\.(tsx|ts)$/,
    enableIndexFallback: true,
  },
  rendering: {
    defaultMode: "ssr",
    defaultRevalidateSeconds: 3600,
  },
  inject: {
    head: ["<meta charset='utf-8'>"],
    bodyEnd: [],
  },
  css: {
    globalScss: "src/styles/globals.scss",
  },
  assets: {
    publicDir: "public",
    cacheControl: "public, max-age=31536000",
  },
  server: {
    port: 3000,
    hostname: "localhost",
  },
};

// $ExpectType FrameworkConfig
config;

// Test invalid render mode
// @ts-expect-error
const badMode: RenderMode = "invalid";

// ============================================================================
// Loader Context Tests
// ============================================================================

const loaderContext: LoaderContext = {
  url: new URL("http://localhost/page"),
  params: { id: "123" },
  query: { foo: "bar" },
  headers: { "user-agent": "test" },
  cookies: { sessionId: "abc" },
};

// $ExpectType LoaderContext
loaderContext;

// Test missing required field
// @ts-expect-error
const incompleteCtx: LoaderContext = {
  url: new URL("http://localhost"),
};

// ============================================================================
// Route Module Tests
// ============================================================================

const routeModule: RouteModule = {
  mode: "ssr",
  revalidateSeconds: 60,
  hydrate: true,
  loader: async (ctx: LoaderContext) => ({
    title: "Page",
  }),
  default: ({ data }: any) => h("div", null, data?.title),
};

// $ExpectType RouteModule
routeModule;

// Test route module with Head component
const routeWithHead: RouteModule = {
  default: () => h("div", null, "Home"),
  Head: ({ data }: any) => h("title", null, data?.title),
};

// $ExpectType RouteModule
routeWithHead;

// Test missing default export
// @ts-expect-error
const badRoute: RouteModule = {
  mode: "ssg",
};

// ============================================================================
// Route Entry Tests
// ============================================================================

const route: RouteEntry = {
  filePath: "src/pages/index.tsx",
  urlPath: "/",
  isDynamic: false,
};

// $ExpectType RouteEntry
route;

const dynamicRoute: RouteEntry = {
  filePath: "src/pages/[id].tsx",
  urlPath: "/users/:id",
  isDynamic: true,
};

// $ExpectType RouteEntry
dynamicRoute;

// ============================================================================
// API Route Context Tests
// ============================================================================

const apiContext: ApiRouteContext = {
  req: {} as any,
  res: {} as any,
  url: new URL("http://localhost/api/users"),
  method: "GET",
  query: { limit: "10" },
  body: null,
  params: { id: "123" },
};

// $ExpectType ApiRouteContext
apiContext;

// ============================================================================
// API Handler Tests
// ============================================================================

const getHandler: ApiHandler = async () => {
  return { data: [] };
};

// $ExpectType ApiHandler
getHandler;

const postHandler: ApiHandler = async () => {
  return "Created";
};

// $ExpectType ApiHandler
postHandler;

const responseHandler: ApiHandler = async () => {
  return new Response("OK", { status: 200 });
};

// $ExpectType ApiHandler
responseHandler;

const nullHandler: ApiHandler = async () => null;

// $ExpectType ApiHandler
nullHandler;

// ============================================================================
// API Route Module Tests
// ============================================================================

const apiModule: ApiRouteModule = {
  GET: async () => ({ items: [] }),
  POST: async () => ({ id: 1 }),
  PUT: async () => ({ updated: true }),
  DELETE: async () => ({ deleted: true }),
};

// $ExpectType ApiRouteModule
apiModule;

// Test partial API module
const partialApi: ApiRouteModule = {
  GET: async () => "Hello",
  POST: async () => ({ created: true }),
};

// $ExpectType ApiRouteModule
partialApi;

// ============================================================================
// Middleware Context Tests
// ============================================================================

const middlewareCtx: MiddlewareContext = {
  req: {} as any,
  res: {} as any,
  url: new URL("http://localhost/api"),
  params: { id: "1" },
  query: { sort: "asc" },
  headers: { authorization: "Bearer token" },
  cookies: { sessionId: "xyz" },
  data: { user: { id: 1 } },
};

// $ExpectType MiddlewareContext
middlewareCtx;

// Test modifying data
middlewareCtx.data.newField = "value";
// $ExpectType any
middlewareCtx.data.newField;

// ============================================================================
// App Tests
// ============================================================================

const appOptions: AppOptions = {
  config,
  mode: "dev",
};

// $ExpectType AppOptions
appOptions;

const prodAppOptions: AppOptions = {
  config,
  mode: "prod",
};

// $ExpectType AppOptions
prodAppOptions;

// Test invalid mode (cast to any to bypass type checking)
const badAppMode: AppOptions = {
  config,
  mode: "invalid" as any,
};

// ============================================================================
// Plugin Tests
// ============================================================================

const plugin: Plugin = {
  name: "my-plugin",
  version: "1.0.0",
  onBuild: async () => {},
  onServe: () => {},
  onDeploy: async () => {},
};

// $ExpectType Plugin
plugin;

const minimalPlugin: Plugin = {
  name: "minimal",
};

// $ExpectType Plugin
minimalPlugin;

// Test missing name
// @ts-expect-error
const badPlugin: Plugin = {
  version: "1.0.0",
};

// ============================================================================
// Cache Tests
// ============================================================================

const cache: CacheStore = {
  get: async (key) => null,
  set: async (key, value, ttl) => {},
  delete: async (key) => {},
  clear: async () => {},
  has: async (key) => false,
};

// $ExpectType CacheStore
cache;

// Test cache get return type
const cacheGetResult = cache.get<string>("key");
// $ExpectType Promise<string | null>
cacheGetResult;

// ============================================================================
// Database Tests
// ============================================================================

const dbConfig: DBConfig = {
  type: "sqlite",
  connection: ":memory:",
};

// $ExpectType DBConfig
dbConfig;

const postgresConfig: DBConfig = {
  type: "postgres",
  connection: "postgresql://user:pass@localhost/db",
};

// $ExpectType DBConfig
postgresConfig;

const jdbConfig: DBConfig = {
  type: "jdb",
  jdb: {
    root: "./data",
    inMemory: false,
  },
};

// $ExpectType DBConfig
jdbConfig;

// Test invalid DB type
// @ts-expect-error
const badDbType: DBType = "mongodb";

const dbDriver: IDBDriver = {
  connect: async () => {},
  disconnect: async () => {},
  query: async (q) => [],
  create: async (collection, data) => data,
  update: async (collection, filter, update) => 1,
  delete: async (collection, filter) => 1,
  count: async (collection, filter) => 0,
};

// $ExpectType IDBDriver
dbDriver;

// Test query method
const queryResult = dbDriver.query({ find: "users", where: { id: 1 } });
// $ExpectType Promise<any[]>
queryResult;

// ============================================================================
// Island Tests
// ============================================================================

const island: Island = {
  id: "island-1",
  component: () => h("div", null, "Island"),
  props: { message: "Hello" },
  strategy: "idle",
};

// $ExpectType Island
island;

const visibleIsland: Island = {
  id: "island-2",
  component: () => null,
  strategy: "visible",
};

// $ExpectType Island
visibleIsland;

// Test invalid strategy (cast to any to bypass type checking)
const badIsland: Island = {
  id: "bad",
  component: () => null,
  strategy: "unknown" as any,
};

// ============================================================================
// Island Registry Tests
// ============================================================================

const registry: IslandRegistry = {
  register: (id, component) => {},
  get: (id) => undefined,
  has: (id) => false,
};

// $ExpectType IslandRegistry
registry;

// Test registry methods
registry.register("island-1", () => h("div", null));
const hasIsland = registry.has("island-1");
// $ExpectType boolean
hasIsland;

const islandComponent = registry.get("island-1");
// $ExpectType any
islandComponent;

// ============================================================================
// Page Render Context Tests
// ============================================================================

const pageCtx: PageRenderContext = {
  config,
  route: {
    filePath: "src/pages/index.tsx",
    urlPath: "/",
    isDynamic: false,
  },
  url: new URL("http://localhost/"),
  params: {},
  query: {},
  headers: {},
  cookies: {},
};

// $ExpectType PageRenderContext
pageCtx;

// Test with optional req/res
const pageCtxWithReqRes: PageRenderContext = {
  config,
  route,
  url: new URL("http://localhost"),
  params: {},
  query: {},
  headers: {},
  cookies: {},
  req: {} as any,
  res: {} as any,
};

// $ExpectType PageRenderContext
pageCtxWithReqRes;

// ============================================================================
// Minify Options Tests
// ============================================================================

const minifyOpts: MinifyOptions = {
  minifyHtml: true,
  minifyCss: true,
  minifyJs: true,
  sourceMap: false,
};

// $ExpectType MinifyOptions
minifyOpts;

// ============================================================================
// Asset Hasher Options Tests
// ============================================================================

const hasherOpts: AssetHasherOptions = {
  hashLength: 16,
  algorithm: "sha256",
};

// $ExpectType AssetHasherOptions
hasherOpts;

// ============================================================================
// Authentication Tests
// ============================================================================

const token: AuthToken = {
  payload: { userId: 1, email: "user@example.com" },
  expiresIn: "1h",
};

// $ExpectType AuthToken
token;

const session: Session = {
  id: "session-123",
  userId: "user-1",
  data: { theme: "dark" },
  expiresAt: new Date(),
};

// $ExpectType Session
session;

// ============================================================================
// Complex Type Scenarios
// ============================================================================

// Test route loader async
const asyncLoader = async (ctx: LoaderContext) => {
  const data = await Promise.resolve({ items: [] });
  return data;
};

// $ExpectType (ctx: LoaderContext) => Promise<{ items: never[]; }>
asyncLoader;

// Test route loader sync
const syncLoader = (ctx: LoaderContext) => {
  return { items: [] };
};

// $ExpectType (ctx: LoaderContext) => { items: never[]; }
syncLoader;

// Test API handler returning different types
const apiHandlerString: ApiHandler = async () => "OK";
// $ExpectType ApiHandler
apiHandlerString;

const apiHandlerObject: ApiHandler = async () => ({ status: "ok" });
// $ExpectType ApiHandler
apiHandlerObject;

const apiHandlerResponse: ApiHandler = async () => new Response("Content");
// $ExpectType ApiHandler
apiHandlerResponse;

// ============================================================================
// Export verification
// ============================================================================

export {};
