import { SCServer, SCServerSocket } from "socketcluster-server";
import SCBroker = require("sc-broker/scbroker");
import { FlexiMap } from "fleximap";
import { ExpiryManager } from "expirymanager";

////////////////////////////////////////////////////
/// SCBroker tests
////////////////////////////////////////////////////

const options: SCServer.SCServerOptions = { port: 80 };

let scBroker = new SCBroker();
scBroker = new SCBroker(options);
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
