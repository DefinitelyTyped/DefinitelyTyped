import registry = require("@node-red/registry");
import { InternalRuntimeAPI } from "@node-red/runtime";

declare const runtime: InternalRuntimeAPI;
declare const nodeInfo: registry.NodeInfo;
declare const moduleInfo: registry.ModuleInfo;
declare const pluginInfo: registry.PluginInfo;
declare const subflow: registry.SubflowDef;

registry.init(runtime);
registry.load().then(() => {});
registry.clear();
registry.registerType("node-set", "my-node", function(_nodeDef: registry.NodeDef) {});
registry.get("my-node");
registry.registerSubflow("node-set", subflow);
registry.getNodeInfo("my-node");
registry.getNodeList();
registry.getNodeList(node => node.enabled);
registry.getModuleInfo("my-module");
registry.getModuleList();
registry.getNodeConfigs();
registry.getNodeConfig("my-module/my-node", "en-US");
registry.getNodeIconPath("my-module", "icon.svg");
registry.getNodeIcons();
registry.enableNode("my-node").then(info => info.enabled);
registry.disableNode("my-node").then(info => info.enabled);
registry.addModule("my-module").then(info => info?.nodes);
registry.removeModule("my-module");
registry.installModule("my-module", "1.0.0").then(info => info.version);
registry.installModule(Buffer.from([])).then(info => info.version);
registry.uninstallModule("my-module");
registry.cleanModuleList();
registry.installerEnabled();
registry.getNodeExampleFlows();
registry.getNodeExampleFlowPath("my-module", "example");
registry.getModuleResource("my-module", "resource.txt");
registry.checkFlowDependencies([]);
registry.registerPlugin("plugin-set", "my-plugin", { type: "my-plugin-type" });
registry.getPlugin("my-plugin");
registry.getPluginInfo("my-plugin");
registry.getPluginsByType("my-plugin-type");
registry.getPluginList();
registry.getPluginConfigs("en-US");
registry.getPluginConfig("my-module/my-plugin", "en-US");
registry.exportPluginSettings({});
registry.deprecated.get("irc in");

const checkedNodeInfo: registry.NodeInfo = nodeInfo;
const checkedModuleInfo: registry.ModuleInfo = moduleInfo;
const checkedPluginInfo: registry.PluginInfo = pluginInfo;
void checkedNodeInfo;
void checkedModuleInfo;
void checkedPluginInfo;

function registryTests() {
    interface ExtendedNodeRedSettings extends registry.NodeAPISettingsWithData {
        myKey: string;
    }
    interface MyNodeProperties {
        defKey: string;
    }
    interface MyNodeCredentials {
        username: string;
        password: string;
    }
    interface MyNode extends registry.Node<MyNodeCredentials> {
        instanceKey: string;
    }
    interface MyNodeDef extends registry.NodeDef, MyNodeProperties {}

    function nodeAPITests(RED: registry.NodeAPI<ExtendedNodeRedSettings>) {
        // $ExpectType string
        RED.settings.myKey;
        // $ExpectType boolean | undefined
        RED.settings.verbose;
        // @ts-expect-error
        RED.settings.wrongKey;

        const nodeConstructor: registry.NodeConstructor<MyNode, MyNodeDef, MyNodeCredentials> = function(nodeDef) {
            RED.nodes.createNode(this, nodeDef);

            // $ExpectType FlowInfo | undefined
            this._flow;
            // $ExpectType string | undefined
            this._alias;

            // $ExpectType string
            nodeDef.defKey;
            // @ts-expect-error
            nodeDef.wrongKey;

            // $ExpectType string
            this.credentials.password;
            // $ExpectType string
            this.credentials.username;
            // @ts-expect-error
            this.credentials.wrongKey;

            this.instanceKey = "value";
            // @ts-expect-error
            this.instanceKey = 123;
            // @ts-expect-error
            this.wrongKey;

            const status: registry.NodeStatus = {
                text: "status",
                fill: "blue",
                shape: "dot",
            };
            // @ts-expect-error
            status.fill = "invalid-fill";
            // @ts-expect-error
            status.shape = "invalid-shape";
            this.status(status);
            this.status({});

            this.context().set("key", "value");
            this.context().set("key", 123);
            this.context().set("key", undefined);
            this.context().get("key");

            this.on("input", (msg, send, done) => {
                // $ExpectType string
                msg._msgid;

                // $ExpectType boolean
                this.metric();
                this.metric("eventname", msg, 10);
                this.log("log info");
                this.warn("log warn");
                this.error("log error");
                this.trace("log trace");
                this.debug("log debug");

                send(msg);

                // send a new message with a topic

                send({
                    payload: "payload",
                    topic: "topic",
                });

                this.send({
                    payload: "payload",
                    topic: "topic",
                });

                // send messages with additional parameters

                send({
                    payload: "payload",
                    foo: "bar",
                    test: { property: "example" },
                });

                // send messages to a subset of the outputs

                send([
                    {
                        payload: "payload",
                        topic: "topic",
                    },
                    null,
                ]);

                this.send([
                    {
                        payload: "payload",
                        topic: "topic",
                    },
                    null,
                ]);

                // send multiple messages to a particular output

                send([
                    null,
                    [
                        {
                            payload: "payload",
                            topic: "topic",
                        },
                        {
                            payload: "payload",
                            topic: "topic",
                        },
                    ],
                ]);

                this.send([
                    null,
                    [
                        {
                            payload: "payload",
                            topic: "topic",
                        },
                        {
                            payload: "payload",
                            topic: "topic",
                        },
                    ],
                ]);

                done();

                done(new Error("error"));
            });

            this.on("close", () => {});

            this.receive({});

            // $ExpectType Node<{}> | null
            RED.nodes.getNode("node-id");

            // RED.util covered in @node-red/util
            // just check the link
            // $ExpectType Util
            RED.util;
            // $ExpectType Hooks
            RED.hooks;

            RED.nodes.registerSubflow(subflow);

            // $ExpectType Promise<any>
            RED.import("node:path");

            // $ExpectType LinkCallTarget[]
            RED.nodes.linkcallTargets.getTargets("target");

            // $ExpectType Express
            RED.httpNode;
            // $ExpectType Express
            RED.httpAdmin;
            // $ExpectType Server<typeof IncomingMessage, typeof ServerResponse>
            RED.server;

            // $ExpectType string
            RED._("myNode.label");
            // $ExpectType string
            RED._("myNode.status", { num: 10 });
        };

        RED.nodes.registerType("my-node", nodeConstructor);

        RED.plugins.registerPlugin("my-plugin", { type: "my-plugin-type" });

        // $ExpectType PluginDefinition<PluginDef>
        RED.plugins.get("my-plugin");

        // $ExpectType PluginDefinition<PluginDef>[]
        RED.plugins.getByType("my-plugin-type");
    }

    interface MyPluginDef extends registry.PluginDef {
        defKey: string;
    }

    function pluginAPITests(RED: registry.NodeAPI<ExtendedNodeRedSettings>) {
        const pluginDefinition: registry.PluginDefinition<MyPluginDef> = {
            type: "my-plugin",
            settings: {
                "*": { value: "", exportable: true },
                defKey: { value: "", exportable: true },
            },
            onadd: () => {
                RED.comms.publish(`my-route-for-plugin`, true, true);
            },
        };
        RED.plugins.registerPlugin("my-plugin", pluginDefinition);
    }
}
