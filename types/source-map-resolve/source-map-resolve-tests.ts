import {
    FullResolvedData,
    parseMapToJSON,
    RawSourceMap,
    resolve,
    ResolvedSources,
    ResolveOptions,
    resolveSourceMap,
    resolveSourceMapSync,
    resolveSources,
    resolveSourcesSync,
    resolveSync,
    SourceMapData,
} from "source-map-resolve";

const code = "// generated code\n//# sourceMappingURL=foo.js.map";
const codeUrl = "http://example.com/foo.js";

const readFn = (url: string, callback: (error: Error | null, data: string | null) => void) => {
    callback(null, "{}");
};

const readSyncFn = (url: string): string => {
    return "{}";
};

const map: RawSourceMap = {
    version: 3,
    sources: ["foo.ts"],
    names: [],
    mappings: "AAAA",
};

// resolveSourceMap
resolveSourceMap(code, codeUrl, readFn, (error, data) => {
    if (data) {
        const url: string = data.url;
        const smUrl: string = data.sourceMappingURL;
        const relative: string = data.sourcesRelativeTo;
        const srcMap: RawSourceMap = data.map;
    }
});

// resolveSourceMapSync
const syncData: SourceMapData | null = resolveSourceMapSync(code, codeUrl, readSyncFn);

// resolveSources with options
resolveSources(map, codeUrl, readFn, { sourceRoot: false }, (error, data) => {
    if (data) {
        const resolved: string[] = data.sourcesResolved;
        const content: Array<string | null> = data.sourcesContent;
    }
});

// resolveSources without options
resolveSources(map, codeUrl, readFn, (error, data) => {
    if (data) {
        const resolved: string[] = data.sourcesResolved;
    }
});

// resolveSourcesSync
const sourcesResult: ResolvedSources = resolveSourcesSync(map, codeUrl, readSyncFn);
const sourcesResultOpts: ResolvedSources = resolveSourcesSync(map, codeUrl, readSyncFn, { sourceRoot: true });

// resolve with options
resolve(code, codeUrl, readFn, { sourceRoot: false }, (error, data) => {
    if (data) {
        const url: string = data.url;
        const resolved: string[] = data.sourcesResolved;
        const content: Array<string | null> = data.sourcesContent;
    }
});

// resolve without options
resolve(code, codeUrl, readFn, (error, data) => {
    if (data) {
        const srcMap: RawSourceMap = data.map;
    }
});

// resolve with null code
resolve(null, codeUrl, readFn, (error, data) => {});

// resolveSync
const fullResult: FullResolvedData | null = resolveSync(code, codeUrl, readSyncFn);
const fullResultOpts: FullResolvedData | null = resolveSync(code, codeUrl, readSyncFn, { sourceRoot: true });
const fullResultNull: FullResolvedData | null = resolveSync(null, codeUrl, readSyncFn);

// parseMapToJSON
const parsed: RawSourceMap = parseMapToJSON("{\"version\":3,\"sources\":[],\"names\":[],\"mappings\":\"\"}");
const parsedCtx: RawSourceMap = parseMapToJSON("{}", { url: "foo.js.map" });

// Options
const opts: ResolveOptions = { sourceRoot: false };
