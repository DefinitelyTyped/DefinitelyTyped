// Type definitions for fake-response 4.1
// Project: https://github.com/R35007/Fake-Response

/// <reference types="node" />

import * as express from 'express';
import { Server } from 'http';
import { Config, Db, Globals, Middleware, RouteResult, UserDB, Injectors, HAR } from './model';
/**
 * Create a Fake Response server instance using this class constructor.
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
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse(db);
     * const isStopped = fakeResponse.stopServer(); // make sure the server is already started
     * @link https://github.com/R35007/Fake-Response#stopserver - For further info pls visit this ReadMe
     */
    stopServer: () => Promise<boolean>;
    /**
     * This function helps to generate a route before starting the server
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse(db);
     * const result = fakeResponse.loadResources();
     * @link https://github.com/R35007/Fake-Response#loadresources - For further info pls visit this ReadMe
     */
    loadResources: () => Promise<RouteResult[]>;
    /**
     * This function helps to create a route explicitly
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
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * fakeResponse.setData(db, config, globals, injectors);
     * @link https://github.com/R35007/Fake-Response#setdata - For further info pls visit this ReadMe
     */
    setData: (db?: Db[] | object | string, config?: Config, globals?: Globals, injectors?: Injectors[]) => void;
    /**
     * This function helps to get initialized data
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
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const config = fakeResponse.getValidConfig(config);
     * @link https://github.com/R35007/Fake-Response#getdata - For further info pls visit this ReadMe
     */
    getValidConfig: (config?: Config) => Config;
    /**
     * This function validates and returns the globals object
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const globals = fakeResponse.getValidGlobals(globals);
     * @link https://github.com/R35007/Fake-Response#getdata - For further info pls visit this ReadMe
     */
    getValidGlobals: (globals?: Globals) => Globals;
    /**
     * This function validates and returns the injectors object
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const injectors = fakeResponse.getValidInjectors(injectors);
     * @link https://github.com/R35007/Fake-Response#getdata - For further info pls visit this ReadMe
     */
    getValidInjectors: (injectors: Injectors[]) => Injectors[];
    /**
     * This function validates and returns the db List
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const db = fakeResponse.getValidDb(db,injectors);
     * @link https://github.com/R35007/Fake-Response#getdata - For further info pls visit this ReadMe
     */
    getValidDb: (db?: UserDB, injectors?: Injectors[]) => Db[];
    /**
     * This function validates and returns the db List
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const db = fakeResponse.getValidDbList(db);
     * @link https://github.com/R35007/Fake-Response#getdata - For further info pls visit this ReadMe
     */
    getValidDbList: (db?: Db[], injectors?: Injectors[]) => Db[];
    /**
     * This function helps to transform the db url or object to an db List
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const db = fakeResponse.transformJson(db, injectors);
     * @link https://github.com/R35007/Fake-Response#transformjson - For further info pls visit this ReadMe
     */
    transformJson: (data?: object | string, injectors?: Injectors[]) => Db[];
    /**
     * This function helps to transform the harJSon to a simple route and response object
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse();
     * const db = fakeResponse.transformHar(harData, ["xhr","document"]);
     * @link https://github.com/R35007/Fake-Response#transformhar - For further info pls visit this ReadMe
     */
    transformHar: (harData?: HAR, filters?: string[]) => {};
    /**
     * This function helps to filter only those properties which are required using schema
     * @example
     * const {FakeResponse} = require("fake-response");
     * const fakeResponse = new FakeResponse()
     * const data = {
     *  name : foo,
     *  likes : ["xxx","yyy"],
     *  address:[{
     *    "city":"bar",
     *    "state":"TN",
     *    "country":"India"
     *  }]
     * };
     *
     * const schema:{
     *  name:true,
     *  address:{
     *    city:true
     *  }
     * }
     * const db = fakeResponse.filterBySchema(data, schema);
     * @link https://github.com/R35007/Fake-Response#filterbyschema - For further info pls visit this ReadMe
     */
    filterBySchema: (data?: any, schema?: object);
}
