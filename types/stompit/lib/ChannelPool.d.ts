import { ChannelOptions } from "./Channel";

import Channel = require("./Channel");
import ConnectFailover = require("./ConnectFailover");

declare class ChannelPool {
    constructor(connectFailover: ConnectFailover, options?: ChannelPool.ChannelPoolOptions);

    channel(callback: (err: Error | null, channel: Channel) => void): void;
    close(): void;
}

export = ChannelPool;

declare namespace ChannelPool {
    interface ChannelPoolOptions {
        minChannels?: number;
        minFreeChannels?: number;
        maxChannels?: number;
        freeExcessTimeout?: number;
        requestChannelTimeout?: number;
        channelOptions?: ChannelOptions;
    }
}
