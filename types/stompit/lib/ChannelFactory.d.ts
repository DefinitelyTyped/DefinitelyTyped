import ChannelPool = require("./ChannelPool");
import ConnectFailover = require("./ConnectFailover");

declare class ChannelFactory extends ChannelPool {
    constructor(connectFailover: ConnectFailover);
}

export = ChannelFactory;
