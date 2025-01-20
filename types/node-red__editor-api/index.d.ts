import { Express, NextFunction, Request, Response } from "express";
import { Server as HttpsServer } from "https";

import * as runtime from "@node-red/runtime";

declare const editorAPI: editorAPI.EditorAPIModule;

export = editorAPI;

declare namespace editorAPI {
    interface Auth {
        needsPermission: (permission: string) => (req: Request, res: Response, next: NextFunction) => void;
    }
    interface EditorAPIModule {
        /**
         * Initialise the module.
         * @param  settings   The runtime settings
         * @param  _server    An instance of HTTP Server
         * @param  storage    An instance of Node-RED Storage
         * @param  runtimeAPI An instance of Node-RED Runtime
         */
        init: (
            settings: runtime.LocalSettings,
            _server: HttpsServer,
            storage: runtime.StorageModule,
            runtimeAPI: runtime.RuntimeModule,
        ) => void;

        /**
         * Start the module.
         */
        start: () => Promise<void>;

        /**
         * Stop the module.
         */
        stop: () => Promise<void>;

        auth: Auth;

        /**
         * The Express app used to serve the Node-RED Editor
         */
        readonly httpAdmin: Express;
    }
}
