import runtime = require("@node-red/runtime");
import editorApi from "@node-red/editor-api";
import { Server } from "https";

async function runtimeTests() {
    const httpServer = new Server();
    runtime.init(
        {
            adminAuth: {
                type: "strategy",
                strategy: {
                    name: "customStrategy",
                    label: "Custom Strategy",
                    icon: "path/to/icon.png",
                    strategy: {
                        authenticate: () => {}
                    },
                    options: {}
                },
                users: async (username) => {
                    return {
                        username,
                        permissions: ["*"],
                    };
                },
            },
            storageModule: {
                init: (_) => {},
                getFlows: async () => ({
                    flows: [],
                    credentials: {},
                    rev: "",
                }),
                saveFlows: async () => {},
                saveCredentials: async () => {},
                getSettings: async () => null,
                saveSettings: async () => {},
                getSessions: async () => null,
                saveSessions: async () => {},
                getLibraryEntry: async () => "",
                saveLibraryEntry: async () => {},
            },
            storageModuleOptions: {
                name: "custom",
            },
            uiPort: 18880,
            uiHost: "localhost",
        }, 
        httpServer,
        editorApi,
    );
    await runtime.start();
    await runtime.stop();

    // $ExpectType boolean
    await runtime.isStarted();

    // $ExpectType string
    await runtime.version();
}
