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
            httpAdminCors: { origin: "https://example.com" },
            httpNodeMiddleware: (_req, _res, next) => next(),
            httpStatic: [
                {
                    path: "/srv/node-red/public",
                    root: "/public",
                    options: { maxAge: "1d" },
                    cors: { origin: "*" },
                },
            ],
            httpStaticCors: { origin: "*" },
            diagnostics: { enabled: true, ui: true },
            runtimeState: { enabled: true, ui: true },
            telemetry: { enabled: false, updateNotification: false },
            logging: {
                custom: {
                    level: "debug",
                    handler: () => message => void message,
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
                    upload: true,
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
            },
            globalFunctionTimeout: 30,
            functionTimeout: 5,
            nodeCloseTimeout: 20000,
            nodeDefaults: {
                debug: {
                    complete: true,
                },
            },
        },
        httpServer,
        editorApi,
    );
    runtime.init({ httpAdminRoot: false });
    runtime.init({ httpAdminRoot: false }, null);
    runtime.init({ httpAdminRoot: false }, createHttpsServer());

    const server: HttpServer | HttpsServer | null = runtime.server;
    const internalServer: HttpServer | HttpsServer | null = runtime._.server;
    void server;
    void internalServer;
    await runtime.start();
    await runtime.stop();

    // $ExpectType boolean
    await runtime.isStarted();

    // $ExpectType string
    await runtime.version();

    // $ExpectType { state: string; }
    await runtime.flows.getState({});
    // $ExpectType { state: string; }
    await runtime.flows.setState({ state: "stop" });

    await runtime.comms.receive({
        client: {
            session: "session-id",
            user: { username: "admin", permissions: "*" },
            send(topic, data) {
                topic.toUpperCase();
                void data;
            },
        },
        topic: "multiplayer/connect",
        data: { session: "client-session" },
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
            file: "example.tgz",
            size: 10,
            buffer: Buffer.from("example"),
        },
    });

    // $ExpectType object[]
    await runtime.plugins.getPluginList({});
    // $ExpectType DiagnosticsReport
    await runtime.diagnostics.get({ scope: "basic" });

    await runtime.projects.setActiveProject({ id: "project", clearContext: true });
    await runtime.projects.resolveMerge({ id: "project", path: "flows.json", resolution: "ours" });
    await runtime.projects.pull({ id: "project", remote: "origin" });

    // $ExpectType string
    await runtime.storage.saveFlows({ flows: [], credentials: {} });
}
