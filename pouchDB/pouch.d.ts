// Type definitions for Pouch 0.1
// Project: http://pouchdb.com
// Definitions by: Bill Sears <https://github.com/MrBigDog2U/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../bluebird/bluebird.d.ts" />

interface PouchError {
	status: number;
	error: string;
	reason: string;
}

interface PouchApi {
	type(): string;
	id(): string;
	close(callback: () => void): void;

	info(callback: (err: PouchError, res: PouchInfoResponse) => void): void;
	info(): Promise<any>;

	get(id: string, opts: PouchGetOptions, callback: (err: PouchError, res: PouchGetResponse) => void): void;
	get(id: string, callback: (err: PouchError, res: PouchGetResponse) => void): void;
	get(id: string): Promise<any>;

	allDocs(opts: PouchAllDocsOptions, callback: (err: PouchError, res: PouchAllDocsResponse) => void): void;
	allDocs(opts: PouchAllDocsOptions): Promise<any>;
	allDocs(callback: (err: PouchError, res: PouchAllDocsResponse) => void): void;

	bulkDocs(req: PouchBulkDocsRequest, opts: PouchUpdateOptions, callback: (err: PouchError, res: PouchUpdateResponse[]) => void): void;
	bulkDocs(req: PouchBulkDocsRequest, callback: (err: PouchError, res: PouchUpdateResponse[]) => void): void;

	bulkDocs(req: PouchBulkDocsRequest, opts: PouchUpdateOptions): Promise<any>;
	bulkDocs(req: PouchBulkDocsRequest): Promise<any>;

	post(doc: any, opts: PouchUpdateOptions, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
	post(doc: any, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;

	put(doc: any, opts: PouchUpdateOptions, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
	put(doc: any, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
	put(doc: any, opts?: PouchUpdateOptions): Promise<{ok: boolean; id: string; rev: string}>;
	put(doc: {}): Promise<{ok: boolean; id: string; rev: string}>;

	remove(doc: any, opts: PouchUpdateOptions, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
	remove(doc: any, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
	remove(doc: {}, opts?: PouchUpdateOptions) : Promise<{}>;
	remove(docId: string, docRev: string,  opts: PouchUpdateOptions): Promise<{}>;

	query(fun: string, opts: PouchQueryOptions): Promise<any>;
	query(fun: string): Promise<any>;
	query(fun: PouchFilter, opts: PouchQueryOptions): Promise<any>;
	query(fun: PouchFilter): Promise<any>;

	changes(opts: PouchChangesOptions): PouchCancellable;
	changes(opts: PouchChangesOptions, callback: (err: PouchError, res: PouchChanges) => void): PouchCancellable;
	changes(callback: (err: PouchError, res: PouchChanges) => void): PouchCancellable;


	revsDiff(req: any, opts: PouchRevsDiffOptions, callback: (missing: any) => void): void;
	revsDiff(req: any, callback: (missing: any) => void): void;
	replicate: PouchReplicate;

	getAttachment(id: string, opts: PouchAttachmentOptions, callback: (err: PouchError, res: any) => void): void;
	getAttachment(id: string, callback: (err: PouchError, res: any) => void): void;
	putAttachment(id: string, rev: string, doc: any, type: string, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
	removeAttachment(id: string, rev: string, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;

	upsert(doc:String, callback: (existingDoc?: {}) => {}): Promise<any>;
}

interface PouchInfoResponse {
	db_name: string;
	doc_count: number;
	update_seq: string;
}

interface PouchGetOptions {
	rev?: string;
	revs?: boolean;
	revs_info?: boolean;
	conflicts?: boolean;
	attachments?: boolean;
}

interface PouchGetResponse {
	_id: string;
	_rev: string;
	_attachments: any;
}

interface PouchAllDocsOptions {
	startkey?: string;
	endKey?: string;
	descending?: boolean;
	include_docs?: boolean;
	conflicts?: boolean;
}

interface PouchAllDocsItem {
	id: string;
	key: string;
	value: any;
	doc: any;
}

interface PouchAllDocsResponse {
	total_rows: number;
	rows: PouchAllDocsItem[];
}

interface PouchBulkDocsRequest {
	docs: any[];
}

interface PouchUpdateOptions {
	new_edits?: boolean;
}

interface PouchUpdateResponse {
	ok: boolean;
	id: string;
	rev: string;
}

interface PouchFilter {
	map: (doc: any) => void;
	reduce?: (key: string, value: any) => any;
}

interface PouchQueryOptions {
	fun?:{map:Function, reduce:Function} | Function | string;
	reduce?:Function | string;
	complete?: any;
	include_docs?: boolean;
	conflicts?: boolean; //DEPENDS ON include_docs === true
	attachments?:boolean; //DEPENDS ON include_docs === true
	binary?: boolean; //DEPENDS ON attachments === true
	inclusive_end: boolean;
	limit: number;
	skip: number;
	descending?: boolean;
	starkey?: any;
	endkey?: any;
	key?: any; //DO NOT INCLUDE START/END KEYS IF USING THIS
	keys: [any]; //DO NOT INCLUDE START/END KEYS IF USING THIS
	group: boolean;
	group_level: number;
	stale?: string;
	error?: (err: PouchError) => void;


}

interface PouchQueryResponse {
	rows: any[];
}

interface PouchAttachmentOptions {
	decode?: boolean;
}

interface PouchCancellable {
	cancel: () => void;
}

interface PouchChangesOptions {
	since?: number|string;
	descending?: boolean;
	filter?: PouchFilter;
	continuous?: boolean;
	include_docs?: boolean;
	conflicts?: boolean;
	live?:boolean;
	returnDocs?:boolean;
}

interface PouchChange {
	changes: any;
	doc: PouchGetResponse;
	id: string;
	seq: number;
}

interface PouchChanges {
	results: PouchChange[];
}

interface PouchRevsDiffOptions {
}

interface PouchReplicateOptions {
	live?:boolean;
	retry?:boolean;
	doc_ids?:string[];
	filter?: string|PouchFilter;
	since?:number|string;
	batch_size?:number;
	batches_limit?:number;
}

interface PouchReplicateResponse {
	ok: boolean;
	start_time: Date;
	end_time: Date;
	docs_read: number;
	docs_written: number;
}

interface PouchReplicate {
	from(url: string|PouchDB, opts: PouchReplicateOptions): Promise<any>;
	from(url: string, opts: PouchReplicateOptions, callback: (err: PouchError, res: PouchReplicateResponse) => void): PouchCancellable;
	from(url: string, callback: (err: PouchError, res: PouchReplicateResponse) => void): PouchCancellable;
	to(url: string|PouchDB, opts: PouchReplicateOptions): Promise<any>;
	to(dbName: string, opts: PouchReplicateOptions, callback: (err: PouchError, res: PouchReplicateResponse) => void): PouchCancellable;
	to(dbName: string, callback: (err: PouchError, res: PouchReplicateResponse) => void): PouchCancellable;
}

interface PouchOptions {
	name?: string;
	adapter?: string;
}

interface PouchDB extends PouchApi {
	new (name: string, opts: PouchOptions, callback: (err: PouchError, res: PouchDB) => void): PouchDB;
	new (name: string, callback: (err: PouchError, res: PouchDB) => void): PouchDB;
	new (name: string, opts?: PouchOptions): PouchDB;

	destroy(name: string, callback: (err: PouchError) => void): void;
	destroy(name: string): Promise<{ok:boolean}>;

	setMaxListeners(setNumber: number):void;
	debug(shouldDebug:boolean):void;
}

declare var PouchDB: PouchDB;

// Support AMD require
declare module 'pouchdb' {
	export = PouchDB;
}

//
// emit is the function that the PouchFilter.map function should call in order to add a particular item to
// a filter view.
//
declare function emit(key: any, value: any);
