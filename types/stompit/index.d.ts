/// <reference types="node" />

import { EventEmitter } from "events";
import { Duplex, Readable, Writable, WritableOptions } from "stream";

export import IncomingFrameStream = require("./lib/IncomingFrameStream");
export import OutgoingFrameStream = require("./lib/OutgoingFrameStream");

export import Client = require("./lib/Client");

export import connect = require("./lib/connect");
export import ConnectFailover = require("./lib/ConnectFailover");

export import Channel = require("./lib/Channel");
export import ChannelFactory = require("./lib/ChannelFactory");
export import ChannelPool = require("./lib/ChannelPool");
