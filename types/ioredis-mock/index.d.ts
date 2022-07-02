// Type definitions for ioredis-mock 5.6
// Project: https://github.com/stipsan/ioredis-mock#readme
// Definitions by: Lukas Elmer <https://github.com/lukaselmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import RealIORedis = require('ioredis');

export default RealIORedis;
export type AddressFromResponse = RealIORedis.AddressFromResponse;
export type BooleanResponse = RealIORedis.BooleanResponse;
export type Callback<T> = RealIORedis.Callback<T>;
export type CallbackFunction = RealIORedis.CallbackFunction;
export type Cluster = RealIORedis.Cluster;
export type ClusterNode = RealIORedis.ClusterNode;
export type ClusterOptions = RealIORedis.ClusterOptions;
export type ClusterStatic = RealIORedis.ClusterStatic;
export type Command = RealIORedis.Command;
export type Commands = RealIORedis.Commands;
export type DNSLookupFunction = RealIORedis.DNSLookupFunction;
export type KeyType = RealIORedis.KeyType;
export type MultiOptions = RealIORedis.MultiOptions;
export type NatMap = RealIORedis.NatMap;
export type NodeConfiguration = RealIORedis.NodeConfiguration;
export type NodeRole = RealIORedis.NodeRole;
export type Ok = RealIORedis.Ok;
export type OverloadedBlockingListCommand<T, U> = RealIORedis.OverloadedBlockingListCommand<T, U>;
export type OverloadedCommand<T, U> = RealIORedis.OverloadedCommand<T, U>;
export type OverloadedEvalCommand<T, U> = RealIORedis.OverloadedEvalCommand<T, U>;
export type OverloadedHashCommand<T, U> = RealIORedis.OverloadedHashCommand<T, U>;
export type OverloadedKeyCommand<T, U> = RealIORedis.OverloadedKeyCommand<T, U>;
export type OverloadedKeyedHashCommand<T, U> = RealIORedis.OverloadedKeyedHashCommand<T, U>;
export type OverloadedListCommand<T, U> = RealIORedis.OverloadedListCommand<T, U>;
export type OverloadedScanCommand<T, U> = RealIORedis.OverloadedScanCommand<T, U>;
export type OverloadedSubCommand<T, U> = RealIORedis.OverloadedSubCommand<T, U>;
export type Pipeline = RealIORedis.Pipeline;
export type PreferredSlaves = RealIORedis.PreferredSlaves;
export type Redis = RealIORedis.Redis;
export type RedisOptions = RealIORedis.RedisOptions;
export type ScanStreamOption = RealIORedis.ScanStreamOption;
export type SecureContextOptions = RealIORedis.SecureContextOptions;
export type SecureVersion = RealIORedis.SecureVersion;
export type ValueType = RealIORedis.ValueType;
