/// <reference types="node" />

import Dockerode = require("dockerode");
import events = require("events");

declare namespace DockerEvents {
    interface DockerEventsOptions {
        docker: Dockerode;
    }
}

declare class DockerEvents extends events.EventEmitter {
    constructor(options?: DockerEvents.DockerEventsOptions);

    start(): void;
    stop(): void;
}

export = DockerEvents;
