import runtime = require("@node-red/runtime");
import editorApi from "@node-red/editor-api";
import { createServer, Server as HttpServer } from "http";
import { createServer as createHttpsServer, Server as HttpsServer } from "https";
import { Strategy } from "passport";

class CustomStrategy extends Strategy {
    constructor(_options: object, _verify: (...args: unknown[]) => void) {
        super();
    }

    authenticate(): void {}
}

async function runtimeTests() {
    const httpServer = createServer();
    runtime.init(
        {
            adminAuth: {
                type: "strategy",
                strategy: {
                    name: "customStrategy",
                    label: "Custom Strategy",
                    icon: "path/to/icon.png",
                    strategy: CustomStrategy,
                    options: {},
                },
                users: async (username) => {
                    return {
                        username,
                        permissions: ["*"],
                    };
                },
            },
            uiPort: 18880,
            uiHost: "localhost",
            nodesDir: ["/opt/node-red/nodes", "/srv/node-red/nodes"],
            https: async () => ({ key: "key", cert: "cert" }),
            httpsRefreshInterval: 12,
            requireHttps: true,
            httpAdminMiddleware: [(_req, _res, next) => next()],
            httpAdminCookieOptions: { sameSite: "strict", secure: "auto" },
            httpNodeMiddleware: (_req, _res, next) => next(),
            httpStatic: [
                {
                    path: "/srv/node-red/public",
                    root: "/public",
                    options: { maxAge: "1d" },
                    cors: { origin: "*" },
                    middleware: (_req, _res, next) => next(),
                },
            ],
            httpStaticCors: { origin: "*" },
            proxyOptions: { mode: "legacy" },
            lang: "en-US",
            diagnostics: { enabled: true, ui: true },
            runtimeState: { enabled: true, ui: true },
            telemetry: { enabled: false, updateNotification: false },
            logging: {
                console: {
                    level: "debug",
                    metrics: false,
                    audit: false,
                },
                custom: {
                    level: "info",
                    handler: (_settings) => (_message) => {},
                },
            },
            contextStorage: {
                default: "memory",
                custom: {
                    module: (_config) => ({}),
                    config: { option: true },
                },
            },
            externalModules: {
                palette: {
                    allowUpload: true,
                },
            },
            editorTheme: {
                theme: "dark",
                tours: false,
                palette: {
                    categories: { order: ["common", "function"] },
                },
                projects: {
                    enabled: true,
                    workflow: { mode: "auto" },
                },
                codeEditor: {
                    lib: "monaco",
                    options: { fontSize: 14 },
                },
                markdownEditor: {
                    mermaid: { enabled: true },
                },
                multiplayer: { enabled: true },
                deployButton: {
                    label: "Save",
                    icon: null,
                },
            },
            fileWorkingDirectory: "/srv/node-red",
            globalFunctionTimeout: 30,
            functionTimeout: 5,
            debugStatusLength: 32,
            nodeDefaults: {
                debug: {
                    complete: true,
                },
            },
        },
        httpServer,
        editorApi,
    );
    runtime.init({ httpAdminRoot: false }, createHttpsServer(), editorApi);

    const server: HttpServer | HttpsServer = runtime.server;
    void server;
    await runtime.start();
    await runtime.stop();

    // $ExpectType boolean
    await runtime.isStarted({});

    // $ExpectType string
    await runtime.version({});

    // $ExpectType FlowState
    await runtime.flows.getState({});
    // $ExpectType FlowState
    await runtime.flows.setState({ state: "stop" });
    // $ExpectType { rev: string; }
    await runtime.flows.setFlows({
        flows: { rev: "abc-123", flows: [] },
    });
    await runtime.flows.setFlows({
        flows: { flows: [], credentials: {} },
        deploymentType: "reload",
    });

    await runtime.comms.receive({
        client: {
            session: "session-id",
            user: { username: "admin", permissions: "*" },
            send() {},
        },
        topic: "multiplayer/connect",
        data: "client-session",
    });

    const resource: Buffer | null = await runtime.nodes.getModuleResource({
        module: "node-red",
        path: "icons/node-red.svg",
    });
    const icon: Buffer | null = await runtime.nodes.getIcon({ module: "node-red", icon: "inject.svg" });
    void resource;
    void icon;
    await runtime.nodes.addModule({
        tarball: {
            name: "example.tgz",
            size: 10,
            buffer: Buffer.from("example"),
        },
    });

    // $ExpectType object[]
    await runtime.plugins.getPluginList({});
    // $ExpectType DiagnosticsReport
    await runtime.diagnostics.get({ scope: "basic" });
    await runtime.nodes.getModuleCatalogs({});
    await runtime.nodes.getModuleCatalog({ module: "node-red" });
    await runtime.plugins.getPluginCatalogs({});

    await runtime.projects.setActiveProject({ id: "project", clearContext: true });
    await runtime.projects.resolveMerge({ id: "project", path: "flows.json", resolutions: "ours" });
    await runtime.projects.pull({ remote: "origin" });
}
