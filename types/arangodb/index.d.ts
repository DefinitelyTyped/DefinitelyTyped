// Type definitions for non-npm package ArangoDB 3.5
// Project: https://github.com/arangodb/arangodb
// Definitions by: Alan Plum <https://github.com/pluma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="node" />

declare namespace ArangoDB {
    type JwtAlgorithm = "HS512" | "HS384" | "HS256";
    type HashAlgorithm =
        | "sha512"
        | "sha384"
        | "sha256"
        | "sha224"
        | "sha1"
        | "md5";
    type HttpMethod =
        | "HEAD"
        | "GET"
        | "POST"
        | "PUT"
        | "PATCH"
        | "DELETE"
        | "OPTIONS";
    type HttpStatus =
        | "continue"
        | "switching protocols"
        | "processing"
        | "ok"
        | "created"
        | "accepted"
        | "non-authoritative information"
        | "no content"
        | "reset content"
        | "partial content"
        | "multi-status"
        | "already reported"
        | "im used"
        | "multiple choices"
        | "moved permanently"
        | "found"
        | "see other"
        | "not modified"
        | "use proxy"
        | "(unused)"
        | "temporary redirect"
        | "permanent redirect"
        | "bad request"
        | "unauthorized"
        | "payment required"
        | "forbidden"
        | "not found"
        | "method not allowed"
        | "not acceptable"
        | "proxy authentication required"
        | "request timeout"
        | "conflict"
        | "gone"
        | "length required"
        | "precondition failed"
        | "payload too large"
        | "uri too long"
        | "unsupported media type"
        | "range not satisfiable"
        | "expectation failed"
        | "i'm a teapot"
        | "misdirected request"
        | "unprocessable entity"
        | "locked"
        | "failed dependency"
        | "unordered collection"
        | "upgrade required"
        | "precondition required"
        | "too many requests"
        | "request header fields too large"
        | "unavailable for legal reasons"
        | "internal server error"
        | "not implemented"
        | "bad gateway"
        | "service unavailable"
        | "gateway timeout"
        | "http version not supported"
        | "variant also negotiates"
        | "insufficient storage"
        | "loop detected"
        | "bandwidth limit exceeded"
        | "not extended"
        | "network authentication required";
    type EdgeDirection = "any" | "inbound" | "outbound";
    type EngineType = "mmfiles" | "rocksdb";
    type IndexType = "hash" | "skiplist" | "fulltext" | "geo" | "ttl";
    type ViewType = "arangosearch";
    type KeyGeneratorType = "traditional" | "autoincrement";
    type ErrorName =
        | "ERROR_NO_ERROR"
        | "ERROR_FAILED"
        | "ERROR_SYS_ERROR"
        | "ERROR_OUT_OF_MEMORY"
        | "ERROR_INTERNAL"
        | "ERROR_ILLEGAL_NUMBER"
        | "ERROR_NUMERIC_OVERFLOW"
        | "ERROR_ILLEGAL_OPTION"
        | "ERROR_DEAD_PID"
        | "ERROR_NOT_IMPLEMENTED"
        | "ERROR_BAD_PARAMETER"
        | "ERROR_FORBIDDEN"
        | "ERROR_OUT_OF_MEMORY_MMAP"
        | "ERROR_CORRUPTED_CSV"
        | "ERROR_FILE_NOT_FOUND"
        | "ERROR_CANNOT_WRITE_FILE"
        | "ERROR_CANNOT_OVERWRITE_FILE"
        | "ERROR_TYPE_ERROR"
        | "ERROR_LOCK_TIMEOUT"
        | "ERROR_CANNOT_CREATE_DIRECTORY"
        | "ERROR_CANNOT_CREATE_TEMP_FILE"
        | "ERROR_REQUEST_CANCELED"
        | "ERROR_DEBUG"
        | "ERROR_IP_ADDRESS_INVALID"
        | "ERROR_FILE_EXISTS"
        | "ERROR_LOCKED"
        | "ERROR_DEADLOCK"
        | "ERROR_SHUTTING_DOWN"
        | "ERROR_ONLY_ENTERPRISE"
        | "ERROR_RESOURCE_LIMIT"
        | "ERROR_ARANGO_ICU_ERROR"
        | "ERROR_CANNOT_READ_FILE"
        | "ERROR_HTTP_BAD_PARAMETER"
        | "ERROR_HTTP_UNAUTHORIZED"
        | "ERROR_HTTP_FORBIDDEN"
        | "ERROR_HTTP_NOT_FOUND"
        | "ERROR_HTTP_METHOD_NOT_ALLOWED"
        | "ERROR_HTTP_NOT_ACCEPTABLE"
        | "ERROR_HTTP_PRECONDITION_FAILED"
        | "ERROR_HTTP_SERVER_ERROR"
        | "ERROR_HTTP_SERVICE_UNAVAILABLE"
        | "ERROR_HTTP_GATEWAY_TIMEOUT"
        | "ERROR_HTTP_CORRUPTED_JSON"
        | "ERROR_HTTP_SUPERFLUOUS_SUFFICES"
        | "ERROR_ARANGO_ILLEGAL_STATE"
        | "ERROR_ARANGO_DATAFILE_SEALED"
        | "ERROR_ARANGO_READ_ONLY"
        | "ERROR_ARANGO_DUPLICATE_IDENTIFIER"
        | "ERROR_ARANGO_DATAFILE_UNREADABLE"
        | "ERROR_ARANGO_DATAFILE_EMPTY"
        | "ERROR_ARANGO_RECOVERY"
        | "ERROR_ARANGO_DATAFILE_STATISTICS_NOT_FOUND"
        | "ERROR_ARANGO_CORRUPTED_DATAFILE"
        | "ERROR_ARANGO_ILLEGAL_PARAMETER_FILE"
        | "ERROR_ARANGO_CORRUPTED_COLLECTION"
        | "ERROR_ARANGO_MMAP_FAILED"
        | "ERROR_ARANGO_FILESYSTEM_FULL"
        | "ERROR_ARANGO_NO_JOURNAL"
        | "ERROR_ARANGO_DATAFILE_ALREADY_EXISTS"
        | "ERROR_ARANGO_DATADIR_LOCKED"
        | "ERROR_ARANGO_COLLECTION_DIRECTORY_ALREADY_EXISTS"
        | "ERROR_ARANGO_MSYNC_FAILED"
        | "ERROR_ARANGO_DATADIR_UNLOCKABLE"
        | "ERROR_ARANGO_SYNC_TIMEOUT"
        | "ERROR_ARANGO_CONFLICT"
        | "ERROR_ARANGO_DATADIR_INVALID"
        | "ERROR_ARANGO_DOCUMENT_NOT_FOUND"
        | "ERROR_ARANGO_DATA_SOURCE_NOT_FOUND"
        | "ERROR_ARANGO_COLLECTION_PARAMETER_MISSING"
        | "ERROR_ARANGO_DOCUMENT_HANDLE_BAD"
        | "ERROR_ARANGO_MAXIMAL_SIZE_TOO_SMALL"
        | "ERROR_ARANGO_DUPLICATE_NAME"
        | "ERROR_ARANGO_ILLEGAL_NAME"
        | "ERROR_ARANGO_NO_INDEX"
        | "ERROR_ARANGO_UNIQUE_CONSTRAINT_VIOLATED"
        | "ERROR_ARANGO_INDEX_NOT_FOUND"
        | "ERROR_ARANGO_CROSS_COLLECTION_REQUEST"
        | "ERROR_ARANGO_INDEX_HANDLE_BAD"
        | "ERROR_ARANGO_DOCUMENT_TOO_LARGE"
        | "ERROR_ARANGO_COLLECTION_NOT_UNLOADED"
        | "ERROR_ARANGO_COLLECTION_TYPE_INVALID"
        | "ERROR_ARANGO_VALIDATION_FAILED"
        | "ERROR_ARANGO_ATTRIBUTE_PARSER_FAILED"
        | "ERROR_ARANGO_DOCUMENT_KEY_BAD"
        | "ERROR_ARANGO_DOCUMENT_KEY_UNEXPECTED"
        | "ERROR_ARANGO_DATADIR_NOT_WRITABLE"
        | "ERROR_ARANGO_OUT_OF_KEYS"
        | "ERROR_ARANGO_DOCUMENT_KEY_MISSING"
        | "ERROR_ARANGO_DOCUMENT_TYPE_INVALID"
        | "ERROR_ARANGO_DATABASE_NOT_FOUND"
        | "ERROR_ARANGO_DATABASE_NAME_INVALID"
        | "ERROR_ARANGO_USE_SYSTEM_DATABASE"
        | "ERROR_ARANGO_ENDPOINT_NOT_FOUND"
        | "ERROR_ARANGO_INVALID_KEY_GENERATOR"
        | "ERROR_ARANGO_INVALID_EDGE_ATTRIBUTE"
        | "ERROR_ARANGO_INDEX_DOCUMENT_ATTRIBUTE_MISSING"
        | "ERROR_ARANGO_INDEX_CREATION_FAILED"
        | "ERROR_ARANGO_WRITE_THROTTLE_TIMEOUT"
        | "ERROR_ARANGO_COLLECTION_TYPE_MISMATCH"
        | "ERROR_ARANGO_COLLECTION_NOT_LOADED"
        | "ERROR_ARANGO_DOCUMENT_REV_BAD"
        | "ERROR_ARANGO_DATAFILE_FULL"
        | "ERROR_ARANGO_EMPTY_DATADIR"
        | "ERROR_ARANGO_TRY_AGAIN"
        | "ERROR_ARANGO_BUSY"
        | "ERROR_ARANGO_MERGE_IN_PROGRESS"
        | "ERROR_ARANGO_IO_ERROR"
        | "ERROR_REPLICATION_NO_RESPONSE"
        | "ERROR_REPLICATION_INVALID_RESPONSE"
        | "ERROR_REPLICATION_MASTER_ERROR"
        | "ERROR_REPLICATION_MASTER_INCOMPATIBLE"
        | "ERROR_REPLICATION_MASTER_CHANGE"
        | "ERROR_REPLICATION_LOOP"
        | "ERROR_REPLICATION_UNEXPECTED_MARKER"
        | "ERROR_REPLICATION_INVALID_APPLIER_STATE"
        | "ERROR_REPLICATION_UNEXPECTED_TRANSACTION"
        | "ERROR_REPLICATION_INVALID_APPLIER_CONFIGURATION"
        | "ERROR_REPLICATION_RUNNING"
        | "ERROR_REPLICATION_APPLIER_STOPPED"
        | "ERROR_REPLICATION_NO_START_TICK"
        | "ERROR_REPLICATION_START_TICK_NOT_PRESENT"
        | "ERROR_REPLICATION_WRONG_CHECKSUM"
        | "ERROR_REPLICATION_SHARD_NONEMPTY"
        | "ERROR_CLUSTER_NO_AGENCY"
        | "ERROR_CLUSTER_NO_COORDINATOR_HEADER"
        | "ERROR_CLUSTER_COULD_NOT_LOCK_PLAN"
        | "ERROR_CLUSTER_COLLECTION_ID_EXISTS"
        | "ERROR_CLUSTER_COULD_NOT_CREATE_COLLECTION_IN_PLAN"
        | "ERROR_CLUSTER_COULD_NOT_READ_CURRENT_VERSION"
        | "ERROR_CLUSTER_COULD_NOT_CREATE_COLLECTION"
        | "ERROR_CLUSTER_TIMEOUT"
        | "ERROR_CLUSTER_COULD_NOT_REMOVE_COLLECTION_IN_PLAN"
        | "ERROR_CLUSTER_COULD_NOT_REMOVE_COLLECTION_IN_CURRENT"
        | "ERROR_CLUSTER_COULD_NOT_CREATE_DATABASE_IN_PLAN"
        | "ERROR_CLUSTER_COULD_NOT_CREATE_DATABASE"
        | "ERROR_CLUSTER_COULD_NOT_REMOVE_DATABASE_IN_PLAN"
        | "ERROR_CLUSTER_COULD_NOT_REMOVE_DATABASE_IN_CURRENT"
        | "ERROR_CLUSTER_SHARD_GONE"
        | "ERROR_CLUSTER_CONNECTION_LOST"
        | "ERROR_CLUSTER_MUST_NOT_SPECIFY_KEY"
        | "ERROR_CLUSTER_GOT_CONTRADICTING_ANSWERS"
        | "ERROR_CLUSTER_NOT_ALL_SHARDING_ATTRIBUTES_GIVEN"
        | "ERROR_CLUSTER_MUST_NOT_CHANGE_SHARDING_ATTRIBUTES"
        | "ERROR_CLUSTER_UNSUPPORTED"
        | "ERROR_CLUSTER_ONLY_ON_COORDINATOR"
        | "ERROR_CLUSTER_READING_PLAN_AGENCY"
        | "ERROR_CLUSTER_COULD_NOT_TRUNCATE_COLLECTION"
        | "ERROR_CLUSTER_AQL_COMMUNICATION"
        | "ERROR_ARANGO_DOCUMENT_NOT_FOUND_OR_SHARDING_ATTRIBUTES_CHANGED"
        | "ERROR_CLUSTER_COULD_NOT_DETERMINE_ID"
        | "ERROR_CLUSTER_ONLY_ON_DBSERVER"
        | "ERROR_CLUSTER_BACKEND_UNAVAILABLE"
        | "ERROR_CLUSTER_UNKNOWN_CALLBACK_ENDPOINT"
        | "ERROR_CLUSTER_AGENCY_STRUCTURE_INVALID"
        | "ERROR_CLUSTER_AQL_COLLECTION_OUT_OF_SYNC"
        | "ERROR_CLUSTER_COULD_NOT_CREATE_INDEX_IN_PLAN"
        | "ERROR_CLUSTER_COULD_NOT_DROP_INDEX_IN_PLAN"
        | "ERROR_CLUSTER_CHAIN_OF_DISTRIBUTESHARDSLIKE"
        | "ERROR_CLUSTER_MUST_NOT_DROP_COLL_OTHER_DISTRIBUTESHARDSLIKE"
        | "ERROR_CLUSTER_UNKNOWN_DISTRIBUTESHARDSLIKE"
        | "ERROR_CLUSTER_INSUFFICIENT_DBSERVERS"
        | "ERROR_CLUSTER_COULD_NOT_DROP_FOLLOWER"
        | "ERROR_CLUSTER_SHARD_LEADER_REFUSES_REPLICATION"
        | "ERROR_CLUSTER_SHARD_FOLLOWER_REFUSES_OPERATION"
        | "ERROR_CLUSTER_SHARD_LEADER_RESIGNED"
        | "ERROR_CLUSTER_AGENCY_COMMUNICATION_FAILED"
        | "ERROR_CLUSTER_DISTRIBUTE_SHARDS_LIKE_REPLICATION_FACTOR"
        | "ERROR_CLUSTER_DISTRIBUTE_SHARDS_LIKE_NUMBER_OF_SHARDS"
        | "ERROR_CLUSTER_LEADERSHIP_CHALLENGE_ONGOING"
        | "ERROR_CLUSTER_NOT_LEADER"
        | "ERROR_CLUSTER_COULD_NOT_CREATE_VIEW_IN_PLAN"
        | "ERROR_QUERY_KILLED"
        | "ERROR_QUERY_PARSE"
        | "ERROR_QUERY_EMPTY"
        | "ERROR_QUERY_SCRIPT"
        | "ERROR_QUERY_NUMBER_OUT_OF_RANGE"
        | "ERROR_QUERY_VARIABLE_NAME_INVALID"
        | "ERROR_QUERY_VARIABLE_REDECLARED"
        | "ERROR_QUERY_VARIABLE_NAME_UNKNOWN"
        | "ERROR_QUERY_COLLECTION_LOCK_FAILED"
        | "ERROR_QUERY_TOO_MANY_COLLECTIONS"
        | "ERROR_QUERY_DOCUMENT_ATTRIBUTE_REDECLARED"
        | "ERROR_QUERY_FUNCTION_NAME_UNKNOWN"
        | "ERROR_QUERY_FUNCTION_ARGUMENT_NUMBER_MISMATCH"
        | "ERROR_QUERY_FUNCTION_ARGUMENT_TYPE_MISMATCH"
        | "ERROR_QUERY_INVALID_REGEX"
        | "ERROR_QUERY_BIND_PARAMETERS_INVALID"
        | "ERROR_QUERY_BIND_PARAMETER_MISSING"
        | "ERROR_QUERY_BIND_PARAMETER_UNDECLARED"
        | "ERROR_QUERY_BIND_PARAMETER_TYPE"
        | "ERROR_QUERY_INVALID_LOGICAL_VALUE"
        | "ERROR_QUERY_INVALID_ARITHMETIC_VALUE"
        | "ERROR_QUERY_DIVISION_BY_ZERO"
        | "ERROR_QUERY_ARRAY_EXPECTED"
        | "ERROR_QUERY_FAIL_CALLED"
        | "ERROR_QUERY_GEO_INDEX_MISSING"
        | "ERROR_QUERY_FULLTEXT_INDEX_MISSING"
        | "ERROR_QUERY_INVALID_DATE_VALUE"
        | "ERROR_QUERY_MULTI_MODIFY"
        | "ERROR_QUERY_INVALID_AGGREGATE_EXPRESSION"
        | "ERROR_QUERY_COMPILE_TIME_OPTIONS"
        | "ERROR_QUERY_EXCEPTION_OPTIONS"
        | "ERROR_QUERY_COLLECTION_USED_IN_EXPRESSION"
        | "ERROR_QUERY_DISALLOWED_DYNAMIC_CALL"
        | "ERROR_QUERY_ACCESS_AFTER_MODIFICATION"
        | "ERROR_QUERY_FUNCTION_INVALID_NAME"
        | "ERROR_QUERY_FUNCTION_INVALID_CODE"
        | "ERROR_QUERY_FUNCTION_NOT_FOUND"
        | "ERROR_QUERY_FUNCTION_RUNTIME_ERROR"
        | "ERROR_QUERY_BAD_JSON_PLAN"
        | "ERROR_QUERY_NOT_FOUND"
        | "ERROR_QUERY_IN_USE"
        | "ERROR_QUERY_USER_ASSERT"
        | "ERROR_QUERY_USER_WARN"
        | "ERROR_CURSOR_NOT_FOUND"
        | "ERROR_CURSOR_BUSY"
        | "ERROR_TRANSACTION_INTERNAL"
        | "ERROR_TRANSACTION_NESTED"
        | "ERROR_TRANSACTION_UNREGISTERED_COLLECTION"
        | "ERROR_TRANSACTION_DISALLOWED_OPERATION"
        | "ERROR_TRANSACTION_ABORTED"
        | "ERROR_USER_INVALID_NAME"
        | "ERROR_USER_INVALID_PASSWORD"
        | "ERROR_USER_DUPLICATE"
        | "ERROR_USER_NOT_FOUND"
        | "ERROR_USER_CHANGE_PASSWORD"
        | "ERROR_USER_EXTERNAL"
        | "ERROR_SERVICE_INVALID_NAME"
        | "ERROR_SERVICE_INVALID_MOUNT"
        | "ERROR_SERVICE_DOWNLOAD_FAILED"
        | "ERROR_SERVICE_UPLOAD_FAILED"
        | "ERROR_LDAP_CANNOT_INIT"
        | "ERROR_LDAP_CANNOT_SET_OPTION"
        | "ERROR_LDAP_CANNOT_BIND"
        | "ERROR_LDAP_CANNOT_UNBIND"
        | "ERROR_LDAP_CANNOT_SEARCH"
        | "ERROR_LDAP_CANNOT_START_TLS"
        | "ERROR_LDAP_FOUND_NO_OBJECTS"
        | "ERROR_LDAP_NOT_ONE_USER_FOUND"
        | "ERROR_LDAP_USER_NOT_IDENTIFIED"
        | "ERROR_LDAP_INVALID_MODE"
        | "ERROR_TASK_INVALID_ID"
        | "ERROR_TASK_DUPLICATE_ID"
        | "ERROR_TASK_NOT_FOUND"
        | "ERROR_GRAPH_INVALID_GRAPH"
        | "ERROR_GRAPH_COULD_NOT_CREATE_GRAPH"
        | "ERROR_GRAPH_INVALID_VERTEX"
        | "ERROR_GRAPH_COULD_NOT_CREATE_VERTEX"
        | "ERROR_GRAPH_COULD_NOT_CHANGE_VERTEX"
        | "ERROR_GRAPH_INVALID_EDGE"
        | "ERROR_GRAPH_COULD_NOT_CREATE_EDGE"
        | "ERROR_GRAPH_COULD_NOT_CHANGE_EDGE"
        | "ERROR_GRAPH_TOO_MANY_ITERATIONS"
        | "ERROR_GRAPH_INVALID_FILTER_RESULT"
        | "ERROR_GRAPH_EMPTY"
        | "ERROR_SESSION_UNKNOWN"
        | "ERROR_SESSION_EXPIRED"
        | "SIMPLE_CLIENT_UNKNOWN_ERROR"
        | "SIMPLE_CLIENT_COULD_NOT_CONNECT"
        | "SIMPLE_CLIENT_COULD_NOT_WRITE"
        | "SIMPLE_CLIENT_COULD_NOT_READ"
        | "COMMUNICATOR_REQUEST_ABORTED"
        | "COMMUNICATOR_DISABLED"
        | "ERROR_MALFORMED_MANIFEST_FILE"
        | "ERROR_INVALID_SERVICE_MANIFEST"
        | "ERROR_SERVICE_FILES_MISSING"
        | "ERROR_SERVICE_FILES_OUTDATED"
        | "ERROR_INVALID_FOXX_OPTIONS"
        | "ERROR_INVALID_MOUNTPOINT"
        | "ERROR_SERVICE_NOT_FOUND"
        | "ERROR_SERVICE_NEEDS_CONFIGURATION"
        | "ERROR_SERVICE_MOUNTPOINT_CONFLICT"
        | "ERROR_SERVICE_MANIFEST_NOT_FOUND"
        | "ERROR_SERVICE_OPTIONS_MALFORMED"
        | "ERROR_SERVICE_SOURCE_NOT_FOUND"
        | "ERROR_SERVICE_SOURCE_ERROR"
        | "ERROR_SERVICE_UNKNOWN_SCRIPT"
        | "ERROR_MODULE_NOT_FOUND"
        | "ERROR_MODULE_SYNTAX_ERROR"
        | "ERROR_MODULE_FAILURE"
        | "ERROR_NO_SMART_COLLECTION"
        | "ERROR_NO_SMART_GRAPH_ATTRIBUTE"
        | "ERROR_CANNOT_DROP_SMART_COLLECTION"
        | "ERROR_KEY_MUST_BE_PREFIXED_WITH_SMART_GRAPH_ATTRIBUTE"
        | "ERROR_ILLEGAL_SMART_GRAPH_ATTRIBUTE"
        | "ERROR_AGENCY_INQUIRY_SYNTAX"
        | "ERROR_AGENCY_INFORM_MUST_BE_OBJECT"
        | "ERROR_AGENCY_INFORM_MUST_CONTAIN_TERM"
        | "ERROR_AGENCY_INFORM_MUST_CONTAIN_ID"
        | "ERROR_AGENCY_INFORM_MUST_CONTAIN_ACTIVE"
        | "ERROR_AGENCY_INFORM_MUST_CONTAIN_POOL"
        | "ERROR_AGENCY_INFORM_MUST_CONTAIN_MIN_PING"
        | "ERROR_AGENCY_INFORM_MUST_CONTAIN_MAX_PING"
        | "ERROR_AGENCY_INFORM_MUST_CONTAIN_TIMEOUT_MULT"
        | "ERROR_AGENCY_INQUIRE_CLIENT_ID_MUST_BE_STRING"
        | "ERROR_AGENCY_CANNOT_REBUILD_DBS"
        | "ERROR_SUPERVISION_GENERAL_FAILURE"
        | "ERROR_DISPATCHER_IS_STOPPING"
        | "ERROR_QUEUE_UNKNOWN"
        | "ERROR_QUEUE_FULL";

    // Collection

    type DocumentCollectionType = 2;
    type EdgeCollectionType = 3;
    type CollectionType = DocumentCollectionType | EdgeCollectionType;

    interface CollectionChecksum {
        checksum: string;
        revision: string;
    }

    interface CollectionFigures {
        alive: {
            count: number;
            size: number;
        };
        dead: {
            count: number;
            size: number;
            deletion: number;
        };
        datafiles: {
            count: number;
            fileSize: number;
        };
        journals: {
            count: number;
            fileSize: number;
        };
        compactors: {
            count: number;
            fileSize: number;
        };
        shapefiles: {
            count: number;
            fileSize: number;
        };
        shapes: {
            count: number;
            size: number;
        };
        attributes: {
            count: number;
            size: number;
        };
        indexes: {
            count: number;
            size: number;
        };
        lastTick: number;
        uncollectedLogfileEntries: number;
        documentReferences: number;
        waitingFor: string;
        compactionStatus: {
            time: string;
            message: string;
            count: number;
            filesCombined: number;
            bytesRead: number;
            bytesWritten: number;
        };
    }

    interface CollectionPropertiesOptions {
        waitForSync?: boolean;
        journalSize?: number;
        indexBuckets?: number;
        replicationFactor?: number;
    }

    interface CreateCollectionOptions {
        waitForSync?: boolean;
        journalSize?: number;
        isVolatile?: boolean;
        isSystem?: boolean;
        keyOptions?: {
            type?: KeyGeneratorType;
            allowUserKeys?: boolean;
            increment?: number;
            offset?: number;
        };
        numberOfShards?: number;
        shardKeys?: string[];
        replicationFactor?: number;
    }

    interface CollectionProperties {
        waitForSync: boolean;
        journalSize: number;
        isSystem: boolean;
        isVolatile: boolean;
        keyOptions?: {
            type: KeyGeneratorType;
            allowUserKeys: boolean;
            increment?: number;
            offset?: number;
        };
        indexBuckets: number;
        numberOfShards?: number;
        shardKeys?: string[];
        replicationFactor?: number;
    }

    // Indexes

    interface IndexLike {
        [key: string]: any;
        id: string;
    }

    interface IndexDescription<T> {
        type: IndexType;
        fields: ReadonlyArray<keyof T | string>;
        sparse?: boolean;
        unique?: boolean;
        deduplicate?: boolean;
        expireAfter?: number;
    }

    interface Index<T extends object = any> {
        id: string;
        name: string;
        type: IndexType;
        fields: Array<keyof T | string>;
        sparse: boolean;
        unique: boolean;
        deduplicate: boolean;
        expireAfter?: number;
        isNewlyCreated: boolean;
        selectivityEstimate: number;
        code: number;
    }

    // Document

    interface ObjectWithId {
        [key: string]: any;
        _id: string;
    }

    interface ObjectWithKey {
        [key: string]: any;
        _key: string;
    }

    type DocumentLike = ObjectWithId | ObjectWithKey;

    type Patch<T> = { [K in keyof T]?: T[K] | Patch<T[K]> };

    interface DocumentMetadata {
        _key: string;
        _id: string;
        _rev: string;
    }

    interface UpdateMetadata extends DocumentMetadata {
        _oldRev: string;
    }

    type Document<T extends object = any> = { [K in keyof T]: T[K] } &
        DocumentMetadata & { _from?: string; _to?: string } & {
            [key: string]: any;
        };
    type DocumentData<T extends object = any> = { [K in keyof T]: T[K] } &
        Partial<DocumentMetadata>;
    type Edge<T extends object = any> = Document<T> & {
        _from: string;
        _to: string;
    };

    interface InsertResult<T extends object = any> extends DocumentMetadata {
        new?: Document<T>;
    }
    interface UpdateResult<T extends object = any> extends UpdateMetadata {
        old?: Document<T>;
        new?: Document<T>;
    }
    interface RemoveResult<T extends object = any> extends DocumentMetadata {
        old?: Document<T>;
    }

    interface InsertOptions {
        waitForSync?: boolean;
        silent?: boolean;
        returnNew?: boolean;
    }

    interface ReplaceOptions extends InsertOptions {
        overwrite?: boolean;
        returnOld?: boolean;
    }

    interface UpdateOptions extends ReplaceOptions {
        keepNull?: boolean;
        mergeObjects?: boolean;
    }

    interface UpdateByExampleOptions {
        keepNull?: boolean;
        waitForSync?: boolean;
        limit?: number;
        mergeObjects?: boolean;
    }

    interface RemoveOptions {
        waitForSync?: boolean;
        overwrite?: boolean;
        returnOld?: boolean;
        silent?: boolean;
    }

    interface RemoveByExampleOptions {
        waitForSync?: boolean;
        limit?: number;
    }

    interface IterateOptions {
        limit?: number;
        probability?: number;
    }

    type DocumentIterator<T extends object> = (
        document: Document<T>,
        number: number
    ) => void;

    interface Collection<T extends object = any> {
        // Collection
        name(): string;
        checksum(
            withRevisions?: boolean,
            withData?: boolean
        ): CollectionChecksum;
        count(): number;
        documentId(documentKey: string): string;
        drop(options?: { isSystem?: boolean }): void;
        figures(): CollectionFigures;
        load(): void;
        path(): string;
        properties(
            properties?: CollectionPropertiesOptions
        ): CollectionProperties;
        revision(): string;
        rotate(): void;
        toArray(): Array<Document<T>>;
        truncate(): void;
        type(): CollectionType;
        unload(): void;

        // Indexes
        dropIndex(index: string | IndexLike): boolean;
        ensureIndex(description: IndexDescription<T>): Index<T>;
        getIndexes(): Array<Index<T>>;
        index(index: string | IndexLike): Index<T> | null;

        // Document
        all(): Cursor<Document<T>>;
        any(): Document<T>;
        byExample(example: Partial<Document<T>>): Cursor<Document<T>>;
        document(selector: string | DocumentLike): Document<T>;
        document(
            selectors: ReadonlyArray<string | DocumentLike>
        ): Array<Document<T>>;
        exists(name: string): boolean;
        firstExample(example: Partial<Document<T>>): Document<T> | null;
        getResponsibleShard(document: DocumentLike): string;
        insert(data: DocumentData<T>, options?: InsertOptions): InsertResult<T>;
        insert(
            array: ReadonlyArray<DocumentData<T>>,
            options?: InsertOptions
        ): Array<InsertResult<T>>;
        insert(
            from: string,
            to: string,
            data: DocumentData<T>,
            options?: InsertOptions
        ): InsertResult<T>;
        edges(
            vertex: string | ObjectWithId | ReadonlyArray<string | ObjectWithId>
        ): Array<Edge<T>>;
        inEdges(
            vertex: string | ObjectWithId | ReadonlyArray<string | ObjectWithId>
        ): Array<Edge<T>>;
        outEdges(
            vertex: string | ObjectWithId | ReadonlyArray<string | ObjectWithId>
        ): Array<Edge<T>>;
        iterate(iterator: DocumentIterator<T>, options?: IterateOptions): void;
        remove(
            selector: string | DocumentLike,
            options?: RemoveOptions
        ): RemoveResult;
        remove(
            selectors: ReadonlyArray<string | DocumentLike>,
            options?: RemoveOptions
        ): RemoveResult[];
        removeByExample(
            example: Partial<Document<T>>,
            waitForSync?: boolean,
            limit?: number
        ): number;
        removeByExample(
            example: Partial<Document<T>>,
            options?: RemoveByExampleOptions
        ): number;
        rename(newName: string): void;
        replace(
            selector: string | DocumentLike,
            data: DocumentData<T>,
            options?: ReplaceOptions
        ): UpdateResult<T>;
        replace(
            selectors: ReadonlyArray<string | DocumentLike>,
            data: ReadonlyArray<DocumentData<T>>,
            options?: ReplaceOptions
        ): Array<UpdateResult<T>>;
        replaceByExample(
            example: Partial<Document<T>>,
            newValue: DocumentData<T>,
            waitForSync?: boolean,
            limit?: number
        ): number;
        replaceByExample(
            example: Partial<Document<T>>,
            newValue: DocumentData<T>,
            options?: { waitForSync?: boolean; limit?: number }
        ): number;
        save(data: DocumentData<T>, options?: InsertOptions): InsertResult<T>;
        save(
            array: ReadonlyArray<DocumentData<T>>,
            options?: InsertOptions
        ): Array<InsertResult<T>>;
        save(
            from: string,
            to: string,
            data: DocumentData<T>,
            options?: InsertOptions
        ): InsertResult<T>;
        update(
            selector: string | DocumentLike,
            data: Patch<Document<T>>,
            options?: UpdateOptions
        ): UpdateResult<T>;
        update(
            selectors: ReadonlyArray<string | DocumentLike>,
            data: ReadonlyArray<Patch<Document<T>>>,
            options?: UpdateOptions
        ): Array<UpdateResult<T>>;
        updateByExample(
            example: Partial<Document<T>>,
            newValue: Patch<Document<T>>,
            keepNull?: boolean,
            waitForSync?: boolean,
            limit?: number
        ): number;
        updateByExample(
            example: Partial<Document<T>>,
            newValue: Patch<Document<T>>,
            options?: UpdateByExampleOptions
        ): number;
    }

    // Database

    interface DatabaseUser {
        username: string;
        passwd?: string;
        active?: boolean;
        extra?: object;
    }

    // AQL

    interface Query {
        query: string;
        bindVars?: object;
        options?: QueryOptions;
    }

    interface AqlLiteral {
        toAQL: () => string;
    }

    interface Cursor<T = any> {
        toArray(): T[];
        hasNext(): boolean;
        next(): T;
        count(count?: boolean): number;
        getExtra(): QueryExtra;
        setBatchSize(size: number): void;
        getBatchSize(): number;
        execute(batchSize?: number): void;
        dispose(): void;
    }

    interface Statement<T = any> {
        bind(name: string, value: any): void;
        setBatchSize(size: number): void;
        getBatchSize(): number;
        execute(): Cursor<T>;
    }

    interface QueryOptions {
        memoryLimit?: number;
        failOnWarning?: boolean;
        cache?: boolean;
        count?: boolean;
        fullCount?: boolean;
        profile?: boolean;
        maxWarningCount?: number;
        maxNumberOfPlans?: number;
        stream?: boolean;
        // RocksDB
        maxTransactionsSize?: number;
        intermediateCommitSize?: number;
        intermediateCommitCount?: number;
        // enterprise
        skipInaccessibleCollections?: boolean;
    }

    interface QueryExtra {
        stats: {
            writesExecuted: number;
            writesIgnored: number;
            scannedFull: number;
            scannedIndex: number;
            filtered: number;
            httpRequests: number;
            fullCount: number;
            executionTime: number;
        };
        warnings: string[];
    }

    interface QueryAstNode {
        type: string;
        subNodes?: QueryAstNode[];
        [key: string]: any;
    }

    interface ParsedQuery {
        parsed: boolean;
        collections: string[];
        parameters: string[];
        bindVars: string[];
        ast: QueryAstNode[];
    }

    // Views

    interface ArangoSearchView {
        _dbName: string;
        _id: string;
        name(): string;
        type(): ViewType;
        rename(newName: string): void;
        properties(
            newProperties?: ArangoSearchViewPropertiesOptions
        ): ArangoSearchViewProperties;
    }

    type ArangoSearchViewConsolidationType =
        | "bytes"
        | "bytes_accum"
        | "count"
        | "fill";

    interface ArangoSearchViewCollectionLink {
        analyzers?: string[];
        fields?: { [key: string]: ArangoSearchViewCollectionLink | undefined };
        includeAllFields?: boolean;
        trackListPositions?: boolean;
        storeValues?: "none" | "id";
    }

    interface ArangoSearchViewProperties {
        id: string;
        name: string;
        type: "arangosearch";

        cleanupIntervalStep: number;
        consolidationIntervalMsec: number;
        consolidationPolicy: {
            type: ArangoSearchViewConsolidationType;
            segmentThreshold: number;
            threshold: number;
        };
        links: {
            [key: string]: ArangoSearchViewCollectionLink | undefined;
        };
    }

    interface ArangoSearchViewPropertiesOptions {
        cleanupIntervalStep?: number;
        consolidationIntervalMsec?: number;
        consolidationPolicy?: {
            type?: ArangoSearchViewConsolidationType;
            segmentThreshold?: number;
            threshold?: number;
        };
        links?: {
            [key: string]: ArangoSearchViewCollectionLink | undefined;
        };
    }

    // Global

    interface TransactionCollections {
        read?: string | string[];
        write?: string | string[];
        allowImplicit?: boolean;
    }
    interface Transaction {
        collections: TransactionCollections | string[];
        action: (params: object) => void | string;
        waitForSync?: boolean;
        lockTimeout?: number;
        params?: object;
        // RocksDB
        maxTransactionsSize?: number;
        intermediateCommitSize?: number;
        intermediateCommitCount?: number;
    }

    interface Database {
        // Database
        _createDatabase(
            name: string,
            options?: never,
            users?: DatabaseUser[]
        ): true;
        _databases(): string[];
        _dropDatabase(name: string): true;
        _useDatabase(name: string): Database;

        // Indexes
        _index(index: string | IndexLike): Index | null;
        _dropIndex(index: string | IndexLike): boolean;

        // Properties
        _id(): string;
        _isSystem(): boolean;
        _name(): string;
        _path(): string;
        _version(): string;

        // Collection
        _collection(name: string): Collection;
        _collections(): Collection[];
        _create(name: string, properties?: CreateCollectionOptions): Collection;
        _createDocumentCollection(
            name: string,
            properties?: CreateCollectionOptions
        ): Collection;
        _createEdgeCollection(
            name: string,
            properties?: CreateCollectionOptions
        ): Collection;
        _drop(name: string): void;
        _truncate(name: string): void;

        // AQL
        _createStatement(query: Query | string): Statement;
        _query(query: Query, options?: QueryOptions): Cursor;
        _query(
            query: string,
            bindVars?: object,
            options?: QueryOptions
        ): Cursor;
        _explain(query: Query | string): void;
        _parse(query: string): ParsedQuery;

        // Document
        _document(name: string): Document;
        _exists(selector: string | ObjectWithId): DocumentMetadata;
        _remove(selector: string | ObjectWithId): DocumentMetadata;
        _replace(
            selector: string | ObjectWithId,
            data: object
        ): DocumentMetadata;
        _update(
            selector: string | ObjectWithId,
            data: object
        ): DocumentMetadata;

        // Views
        _view(name: string): ArangoSearchView | null;
        _views(): ArangoSearchView[];
        _createView(
            name: string,
            type: ViewType,
            properties: ArangoSearchViewPropertiesOptions
        ): ArangoSearchView;
        _dropView(name: string): void;

        // Global
        _engine(): EngineType;
        _engineStats(): { [key: string]: any };
        _executeTransaction(transaction: Transaction): void;
    }
}

declare namespace Foxx {
    interface Session {
        uid: string | null;
        created: number;
        data: any;
    }
    interface SessionStorage {
        new?: () => Session;
        fromClient: (sid: string) => Session | null;
        forClient: (session: Session) => string | null;
    }
    interface SessionTransport {
        get?: (req: Request) => string | null;
        set?: (res: Response, sid: string) => void;
        clear?: (res: Response) => void;
    }
    interface CollectionSessionStorage extends SessionStorage {
        new: () => Session;
        save: (session: Session) => Session;
        clear: (session: Session) => boolean;
        prune: () => string[];
    }
    interface SessionsMiddleware extends DelegateMiddleware {
        storage: SessionStorage;
        transport: SessionTransport[];
    }

    type SimpleMiddleware = (
        req: Request,
        res: Response,
        next: NextFunction
    ) => void;
    interface DelegateMiddleware {
        register: (endpoint: Endpoint) => SimpleMiddleware;
    }
    type Middleware = SimpleMiddleware | DelegateMiddleware;
    type Handler = (req: Request, res: Response) => void;
    type NextFunction = () => void;

    interface ValidationResult<T> {
        value: T;
        error: any;
    }

    interface Schema {
        isJoi: boolean;
        validate<T>(value: T): ValidationResult<T>;
    }

    interface Model {
        schema: Schema;
        fromClient?: (value: any) => any;
        forClient?: (value: any) => any;
    }

    interface DocumentationRouterOptions {
        mount: string;
        indexFile: string;
        swaggerRoot: string;
        before: (req: Request, res: Response) => void | false;
    }

    interface MediaType {
        type: string;
        subtype: string;
        suffix?: string;
        parameters: {
            charset: string;
        };
    }

    interface TypeDefinition {
        fromClient?: (
            body: string | Buffer,
            req: Request,
            type: MediaType
        ) => any;
        forClient?: (
            body: any
        ) => {
            data: string;
            headers: { [key: string]: string | undefined };
        };
    }

    type Ranges = Array<{
        start: number;
        end: number;
    }> & { type: string };

    type ConfigurationType =
        | "integer"
        | "boolean"
        | "string"
        | "number"
        | "json"
        | "password"
        | "int"
        | "bool";
    interface ConfigurationDefinition {
        default?: any;
        type?: ConfigurationType;
        description?: string;
        required: boolean;
    }
    interface DependencyDefinition {
        name: string;
        version: string;
        description?: string;
        required: boolean;
        multiple: boolean;
    }
    interface AssetDefinition {
        path: string;
        gzip?: boolean;
        type?: string;
    }

    interface Manifest {
        name?: string;
        version?: string;
        keywords?: string;
        license?: string;
        repository?: { type: string; url: string };
        author: string;
        contributors?: any[];
        description: string;
        thumbnail?: string;
        engines?: { [key: string]: string | undefined };
        defaultDocument?: string;
        lib: string;
        main?: string;
        configuration?: { [key: string]: ConfigurationDefinition };
        dependencies?: { [key: string]: DependencyDefinition };
        provides?: { [key: string]: string | undefined };
        files?: { [key: string]: AssetDefinition };
        scripts?: { [key: string]: string | undefined };
        tests?: string[];
    }

    interface Context {
        argv: any[];
        basePath: string;
        baseUrl: string;
        collectionPrefix: string;
        configuration: { [key: string]: any };
        dependencies: { [key: string]: any };
        isDevelopment: boolean;
        isProduction: boolean;
        manifest: Manifest;
        mount: string;
        collection(name: string): ArangoDB.Collection | null;
        collectionName(name: string): string;
        createDocumentationRouter(
            opts?:
                | Partial<DocumentationRouterOptions>
                | DocumentationRouterOptions["before"]
                | DocumentationRouterOptions["swaggerRoot"]
        ): Router;
        file(name: string): Buffer;
        file(name: string, encoding: string): string;
        fileName(name: string): string;
        registerType(type: string, def: TypeDefinition): void;
        use(
            path: string,
            routerOrMiddleware: Router | Middleware,
            name?: string
        ): Endpoint;
        use(routerOrMiddleware: Router | Middleware, name?: string): Endpoint;
    }

    interface Request {
        arangoUser: string | null;
        arangoVersion: number;
        auth: null | {
            bearer?: string;
            basic?: { username?: string; password?: string };
        };
        baseUrl: string;
        body: any;
        context: Context;
        database: string;
        headers: { [key: string]: string | undefined };
        hostname: string;
        method: ArangoDB.HttpMethod;
        originalUrl: string;
        path: string;
        pathParams: { [key: string]: any };
        port: number;
        protocol: string;
        queryParams: { [key: string]: any };
        rawBody: Buffer;
        remoteAddress: string;
        remoteAddresses: string[];
        remotePort: number;
        secure: boolean;
        session?: Session;
        sessionStorage?: SessionStorage;
        suffix: string;
        trustProxy: boolean;
        url: string;
        xhr: boolean;
        accepts(types: string[]): string | false;
        accepts(...types: string[]): string | false;
        acceptsCharsets(charsets: string[]): string | false;
        acceptsCharsets(...charsets: string[]): string | false;
        acceptsEncodings(encodings: string[]): string | false;
        acceptsEncodings(...encodings: string[]): string | false;
        acceptsLanguages(languages: string[]): string | false;
        acceptsLanguages(...languages: string[]): string | false;
        cookie(
            name: string,
            options?: { secret?: string; algorithm?: ArangoDB.HashAlgorithm }
        ): string | null;
        get(name: string): string | undefined;
        header(name: string): string | undefined;
        is(types: string[]): string;
        is(...types: string[]): string;
        json(): any;
        makeAbsolute(
            path: string,
            query?: string | { [key: string]: string | undefined }
        ): string;
        param(name: string): any;
        range(size?: number): Ranges | number;
        reverse(name: string, params?: object): string;
    }

    interface Response {
        body: Buffer | string;
        context: Context;
        headers: { [key: string]: any };
        statusCode: number;
        attachment(filename?: string): this;
        cookie(
            name: string,
            value: string,
            options?: {
                ttl?: number;
                algorithm?: ArangoDB.HashAlgorithm;
                secret?: string;
                path?: string;
                domain?: string;
                secure?: boolean;
                httpOnly?: boolean;
            }
        ): this;
        download(path: string, filename?: string): this;
        getHeader(name: string): string | undefined;
        json(data: any): this;
        redirect(status: number | ArangoDB.HttpStatus, path: string): this;
        redirect(path: string): this;
        removeHeader(name: string): this;
        send(data: any, type?: string): this;
        sendFile(path: string, options?: { lastModified: boolean }): this;
        sendStatus(status: number | ArangoDB.HttpStatus): this;
        setHeader(name: string, value: string): this;
        set(name: string, value: string): this;
        set(headers: { [name: string]: string }): this;
        status(status: number | ArangoDB.HttpStatus): this;
        throw(
            status: number | ArangoDB.HttpStatus,
            reason: string,
            error: Error
        ): never;
        throw(
            status: number | ArangoDB.HttpStatus,
            reason: string,
            options?: { cause?: Error; extra?: any }
        ): never;
        throw(status: number | ArangoDB.HttpStatus, error: Error): never;
        throw(
            status: number | ArangoDB.HttpStatus,
            options?: { cause?: Error; extra?: any }
        ): never;
        type(type?: string): string;
        vary(names: string[]): this;
        vary(...names: string[]): this;
        write(data: string | Buffer): this;
    }

    interface Endpoint {
        header(name: string, schema: Schema, description?: string): this;
        header(name: string, description: string): this;
        pathParam(name: string, schema: Schema, description?: string): this;
        pathParam(name: string, description: string): this;
        queryParam(name: string, schema: Schema, description?: string): this;
        queryParam(name: string, description: string): this;
        body(
            schema: Schema | Model | [Model],
            mimes?: string[],
            description?: string
        ): this;
        body(
            schemaOrMimes: Schema | Model | [Model] | string[],
            description?: string
        ): this;
        body(description: string): this;
        response(
            status: number | ArangoDB.HttpStatus,
            schema: Schema | Model | [Model],
            mimes?: string[],
            description?: string
        ): this;
        response(
            status: number | ArangoDB.HttpStatus,
            mimes: string[],
            description?: string
        ): this;
        response(
            status: number | ArangoDB.HttpStatus,
            description: string
        ): this;
        summary(summary: string): this;
        description(description: string): this;
        deprecated(deprecated: boolean): this;
        error(status: number | ArangoDB.HttpStatus, description: string): this;
        tag(...tags: string[]): this;
    }

    function route(handler: Handler, name?: string): Endpoint;
    function route(
        pathOrMiddleware: string | SimpleMiddleware,
        handler: Handler,
        name?: string
    ): Endpoint;
    function route(
        pathOrMiddleware: string | SimpleMiddleware,
        middleware: SimpleMiddleware,
        handler: Handler,
        name?: string
    ): Endpoint;
    function route(
        pathOrMiddleware: string | SimpleMiddleware,
        middleware1: SimpleMiddleware,
        middleware2: SimpleMiddleware,
        handler: Handler,
        name?: string
    ): Endpoint;
    function route(
        pathOrMiddleware: string | SimpleMiddleware,
        middleware1: SimpleMiddleware,
        middleware2: SimpleMiddleware,
        middleware3: SimpleMiddleware,
        handler: Handler,
        name?: string
    ): Endpoint;
    function route(
        pathOrMiddleware: string | SimpleMiddleware,
        middleware1: SimpleMiddleware,
        middleware2: SimpleMiddleware,
        middleware3: SimpleMiddleware,
        middleware4: SimpleMiddleware,
        handler: Handler,
        name?: string
    ): Endpoint;
    function route(
        pathOrMiddleware: string | SimpleMiddleware,
        middleware1: SimpleMiddleware,
        middleware2: SimpleMiddleware,
        middleware3: SimpleMiddleware,
        middleware4: SimpleMiddleware,
        middleware5: SimpleMiddleware,
        handler: Handler,
        name?: string
    ): Endpoint;
    function route(
        pathOrMiddleware: string | SimpleMiddleware,
        middleware1: SimpleMiddleware,
        middleware2: SimpleMiddleware,
        middleware3: SimpleMiddleware,
        middleware4: SimpleMiddleware,
        middleware5: SimpleMiddleware,
        middleware6: SimpleMiddleware,
        handler: Handler,
        name?: string
    ): Endpoint;
    function route(
        pathOrMiddleware: string | SimpleMiddleware,
        middleware1: SimpleMiddleware,
        middleware2: SimpleMiddleware,
        middleware3: SimpleMiddleware,
        middleware4: SimpleMiddleware,
        middleware5: SimpleMiddleware,
        middleware6: SimpleMiddleware,
        middleware7: SimpleMiddleware,
        handler: Handler,
        name?: string
    ): Endpoint;
    function route(
        pathOrMiddleware: string | SimpleMiddleware,
        middleware1: SimpleMiddleware,
        middleware2: SimpleMiddleware,
        middleware3: SimpleMiddleware,
        middleware4: SimpleMiddleware,
        middleware5: SimpleMiddleware,
        middleware6: SimpleMiddleware,
        middleware7: SimpleMiddleware,
        middleware8: SimpleMiddleware,
        handler: Handler,
        name?: string
    ): Endpoint;
    function route(
        pathOrMiddleware: string | SimpleMiddleware,
        middleware1: SimpleMiddleware,
        middleware2: SimpleMiddleware,
        middleware3: SimpleMiddleware,
        middleware4: SimpleMiddleware,
        middleware5: SimpleMiddleware,
        middleware6: SimpleMiddleware,
        middleware7: SimpleMiddleware,
        middleware8: SimpleMiddleware,
        middleware9: SimpleMiddleware,
        handler: Handler,
        name?: string
    ): Endpoint;

    interface Router {
        get: typeof route;
        post: typeof route;
        put: typeof route;
        patch: typeof route;
        delete: typeof route;
        all: typeof route;
        use(
            path: string,
            routerOrMiddleware: Router | Middleware,
            name?: string
        ): Endpoint;
        use(routerOrMiddleware: Router | Middleware, name?: string): Endpoint;
    }
}

declare module "@arangodb" {
    function aql(strings: TemplateStringsArray, ...args: any[]): ArangoDB.Query;
    namespace aql {
        function literal(value: any): ArangoDB.AqlLiteral;
    }
    function query(
        strings: TemplateStringsArray,
        ...args: any[]
    ): ArangoDB.Cursor;
    function time(): number;
    const db: ArangoDB.Database & {
        [key: string]: ArangoDB.Collection | undefined;
    };
    const errors: {
        [Name in ArangoDB.ErrorName]: { code: number; message: string }
    };
}

declare module "@arangodb/foxx/router" {
    function createRouter(): Foxx.Router;
    export = createRouter;
}

declare module "@arangodb/foxx/queues" {
    interface QueueItem {
        name: string;
        mount: string;
        backOff?: ((failureCount: number) => number) | number;
        maxFailures?: number;
        schema?: Foxx.Schema;
        preprocess?: (data: any) => any;
    }

    interface Script {
        name: string;
        mount: string;
    }

    type JobCallback = (
        result: any,
        jobData: any,
        job: ArangoDB.Document<Job>
    ) => void;

    interface Job {
        status: string;
        queue: string;
        type: Script;
        failures: object[];
        runs: number;
        data: any;
        created: number;
        modified: number;
        delayUntil: number;
        maxFailures: number;
        repeatDelay: number;
        repeatTimes: number;
        repeatUntil: number;
        success?: string;
        failure?: string;
        runFailures: number;
        abort(): void;
    }

    interface JobOptions {
        success?: JobCallback;
        failure?: JobCallback;
        delayUntil?: number | Date;
        backOff?: ((failureCount: number) => number) | number;
        maxFailures?: number;
        repeatTimes?: number;
        repeatUntil?: number | Date;
        repeatDelay?: number;
    }

    interface Queue {
        push(item: QueueItem, data: any, opts?: JobOptions): void;
        get(jobId: string): ArangoDB.Document<Job>;
        delete(jobId: string): boolean;
        pending(script?: Script): string[];
        progress(script?: Script): string[];
        complete(script?: Script): string[];
        failed(script?: Script): string[];
        all(script?: Script): string[];
    }

    function createQueue(name: string, maxWorkers?: number): Queue;
    function deleteQueue(name: string): boolean;
    function get(name: string): Queue;

    export {
        createQueue as create,
        deleteQueue as delete,
        get,
        JobOptions,
        Job,
        Queue,
        QueueItem,
        Script
    };
}

declare module "@arangodb/foxx/graphql" {
    type GraphQLSchema = object;
    type GraphQLFormatErrorFunction = (error: any) => any;
    interface GraphQLModule {
      formatError: GraphQLFormatErrorFunction;
      Source: any;
      parse: any;
      validate: any;
      specifiedRules: any;
      getOperationAST: any;
      execute: any;
    }
    interface GraphQLOptions {
        schema: GraphQLSchema;
        context?: any;
        rootValue?: object;
        pretty?: boolean;
        formatError?: GraphQLFormatErrorFunction;
        validationRules?: any[];
        graphiql?: boolean;
        graphql?: GraphQLModule;
    }
    function createGraphQLRouter(
        options: GraphQLOptions | GraphQLSchema
    ): Foxx.Router;
    export = createGraphQLRouter;
}

declare module "@arangodb/foxx/sessions" {
    interface SessionsOptions {
        storage: Foxx.SessionStorage | string | ArangoDB.Collection;
        transport:
            | Foxx.SessionTransport
            | Foxx.SessionTransport[]
            | "cookie"
            | "header";
        autoCreate?: boolean;
    }
    function sessionsMiddleware(
        options: SessionsOptions
    ): Foxx.SessionsMiddleware;
    export = sessionsMiddleware;
}

declare module "@arangodb/foxx/sessions/storages/collection" {
    interface CollectionStorageOptions {
        collection: string | ArangoDB.Collection;
        ttl?: number;
        pruneExpired?: boolean;
        autoUpdate?: boolean;
    }
    function collectionStorage(
        options:
            | CollectionStorageOptions
            | CollectionStorageOptions["collection"]
    ): Foxx.CollectionSessionStorage;
    export = collectionStorage;
}

declare module "@arangodb/foxx/sessions/storages/jwt" {
    interface SafeJwtStorageOptions {
        algorithm?: ArangoDB.JwtAlgorithm;
        secret: string;
        ttl?: number;
        verify?: boolean;
        maxExp?: number;
    }
    interface UnsafeJwtStorageOptions {
        algorithm: "none";
        ttl?: number;
        verify?: boolean;
        maxExp?: number;
    }
    function jwtStorage(
        options:
            | SafeJwtStorageOptions
            | UnsafeJwtStorageOptions
            | SafeJwtStorageOptions["secret"]
    ): Foxx.SessionStorage;
    export = jwtStorage;
}

declare module "@arangodb/foxx/sessions/transports/cookie" {
    interface CookieTransportOptions {
        name?: string;
        ttl?: number;
        algorithm?: ArangoDB.HashAlgorithm;
        secret?: string;
        path?: string;
        domain?: string;
        secure?: string;
        httpOnly?: string;
    }
    function cookieTransport(
        options?: CookieTransportOptions
    ): Foxx.SessionTransport;
    function cookieTransport(name: string): Foxx.SessionTransport;
    export = cookieTransport;
}

declare module "@arangodb/foxx/sessions/transports/header" {
    interface HeaderTransportOptions {
        name?: string;
    }
    function headerTransport(
        options?: HeaderTransportOptions
    ): Foxx.SessionTransport;
    function headerTransport(name: string): Foxx.SessionTransport;
    export = headerTransport;
}

declare module "@arangodb/foxx/auth" {
    interface AuthData {
        method: string;
        salt: string;
        hash: string;
    }
    interface Authenticator {
        create(password: string): AuthData;
        verify(hash?: AuthData, password?: string): boolean;
    }
    interface AuthOptions {
        method?: ArangoDB.HashAlgorithm;
        saltLength?: number;
    }
    function createAuth(options?: AuthOptions): Authenticator;
    export = createAuth;
}

declare module "@arangodb/foxx/oauth1" {
    interface OAuth1Options {
        requestTokenEndpoint: string;
        authEndpoint: string;
        accessTokenEndpoint: string;
        activeUserEndpoint?: string;
        clientId: string;
        clientSecret: string;
        signatureMethod?: "HMAC-SHA1" | "PLAINTEXT";
    }
    interface OAuth1Client {
        fetchRequestToken(
            oauth_callback: string,
            qs?: { [key: string]: string | undefined }
        ): any;
        getAuthUrl(
            oauth_token: string,
            qs?: { [key: string]: string | undefined }
        ): string;
        exchangeRequestToken(
            oauth_token: string,
            oauth_verifier: string,
            qs?: { [key: string]: string | undefined }
        ): any;
        fetchActiveUser(
            oauth_token: string,
            oauth_token_secret: string,
            qs?: { [key: string]: string | undefined }
        ): any;
        createSignedRequest(
            method: ArangoDB.HttpMethod,
            url: string,
            parameters: string | { [key: string]: string | undefined } | null,
            oauth_token: string,
            oauth_token_secret: string
        ): {
            url: string;
            qs: string;
            headers: { accept: "application/json"; authorization: string };
        };
    }
    function createOAuth1Client(options: OAuth1Options): OAuth1Client;
    export = createOAuth1Client;
}

declare module "@arangodb/foxx/oauth2" {
    interface OAuth2Options {
        authEndpoint: string;
        tokenEndpoint: string;
        refreshEndpoint?: string;
        activeUserEndpoint?: string;
        clientId: string;
        clientSecret: string;
    }
    interface OAuth2Client {
        getAuthUrl(
            redirect_uri: string,
            options?: { response_type?: string }
        ): string;
        exchangeGrantToken(
            code: string,
            redirect_uri: string,
            options?: { grant_type?: string }
        ): any;
        fetchActiveUser(access_token: string): any;
    }
    function createOAuth2Client(options: OAuth2Options): OAuth2Client;
    export = createOAuth2Client;
}

declare module "@arangodb/foxx" {
    function createRouter(): Foxx.Router;
}

declare module "@arangodb/request" {
    interface Response {
        rawBody: Buffer;
        body: string | Buffer;
        json?: any;
        headers: { [key: string]: string | undefined };
        status: number;
        statusCode: number;
        message: string;
        throw(message?: string): void | never;
    }
    interface RequestOptions {
        qs?: object;
        useQuerystring?: boolean;
        headers?: { [key: string]: string | undefined };
        body?: any;
        json?: boolean;
        form?: any;
        auth?: { username: string; password?: string } | { bearer: string };
        sslProtocol?: number;
        followRedirect?: boolean;
        maxRedirects?: number;
        encoding?: string | null;
        timeout?: number;
        returnBodyOnError?: boolean;
    }
    function method(options: { url: string } & RequestOptions): Response;
    function method(url: string, options?: RequestOptions): Response;
    interface Request {
        (
            options: {
                url: string;
                method?: ArangoDB.HttpMethod;
            } & RequestOptions
        ): Response;
        head: typeof method;
        get: typeof method;
        post: typeof method;
        put: typeof method;
        patch: typeof method;
        delete: typeof method;
    }
    const request: Request;
    export = request;
}

declare module "@arangodb/crypto" {
    function createNonce(): string;
    function checkAndMarkNonce(nonce: string): void;
    function rand(): number;
    function genRandomAlphaNumbers(length: number): string;
    function genRandomNumbers(length: number): string;
    function genRandomSalt(length: number): string;
    function jwtEncode(
        key: string,
        message: string,
        algorithm: ArangoDB.JwtAlgorithm
    ): string;
    function jwtEncode(key: null, message: string, algorithm: "none"): string;
    function jwtDecode(
        key: string | null,
        token: string,
        noVerify?: boolean
    ): object | null;
    function md5(message: string): string;
    function sha1(message: string): string;
    function sha224(message: string): string;
    function sha256(message: string): string;
    function sha384(message: string): string;
    function sha512(message: string): string;
    function constantEquals(a: string, b: string): boolean;
    function pbkdf2(
        salt: string,
        password: string,
        iterations: number,
        keyLength: number
    ): string;
    function hmac(
        key: string,
        message: string,
        algorithm: ArangoDB.HashAlgorithm
    ): string;
}

declare module "@arangodb/general-graph" {
    interface EdgeDefinition {
        collection: string;
        from: string[];
        to: string[];
    }
    interface CommonNeighbors {
        left: string;
        right: string;
        neighbors: string[];
    }
    interface CountCommonNeighbors {
        [key: string]: Array<{ [key: string]: number | undefined }> | undefined;
    }
    interface CommonProperties {
        [key: string]:
            | Array<{ _id: string } & { [key: string]: any }>
            | undefined;
    }
    interface CountCommonProperties {
        [key: string]: number | undefined;
    }
    interface Path<
        A extends object = any,
        B extends object = any,
        E extends object = any,
        V extends object = never
    > {
        source: ArangoDB.Document<A>;
        destination: ArangoDB.Document<B>;
        edges: Array<ArangoDB.Edge<E>>;
        vertice: Array<ArangoDB.Document<A | B | V>>;
    }
    interface ShortestPath<T extends object = any> {
        vertices: string[];
        edges: Array<ArangoDB.Edge<T>>;
        distance: number;
    }
    interface Distance {
        startVertex: string;
        vertex: string;
        distance: number;
    }
    interface Eccentricity {
        [key: string]: number | undefined;
    }
    type Closeness = Eccentricity;
    type Betweenness = Eccentricity;
    type Example = Array<object | string> | object | string | null;
    interface ConnectingEdgesOptions {
        edgeExamples?: Example;
        edgeCollectionRestriction?: string[] | string;
        vertex1CollectionRestriction?: string[] | string;
        vertex2CollectionRestriction?: string[] | string;
    }
    interface NeighborsOptions {
        direction?: ArangoDB.EdgeDirection;
        edgeExamples?: Example;
        neighborExamples?: Example;
        edgeCollectionRestriction?: string[] | string;
        vertexCollectionRestriction?: string[] | string;
        minDepth?: number;
        maxDepth?: number;
    }
    interface CommonPropertiesOptions {
        vertex1CollectionRestriction?: string[] | string;
        vertex2CollectionRestriction?: string[] | string;
        ignoredProperties?: string[] | string;
    }
    interface PathsOptions {
        direction?: ArangoDB.EdgeDirection;
        followCycles?: boolean;
        minLength?: number;
        maxLength?: number;
    }
    interface ShortestPathOptions {
        direction?: ArangoDB.EdgeDirection;
        edgeCollectionRestriction?: string[] | string;
        startVertexCollectionRestriction?: string[] | string;
        endVertexCollectionRestriction?: string[] | string;
        weight?: string;
        defaultWeight?: number;
    }
    type EccentricityOptions = ShortestPathOptions;
    type ClosenessOptions = ShortestPathOptions;
    interface BetweennessOptions {
        direction?: ArangoDB.EdgeDirection;
        weight?: string;
        defaultWeight?: number;
    }
    type RadiusOptions = BetweennessOptions;
    type DiameterOptions = BetweennessOptions;
    interface Graph {
        _extendEdgeDefinitions(edgeDefinition: EdgeDefinition): void;
        _editEdgeDefinitions(edgeDefinition: EdgeDefinition): void;
        _deleteEdgeDefinition(
            edgeCollectionName: string,
            dropCollection?: boolean
        ): void;
        _addVertexCollection(
            orphanCollectionName: string,
            createCollection?: boolean
        ): void;
        _orphanCollections(): string[];
        _removeVertexCollection(
            orphanCollectionName: string,
            dropCollection?: boolean
        ): void;
        _getConnectingEdges(
            vertexExample1: Example,
            vertexExample2: Example,
            options: ConnectingEdgesOptions
        ): ArangoDB.Edge;
        _fromVertex(edgeId: string): ArangoDB.Document;
        _toVertex(edgeId: string): ArangoDB.Document;
        _neighbors(
            vertexExample: Example,
            options?: NeighborsOptions
        ): string[];
        _commonNeighbors(
            vertex1Example: Example,
            vertex2Example: Example,
            vertex1Options?: NeighborsOptions,
            vertex2Options?: NeighborsOptions
        ): CommonNeighbors[];
        _countCommonNeighbors(
            vertex1Example: Example,
            vertex2Example: Example,
            vertex1Options?: NeighborsOptions,
            vertex2Options?: NeighborsOptions
        ): CountCommonNeighbors[];
        _commonProperties(
            vertexExample1: Example,
            vertex2Example: Example,
            options?: CommonPropertiesOptions
        ): CommonProperties[];
        _countCommonProperties(
            vertex1Example: Example,
            vertex2Example: Example,
            options?: CommonPropertiesOptions
        ): CountCommonProperties[];
        _paths(options?: PathsOptions): Path[];
        _shortestPath(
            startVertexExample: Example,
            endVertexExample: Example,
            options?: ShortestPathOptions
        ): ShortestPath[];
        _distanceTo(
            startVertexExample: Example,
            endVertexExample: Example,
            options?: ShortestPathOptions
        ): Distance[];
        _absoluteEccentricity(
            vertexExample: Example,
            options?: EccentricityOptions
        ): Eccentricity;
        _eccentricity(
            vertexExample: Example,
            options?: EccentricityOptions
        ): Eccentricity;
        _absoluteCloseness(
            vertexExample: Example,
            options?: ClosenessOptions
        ): Closeness;
        _closeness(
            vertexExample: Example,
            options?: ClosenessOptions
        ): Closeness;
        _absoluteBetweenness(
            vertexExample: Example,
            options?: BetweennessOptions
        ): Betweenness;
        _betweenness(
            vertexExample: Example,
            options?: BetweennessOptions
        ): Betweenness;
        _radius(vertexExample: Example, options?: RadiusOptions): number;
        _diameter(vertexExample: Example, options?: DiameterOptions): number;
    }
    function _create(
        name: string,
        edgeDefinitions?: EdgeDefinition[],
        orphanCollections?: string[]
    ): Graph & {
        [key: string]: ArangoDB.Collection | undefined;
    };
    function _list(): string[];
    function _graph(
        name: string
    ): Graph & {
        [key: string]: ArangoDB.Collection | undefined;
    };
    function _drop(name: string, dropCollections?: boolean): boolean;
    function _relation(
        name: string,
        fromVertexCollections: string[] | string,
        toVertexCollections: string[] | string
    ): EdgeDefinition;
    function _edgeDefinitions(...relations: EdgeDefinition[]): EdgeDefinition[];
    function _extendEdgeDefinitions(
        edgeDefinitions: EdgeDefinition[],
        ...relations: EdgeDefinition[]
    ): EdgeDefinition[];
}

declare module "@arangodb/locals" {
    const context: Foxx.Context;
}

interface NodeModule {
    context: Foxx.Context;
}

declare namespace NodeJS {
    interface Module {
        context: Foxx.Context;
    }
}

interface Console {
    logLines(...args: any[]): void;
    errorLines(...args: any[]): void;
    warnLines(...args: any[]): void;
    infoLines(...args: any[]): void;
    debugLines(...args: any[]): void;
    errorStack(err: Error, msg?: string): void;
    warnStack(err: Error, msg?: string): void;
    infoStack(err: Error, msg?: string): void;
    debugStack(err: Error, msg?: string): void;
}
