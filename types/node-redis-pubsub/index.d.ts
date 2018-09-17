// Type definitions for node-redis-pubsub 3.0.0
// Project: https://github.com/louischatriot/node-redis-pubsub#readme
// Definitions by: Rene Keijzer <https://github.com/renekeijzer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped





import *  as redis from 'redis';

declare function NRP(options:object) : NRP.NodeRedisPubSub;
declare namespace NRP {
    function initClient(options:object) : NRP.NodeRedisPubSub;

    class NodeRedisPubSub {
        constructor(options : object);
        getRedisClient(any:void): redis.RedisClient;
        on(channel:string, handler:Function, callback?:Function):Function;
        subscribe(channel:string, handler:Function, callback?:Function):Function;
        emit(channel:string, message:string) : any;
        publish(channel:string, message:string) : any;
        quit(any:void):void;
        end(any:void):void;
    }
}

export = NRP;
