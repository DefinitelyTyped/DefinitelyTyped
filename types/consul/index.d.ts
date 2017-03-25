// Type definitions for Consul v0.23.0
// Project: https://github.com/silas/node-consul
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />



import {IncomingMessage as HttpIncomingMessage} from "http";

declare namespace Consul {

    interface Thenable<T> {
        then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
        then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
        catch<U>(onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
    }

    interface CommonOptions {
        consistent?: boolean;
        dc?: string;
        stale?: boolean;
        token?: string;
        wait?: string;
        wan?: boolean;

        ctx?: NodeJS.EventEmitter;
        timeout?: number;
    }

    interface Response extends HttpIncomingMessage {
        body?: Object | string | Buffer;
    }

    interface Callback<TData> {
        (err?: Error, data?: TData, res?: Response): any;
    }

    namespace Acl {

        interface CreateOptions extends CommonOptions {
            name?: string;
            type?: string;
            rules?: string;
        }

        interface UpdateOptions extends CommonOptions {
            id: string;
            name?: string;
            type?: string;
            rules?: string;
        }

        interface DestroyOptions extends CommonOptions {
            id: string;
        }

        interface InfoOptions extends CommonOptions {
            id: string;
        }

        interface GetOptions extends InfoOptions { }

        interface CloneOptions extends CommonOptions {
            id: string;
        }

        interface ListOptions extends CommonOptions { }
    }

    interface Acl {
        consul: Consul;

        /**
         * Creates a new token with policy
         */
        create: {
            <TData>(opts: Acl.CreateOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Acl.CreateOptions): Thenable<TData>;
        };

        /**
         * Update the policy of a token
         */
        update: {
            <TData>(opts: Acl.UpdateOptions, callback: Callback<TData>): void;
            <TData>(opts: Acl.UpdateOptions): Thenable<TData>;
        }

        /**
         * Destroys a given token
         */
        destroy: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Acl.DestroyOptions, callback: Callback<TData>): void;
            <TData>(id: string): Thenable<TData>;
            <TData>(opts: Acl.DestroyOptions): Thenable<TData>;
        };

        /**
         * Queries the policy of a given token
         */
        info: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Acl.InfoOptions, callback: Callback<TData>): void;
            <TData>(id: string): Thenable<TData>;
            <TData>(opts: Acl.InfoOptions): Thenable<TData>;
        };
        get: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Acl.GetOptions, callback: Callback<TData>): void;
            <TData>(id: string): Thenable<TData>;
            <TData>(opts: Acl.GetOptions): Thenable<TData>;
        };

        /**
         * Creates a new token by cloning an existing token
         */
        clone: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Acl.CloneOptions, callback: Callback<TData>): void;
            <TData>(id: string): Thenable<TData>;
            <TData>(opts: Acl.CloneOptions): Thenable<TData>;
        };

        /**
         * Lists all the active tokens
         */
        list: {
            <TData>(opts: Acl.ListOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Acl.ListOptions): Thenable<TData>;
        };
    }

    interface AclStatic {
        new (consul: Consul): Acl;
    }

    namespace Agent {

        namespace Check {

            interface ListOptions extends CommonOptions { }

            interface RegisterOptions extends CommonOptions {
                name: string;
                id?: string;
                serviceid?: string;
                http?: string;
                script?: string;
                interval?: string;
                ttl?: string;
                notes?: string;
                status?: string;
            }

            interface DeregisterOptions extends CommonOptions {
                id: string;
            }

            interface PassOptions extends CommonOptions {
                id: string;
                note?: string;
            }

            interface WarnOptions extends CommonOptions {
                id: string;
                note?: string;
            }

            interface FailOptions extends CommonOptions {
                id: string;
                note?: string;
            }
        }

        interface Check {
            consul: Consul;

            /**
             * Returns the checks the local agent is managing
             */
            list: {
                <TData>(opts: Check.ListOptions, callback: Callback<TData>): void;
                <TData>(callback: Callback<TData>): void;
                <TData>(opts?: Check.ListOptions): Thenable<TData>;
            };

            /**
             * Registers a new local check
             */
            register: {
                <TData>(opts: Check.RegisterOptions, callback: Callback<TData>): void;
                <TData>(opts: Check.RegisterOptions): Thenable<TData>;
            };

            /**
             * Deregister a local check
             */
            deregister: {
                <TData>(id: string, callback: Callback<TData>): void;
                <TData>(opts: Check.DeregisterOptions, callback: Callback<TData>): void;
                <TData>(id: string): Thenable<TData>;
                <TData>(opts: Check.DeregisterOptions): Thenable<TData>;
            };

            /**
             * Mark a local test as passing
             */
            pass: {
                <TData>(id: string, callback: Callback<TData>): void;
                <TData>(opts: Check.PassOptions, callback: Callback<TData>): void;
                <TData>(id: string): Thenable<TData>;
                <TData>(opts: Check.PassOptions): Thenable<TData>;
            };

            /**
             * Mark a local test as warning
             */
            warn: {
                <TData>(id: string, callback: Callback<TData>): void;
                <TData>(opts: Check.WarnOptions, callback: Callback<TData>): void;
                <TData>(id: string): Thenable<TData>;
                <TData>(opts: Check.WarnOptions): Thenable<TData>;
            };

            /**
             * Mark a local test as critical
             */
            fail: {
                <TData>(id: string, callback: Callback<TData>): void;
                <TData>(opts: Check.FailOptions, callback: Callback<TData>): void;
                <TData>(id: string): Thenable<TData>;
                <TData>(opts: Check.FailOptions): Thenable<TData>;
            };
        }

        interface CheckStatic {
            new (consul: Consul): Check;
        }

        namespace Service {

            interface RegisterCheck {
                http?: string;
                script?: string;
                interval?: string;
                ttl?: string;
                notes?: string;
                status?: string;
            }

            interface ListOptions extends CommonOptions { }

            interface RegisterOptions extends CommonOptions {
                name: string;
                id?: string;
                tags?: string[];
                address?: string;
                port?: number;
                check?: RegisterCheck;
                checks?: RegisterCheck[];
            }

            interface DeregisterOptions extends CommonOptions {
                id: string;
            }

            interface MaintenanceOptions extends CommonOptions {
                id: string;
                enable: boolean;
                reason?: string;
            }
        }

        interface Service {
            consul: Consul;

            /**
             * Returns the services local agent is managing
             */
            list: {
                <TData>(opts: Service.ListOptions, callback: Callback<TData>): void;
                <TData>(callback: Callback<TData>): void;
                <TData>(opts?: Service.ListOptions): Thenable<TData>;
            };

            /**
             * Registers a new local service
             */
            register: {
                <TData>(name: string, callback: Callback<TData>): void;
                <TData>(opts: Service.RegisterOptions, callback: Callback<TData>): void;
                <TData>(name: string): Thenable<TData>;
                <TData>(opts: Service.RegisterOptions): Thenable<TData>;
            };

            /**
             * Deregister a local service
             */
            deregister: {
                <TData>(id: string, callback: Callback<TData>): void;
                <TData>(opts: Service.DeregisterOptions, callback: Callback<TData>): void;
                <TData>(id: string): Thenable<TData>;
                <TData>(opts: Service.DeregisterOptions): Thenable<TData>;
            };

            /**
             * Manages node maintenance mode
             */
            maintenance: {
                <TData>(opts: Service.MaintenanceOptions, callback: Callback<TData>): void;
                <TData>(opts: Service.MaintenanceOptions): Thenable<TData>;
            };
        }

        interface ServiceStatic {
            new (consul: Consul): Service;
        }

        interface ChecksOptions extends Check.ListOptions { }

        interface ServicesOptions extends Service.ListOptions { }

        interface MembersOptions extends CommonOptions {
            wan?: boolean;
        }

        interface SelfOptions extends CommonOptions { }

        interface MaintenanceOptions extends CommonOptions {
            enable: boolean;
            reason?: string;
        }

        interface JoinOptions extends CommonOptions {
            address: string;
            wan?: boolean;
        }

        interface ForceLeaveOptions extends CommonOptions {
            node: string;
        }
    }

    interface Agent {
        consul: Consul;
        check: Agent.Check;
        service: Agent.Service;

        /**
         * Returns the checks the local agent is managing
         */
        checks: {
            <TData>(opts: Agent.ChecksOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Agent.ChecksOptions): Thenable<TData>;
        };

        /**
         * Returns the services local agent is managing
         */
        services: {
            <TData>(opts: Agent.ServicesOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Agent.ServicesOptions): Thenable<TData>;
        };

        /**
         * Returns the members as seen by the local consul agent
         */
        members: {
            <TData>(opts: Agent.MembersOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Agent.MembersOptions): Thenable<TData>;
        };

        /**
         * Returns the local node configuration
         */
        self: {
            <TData>(opts: Agent.SelfOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Agent.SelfOptions): Thenable<TData>;
        };

        /**
         * Manages node maintenance mode
         */
        maintenance: {
            <TData>(enable: boolean, callback: Callback<TData>): void;
            <TData>(opts: Agent.MaintenanceOptions, callback: Callback<TData>): void;
            <TData>(enable: boolean): Thenable<TData>;
            <TData>(opts: Agent.MaintenanceOptions): Thenable<TData>;
        };

        /**
         * Trigger local agent to join a node
         */
        join: {
            <TData>(address: string, callback: Callback<TData>): void;
            <TData>(opts: Agent.JoinOptions, callback: Callback<TData>): void;
            <TData>(address: string): Thenable<TData>;
            <TData>(opts: Agent.JoinOptions): Thenable<TData>;
        };

        /**
         * Force remove node
         */
        forceLeave: {
            <TData>(node: string, callback: Callback<TData>): void;
            <TData>(opts: Agent.ForceLeaveOptions, callback: Callback<TData>): void;
            <TData>(node: string): Thenable<TData>;
            <TData>(opts: Agent.ForceLeaveOptions): Thenable<TData>;
        };
    }

    interface AgentStatic {
        new (consul: Consul): Agent;

        Check: Agent.CheckStatic;
        Service: Agent.ServiceStatic;
    }

    namespace Catalog {

        namespace Node {

            interface ListOptions extends CommonOptions {
                dc?: string;
            }

            interface ServicesOptions extends CommonOptions {
                node: string;
            }
        }

        interface Node {
            consul: Consul;

            /**
             * Lists nodes in a given DC
             */
            list: {
                <TData>(dc: string, callback: Callback<TData>): void;
                <TData>(opts: Node.ListOptions, callback: Callback<TData>): void;
                <TData>(callback: Callback<TData>): void;
                <TData>(dc?: string): Thenable<TData>;
                <TData>(opts?: Node.ListOptions): Thenable<TData>;
            };

            /**
             * Lists the services provided by a node
             */
            services: {
                <TData>(node: string, callback: Callback<TData>): void;
                <TData>(opts: Node.ServicesOptions, callback: Callback<TData>): void;
                <TData>(node: string): Thenable<TData>;
                <TData>(opts: Node.ServicesOptions): Thenable<TData>;
            };
        }

        interface NodeStatic {
            new (consul: Consul): Node;
        }

        namespace Service {

            interface ListOptions extends CommonOptions {
                dc?: string;
            }

            interface NodesOptions extends CommonOptions {
                service: string;
                dc?: string;
                tag?: string;
            }
        }



        interface Service {
            consul: Consul;

            /**
             * Lists services in a given DC
             */
            list: {
                <TData>(dc: string, callback: Callback<TData>): void;
                <TData>(opts: Service.ListOptions, callback: Callback<TData>): void;
                <TData>(callback: Callback<TData>): void;
                <TData>(dc?: string): Thenable<TData>;
                <TData>(opts?: Service.ListOptions): Thenable<TData>;
            };

            /**
             * Lists the nodes in a given service
             */
            nodes: {
                <TData>(service: string, callback: Callback<TData>): void;
                <TData>(opts: Service.NodesOptions, callback: Callback<TData>): void;
                <TData>(service: string): Thenable<TData>;
                <TData>(opts: Service.NodesOptions): Thenable<TData>;
            };
        }

        interface ServiceStatic {
            new (consul: Consul): Service;
        }

        interface DatacentersOptions extends CommonOptions { }

        interface NodesOptions extends Node.ListOptions { }

        interface ServicesOptions extends Service.ListOptions { }
    }

    interface Catalog {
        consul: Consul;
        node: Catalog.Node;
        service: Catalog.Service;

        /**
         * Lists known datacenters
         */
        datacenters: {
            <TData>(opts: Catalog.DatacentersOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Catalog.DatacentersOptions): Thenable<TData>;
        };

        /**
         * Lists nodes in a given DC
         */
        nodes: {
            <TData>(dc: string, callback: Callback<TData>): void;
            <TData>(opts: Catalog.NodesOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(dc?: string): Thenable<TData>;
            <TData>(opts?: Catalog.NodesOptions): Thenable<TData>;
        };

        /**
         * Lists services in a given DC
         */
        services: {
            <TData>(dc: string, callback: Callback<TData>): void;
            <TData>(opts: Catalog.ServicesOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(dc?: string): Thenable<TData>;
            <TData>(opts?: Catalog.ServicesOptions): Thenable<TData>;
        };
    }

    interface CatalogStatic {
        new (consul: Consul): Catalog;

        Node: Catalog.NodeStatic;
        Service: Catalog.ServiceStatic;
    }

    namespace Event {

        interface FireOptions extends CommonOptions {
            name: string;
            payload: string | Buffer;
            node?: string;
            service?: string;
            tag?: string;
        }

        interface ListOptions extends CommonOptions {
            name?: string;
        }
    }

    interface Event {
        consul: Consul;

        /**
         * Fires a new user event
         */
        fire: {
            <TData>(name: string, payload: string | Buffer, callback: Callback<TData>): void;
            <TData>(name: string, callback: Callback<TData>): void;
            <TData>(opts: Event.FireOptions, callback: Callback<TData>): void;
            <TData>(name: string, payload: string | Buffer): Thenable<TData>;
            <TData>(name: string): Thenable<TData>;
            <TData>(opts: Event.FireOptions): Thenable<TData>;
        };

        /**
         * Lists the most recent events an agent has seen
         */
        list: {
            <TData>(name: string, callback: Callback<TData>): void;
            <TData>(opts: Event.ListOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(name?: string): Thenable<TData>;
            <TData>(opts?: Event.ListOptions): Thenable<TData>;
        };
    }

    interface EventStatic {
        new (consul: Consul): Event;
    }

    namespace Health {

        interface NodeOptions extends CommonOptions {
            node: string;
            dc?: string;
        }

        interface ChecksOptions extends CommonOptions {
            service: string;
            dc?: string;
        }

        interface ServiceOptions extends CommonOptions {
            service: string;
            dc?: string;
            tag?: string;
            passing?: boolean;
        }

        interface StateOptions extends CommonOptions {
            state: string;
            dc?: string;
        }
    }

    interface Health {
        consul: Consul;

        /**
         * Returns the health info of a node
         */
        node: {
            <TData>(node: string, callback: Callback<TData>): void;
            <TData>(opts: Health.NodeOptions, callback: Callback<TData>): void;
            <TData>(node: string): Thenable<TData>;
            <TData>(opts: Health.NodeOptions): Thenable<TData>;
        };

        /**
         * Returns the checks of a service
         */
        checks: {
            <TData>(service: string, callback: Callback<TData>): void;
            <TData>(opts: Health.ChecksOptions, callback: Callback<TData>): void;
            <TData>(service: string): Thenable<TData>;
            <TData>(opts: Health.ChecksOptions): Thenable<TData>;
        };

        /**
         * Returns the nodes and health info of a service
         */
        service: {
            <TData>(service: string, callback: Callback<TData>): void;
            <TData>(opts: Health.ServiceOptions, callback: Callback<TData>): void;
            <TData>(service: string): Thenable<TData>;
            <TData>(opts: Health.ServiceOptions): Thenable<TData>;
        };

        /**
         * Returns the checks in a given state
         */
        state: {
            <TData>(state: string, callback: Callback<TData>): void;
            <TData>(opts: Health.StateOptions, callback: Callback<TData>): void;
            <TData>(state: string): Thenable<TData>;
            <TData>(opts: Health.StateOptions): Thenable<TData>;
        };
    }

    interface HealthStatic {
        new (consul: Consul): Health;
    }

    namespace Kv {

        interface GetOptions extends CommonOptions {
            key: string;
            dc?: string;
            recurse?: boolean;
            index?: string;
            wait?: string;
            raw?: boolean;
            buffer?: boolean;
        }

        interface KeysOptions extends CommonOptions {
            key: string;
            dc?: string;
            separator?: string;
        }

        interface SetOptions extends CommonOptions {
            key: string;
            value: string | Buffer;
            dc?: string;
            flags?: number;
            cas?: string;
            acquire?: string;
            release?: string;
        }

        interface DelOptions extends CommonOptions {
            key: string;
            dc?: string;
            recurse?: boolean;
            cas?: string;
        }

        interface DeleteOptions extends DelOptions { }
    }

    interface Kv {
        consul: Consul;

        /**
         * Get
         */
        get: {
            <TData>(key: string, callback: Callback<TData>): void;
            <TData>(opts: Kv.GetOptions, callback: Callback<TData>): void;
            <TData>(key: string): Thenable<TData>;
            <TData>(opts: Kv.GetOptions): Thenable<TData>;
        };

        /**
         * Keys
         */
        keys: {
            <TData>(key: string, callback: Callback<TData>): void;
            <TData>(opts: Kv.KeysOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(key?: string): Thenable<TData>;
            <TData>(opts?: Kv.KeysOptions): Thenable<TData>;
        };

        /**
         * Set
         */
        set: {
            <TData>(key: string, value: string | Buffer, opts: Kv.SetOptions, callback: Callback<TData>): void;
            <TData>(key: string, value: string | Buffer, callback: Callback<TData>): void;
            <TData>(opts: Kv.SetOptions, callback: Callback<TData>): void;
            <TData>(key: string, value: string | Buffer, opts: Kv.SetOptions): Thenable<TData>;
            <TData>(key: string, value: string | Buffer): Thenable<TData>;
            <TData>(opts: Kv.SetOptions): Thenable<TData>;
        };

        /**
         * Delete
         */
        del: {
            <TData>(key: string, callback: Callback<TData>): void;
            <TData>(opts: Kv.DelOptions, callback: Callback<TData>): void;
            <TData>(key: string): Thenable<TData>;
            <TData>(opts: Kv.DelOptions): Thenable<TData>;
        };
        delete: {
            <TData>(key: string, callback: Callback<TData>): void;
            <TData>(opts: Kv.DeleteOptions, callback: Callback<TData>): void;
            <TData>(key: string): Thenable<TData>;
            <TData>(opts: Kv.DeleteOptions): Thenable<TData>;
        };
    }

    interface KvStatic {
        new (consul: Consul): Kv;
    }

    namespace Lock {

        interface Options {
            key: string;
            session?: Object | string;
            value?: string | Buffer;
            lockwaittime?: string;
            lockretrytime?: string;
        }
    }

    interface Lock extends NodeJS.EventEmitter {
        consul: Consul;

        /**
         * Acquire lock
         */
        acquire(): void;

        /**
         * Release lock
         */
        release(): void;
    }

    interface LockStatic {
        new (consul: Consul, opts: Lock.Options): Lock;
    }

    namespace Session {

        interface CreateOptions extends CommonOptions {
            dc?: string;
            lockdelay?: string;
            name?: string;
            node?: string;
            checks?: string[];
            behavior?: string;
            ttl?: string;
        }

        interface DestroyOptions extends CommonOptions {
            id: string;
            dc?: string;
        }

        interface InfoOptions extends CommonOptions {
            id: string;
            dc?: string;
        }

        interface GetOptions extends InfoOptions { }

        interface NodeOptions extends CommonOptions {
            node: string;
            dc?: string;
        }

        interface ListOptions extends CommonOptions {
            dc?: string;
        }

        interface RenewOptions extends CommonOptions {
            id: string;
            dc?: string;
        }
    }


    interface Session {
        consul: Consul;

        /**
         * Creates a new session
         */
        create: {
            <TData>(opts: Session.CreateOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Session.CreateOptions): Thenable<TData>;
        };

        /**
         * Destroys a given session
         */
        destroy: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Session.DestroyOptions, callback: Callback<TData>): void;
            <TData>(id: string): Thenable<TData>;
            <TData>(opts: Session.DestroyOptions): Thenable<TData>;
        };

        /**
         * Queries a given session
         */
        info: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Session.InfoOptions, callback: Callback<TData>): void;
            <TData>(id: string): Thenable<TData>;
            <TData>(opts: Session.InfoOptions): Thenable<TData>;
        };
        get: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Session.GetOptions, callback: Callback<TData>): void;
            <TData>(id: string): Thenable<TData>;
            <TData>(opts: Session.GetOptions): Thenable<TData>;
        };

        /**
         * Lists sessions belonging to a node
         */
        node: {
            <TData>(node: string, callback: Callback<TData>): void;
            <TData>(opts: Session.NodeOptions, callback: Callback<TData>): void;
            <TData>(node: string): Thenable<TData>;
            <TData>(opts: Session.NodeOptions): Thenable<TData>;
        };

        /**
         * Lists all the active sessions
         */
        list: {
            <TData>(opts: Session.ListOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Session.ListOptions): Thenable<TData>;
        };

        /**
         * Renews a TTL-based session
         */
        renew: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Session.RenewOptions, callback: Callback<TData>): void;
            <TData>(id: string): Thenable<TData>;
            <TData>(opts: Session.RenewOptions): Thenable<TData>;
        };
    }

    interface SessionStatic {
        new (consul: Consul): Session;
    }

    namespace Status {

        interface LeaderOptions extends CommonOptions { }

        interface PeersOptions extends CommonOptions { }
    }

    interface Status {
        consul: Consul;

        /**
         * Returns the current Raft leader.
         */
        leader: {
            <TData>(opts: Status.LeaderOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Status.LeaderOptions): Thenable<TData>;
        };

        /**
         * Returns the current Raft peer set
         */
        peers: {
            <TData>(opts: Status.PeersOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Status.PeersOptions): Thenable<TData>;
        };
    }

    interface StatusStatic {
        new (consul: Consul): Status;
    }

    namespace Watch {
        
        interface WatchOptions {
            key?: string;
        }

        interface Options {
            method: Function;
            options?: CommonOptions & WatchOptions;
        }
    }

    interface Watch extends NodeJS.EventEmitter {
        consul: Consul;

        /**
         * Is running
         */
        isRunning(): boolean;

        /**
         * Update time
         */
        updateTime(): number;

        /**
         * End watch
         */
        end(): void;
    }

    interface WatchStatic {
        new (consul: Consul, opts: Watch.Options): Watch;
    }

    interface ConsulOptions {
        host?: string;
        port?: string;
        secure?: boolean;
        ca?: string[];
        defaults?: CommonOptions;
        promisify?: boolean | Function;
    }

    interface Consul {
        acl: Acl;
        agent: Agent;
        catalog: Catalog;
        event: Event;
        health: Health;
        kv: Kv;
        session: Session;
        status: Status;

        /**
         * Lock helper.
         */
        lock(opts: Lock.Options): Lock;

        /**
         * Watch helper.
         */
        watch(opts: Watch.Options): Watch;
    }

    interface ConsulStatic {
        (opts?: ConsulOptions): Consul;
        new (opts?: ConsulOptions): Consul;

        Acl: AclStatic;
        Agent: AgentStatic;
        Catalog: CatalogStatic;
        Event: EventStatic;
        Health: HealthStatic;
        Kv: KvStatic;
        Lock: LockStatic;
        Session: SessionStatic;
        Status: StatusStatic;
        Watch: WatchStatic;
    }
}

declare let Consul: Consul.ConsulStatic;

export = Consul;
