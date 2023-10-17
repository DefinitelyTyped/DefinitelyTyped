declare namespace Domain {
    // region AggregateModel and Command

    interface AggregateModel {
        id: string;
        attributes: any;
        uncommittedEvents: any[];

        apply(event: any, data?: any, version?: number): void;

        /**
         * Sets attributes for the aggregate.
         *
         * @example
         *     aggregate.set('firstname', 'Jack');
         *     // or
         *     aggregate.set({
         *          firstname: 'Jack',
         *          lastname: 'X-Man'
         *     });
         */
        set(attribute: any, value?: any): void;

        /**
         * Gets an attribute of the vm.
         * @param attr The attribute name.
         * @return The result value.
         *
         * @example
         *     aggregate.get('firstname'); // returns 'Jack'
         */
        get(attr: string): any;

        /**
         * Returns `true` if the attribute contains a value that is not null
         * or undefined.
         * @param attr The attribute name.
         * @return The result value.
         *
         * @example
         *     aggregate.has('firstname'); // returns true or false
         */
        has(attr: string): boolean;

        /**
         * Resets the attributes for the aggregate.
         */
        reset(data: any): void;

        /**
         * Marks this aggregate as destroyed.
         */
        destroy(): void;

        /**
         * Returns true if this aggregate is destroyed.
         */
        isDestroyed(): boolean;

        /**
         * Sets the revision for this aggregate.
         * @param streamInfo The stream info.
         * @param rev        The revision number.
         */
        setRevision(streamInfo: any, rev: number): void;

        /**
         * Returns the revision of this aggregate.
         * @param streamInfo The stream info.
         */
        getRevision(streamInfo: any): number;

        /**
         * Returns all uncommitted events.
         */
        getUncommittedEvents(): any[];

        /**
         * Adds/Saves an uncommitted event.
         * @param evt The event object.
         */
        addUncommittedEvent(evt: any): void;

        /**
         * Clears the internal uncomitted event list.
         */
        clearUncommittedEvents(): void;

        /**
         * The toJSON function will be called when JSON.stringify().
         * @return A clean Javascript object containing all attributes.
         */
        toJSON(): any;
    }

    interface Command {
        id: string;
    }

    // endregion

    // region defineContext

    interface DefineContextOptions {
        /**
         * optional, default is the directory name
         */
        name?: string | undefined;
    }

    function defineContext(options: DefineAggregateOptions): void;

    // endregion

    // region defineAggregate

    interface DefineAggregateOptions {
        /**
         * optional, default is last part of path name
         */
        name?: string | undefined;

        /**
         * optional, default 0
         */
        version?: number | undefined;

        /**
         * optional, default ''
         */
        defaultCommandPayload?: string | undefined;

        /**
         * optional, default ''
         */
        defaultEventPayload?: string | undefined;

        /**
         * optional, default ''
         */
        defaultPreConditionPayload?: string | undefined;

        /**
         * optional, default false
         * by skipping the history, only the last event will be loaded and defaultly not applyed (just to ensure the revision number increment)
         */
        skipHistory?: boolean | undefined;

        /**
         * optional, default false
         * only optionally needed when skipHistory is set to true, only the last event will be loaded and applyed
         */
        applyLastEvent?: boolean | undefined;

        /**
         * optional, default false
         * will publish the events but will not commit them to the eventstore
         */
        disablePersistence?: boolean | undefined;
    }

    /**
     * @param loadingTime is the loading time in ms of the eventstore data
     * @param events are all loaded events in an array
     * @param aggregateData represents the aggregateData after applying the resulting events
     */
    type defineSnapshotNeedHandler = (loadingTime: number, events: any[], aggregateData: any) => boolean;

    interface AggregateVersion {
        version: number;
    }

    interface DefineAggregateResult {
        /**
         * optionally, define snapshot need algorithm...
         */
        defineSnapshotNeed(cb: defineSnapshotNeedHandler): DefineAggregateResult;

        /**
         * optionally, define if snapshot should be ignored
         * if true, the whole event stream will be loaded
         */
        defineIgnoreSnapshot(
            version: AggregateVersion,
            cb?:
                | ((data: any) => boolean)
                | boolean,
        ): DefineAggregateResult;

        /**
         * optionally, define conversion algorithm for older snapshots
         * always convert directly to newest version...
         * when loaded a snapshot and it's an older snapshot, a new snapshot with same revision but with newer aggregate version will be created
         */
        defineSnapshotConversion(
            version: AggregateVersion,
            cb: (data: any, aggregate: AggregateModel) => void,
        ): DefineAggregateResult;

        /**
         * optionally, define idGenerator function for new aggregate ids
         */
        defineAggregateIdGenerator(
            cb:
                | (() => string)
                | ((callback: generateIdCallback) => string),
        ): DefineAggregateResult;

        /**
         * optionally, define idGenerator function for new aggregate ids that are command aware
         * if you define it that way, the normal defineAggregateIdGenerator function will be replaced
         */
        defineCommandAwareAggregateIdGenerator(
            cb: (cmd: Command, callback?: generateIdCallback) => string,
        ): DefineAggregateResult;
    }

    function defineAggregate(options: DefineAggregateOptions, initializationData?: any): DefineAggregateResult;

    // endregion

    // region extendValidator

    function extendValidator(cb: (validator: any) => void): void;

    // endregion

    // region definePreCondition

    interface DefinePreLoadConditionOptions {
        /**
         * the command name
         * optional, default is file name without extension,
         * if name is '' it will handle all commands that matches the appropriate aggregate
         * if name is an array of strings it will handle all commands that matches the appropriate name
         */
        name?: string | undefined;

        /**
         * optional, default 0
         */
        version?: number | undefined;

        /**
         * optional, if not defined it will use what is defined as default in aggregate or pass the whole command
         */
        payload?: string | undefined;

        /**
         * optional
         */
        description?: string | undefined;

        /**
         * optional, default Infinity, all pre-conditions will be sorted by this value
         */
        priority?: number | undefined;
    }

    /**
     * @param data is the command data
     * @param callback is optional, if not defined as function argument you can throw errors or return errors here (sync way)
     */
    type preLoadConditionHandler = (
        data: any,
        callback?: (err: string | Error) => string | Error,
    ) => void | string | Error;

    function definePreLoadCondition(options: DefinePreLoadConditionOptions, handler: preLoadConditionHandler): void;

    // endregion

    // region definePreCondition

    interface DefinePreConditionOptions {
        /**
         * the command name
         * optional, default is file name without extension,
         * if name is '' it will handle all commands that matches the appropriate aggregate
         * if name is an array of strings it will handle all commands that matches the appropriate name
         */
        name?: string | undefined;

        /**
         * optional, default 0
         */
        version?: number | undefined;

        /**
         * optional, if not defined it will use what is defined as default in aggregate or pass the whole command
         */
        payload?: string | undefined;

        /**
         * optional
         */
        description?: string | undefined;

        /**
         * optional, default Infinity, all pre-conditions will be sorted by this value
         */
        priority?: number | undefined;
    }

    /**
     * @param data is the command data
     * @param aggregate is the aggregate object
     * @param callback is optional, if not defined as function argument you can throw errors or return errors here (sync way)
     */
    type preConditionHandler = (
        data: any,
        aggregate: AggregateModel,
        callback?: (err: string | Error) => string | Error,
    ) => void | string | Error;

    function definePreCondition(options: DefinePreConditionOptions, handler: preConditionHandler): void;

    // endregion

    // region defineCommand

    interface DefineCommandOptions {
        name?: string | undefined;
        version?: number | undefined;
        payload?: string | undefined;
        existing?: boolean | undefined;
    }

    type commandHandler = (data: any, aggregate: AggregateModel) => void;
    type defineEventStreamsToLoadHandler = (cmd: any) => Array<{
        context: string;
        aggregate: string;
        aggregateId: string;
    }>;

    interface DefineCommandResult {
        defineEventStreamsToLoad(cb: defineEventStreamsToLoadHandler): void;
    }

    function defineCommand(options: DefineCommandOptions, handler: commandHandler): DefineCommandResult;

    // endregion

    // region defineEvent

    interface DefineEventOptions {
        name?: string | undefined;
        version?: number | undefined;
        payload?: string | undefined;
    }

    type eventHandler = (data: any, aggregate: AggregateModel) => void;

    function defineEvent(options: DefineEventOptions, handler: eventHandler): void;

    // endregion

    // region defineBusinessRule

    interface DefineBusinessRuleOptions {
        /**
         * optional, default is file name without extension
         */
        name?: string | undefined;

        /**
         * optional
         */
        description?: string | undefined;

        /**
         * optional, default Infinity, all business rules will be sorted by this value
         */
        priority?: number | undefined;
    }

    /**
     * @param changed is the new aggregate object
     * @param previous is the old aggregate object
     * @param events is the array with the resulting events
     * @param command the handling command
     * @param callback is optional, if not defined as function argument you can throw errors or return errors here (sync way)
     */
    type businessRuleHandler = (
        changed: AggregateModel,
        previous: AggregateModel,
        command: any,
        callback?: (err: string | Error) => string | Error,
    ) => void | string | Error;

    function defineBusinessRule(options: DefineBusinessRuleOptions, handler: businessRuleHandler): void;

    // endregion

    // region defineCommandHandler

    interface DefineCommandHandlerOptions {
        /**
         * optional, default is file name without extension
         */
        name?: string | undefined;

        /**
         * optional, default 0
         */
        version?: number | undefined;

        /**
         * optional, if not defined it will pass the whole command...
         */
        payload?: string | undefined;
    }

    /**
     * @param aggId is the aggregate id
     * @param cmd is the command data
     * @param callback is optional, if not defined as function argument you can throw errors or return errors here (sync way)
     */
    type commandHandlerHandler = (
        aggId: string,
        cmd: any,
        commandHandler: any,
        callback?: (err: string | Error) => string | Error,
    ) => void | string | Error;

    function defineCommandHandler(options: DefineCommandHandlerOptions, handler: commandHandlerHandler): void;

    // endregion

    // region Domain itself

    interface CommandDefinition {
        /**
         * optional, default is 'id'
         */
        id?: string | undefined;

        /**
         * optional, default is 'name'
         */
        name?: string | undefined;

        /**
         * optional, default is 'aggregate.id'
         * if an aggregate id is not defined in the command, the command handler will create a new aggregate instance
         */
        aggregateId?: string | undefined;

        /**
         * optional, only makes sense if contexts are defined in the 'domainPath' structure
         */
        context?: string | undefined;

        /**
         * optional, only makes sense if aggregates with names are defined in the 'domainPath' structure
         */
        aggregate?: string | undefined;

        /**
         * optional, but recommended
         */
        payload?: string | undefined;

        /**
         * optional, if defined the command handler will check if the command can be handled
         * if you want the command to be handled in a secure/transactional way pass a revision value that matches the current aggregate revision
         */
        revision?: string | undefined;

        /**
         * optional, if defined the command handler will search for a handle that matches command name and version number
         */
        version?: string | undefined;

        /**
         * optional, if defined theses values will be copied to the event (can be used to transport information like userId, etc..)
         */
        meta?: string | undefined;
    }

    interface EventDefinition {
        /**
         * optional, default is 'correlationId'
         * will use the command id as correlationId, so you can match it in the sender
         */
        correlationId?: string | undefined;

        /**
         * optional, default is 'id'
         */
        id?: string | undefined;

        /**
         * optional, default is 'name'
         */
        name?: string | undefined;

        /**
         * optional, default is 'aggregate.id'
         */
        aggregateId?: string | undefined;

        /**
         * optional, only makes sense if contexts are defined in the 'domainPath' structure
         */
        context?: string | undefined;

        /**
         * optional, only makes sense if aggregates with names are defined in the 'domainPath' structure
         */
        aggregate?: string | undefined;

        /**
         * optional, default is 'payload'
         */
        payload?: string | undefined;

        /**
         * optional, default is 'revision'
         * will represent the aggregate revision, can be used in next command
         */
        revision?: string | undefined;

        /**
         * optional
         */
        version?: string | undefined;

        /**
         * optional, if defined the values of the command will be copied to the event (can be used to transport information like userId, etc..)
         */
        meta?: string | undefined;

        /**
         * optional, if defined the commit date of the eventstore will be saved in this value
         */
        commitStamp?: string | undefined;
    }

    type generateIdCallback = (err: any, id: string) => void;

    interface HandleMetaInfos {
        aggregateId: string;
        aggregate: string;
        context: string;
    }

    interface CqrsDomain {
        /**
         * Inject definition for command structure.
         * @param definition the definition to be injected
         * @returns to be able to chain...
         */
        defineCommand(definition: CommandDefinition): CqrsDomain;

        /**
         * Inject definition for event structure.
         * @param definition the definition to be injected
         * @returns to be able to chain...
         */
        defineEvent(definition: EventDefinition): CqrsDomain;

        /**
         * Call this function to initialize the domain.
         * @param callback the function that will be called when this action has finished [optional]
         *                            `function(err, warnings){}`
         */
        init(cb: (err: Error, warnings: Error[]) => void): void;

        /**
         * Call this function to let the domain handle it.
         * @param cmd      the command object
         * @param callback the function that will be called when this action has finished [optional]
         *                            `function(err, evts, aggregateData, meta){}` evts is of type Array, aggregateData and meta are an object
         */
        handle(
            cmd: any,
            cb?:
                | ((err: Error) => void)
                | ((err: Error, events: any[], aggregateData: any, metaInfos: HandleMetaInfos) => void),
        ): void;

        /**
         * Returns the domain information.
         */
        getInfo(): any;

        /**
         * Inject function for for event notification.
         * @param fn the function to be injected
         * @returns to be able to chain...
         */
        onEvent(
            cb:
                | ((evt: any) => void)
                | ((evt: any, callback: () => void) => void),
        ): CqrsDomain;

        /**
         * Inject idGenerator function.
         * @param fn The function to be injected.
         * @returns to be able to chain...
         */
        idGenerator(
            cb:
                | (() => string)
                | ((callback: generateIdCallback) => string),
        ): CqrsDomain;

        /**
         * Inject idGenerator function for aggregate id.
         * @param fn The function to be injected.
         * @returns to be able to chain...
         */
        aggregateIdGenerator(
            cb:
                | (() => string)
                | ((callback: generateIdCallback) => string),
        ): CqrsDomain;

        /**
         * Converts an error to the commandRejected event
         * @param cmd The command that was handled.
         * @param err The error that occurs.
         * @returns The resulting event.
         */
        createCommandRejectedEvent(cmd: any, err: Error): any;

        /**
         * Is called when dispatched a command.
         * @param cmd              the command object
         * @param err              the error
         * @param eventsToDispatch the events to dispatch
         * @param aggregateData    the aggregate data
         * @param meta             the meta infos
         * @param callback         the function that will be called when this action has finished [optional]
         *                                    `function(err, evts, aggregateData, meta){}` evts is of type Array, aggregateData and meta are an object
         */
        onDispatched(
            cmd: any,
            err: Error,
            eventsToDispatch: any[],
            aggregateData: any,
            meta: any,
            callback: (err: Error, evts: any[], aggregateData: any, meta: any) => void,
        ): void;
    }

    type SupportedDBTypes = "mongodb" | "redis" | "tingodb" | "azuretable" | "inmemory";

    interface CreateDomainOptions {
        /**
         * the path to the "working directory"
         * can be structured like
         * [set 1](https://github.com/adrai/node-cqrs-domain/tree/master/test/integration/fixture/set1) or
         * [set 2](https://github.com/adrai/node-cqrs-domain/tree/master/test/integration/fixture/set2)
         */
        domainPath: string;

        /**
         * optional, default is 'commandRejected'
         * will be used if an error occurs and an event should be generated
         */
        commandRejectedEventName?: string | undefined;

        /**
         * optional, default is 800
         * if using in scaled systems and not guaranteeing that each command for an aggregate instance
         * dispatches to the same worker process, this module tries to catch the concurrency issues and
         * retries to handle the command after a timeout between 0 and the defined value
         */
        retryOnConcurrencyTimeout?: number | undefined;

        /**
         * optional, default is 100
         * global snapshot threshold value for all aggregates
         * defines the amount of loaded events, if there are more events to load, it will do a snapshot, so next loading is faster
         * an individual snapshot threshold defining algorithm can be defined per aggregate (scroll down)
         */
        snapshotThreshold?: number | undefined;

        /**
         * optional, default is in-memory
         * currently supports: mongodb, redis, tingodb, azuretable and inmemory
         * hint: [eventstore](https://github.com/adrai/node-eventstore#provide-implementation-for-storage)
         */
        eventStore?: {
            type: SupportedDBTypes;
            host?: string | undefined;
            port?: number | undefined;
            dbName?: string | undefined;
            eventsCollectionName?: string | undefined;
            snapshotsCollectionName?: string | undefined;
            transactionsCollectionName?: string | undefined;
            timeout?: number | undefined;
            authSource?: string | undefined;
            username?: string | undefined;
            password?: string | undefined;
            url?: string | undefined;
        } | undefined;

        /**
         * optional, default is in-memory
         * currently supports: mongodb, redis, tingodb, couchdb, azuretable, dynamodb and inmemory
         * hint settings like: [eventstore](https://github.com/adrai/node-eventstore#provide-implementation-for-storage)
         */
        aggregateLock?: {
            type: SupportedDBTypes;
            host?: string | undefined;
            port?: number | undefined;
            db: number;
            prefix?: string | undefined;
            timeout?: number | undefined;
            password?: string | undefined;
        } | undefined;

        /**
         * optional, default is not set
         * checks if command was already seen in the last time -> ttl
         * currently supports: mongodb, redis, tingodb and inmemory
         * hint settings like: [eventstore](https://github.com/adrai/node-eventstore#provide-implementation-for-storage)
         */
        deduplication?: {
            type: "mongodb" | "redis" | "tingodb" | "inmemory";
            ttl?: number | undefined;
            host?: string | undefined;
            port?: number | undefined;
            db?: number | undefined;
            prefix?: string | undefined;
            timeout?: number | undefined;
            password?: string | undefined;
        } | undefined;

        /**
         * optional, default false
         * resolves valid file types from loader extensions instead of default values while parsing definition files
         */
        useLoaderExtensions?: true | undefined;
    }

    // endregion
}

declare function Domain(options: Domain.CreateDomainOptions): Domain.CqrsDomain;

export = Domain;
