import { EventEmitter } from "events";
import { SCBrokerClient } from "sc-broker";
import { mapperFunction } from ".";

export class ClientCluster extends EventEmitter {
    constructor(clients: SCBrokerClient[]);

    setMapper(mapper: mapperFunction): void;
    getMapper(): mapperFunction;
}
