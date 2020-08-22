// Type definitions for fake-response 3.4
// Project: https://github.com/R35007/Fake-Response
// Definitions by: r35007 <https://github.com/R35007>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as express from 'express';
import { Server } from 'http';
import { Config, Db, Globals, Middleware, RouteResult, UserDB, Injectors, HAR } from './model';
/**
 * Create a Fake Response server instance using this class constructor.
 * @constructor
 * @param {string|object|array} db - The db which you would link to generate a routes
 * @param {object} config - Provide your server configs
 * @param {object} globals - Provide your global declarations
 * @param {array} injectors - Provide your injectors to inject any middleware or delay to a particular routes
 * @example
 * const {FakeResponse} = require("fake-response");
 * // validates and sets the Data
 * const fakeResponse = new FakeResponse(db, config, globals, injectors) // all params are optional
 * fakeResponse.launchServer(); // runs the initialized db
 * @link https://r35007.github.io/Fake-Response/ - For further info pls visit this ReadMe
 */
export class FakeResponse {
    constructor(db?: UserDB, config?: Config, globals?: Globals, injectors?: Injectors[]);
    /**
     * This function creates express app, starts the server loads the resources and creates default routes.
     * @returns {object} express app, server, results, db, config, globals, fullDbData in a object
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * fakeResponse.launchServer() // if not provided anything in the constructor runs the sample db
     * @link https://r35007.github.io/Fake-Response/#launchserver - For further info pls visit this ReadMe
     */
    launchServer: () => Promise<{
        app: express.Application;
        server: Server;
        results: RouteResult[];
        db: Db[];
        config: Config;
        globals: Globals;
        fullDbData: object;
    }>;
    /**
     * This function creates express app with default middlewares.
     * @returns {object} express app
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse(db);
     * const app = fakeResponse.createExpressApp(); // creates and returns the express app.
     * @link https://r35007.github.io/Fake-Response/#createexpressapp - For further info pls visit this ReadMe
     */
    createExpressApp: () => express.Application;
    /**
     * This function starts the express server.
     * Please make sure you create the express app before starting the server
     * @param {number} port any port number. By  default it takes from config Object
     * @returns {object} Promise of express http server
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse(db);
     * const app = fakeResponse.createExpressApp();
     * fakeResponse.startServer(3000); // the port is an optional param
     * @link https://github.com/R35007/Fake-Response#startserver - For further info pls visit this ReadMe
     */
    startServer: (port?: number) => Promise<Server>;
    /**
     * This function stops the express server
     * @returns {boolean} Promise of boolean
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse(db);
     * const isStopped = fakeResponse.stopServer(); // make sure the server is already started
     * @link https://github.com/R35007/Fake-Response#stopserver - For further info pls visit this ReadMe
     */
    stopServer: () => Promise<boolean>;
    /**
     * This function helps to generate a route before starting the server
     * @returns {object} Promise of routes success and failure results
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse(db);
     * const result = fakeResponse.loadResources();
     * @link https://github.com/R35007/Fake-Response#loadresources - For further info pls visit this ReadMe
     */
    loadResources: () => Promise<RouteResult[]>;
    /**
     * This function helps to create a route explicitly
     * @param {string|object|array} data - provide your response here
     * @param {string} route - provide a new route to generate a local server
     * @param {string} [dataType="default"] - provide the data Type of one of the following. "default"|"url"|"file"
     * @param {function} [middleware] - provide your middleware for this specific route
     * @param {number} [delay] - provide your delay for this specific route
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse(db);
     *
     *const newResponse = {
          value : "New response"
     }
     * fakeResponse.createRoute('/newRoute',newResponse);
     * @link https://github.com/R35007/Fake-Response#createroute - For further info pls visit this ReadMe
     */
    createRoute: (data: any, route: string, dataType?: string, middleware?: Middleware, delay?: number) => void;
    /**
     * This function helps to create a default route explicitly.
     * This creates the following routes.
     * http://localhost:3000/
     * http://localhost:3000/db
     * http://localhost:3000/routesList
     *
     * Note : The port is assigned from the config
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse(db);
     * fakeResponse.createDefaultRoutes();
     * @link https://github.com/R35007/Fake-Response#createdefaultroutes - For further info pls visit this ReadMe
     **/
    createDefaultRoutes: () => void;
    /**
     * This function validates and sets the Data explicitly
     * @param {string|object|array} db - The db which you would link to generate a routes
     * @param {object} config - Provide your server configs
     * @param {object} globals - Provide your global declarations
     * @param {array} injectors - Provide your injectors to inject any middleware or delay to a particular routes
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * fakeResponse.setData(db, config, globals, injectors);
     * @link https://github.com/R35007/Fake-Response#setdata - For further info pls visit this ReadMe
     */
    setData: (db?: Db[] | object | string, config?: Config, globals?: Globals, injectors?: Injectors[]) => void;
    /**
     * This function helps to get initialized data
     * @return {object} the current valid db, config, globals, injectors
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const {db, config, globals, injectors} = fakeResponse.getData();
     * @link https://github.com/R35007/Fake-Response#getdata - For further info pls visit this ReadMe
     */
    getData: () => {
        db: UserDB;
        config: Config;
        globals: Globals;
        injectors: Injectors[];
    };
    /**
     * This function validates and returns the config object
     * @param {object} config
     * @return {object} the valid config
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const config = fakeResponse.getValidConfig(config);
     * @link https://github.com/R35007/Fake-Response#getdata - For further info pls visit this ReadMe
     */
    getValidConfig: (config?: Config) => Config;
    /**
     * This function validates and returns the globals object
     * @param {object} globals
     * @return {object} the valid globals
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const globals = fakeResponse.getValidGlobals(globals);
     * @link https://github.com/R35007/Fake-Response#getdata - For further info pls visit this ReadMe
     */
    getValidGlobals: (globals?: Globals) => Globals;
    /**
     * This function validates and returns the injectors object
     * @param {object} injectors
     * @return {array} the valid injectors
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const injectors = fakeResponse.getValidInjectors(injectors);
     * @link https://github.com/R35007/Fake-Response#getdata - For further info pls visit this ReadMe
     */
    getValidInjectors: (injectors: Injectors[]) => Injectors[];
    /**
     * This function validates and returns the db List
     * @param {object | string | array} db
     * @param {array} injectors
     * @return {array} the valid db
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const db = fakeResponse.getValidDb(db,injectors);
     * @link https://github.com/R35007/Fake-Response#getdata - For further info pls visit this ReadMe
     */
    getValidDb: (db?: UserDB, injectors?: Injectors[]) => Db[];
    /**
     * This function validates and returns the db List
     * @param {array} db
     * @param {array} injectors
     * @return {array} the valid db
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const db = fakeResponse.getValidDbList(db);
     * @link https://github.com/R35007/Fake-Response#getdata - For further info pls visit this ReadMe
     */
    getValidDbList: (db?: Db[], injectors?: Injectors[]) => Db[];
    /**
     * This function helps to transform the db url or object to an db List
     * @param {string|object} db
     * @param {array} injectors
     * @return {object} the valid db list
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const db = fakeResponse.transformJson(db, injectors);
     * @link https://github.com/R35007/Fake-Response#transformjson - For further info pls visit this ReadMe
     */
    transformJson: (data?: object | string, injectors?: Injectors[]) => Db[];
    /**
     * This function helps to transform the harJSon to a simple route and response object
     * @param {object} harData
     * @param {array} filters Prove the response types to be filtered
     * @return {object} the transformed db object
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const db = fakeResponse.transformHar(harData, ["xhr","document"]);
     * @link https://github.com/R35007/Fake-Response#transformhar - For further info pls visit this ReadMe
     */
    transformHar: (harData?: HAR, filters?: string[]) => {};
}
