/// <reference types="node"/>
declare module "@domino/domino-db/acl-editor" {
	import { ACLEntryType } from "@domino/domino-db/types";
	class AclEditor {
		constructor(databaseName: string, client: any, metadata: any, secrets: any, accessToken?: string)
		addRole: (roles: string[]) => this;
		deleteRole: (roles: string[]) => this;
		upsertEntry: (entry: ACLEntryType) => this;
		deleteEntry: (aclEntryName: string) => this;
		apply: () => Promise<undefined>;
	}
}

declare module "@domino/domino-db/agent" {
	import { Database } from "@domino/domino-db/database";
	import { AgentOptions } from "@domino/domino-db/types";

	class Agent {
		private constructor(agentConfig: AgentOptions, database: Database, client: any, metadata: any, secrets: { idFilePassword: string });

		getDatabase(): Promise<Database>;

		getName(): string;

		run(options: {selection?: {search?: {query: string; queryArgs?: string[]; queryLimits?: {maxViewEntriesScanned: number; maxDocumentsScanned: number; maxMilliSeconds: number }};
			unids?: string[]}; context?: {unid: string}}): Promise<{}>;
	}
}

declare module "@domino/domino-db/agent-schema" {
	function validateAgentRunOptions(options?: any): void;
	function validateAgentConfig(config?: any): void;
}

declare module "@domino/domino-db/constants" {
	namespace errorCodes {
		const BAD_REQUEST: string;
		type BAD_REQUEST = string;
		const FORBIDDEN: string;
		type FORBIDDEN = string;
		const INTERNAL_ERROR: string;
		type INTERNAL_ERROR = string;
		const NOT_AUTHORIZED: string;
		type NOT_AUTHORIZED = string;
		const NOT_CONNECTED: string;
		type NOT_CONNECTED = string;
		const NOT_FOUND: string;
		type NOT_FOUND = string;
		const NOT_MODIFIED: string;
		type NOT_MODIFIED = string;
		const PRECONDITION_FAILED: string;
		type PRECONDITION_FAILED = string;
		const TIME_LIMIT_EXCEEDED: string;
		type TIME_LIMIT_EXCEEDED = string;
		const NOT_UNIQUE_SEARCH: string;
		type NOT_UNIQUE_SEARCH = string;
	}

	namespace onError {
		const CONTINUE: string;
		type CONTINUE = string;
		const ABORT_REMAINING: string;
		type ABORT_REMAINING = string;
	}

	namespace versions {
		const DOMINO_DB_VERSION: string;
		const PROTON_GENERATED_CODE_VERSION: string;
		export { DOMINO_DB_VERSION, PROTON_GENERATED_CODE_VERSION };
	}

	namespace exportDxlOptions {
		const EXPORT_ALL: number;
		type EXPORT_ALL = number;
		const EXPORT_DESIGN: number;
		type EXPORT_DESIGN = number;
	}

	namespace ACLEntryType {
		const UNSPECIFIED: symbol;
		type UNSPECIFIED = symbol;
		const PERSON: symbol;
		type PERSON = symbol;
		const SERVER: symbol;
		type SERVER = symbol;
		const MIXED_GROUP: symbol;
		type MIXED_GROUP = symbol;
		const PERSON_GROUP: symbol;
		type PERSON_GROUP = symbol;
		const SERVER_GROUP: symbol;
		type SERVER_GROUP = symbol;
	}

	namespace ACLEntryAccessLevel {
		const NO_ACCESS: symbol;
		type NO_ACCESS = symbol;
		const DEPOSITOR: symbol;
		type DEPOSITOR = symbol;
		const READER: symbol;
		type READER = symbol;
		const AUTHOR: symbol;
		type AUTHOR = symbol;
		const EDITOR: symbol;
		type EDITOR = symbol;
		const DESIGNER: symbol;
		type DESIGNER = symbol;
		const MANAGER: symbol;
		type MANAGER = symbol;
	}

	namespace ACLEntryPermission {
		const CREATE_DOCUMENTS: symbol;
		type CREATE_DOCUMENTS = symbol;
		const DELETE_DOCUMENTS: symbol;
		type DELETE_DOCUMENTS = symbol;
		const CREATE_PRIVATE_AGENTS: symbol;
		type CREATE_PRIVATE_AGENTS = symbol;
		const CREATE_PERSONAL_FOLDERS_VIEWS: symbol;
		type CREATE_PERSONAL_FOLDERS_VIEWS = symbol;
		const CREATE_SHARED_FOLDERS_VIEWS: symbol;
		type CREATE_SHARED_FOLDERS_VIEWS = symbol;
		const CREATE_LOTUSSCRIPT_JAVA_AGENTS: symbol;
		type CREATE_LOTUSSCRIPT_JAVA_AGENTS = symbol;
		const READ_PUBLIC_DOCUMENTS: symbol;
		type READ_PUBLIC_DOCUMENTS = symbol;
		const WRITE_PUBLIC_DOCUMENTS: symbol;
		type WRITE_PUBLIC_DOCUMENTS = symbol;
		const REPLICATE_OR_COPY_DOCUMENTS: symbol;
		type REPLICATE_OR_COPY_DOCUMENTS = symbol;
	}

	namespace FileSystemEntryType {
		const DATABASE: symbol;
		type DATABASE = symbol;
		const TEMPLATE: symbol;
		type TEMPLATE = symbol;
		const MAILBOX: symbol;
		type MAILBOX = symbol;
		const DIRECTORY: symbol;
		type DIRECTORY = symbol;
	}
}

declare module "@domino/domino-db/database" {
	import { EventEmitter } from "events";
	import { exportDxlOptions } from "@domino/domino-db/constants";
	import * as Stream from "stream";
	import { Server } from "@domino/domino-db/server";
	import { ACLEntryType, AclResponse } from "@domino/domino-db/types";
	import { AclEditor } from "@domino/domino-db/acl-editor";
	import { BulkResponse } from "@domino/domino-db";
	import { Document, BaseDocument } from "@domino/domino-db/document";
	import { DominoDbError } from "@domino/domino-db/domino-db-error";

	interface QueryArgs {
		queryArgs?: Array<{
			name: string
			value: any
		}>;
	}

	interface QueryLimits {
		queryLimits?: {
			maxViewEntriesScanned?: number
			maxDocumentsScanned?: number
			maxMilliSeconds?: number
		};
	}

	interface AccessTokenOption {
		accessToken?: string;
	}

	type onErrorOptions = "ON_ERROR_CONTINUE" | "ON_ERROR_ABORT_REMAINING";

	class CustomEventEmitter<Events> {
		on<U extends keyof Events & EventEmitter>(event: U, listener: Events[U]): void;
		once<U extends keyof Events>(event: U, listener: Events[U]): void;
		addListener<U extends keyof Events>(event: U, listener: Events[U]): this;
		removeListener<U extends keyof Events>(event: U, listener: Events[U]): this;
		off<U extends keyof Events>(event: U, listener: Events[U]): this;
		removeAllListeners(event?: keyof Events): this;
		setMaxListeners(n: number): this;
		getMaxListeners(): number;
		listeners(event: keyof Events): Array<() => void>;
		rawListeners(event: keyof Events): Array<() => void>;
		emit<U extends keyof Events>(event: U, ...args: Array<Events[U]>): boolean;
		listenerCount(type: keyof Events): number;
		prependListener<U extends keyof Events>(event: U, listener: Events[U]): this;
		prependOnceListener<U extends keyof Events>(event: U, listener: Events[U]): this;
		eventNames(): Array<keyof Events>;
	}

	interface TimeData {
		type: "datetime";
		data: string;
	}

	interface ComputeOptions {
		computeOptions?: {
			computeWithForm?: boolean
			ignoreComputeErrors?: boolean
		};
	}

	interface Database {
		/**
		 * Refer to https://doc.cwpcollaboration.com/appdevpack/docs/en/domino-db-advanced.html#writing-attachments
		 */
		bulkCreateAttachmentStream: (options?: AccessTokenOption) => Promise<CustomEventEmitter<{error: (e: Error) => void;
			response: (response: { attachments: Array<{ unid: string; fileName: string; fileSize: string; modified: TimeData }> }) => void}> & {
			file: (option: {unid: string; fileName: string}) => void
			write: (data: Uint8Array) => void
		}>;
		bulkCreateRichTextStream: (options?: AccessTokenOption) => Promise<CustomEventEmitter<{error: (e: Error) => void;
			response: (response: {unid: string; fieldName: string; error: DominoDbError}) => void; drain: () => void}> & {
			field: (options: {unid: string; fieldName: string; encrypt?: boolean}) => void
			write: (data: Buffer) => void
			end: () => void
		}>;
		bulkReadAttachmentStream: (options?: AccessTokenOption & QueryArgs & QueryLimits & {
			query: string
			fileNames?: string[]
			chunkSizeKb?: number
		}) => Promise<CustomEventEmitter<{file: (file: { unid: string; fileName: string; fileSize: number; modified: TimeData; error?: Error }) => void;
			data: (data: Uint8Array, buffer: Buffer) => void; eof: () => void; end: () => void; error: (e: DominoDbError) => void}>>;
		bulkReadAttachmentStreamByUnid: (options?: AccessTokenOption & {
			unids: string[]
			fileNames?: string[]
			chunkSizeKb?: number
		}) => Promise<CustomEventEmitter<{file: (file: { unid: string; fileName: string; fileSize: number; modified: TimeData; error?: Error }) => void;
			data: (data: Uint8Array, buffer: Buffer) => void; eof: () => void; end: () => void; error: (e: DominoDbError) => void}>>;
		bulkReadRichTextStream: (options?: AccessTokenOption & QueryArgs & QueryLimits & {
			query: string;
			fields: string[];
			chunkSizeKb?: number
		}) => Promise<CustomEventEmitter<{field: (field: {unid: string; fieldName: string; error?: DominoDbError}) => void; data: (data: Buffer) => void;
			eof: () => void; error: (e: Error) => void; end: () => void}> & {
			cancel(): void
		}>;
		bulkReadRichTextStreamByUnid: (options?: AccessTokenOption & {
			unids: string[];
			fields: string[];
			chunkSizeKb?: number;
		}) => Promise<CustomEventEmitter<{field: (field: {unid: string; fieldName: string; error?: DominoDbError}) => void; data: (data: Buffer) => void;
			eof: () => void; error: (e: Error) => void; end: () => void}> & {
			cancel(): void
		}>;
		exportDXL: (options?: AccessTokenOption & {exportOptions?: exportDxlOptions.EXPORT_ALL | exportDxlOptions.EXPORT_DESIGN}) => Promise<CustomEventEmitter<{stream: (xmlStream: Stream) => void;
			error_log: (errorLogStream: Stream) => void; error: (error: Error) => void; end: ()  => void}>>;
	}

	/**
	 * Basic type information about the database type
	 */
	class Database {
		createDocument: (options?: AccessTokenOption & ComputeOptions & {
			duplicateItems?: boolean
			document: Document
		}) => Promise<string>;
		useDocument: (options: {unid: string}) => Promise<Document>;
		useAgent: (name: string) => Promise<any>;
		bulkCreateDocuments: (options?: AccessTokenOption & ComputeOptions & {
			documents: Document[]
			onErrorOptions?: onErrorOptions
			duplicateItems?: boolean
		}) => Promise<BulkResponse>;
		bulkReadDocuments: (options?: AccessTokenOption & ComputeOptions & QueryArgs & QueryLimits & {
			query: string;
			itemNames?: string[];
			start?: number;
			count?: number;
			readAttachmentSummaries?: boolean;
			onErrorOptions?: onErrorOptions;
			canonicalFormat: boolean;
			duplicateItems: boolean;
		}) => Promise<BulkResponse>;
		bulkReadDocumentsByUnid: (options?: AccessTokenOption & ComputeOptions &{
			unids: string[]
			itemNames?: string[]
			readAttachmentSummaries?: boolean
			onErrorOptions?: "ON_ERROR_CONTINUE" | "ON_ERROR_ABORT_REMAINING"
			canonicalFormat?: boolean
			duplicateItems?: boolean
		}) => Promise<BulkResponse>;
		bulkDeleteDocuments: (options?: AccessTokenOption & QueryArgs & QueryLimits & {
			query: string;
			start: number;
			count: number;
			onErrorOptions?: onErrorOptions;
		}) => Promise<BulkResponse>;
		bulkDeleteDocumentsByUnid: (options?: AccessTokenOption & {
			unids: string[];
			onErrorOptions?: onErrorOptions;
		}) => Promise<BulkResponse>;
		bulkDeleteItems: (options?: AccessTokenOption & QueryArgs & QueryLimits & ComputeOptions & {
			query: string;
			itemNames: string[];
			start?: number;
			count?: number;
			onErrorOptions?: onErrorOptions;
		}) => Promise<BulkResponse>;
		bulkDeleteItemsByUnid: (options?: AccessTokenOption & ComputeOptions & {
			unids: string[];
			itemNames: string[];
			onErrorOptions?: onErrorOptions
		}) => Promise<BulkResponse>;
		bulkDeleteAttachments: (options?: AccessTokenOption & QueryArgs & QueryLimits & {
			query: string
			fileNames?: string[]
			start?: number
			count?: number
			onErrorOptions?: onErrorOptions
		}) => Promise<BulkResponse>;
		bulkDeleteAttachmentsByUnid: (options?: AccessTokenOption & {
			unids: string[]
			fileNames?: string[]
			onErrorOptions?: onErrorOptions
		}) => Promise<BulkResponse>;
		bulkReplaceItems: (options?: AccessTokenOption & ComputeOptions & QueryArgs & QueryLimits & {
			query: string
			replaceItems: any[]
			start?: number
			count?: number
			onErrorOptions?: onErrorOptions
			duplicateItems?: boolean
		}) => Promise<BulkResponse>;
		bulkReplaceItemsByUnid: (options?: AccessTokenOption & ComputeOptions & {
			replaceItemsByUnid: string[]
			replaceItems: any[]
			onErrorOptions?: onErrorOptions
			duplicateItems?: boolean
		}) => Promise<BulkResponse>;
		/**
		 * https://doc.cwpcollaboration.com/appdevpack/docs/en/domino-db-reference.html#bulkreplaceitemsbyunid
		 * Options unclear, please look at the documentation before using this
		 */
		bulkReplaceDocumentsByUnid: (options?: AccessTokenOption & ComputeOptions & {
			documents: BaseDocument[]
			onErrorOptions?: onErrorOptions
			duplicateItems?: boolean
		}) => Promise<BulkResponse>;
		getServer: () => Promise<Server>;
		getFilePath: () => Promise<string>;
		explainQuery: (options?: AccessTokenOption & QueryArgs & QueryLimits & {
			query: string
		}) => Promise<string>;
		upsertDocument: (options?: AccessTokenOption | QueryArgs | QueryLimits & ComputeOptions & {
			query: string;
			document: {
				"@attachments"?: Array<{
					fileName: string;
					fileSize: number;
					modified: TimeData
				}>;
				[index: string]: any;
			}
		}) => Promise<Document>;
		getACL: (options?: AccessTokenOption) => Promise<AclResponse>;
		editAcl: (options?: AccessTokenOption) => Promise<AclEditor>;
		/**
		 * https://doc.cwpcollaboration.com/appdevpack/docs/en/domino-db-reference.html#setacl
		 */
		setACL: (options?: AccessTokenOption & {
			entries: ACLEntryType[];
			roles?: string[];
		}) => Promise<undefined>;
	}
}

declare module "@domino/domino-db/document" {
	import { Database } from "@domino/domino-db/database";

	class BaseDocument {
		"@unid": string;
		[index: string]: any;
	}

	interface AccessTokenOption {
		accessToken?: string;
	}

	interface ComputeOptions {
		computeOptions?: {
			computeWithForm?: boolean
			ignoreComputeErrors?: boolean
		};
	}

	interface TimeData {
		type: "datetime";
		data: string;
	}

	/**
	 * Basic Type informations for the document type
	 */
	class Document extends BaseDocument {
		"@created": TimeData;
		"@modified": TimeData;
		"@attachments"?: Array<{
			fileName: string;
			fileSize: number;
			modified: TimeData
		}>;
		getDatabase: () => Promise<Database>;
		getUnid: () => string;
		read: (options?: AccessTokenOption & ComputeOptions & {
			itemNames: string[]
			readAttachmentSummaries?: boolean
			canonicalFormat?: boolean
			duplicateItems?: boolean
		}) => Promise<any>;
		readAttachmentStream: (options?: AccessTokenOption & {
			itemNames: string[]
			chunkSizeKb: number
		}) => Promise<any>;
		readRichTextStream: (options?: AccessTokenOption & {
			fields: string[]
			chunkSizeKb?: number
		}) => any;
		replaceItems: (options?: AccessTokenOption & ComputeOptions & {
			replaceItems: any
			duplicateItems?: boolean
		}) => Promise<undefined>;
		replace: (options?: AccessTokenOption & ComputeOptions & {
			document: Document
			duplicateItems?: boolean
		}) => Promise<undefined>;
		delete: (options?: {accessToken?: string}) => Promise<undefined>;
		deleteItems: (options?: AccessTokenOption & ComputeOptions & {
			itemNames: string[]
		}) => Promise<undefined>;
		deleteAttachments: (options?: AccessTokenOption & {
			fileNames: string[]
		}) => Promise<any[]>;
	}
}

declare module "@domino/domino-db/domino-db-error" {
	type DominoDBErrorCode = 'ERR_BAD_REQUEST' | 'ERR_FORBIDDEN' | 'ERR_INTERNAL_ERROR' | 'ERR_NOT_AUTHORIZED' | 'ERR_NOT_CONNECTED' | 'ERR_NOT_FOUND' | 'ERR_NOT_MODIFIED' | 'ERR_PRECONDITION_FAILED';

	class DominoDbError extends Error {
		name: "DominoDbError";
		code: DominoDBErrorCode;
	}
}

declare module "@domino/domino-db/errors" {
	const NAME_LOCAL_VALIDATION_FAILURE = 'Invalid or no "filePath" provided. "filePath" must be a string.';
	const UNID_LOCAL_VALIDATION = 'Invalid "unid" provided. "unid" must be a string.';
	const CONFIGURATION_VALIDATION_FAILURE = 'Invalid configuration object.';

	const HOST_NAME_LOCAL_VALIDATION_FAILURE = 'Invalid or no "hostName" provided. "hostName" must be a string.';
	const CONNECTION_LOCAL_VALIDATION_FAILURE = 'Invalid "connection" provided. "connection" must be an object.';
	const CREDENTIALS_LOCAL_VALIDATION_FAILURE = 'Credentials are required for a secure connection';
	const CLIENT_KEY_LOCAL_VALIDATION_FAILURE = 'clientKey is required for a secure connection';
	const CLIENT_CERT_LOCAL_VALIDATION_FAILURE = 'clientCertificate is required for a secure connection';
	const ID_FILE_PASSWORD_VALIDATION_FAILURE = 'idFilePassword must be a string';
	const CREATE_DATABASE_REQUEST_FAILED = 'createDatabase request failed.';
	const DELETE_DATABASE_REQUEST_FAILED = 'deleteDatabase request failed.';

	const COLLECTION_UNID_OR_NAME_REQUIRED = 'Either the view\'s "name" or "unid" must be specified.';
	const UNEXPECTED_STATUS_CODE = 'Unexpected status code: ';
	const RESPONSE_BODY_MALFORMED = 'Response body malformed: ';
	const UNEXPECTED_RESPONSE_CONTENT_TYPE = 'Unexpected content type in response: ';

	const GRPC_CLIENT_ERROR = 'gRPC client error';
	const BULK_NOTE_REQUEST_FAILED = 'bulkNote request failed';
	const BULK_NOTE_REQUEST_FAILED_WITH_CODE = 'bulkNote request failed with Proton code ';
	const BULK_ITEM_DELETE_NO_ITEMS = 'Delete item request requires a list of item names';
	const BULK_ITEM_REPLACE_NO_UNIDS = 'Replace item request requires a list of UNIDs';
	const BULK_OPERATION_NO_QUERY = 'Bulk operation requires a query string';
	const BULK_OPERATION_NO_UNIDS = 'Bulk operation requires a list of UNIDs';
	const BAD_QUERY_ARGS_TYPE = 'queryArgs must be an array';
	const BAD_QUERY_ARG_VALUE = 'Unknown query argument value type';
	const AGENT_RUN_REQUEST_FAILED_WITH_CODE = 'agent run request failed with Proton code ';

	const DOC_CONVERSION_UNKNOWN_ITEM_TYPE = 'Cannot convert document. Unknown item type: ';
	const DOC_CONVERSION_NUMBER_PAIR_LENGTH = 'Invalid length of number pair: ';
	const DOC_CONVERSION_DATETIME_PAIR_LENGTH = 'Invalid length of datetime pair: ';
	const DUPLICATE_ITEMS_BAD_FORMAT = 'All items must be in canonical format if duplicateItems: true is present.';

	const ENV_BROWSER_ERROR = 'Using domino-db in the browser is a security risk.';

	const RICH_TEXT_FIELDS_REQUIRED = 'Missing required array of fields';
	const RICH_TEXT_FIELD_REQUIRED = 'Missing fieldName property';
	const RICH_TEXT_UNID_REQUIRED = 'Missing unid property';
	const RICH_TEXT_CHUNK_SIZE_EVEN = 'Chunk size must be even';

	const INVALID_AGENT_RUN_OPTIONS = 'Invalid Agent Run options.';
	const AGENT_RUN_REQUEST_FAILED = 'Agent Run Request failed.';

	const EXPORT_DXL_OPTIONS_VALIDATION_FAILURE = 'Invalid exportDXL options.';
	const EXPORT_DXL_REQUEST_FAILED = 'exportDXL request failed.';
	const EXPORT_DXL_REQUEST_FAILED_WITH_CODE = 'exportDXL request failed with Proton code ';

	const GET_ACL_OPTIONS_VALIDATION_FAILURE = 'Invalid getACL options.';
	const GET_ACL_REQUEST_FAILED = 'getACL request failed.';
	const GET_ACL_REQUEST_FAILED_WITH_CODE = 'getACL request failed with Proton code ';

	const UPSERT_NOTE_REQUEST_FAILED = 'Upsert request failed';

	const NOT_AUTHORIZED = 'Not authorized to perform that operation';
	const FILE_SYSTEM_LIST_OPTIONS_VALIDATION_FAILURE = 'Invalid getFileSystemList options.';
	const FILE_SYSTEM_LIST_REQUEST_FAILED = 'getFileSystemList request failed.';
	const FILE_SYSTEM_LIST_REQUEST_FAILED_WITH_CODE = 'getFileSystemList request failed with Proton code ';

	const UNSUPPORTED_CHARACTERS_IN_ROLE_NAME = 'Role name contains unsupported characters.';
	const INVALID_ROLE_NAME = 'Invalid role name.';
	const INVALID_ACL_ENTRY_NAME = 'Invalid ACL entry name to remove.';
	const NO_MATCH_IN_DATABASE_ROLES = 'ACL Entry role should match with Database roles.';
	const NO_DEFAULT_ACL_ENTRY = '"aclEntryList" must have "-Default-" entry';
	const UNSUPPORTED_PERMISSION = 'ACL permission not supported';

	const UNID_LOCAL_VALIDATION_FAILURE = 'Invalid "unid" provided. "unid" must be a string.';
}

declare module "@domino/domino-db/server" {
	import { FileSystemListResponse, ServerConfig } from "@domino/domino-db/types";
	import { Database } from "@domino/domino-db/database";

	class Server {
		constructor(options: ServerConfig);

		useDatabase: (options: {filePath: string}) => Promise<Database>;
		createDatabase: (options: {
			filePath: string
			title: string
			template?: string
		}) => Promise<undefined>;
		deleteDatabase: (options: {
			filePath: string
		}) => Promise<undefined>;
		getFileSystemList: (options: {
			dirPath: string
		}) => Promise<FileSystemListResponse>;
		getHostName: () => Promise<string>;
		getConnection: () => Promise<{port: number; secure: boolean}>;

		static useServer(configuration: ServerConfig): Server;
	}
}

declare module "@domino/domino-db/types" {
	import * as Buffer from "buffer";
	import { ACLEntryPermission, ACLEntryAccessLevel, ACLEntryType as ACLEntr } from "@domino/domino-db/constants";

	interface DominoDBConnection {
		secure: boolean;
		port: number;
	}

	interface DominoDBCredentials {
		clientCertificate: Buffer;
		clientKey: Buffer;
		idFilePassword?: string;
	}

	interface ServerConfig {
		hostName: string;
		connection: DominoDBConnection;
		credentials: DominoDBCredentials;
	}

	interface DatabaseConfig {
		filePath: string;
	}

	interface DocumentOptions {
		/**
		 * Required if unid is not specified.
		 */
		name?: string;
		/**
		 * Required if name is not specified.
		 */
		unid?: string;
	}

	interface AgentOptions {
		name: string;
	}

	interface AclResponse {
		aclEntryList: AclEntry[];
		roleList: string[];
	}

	type ACLEntryType = ACLEntr.UNSPECIFIED
		| ACLEntr.PERSON | ACLEntr.SERVER | ACLEntr.MIXED_GROUP | ACLEntr.PERSON_GROUP | ACLEntr.SERVER_GROUP;

	type ACLAccessLevel = ACLEntryAccessLevel.NO_ACCESS | ACLEntryAccessLevel.DEPOSITOR | ACLEntryAccessLevel.READER
		| ACLEntryAccessLevel.AUTHOR | ACLEntryAccessLevel.EDITOR | ACLEntryAccessLevel.DESIGNER | ACLEntryAccessLevel.MANAGER;

	type ACLRoleList = (ACLEntryPermission.CREATE_DOCUMENTS | ACLEntryPermission.DELETE_DOCUMENTS | ACLEntryPermission.CREATE_PRIVATE_AGENTS
		| ACLEntryPermission.CREATE_PERSONAL_FOLDERS_VIEWS | ACLEntryPermission.CREATE_SHARED_FOLDERS_VIEWS | ACLEntryPermission.CREATE_LOTUSSCRIPT_JAVA_AGENTS
		| ACLEntryPermission.READ_PUBLIC_DOCUMENTS | ACLEntryPermission.WRITE_PUBLIC_DOCUMENTS | ACLEntryPermission.REPLICATE_OR_COPY_DOCUMENTS);

	type FileSystemEntryType = "DATABASE" | "TEMPLATE" | "MAILBOX" | "DIRECTORY";

	interface AclEntry {
		name: string;
		permissions: symbol[];
		type: ACLEntryType;
		accessLevel: ACLAccessLevel;
		roleList: ACLRoleList[];
	}

	interface GetFileSystemListOptions {
		dirPath: string;
		accessToken?: string;
	}

	interface FileSystemListResponse {
		entries: FileSystemEntry[];
	}

	interface FileSystemEntry {
		path: string;
		title: string;
		type: FileSystemEntryType;
		size: number;
		createdDate: string;
		modifiedDate: string;
	}

	interface SetAclOptions {
		roles: string[];
		entries: AclEntry[];
		accessToken?: string;
	}
}

declare module '@domino/domino-db' {
	import { Server } from "@domino/domino-db/server";
	import { Document } from "@domino/domino-db/document";

	interface TimeData {
		type: "datetime";
		data: string;
	}

	interface AccessTokenOption {
		accessToken?: string;
	}

	interface ComputeOptions {
		computeOptions?: {
			computeWithForm?: boolean
			ignoreComputeErrors?: boolean
		};
	}

	export class BulkResponse {
		documents: Document[];
		documentRange?: {
			start: number
			count: number
			total: number
		};
		errors: number;
	}

	interface Configuartion {
		serverConfig: {
			hostName: string,
			connection: {
				port: number,
				secure: boolean
			},
			credentials: {
				rootCertificate: Buffer
				clientCertificate: Buffer
				clientKey: Buffer
				idFilePassword?: string
			}
		};
	}

	function useServer(configuration: Configuartion): Promise<Readonly<Server>>;

	export * from "@domino/domino-db/constants";
}
