import { SCServerSocket } from "socketcluster-server";
import SCBroker = require("sc-broker/scbroker");
import { FlexiMap } from "fleximap";
import { ExpiryManager } from "expirymanager";
import * as scClusterBrokerClient from "scc-broker-client";

////////////////////////////////////////////////////
/// SCBroker tests
////////////////////////////////////////////////////

const run = () => {
    console.log("run called!");
};

let scBroker = new SCBroker();
scBroker = new SCBroker({ run });
scBroker.options = { environment: "prod" };

const id: number = scBroker.id;
const instanceId: number = scBroker.instanceId;
const dataMap: FlexiMap = scBroker.dataMap;
const dataExpirer: ExpiryManager = scBroker.dataExpirer;
const subscriptions = scBroker.subscriptions;

const socket: SCServerSocket = subscriptions[1]["test"];

scBroker.on("subscribe", channel => {
    const subscribeChannel: string = channel;
});
scBroker.on("unsubscribe", channel => {
    const unsubscribeChannel: string = channel;
});
scBroker.on("publish", (channel, data) => {
    const publishChannel: string = channel;
    const publishData: any = data;
});
scBroker.on("masterMessage", (data, masterMessageResponse) => {
    const masterMessageData: any = data;
    masterMessageResponse(null, "test");
    masterMessageResponse(new Error(), null);
});

scBroker.publish("testChannel", 123);

scBroker.exec(dataMap => {
    dataMap.set(["main", "message"], "Message");
    return dataMap.get(["main"]);
});

scBroker.sendToMaster("data");
scBroker.sendToMaster(123, (err, response) => {
    if (!err) {
        const answer = response;
    }
});

class MyBroker extends SCBroker {
    run() {
        this.on("subscribe", channel => {});
    }
}

// From the socketcluster sample
class Broker extends SCBroker {
    run() {
        console.log("   >> Broker PID:", process.pid);

        if (this.options.clusterStateServerHost) {
            scClusterBrokerClient.attach(this, {
                stateServerHost: this.options.clusterStateServerHost,
                stateServerPort: this.options.clusterStateServerPort,
                mappingEngine: this.options.clusterMappingEngine,
                clientPoolSize: this.options.clusterClientPoolSize,
                authKey: this.options.clusterAuthKey,
                stateServerConnectTimeout: this.options.clusterStateServerConnectTimeout,
                stateServerAckTimeout: this.options.clusterStateServerAckTimeout,
                stateServerReconnectRandomness: this.options.clusterStateServerReconnectRandomness
            });
        }
    }
}

new Broker();
