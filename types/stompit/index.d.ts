// Type definitions for stompit 0.26
// Project: https://github.com/gdaws/node-stomp
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Writable, Readable, Duplex, WritableOptions } from "stream";
import { EventEmitter } from "events";

export import IncomingFrameStream = require("./lib/IncomingFrameStream");
export import OutgoingFrameStream = require("./lib/OutgoingFrameStream");

export import Client = require("./lib/Client");

export import connect = require("./lib/connect");
export import ConnectFailover = require("./lib/ConnectFailover");

export import Channel = require("./lib/Channel");
export import ChannelFactory = require("./lib/ChannelFactory");
export import ChannelPool = require("./lib/ChannelPool");
