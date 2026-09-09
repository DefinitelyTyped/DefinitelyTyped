import { LocalSettings } from "@node-red/runtime";
import { EventEmitter } from "events";
import { Node, NodeDef, NodeInitializer } from "node-red";
import { SinonSpy } from "sinon";
import supertest = require("supertest");

declare class NodeTestHelper extends EventEmitter {
    credentials: unknown;

    init(nodeRedRuntime?: string, userSettings?: Partial<LocalSettings>): void;

    /**
     * Loads a flow then starts the flow.
     * @param testNode Initializer function of a node to be tested. This node will be
     * registered, and can be used in testFlows.
     * @param testFlows Flow data to test a node. If you want to use flow data exported
     * from Node-RED editor, export the flow to the clipboard and paste the content into
     * your test scripts.
     * @param testCredentials Optional node credentials.
     * @param cb Function to call back when testFlows has been started.
     */
    load(
        testNode: nodeRedNodeTestHelper.TestNodeInitializer,
        testFlows: nodeRedNodeTestHelper.TestFlows,
        testCredentials?: nodeRedNodeTestHelper.TestCredentials | nodeRedNodeTestHelper.Callback,
        cb?: nodeRedNodeTestHelper.Callback,
    ): Promise<void>;

    /**
     * Returns promise to stop all flows, clean up test runtime.
     */
    unload(): Promise<void>;

    /**
     * Returns a node instance by id in the testFlow. Any node that is defined in testFlows
     * can be retrieved, including any helper node added to the flow.
     * @param id Node id
     */
    getNode(id: string): Node;

    /**
     * Stop all flows.
     */
    clearFlows(): Promise<void>;

    /**
     * Update flows
     * @param testFlows Flow data to test a node
     * @param type The type of deploy mode "full", "flows" or "nodes" (defaults to "full")
     * @param testCredentials Optional node credentials.
     * @param cb Function to call back when testFlows has been started.
     */
    setFlows(
        testFlows: nodeRedNodeTestHelper.TestFlows,
        type?: nodeRedNodeTestHelper.DeployType,
        testCredentials?: nodeRedNodeTestHelper.TestCredentials,
        cb?: nodeRedNodeTestHelper.Callback,
    ): Promise<void>;

    /**
     * Create http (supertest) request to the editor/admin url.
     * @example
     * ```
     * helper.request().post('/inject/invalid').expect(404).end(done);
     * ```
     */
    request(): supertest.SuperTest<supertest.Test>;

    /**
     * Merges any userSettings with the defaults returned by `RED.settings`. Each
     * invocation of this method will overwrite the previous userSettings to prevent
     * unexpected problems in your tests.
     *
     * This will enable you to replicate your production environment within your tests,
     * for example where you're using the `functionGlobalContext` to enable extra node
     * modules within your functions.
     * @example
     * ```
     * // functions can now access os via global.get('os')
     * helper.settings({ functionGlobalContext: { os:require('os') } });
     *
     * // reset back to defaults
     * helper.settings({ });
     * ```
     * @param userSettings - an object containing the runtime settings
     * @returns custom userSettings merged with default RED.settings
     */
    settings(userSettings?: Partial<LocalSettings>): LocalSettings;

    /**
     * Starts a Node-RED server for testing nodes that depend on http or web sockets endpoints
     * like the debug node. To start a Node-RED server before all test cases:
     * ```
     * before((done) => {
     *     helper.startServer(done);
     * });
     * ```
     * @param done callback
     */
    startServer(done?: nodeRedNodeTestHelper.Callback): Promise<void>;

    /**
     * Stop server. Generally called after unload() complete. For example, to unload a flow then
     * stop a server after each test:
     * ```
     * afterEach((done) => {
     *     helper.unload().then(() => {
     *         helper.stopServer(done);
     *     });
     * });
     * ```
     * @param done callback
     */
    stopServer(done?: nodeRedNodeTestHelper.Callback): Promise<void>;

    /**
     * Return the URL of the helper server including the ephemeral port used when starting the server.
     */
    url(): string;

    /**
     * Return a spy on the logs to look for events from the node under test. For example:
     * ```
     * const logEvents = helper.log().args.filter((evt) => {
     *     return evt[0].type === "batch";
     * });
     * ```
     */
    log(): SinonSpy;
}

declare const nodeRedNodeTestHelper: NodeTestHelper & {
    NodeTestHelper: typeof NodeTestHelper;
};

declare namespace nodeRedNodeTestHelper {
    type Callback = (error?: Error) => void;
    type DeployType = "full" | "flows" | "nodes";
    type TestNodeInitializer = NodeInitializer | NodeInitializer[];
    type TestFlowsItem<TNodeDef extends NodeDef = NodeDef> = Partial<TNodeDef> & {
        id: string;
        type: string;
        wires?: string[][] | undefined;
    };
    type TestFlows = TestFlowsItem[];
    type TestCredentials<TCreds extends object = Record<string, unknown>> = Record<string, TCreds>;
}

export = nodeRedNodeTestHelper;
