// Type definitions for docker-events 0.0
// Project: https://github.com/deoxxa/docker-events
// Definitions by: Ciffelia <https://github.com/ciffelia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as events from 'events';
import * as Dockerode from 'dockerode';

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
