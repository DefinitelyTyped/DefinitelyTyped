import { SCChannel, SCChannelOptions } from "sc-channel";
import { handlerFunction, Client, SCBrokerClusterClientOptions } from "sc-broker-cluster";

const clientOptions: SCBrokerClusterClientOptions = { brokers: [], connectRetryErrorThreshold: 0 };
const client = new Client(clientOptions);

let channel = new SCChannel("channelName", client.exchange());
const channelOptions: SCChannelOptions = {};
channel = new SCChannel("channelName", client.exchange(), channelOptions);

channel.state = channel.PENDING;
channel.state = channel.SUBSCRIBED;
channel.state = channel.UNSUBSCRIBED;

const channelName: string = channel.name;

const handler: handlerFunction = () => { };

channel.watch(handler);
channel.unwatch();

channel.subscribe();
channel.subscribe(channelOptions);
channel.unsubscribe();

const data: any = channel.data;

channel.emit("subscribe", channelName);
channel.emit("unsubscribe", channelName);

channel.setOptions(channelOptions);

channel.publish(data);
