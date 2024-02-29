/// <reference types="node" />

import { OptionsJson, OptionsText, OptionsUrlencoded } from "body-parser";
import { Options as CreateCertOptions } from "create-cert";
import { Express } from "express";
import * as http from "http";
import * as https from "https";

type Server = createTestServer.TestServer & Omit<Express, "listen"> & { get: (url: string, response: string) => void };

/**
 * Returns a Promise which resolves to an (already listening) server.
 */
declare function createTestServer(options?: createTestServer.Options): Promise<Server>;

export = createTestServer;

declare namespace createTestServer {
    interface Options {
        /**
         * SSL certificate options to be passed to {@link create-cert#createCert | createCert()}.
         */
        certificate?: string | CreateCertOptions | undefined;
        /**
         * Body parser options object to be passed to `body-parser` methods.
         *
         * If set to `false` then all body parsing middleware will be disabled.
         */
        bodyParser?: false | OptionsJson & OptionsText & OptionsUrlencoded | undefined;
    }

    interface TestServer {
        /**
         * The url you can reach the HTTP server on.
         *
         * e.g: `'http://localhost:5486'`
         *
         * `undefined` while the server is not listening.
         */
        url?: string | undefined;
        /**
         * The port number you can reach the HTTP server on.
         *
         * e.g: `5486`
         *
         * `undefined` while the server is not listening.
         */
        port?: number | undefined;
        /**
         * The url you can reach the HTTPS server on.
         *
         * e.g: `'https://localhost:5487'`
         *
         * `undefined` while the server is not listening.
         */
        sslUrl?: string | undefined;
        /**
         * The port number you can reach the HTTPS server on.
         *
         * e.g: `5487`
         *
         * `undefined` while the server is not listening.
         */
        sslPort?: number | undefined;
        /**
         * The CA certificate to validate the server certificate against.
         */
        caCert: string;
        /**
         * The underlying HTTP server instance.
         */
        http: http.Server;
        /**
         * The underlying HTTPS server instance.
         */
        https: https.Server;
        /**
         * Returns a Promise that resolves when both the HTTP and HTTPS servers are listening.
         *
         * Once the servers are listening, `server.url` and `server.sslUrl` will be updated.
         *
         * Please note, this function doesn't take a port argument, it uses a new randomised port each time.
         * Also, you don't need to manually call this after creating a server, it will start listening automatically.
         */
        listen: () => Promise<void>;
        /**
         * Returns a Promise that resolves when both the HTTP and HTTPS servers have stopped listening.
         *
         * Once the servers have stopped listening, `server.url` and `server.sslUrl` will be set to undefined.
         */
        close: () => Promise<void>;
    }
}
