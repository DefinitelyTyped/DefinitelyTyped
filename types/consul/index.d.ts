/// <reference types="node" />

import { IncomingMessage as HttpIncomingMessage } from "http";

declare namespace Consul {
    interface CommonOptions {
        consistent?: boolean | undefined;
        dc?: string | undefined;
        stale?: boolean | undefined;
        token?: string | undefined;
        wait?: string | undefined;
        wan?: boolean | undefined;

        ctx?: NodeJS.EventEmitter | undefined;
        timeout?: number | undefined;
    }

    interface Response extends HttpIncomingMessage {
        body?: Object | string | Buffer | undefined;
    }

    interface Callback<TData> {
        (err?: Error, data?: TData, res?: Response): any;
    }

    namespace Acl {
        interface CreateOptions extends CommonOptions {
            name?: string | undefined;
            type?: string | undefined;
            rules?: string | undefined;
        }

        interface UpdateOptions extends CommonOptions {
            id: string;
            name?: string | undefined;
            type?: string | undefined;
            rules?: string | undefined;
        }

        interface DestroyOptions extends CommonOptions {
            id: string;
        }

        interface InfoOptions extends CommonOptions {
            id: string;
        }

        interface GetOptions extends InfoOptions {}

        interface CloneOptions extends CommonOptions {
            id: string;
        }

        interface ListOptions extends CommonOptions {}
    }

    interface Acl {
        consul: Consul;

        /**
         * Creates a new token with policy
         */
        create: {
            <TData>(opts: Acl.CreateOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Acl.CreateOptions): Promise<TData>;
        };

        /**
         * Update the policy of a token
         */
        update: {
            <TData>(opts: Acl.UpdateOptions, callback: Callback<TData>): void;
            <TData>(opts: Acl.UpdateOptions): Promise<TData>;
        };

        /**
         * Destroys a given token
         */
        destroy: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Acl.DestroyOptions, callback: Callback<TData>): void;
            <TData>(id: string): Promise<TData>;
            <TData>(opts: Acl.DestroyOptions): Promise<TData>;
        };

        /**
         * Queries the policy of a given token
         */
        info: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Acl.InfoOptions, callback: Callback<TData>): void;
            <TData>(id: string): Promise<TData>;
            <TData>(opts: Acl.InfoOptions): Promise<TData>;
        };
        get: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Acl.GetOptions, callback: Callback<TData>): void;
            <TData>(id: string): Promise<TData>;
            <TData>(opts: Acl.GetOptions): Promise<TData>;
        };

        /**
         * Creates a new token by cloning an existing token
         */
        clone: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Acl.CloneOptions, callback: Callback<TData>): void;
            <TData>(id: string): Promise<TData>;
            <TData>(opts: Acl.CloneOptions): Promise<TData>;
        };

        /**
         * Lists all the active tokens
         */
        list: {
            <TData>(opts: Acl.ListOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Acl.ListOptions): Promise<TData>;
        };
    }

    interface AclStatic {
        new(consul: Consul): Acl;
    }

    namespace Agent {
        namespace Check {
            interface ListOptions extends CommonOptions {}

            interface RegisterOptions extends CommonOptions {
                name: string;
                id?: string | undefined;
                serviceid?: string | undefined;
                http?: string | undefined;
                script?: string | undefined;
                interval?: string | undefined;
                ttl?: string | undefined;
                notes?: string | undefined;
                status?: string | undefined;
            }

            interface DeregisterOptions extends CommonOptions {
                id: string;
            }

            interface PassOptions extends CommonOptions {
                id: string;
                note?: string | undefined;
            }

            interface WarnOptions extends CommonOptions {
                id: string;
                note?: string | undefined;
            }

            interface FailOptions extends CommonOptions {
                id: string;
                note?: string | undefined;
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
                <TData>(opts?: Check.ListOptions): Promise<TData>;
            };

            /**
             * Registers a new local check
             */
            register: {
                <TData>(opts: Check.RegisterOptions, callback: Callback<TData>): void;
                <TData>(opts: Check.RegisterOptions): Promise<TData>;
            };

            /**
             * Deregister a local check
             */
            deregister: {
                <TData>(id: string, callback: Callback<TData>): void;
                <TData>(opts: Check.DeregisterOptions, callback: Callback<TData>): void;
                <TData>(id: string): Promise<TData>;
                <TData>(opts: Check.DeregisterOptions): Promise<TData>;
            };

            /**
             * Mark a local test as passing
             */
            pass: {
                <TData>(id: string, callback: Callback<TData>): void;
                <TData>(opts: Check.PassOptions, callback: Callback<TData>): void;
                <TData>(id: string): Promise<TData>;
                <TData>(opts: Check.PassOptions): Promise<TData>;
            };

            /**
             * Mark a local test as warning
             */
            warn: {
                <TData>(id: string, callback: Callback<TData>): void;
                <TData>(opts: Check.WarnOptions, callback: Callback<TData>): void;
                <TData>(id: string): Promise<TData>;
                <TData>(opts: Check.WarnOptions): Promise<TData>;
            };

            /**
             * Mark a local test as critical
             */
            fail: {
                <TData>(id: string, callback: Callback<TData>): void;
                <TData>(opts: Check.FailOptions, callback: Callback<TData>): void;
                <TData>(id: string): Promise<TData>;
                <TData>(opts: Check.FailOptions): Promise<TData>;
            };
        }

        interface CheckStatic {
            new(consul: Consul): Check;
        }

        namespace Service {
            interface RegisterCheck {
                http?: string | undefined;
                script?: string | undefined;
                interval?: string | undefined;
                ttl?: string | undefined;
                notes?: string | undefined;
                status?: string | undefined;
            }

            interface ListOptions extends CommonOptions {}

            interface RegisterOptions extends CommonOptions {
                name: string;
                id?: string | undefined;
                tags?: string[] | undefined;
                address?: string | undefined;
                port?: number | undefined;
                meta?: Record<string, string> | undefined;
                check?: RegisterCheck | undefined;
                checks?: RegisterCheck[] | undefined;
            }

            interface DeregisterOptions extends CommonOptions {
                id: string;
            }

            interface MaintenanceOptions extends CommonOptions {
                id: string;
                enable: boolean;
                reason?: string | undefined;
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
                <TData>(opts?: Service.ListOptions): Promise<TData>;
            };

            /**
             * Registers a new local service
             */
            register: {
                <TData>(name: string, callback: Callback<TData>): void;
                <TData>(opts: Service.RegisterOptions, callback: Callback<TData>): void;
                <TData>(name: string): Promise<TData>;
                <TData>(opts: Service.RegisterOptions): Promise<TData>;
            };

            /**
             * Deregister a local service
             */
            deregister: {
                <TData>(id: string, callback: Callback<TData>): void;
                <TData>(opts: Service.DeregisterOptions, callback: Callback<TData>): void;
                <TData>(id: string): Promise<TData>;
                <TData>(opts: Service.DeregisterOptions): Promise<TData>;
            };

            /**
             * Manages node maintenance mode
             */
            maintenance: {
                <TData>(opts: Service.MaintenanceOptions, callback: Callback<TData>): void;
                <TData>(opts: Service.MaintenanceOptions): Promise<TData>;
            };
        }

        interface ServiceStatic {
            new(consul: Consul): Service;
        }

        interface ChecksOptions extends Check.ListOptions {}

        interface ServicesOptions extends Service.ListOptions {}

        interface MembersOptions extends CommonOptions {
            wan?: boolean | undefined;
        }

        interface SelfOptions extends CommonOptions {}

        interface MaintenanceOptions extends CommonOptions {
            enable: boolean;
            reason?: string | undefined;
        }

        interface JoinOptions extends CommonOptions {
            address: string;
            wan?: boolean | undefined;
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
            <TData>(opts?: Agent.ChecksOptions): Promise<TData>;
        };

        /**
         * Returns the services local agent is managing
         */
        services: {
            <TData>(opts: Agent.ServicesOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Agent.ServicesOptions): Promise<TData>;
        };

        /**
         * Returns the members as seen by the local consul agent
         */
        members: {
            <TData>(opts: Agent.MembersOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Agent.MembersOptions): Promise<TData>;
        };

        /**
         * Returns the local node configuration
         */
        self: {
            <TData>(opts: Agent.SelfOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Agent.SelfOptions): Promise<TData>;
        };

        /**
         * Manages node maintenance mode
         */
        maintenance: {
            <TData>(enable: boolean, callback: Callback<TData>): void;
            <TData>(opts: Agent.MaintenanceOptions, callback: Callback<TData>): void;
            <TData>(enable: boolean): Promise<TData>;
            <TData>(opts: Agent.MaintenanceOptions): Promise<TData>;
        };

        /**
         * Trigger local agent to join a node
         */
        join: {
            <TData>(address: string, callback: Callback<TData>): void;
            <TData>(opts: Agent.JoinOptions, callback: Callback<TData>): void;
            <TData>(address: string): Promise<TData>;
            <TData>(opts: Agent.JoinOptions): Promise<TData>;
        };

        /**
         * Force remove node
         */
        forceLeave: {
            <TData>(node: string, callback: Callback<TData>): void;
            <TData>(opts: Agent.ForceLeaveOptions, callback: Callback<TData>): void;
            <TData>(node: string): Promise<TData>;
            <TData>(opts: Agent.ForceLeaveOptions): Promise<TData>;
        };
    }

    interface AgentStatic {
        new(consul: Consul): Agent;

        Check: Agent.CheckStatic;
        Service: Agent.ServiceStatic;
    }

    namespace Catalog {
        namespace Node {
            interface ListOptions extends CommonOptions {
                dc?: string | undefined;
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
                <TData>(dc?: string): Promise<TData>;
                <TData>(opts?: Node.ListOptions): Promise<TData>;
            };

            /**
             * Lists the services provided by a node
             */
            services: {
                <TData>(node: string, callback: Callback<TData>): void;
                <TData>(opts: Node.ServicesOptions, callback: Callback<TData>): void;
                <TData>(node: string): Promise<TData>;
                <TData>(opts: Node.ServicesOptions): Promise<TData>;
            };
        }

        interface NodeStatic {
            new(consul: Consul): Node;
        }

        namespace Service {
            interface ListOptions extends CommonOptions {
                dc?: string | undefined;
            }

            interface NodesOptions extends CommonOptions {
                service: string;
                dc?: string | undefined;
                tag?: string | undefined;
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
                <TData>(dc?: string): Promise<TData>;
                <TData>(opts?: Service.ListOptions): Promise<TData>;
            };

            /**
             * Lists the nodes in a given service
             */
            nodes: {
                <TData>(service: string, callback: Callback<TData>): void;
                <TData>(opts: Service.NodesOptions, callback: Callback<TData>): void;
                <TData>(service: string): Promise<TData>;
                <TData>(opts: Service.NodesOptions): Promise<TData>;
            };
        }

        interface ServiceStatic {
            new(consul: Consul): Service;
        }

        interface DatacentersOptions extends CommonOptions {}

        interface NodesOptions extends Node.ListOptions {}

        interface ServicesOptions extends Service.ListOptions {}
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
            <TData>(opts?: Catalog.DatacentersOptions): Promise<TData>;
        };

        /**
         * Lists nodes in a given DC
         */
        nodes: {
            <TData>(dc: string, callback: Callback<TData>): void;
            <TData>(opts: Catalog.NodesOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(dc?: string): Promise<TData>;
            <TData>(opts?: Catalog.NodesOptions): Promise<TData>;
        };

        /**
         * Lists services in a given DC
         */
        services: {
            <TData>(dc: string, callback: Callback<TData>): void;
            <TData>(opts: Catalog.ServicesOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(dc?: string): Promise<TData>;
            <TData>(opts?: Catalog.ServicesOptions): Promise<TData>;
        };
    }

    interface CatalogStatic {
        new(consul: Consul): Catalog;

        Node: Catalog.NodeStatic;
        Service: Catalog.ServiceStatic;
    }

    namespace Event {
        interface FireOptions extends CommonOptions {
            name: string;
            payload: string | Buffer;
            node?: string | undefined;
            service?: string | undefined;
            tag?: string | undefined;
        }

        interface ListOptions extends CommonOptions {
            name?: string | undefined;
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
            <TData>(name: string, payload: string | Buffer): Promise<TData>;
            <TData>(name: string): Promise<TData>;
            <TData>(opts: Event.FireOptions): Promise<TData>;
        };

        /**
         * Lists the most recent events an agent has seen
         */
        list: {
            <TData>(name: string, callback: Callback<TData>): void;
            <TData>(opts: Event.ListOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(name?: string): Promise<TData>;
            <TData>(opts?: Event.ListOptions): Promise<TData>;
        };
    }

    interface EventStatic {
        new(consul: Consul): Event;
    }

    namespace Health {
        interface NodeOptions extends CommonOptions {
            node: string;
            dc?: string | undefined;
        }

        interface ChecksOptions extends CommonOptions {
            service: string;
            dc?: string | undefined;
        }

        interface ServiceOptions extends CommonOptions {
            service: string;
            dc?: string | undefined;
            tag?: string | undefined;
            passing?: boolean | undefined;
            near?: string | undefined;
        }

        interface StateOptions extends CommonOptions {
            state: string;
            dc?: string | undefined;
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
            <TData>(node: string): Promise<TData>;
            <TData>(opts: Health.NodeOptions): Promise<TData>;
        };

        /**
         * Returns the checks of a service
         */
        checks: {
            <TData>(service: string, callback: Callback<TData>): void;
            <TData>(opts: Health.ChecksOptions, callback: Callback<TData>): void;
            <TData>(service: string): Promise<TData>;
            <TData>(opts: Health.ChecksOptions): Promise<TData>;
        };

        /**
         * Returns the nodes and health info of a service
         */
        service: {
            <TData>(service: string, callback: Callback<TData>): void;
            <TData>(opts: Health.ServiceOptions, callback: Callback<TData>): void;
            <TData>(service: string): Promise<TData>;
            <TData>(opts: Health.ServiceOptions): Promise<TData>;
        };

        /**
         * Returns the checks in a given state
         */
        state: {
            <TData>(state: string, callback: Callback<TData>): void;
            <TData>(opts: Health.StateOptions, callback: Callback<TData>): void;
            <TData>(state: string): Promise<TData>;
            <TData>(opts: Health.StateOptions): Promise<TData>;
        };
    }

    interface HealthStatic {
        new(consul: Consul): Health;
    }

    namespace Kv {
        interface GetOptions extends CommonOptions {
            key: string;
            dc?: string | undefined;
            recurse?: boolean | undefined;
            index?: string | undefined;
            wait?: string | undefined;
            raw?: boolean | undefined;
            buffer?: boolean | undefined;
        }

        interface KeysOptions extends CommonOptions {
            key: string;
            dc?: string | undefined;
            separator?: string | undefined;
        }

        interface SetOptions extends CommonOptions {
            key: string;
            value: string | Buffer;
            dc?: string | undefined;
            flags?: number | undefined;
            cas?: string | undefined;
            acquire?: string | undefined;
            release?: string | undefined;
        }

        interface DelOptions extends CommonOptions {
            key: string;
            dc?: string | undefined;
            recurse?: boolean | undefined;
            cas?: string | undefined;
        }

        interface DeleteOptions extends DelOptions {}
    }

    interface Kv {
        consul: Consul;

        /**
         * Get
         */
        get: {
            <TData>(key: string, callback: Callback<TData>): void;
            <TData>(opts: Kv.GetOptions, callback: Callback<TData>): void;
            <TData>(key: string): Promise<TData>;
            <TData>(opts: Kv.GetOptions): Promise<TData>;
        };

        /**
         * Keys
         */
        keys: {
            <TData>(key: string, callback: Callback<TData>): void;
            <TData>(opts: Kv.KeysOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(key?: string): Promise<TData>;
            <TData>(opts?: Kv.KeysOptions): Promise<TData>;
        };

        /**
         * Set
         */
        set: {
            <TData>(key: string, value: string | Buffer, opts: Kv.SetOptions, callback: Callback<TData>): void;
            <TData>(key: string, value: string | Buffer, callback: Callback<TData>): void;
            <TData>(opts: Kv.SetOptions, callback: Callback<TData>): void;
            <TData>(key: string, value: string | Buffer, opts: Kv.SetOptions): Promise<TData>;
            <TData>(key: string, value: string | Buffer): Promise<TData>;
            <TData>(opts: Kv.SetOptions): Promise<TData>;
        };

        /**
         * Delete
         */
        del: {
            <TData>(key: string, callback: Callback<TData>): void;
            <TData>(opts: Kv.DelOptions, callback: Callback<TData>): void;
            <TData>(key: string): Promise<TData>;
            <TData>(opts: Kv.DelOptions): Promise<TData>;
        };
        delete: {
            <TData>(key: string, callback: Callback<TData>): void;
            <TData>(opts: Kv.DeleteOptions, callback: Callback<TData>): void;
            <TData>(key: string): Promise<TData>;
            <TData>(opts: Kv.DeleteOptions): Promise<TData>;
        };
    }

    interface KvStatic {
        new(consul: Consul): Kv;
    }

    namespace Lock {
        interface Options {
            key: string;
            session?: Object | string | undefined;
            value?: string | Buffer | undefined;
            lockwaittime?: string | undefined;
            lockretrytime?: string | undefined;
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
        new(consul: Consul, opts: Lock.Options): Lock;
    }

    namespace Session {
        interface CreateOptions extends CommonOptions {
            dc?: string | undefined;
            lockdelay?: string | undefined;
            name?: string | undefined;
            node?: string | undefined;
            checks?: string[] | undefined;
            behavior?: string | undefined;
            ttl?: string | undefined;
        }

        interface DestroyOptions extends CommonOptions {
            id: string;
            dc?: string | undefined;
        }

        interface InfoOptions extends CommonOptions {
            id: string;
            dc?: string | undefined;
        }

        interface GetOptions extends InfoOptions {}

        interface NodeOptions extends CommonOptions {
            node: string;
            dc?: string | undefined;
        }

        interface ListOptions extends CommonOptions {
            dc?: string | undefined;
        }

        interface RenewOptions extends CommonOptions {
            id: string;
            dc?: string | undefined;
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
            <TData>(opts?: Session.CreateOptions): Promise<TData>;
        };

        /**
         * Destroys a given session
         */
        destroy: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Session.DestroyOptions, callback: Callback<TData>): void;
            <TData>(id: string): Promise<TData>;
            <TData>(opts: Session.DestroyOptions): Promise<TData>;
        };

        /**
         * Queries a given session
         */
        info: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Session.InfoOptions, callback: Callback<TData>): void;
            <TData>(id: string): Promise<TData>;
            <TData>(opts: Session.InfoOptions): Promise<TData>;
        };
        get: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Session.GetOptions, callback: Callback<TData>): void;
            <TData>(id: string): Promise<TData>;
            <TData>(opts: Session.GetOptions): Promise<TData>;
        };

        /**
         * Lists sessions belonging to a node
         */
        node: {
            <TData>(node: string, callback: Callback<TData>): void;
            <TData>(opts: Session.NodeOptions, callback: Callback<TData>): void;
            <TData>(node: string): Promise<TData>;
            <TData>(opts: Session.NodeOptions): Promise<TData>;
        };

        /**
         * Lists all the active sessions
         */
        list: {
            <TData>(opts: Session.ListOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Session.ListOptions): Promise<TData>;
        };

        /**
         * Renews a TTL-based session
         */
        renew: {
            <TData>(id: string, callback: Callback<TData>): void;
            <TData>(opts: Session.RenewOptions, callback: Callback<TData>): void;
            <TData>(id: string): Promise<TData>;
            <TData>(opts: Session.RenewOptions): Promise<TData>;
        };
    }

    interface SessionStatic {
        new(consul: Consul): Session;
    }

    namespace Status {
        interface LeaderOptions extends CommonOptions {}

        interface PeersOptions extends CommonOptions {}
    }

    interface Status {
        consul: Consul;

        /**
         * Returns the current Raft leader.
         */
        leader: {
            <TData>(opts: Status.LeaderOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Status.LeaderOptions): Promise<TData>;
        };

        /**
         * Returns the current Raft peer set
         */
        peers: {
            <TData>(opts: Status.PeersOptions, callback: Callback<TData>): void;
            <TData>(callback: Callback<TData>): void;
            <TData>(opts?: Status.PeersOptions): Promise<TData>;
        };
    }

    interface StatusStatic {
        new(consul: Consul): Status;
    }

    namespace Watch {
        interface WatchOptions {
            key?: string | undefined;
        }

        interface Options {
            method: Function;
            options?: CommonOptions & WatchOptions | undefined;
            backoffFactor?: number | undefined;
            backoffMax?: number | undefined;
            maxAttempts?: number | undefined;
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
        new(consul: Consul, opts: Watch.Options): Watch;
    }

    interface ConsulOptions {
        host?: string | undefined;
        port?: string | undefined;
        secure?: boolean | undefined;
        ca?: string[] | undefined;
        defaults?: CommonOptions | undefined;
        promisify?: boolean | Function | undefined;
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
        new(opts?: ConsulOptions): Consul;

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
