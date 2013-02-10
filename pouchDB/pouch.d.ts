// Type definitions for Pouch 0.1
// Project: http://pouchdb.com
// Definitions by: Bill Sears <https://github.com/MrBigDog2U/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface PouchError {
	status: number;
	error: string;
	reason: string;
}

interface PouchApi {
	type(): string;
	id(): string;
	close(callback: () => void): void;
}

interface PouchInfoResponse {
	db_name: string;
	doc_count: number;
	update_seq: string;
}

interface PouchApi {
	info(callback: (err: PouchError, res: PouchInfoResponse) => void): void;
}

interface PouchGetOptions {
	rev?: string;
	revs?: bool;
	revs_info?: bool;
	conflicts?: bool;
	attachments?: bool;
}

interface PouchGetResponse {
	_id: string;
	_rev: string;
	_attachments: any;
}

interface PouchAllDocsOptions {
	startkey?: string;
	endKey?: string;
	descending?: bool;
	include_docs?: bool;
	conflicts?: bool;
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

interface PouchApi {
	//
	// get == select by id
	//
	get(id: string, opts: PouchGetOptions, callback: (err: PouchError, res: PouchGetResponse) => void): void;
	get(id: string, callback: (err: PouchError, res: PouchGetResponse) => void): void;
	allDocs(opts: PouchAllDocsOptions, callback: (err: PouchError, res: PouchAllDocsResponse) => void): void;
	allDocs(callback: (err: PouchError, res: PouchAllDocsResponse) => void): void;
}

interface PouchBulkDocsRequest {
	docs: any[];
}

interface PouchUpdateOptions {
	new_edits?: bool;
}

interface PouchUpdateResponse {
	ok: bool;
	id: string;
	rev: string;
}

interface PouchApi {
	bulkDocs(req: PouchBulkDocsRequest, opts: PouchUpdateOptions, callback: (err: PouchError, res: PouchUpdateResponse[]) => void): void;
	bulkDocs(req: PouchBulkDocsRequest, callback: (err: PouchError, res: PouchUpdateResponse[]) => void): void;
	//
	// post == insert (doc does not contain an _id)
	//
	post(doc: any, opts: PouchUpdateOptions, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
	post(doc: any, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
	//
	// put == update (doc DOES contain an _id)
	//
	put(doc: any, opts: PouchUpdateOptions, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
	put(doc: any, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
	//
	// remove == delete
	//
	remove(doc: any, opts: PouchUpdateOptions, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
	remove(doc: any, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
}

interface PouchFilter {
	map: (doc: any) => void;
	reduce?: (key: string, value: any) => any;
}

interface PouchQueryOptions {
	complete?: any;
	include_docs?: bool;
	error?: (err: PouchError) => void;
	descending?: bool;
	reduce?: bool;
}

interface PouchQueryResponse {
	rows: any[];
}

interface PouchApi {
	//
	// query == select by other criteria
	//
	query(fun: string, opts: PouchQueryOptions, callback: (err: PouchError, res: PouchQueryResponse) => void): void;
	query(fun: string, callback: (err: PouchError, res: PouchQueryResponse) => void): void;
	query(fun: PouchFilter, opts: PouchQueryOptions, callback: (err: PouchError, res: PouchQueryResponse) => void): void;
	query(fun: PouchFilter, callback: (err: PouchError, res: PouchQueryResponse) => void): void;
}

interface PouchAttachmentOptions {
	decode?: bool;
}

interface PouchApi {
	getAttachment(id: string, opts: PouchAttachmentOptions, callback: (err: PouchError, res: any) => void): void;
	getAttachment(id: string, callback: (err: PouchError, res: any) => void): void;
	putAttachment(id: string, rev: string, doc: any, type: string, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
	removeAttachment(id: string, rev: string, callback: (err: PouchError, res: PouchUpdateResponse) => void): void;
}

interface PouchCancellable {
	cancel: () => void;
}

interface PouchChangesOptions {
	onChange: (change: PouchChange) => void;
	complete?: (err: PouchError, res: PouchChanges) => void;
	seq?: number;
	since?: number;
	descending?: bool;
	filter?: PouchFilter;
	continuous?: bool;
	include_docs?: bool;
	conflicts?: bool;
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

interface PouchApi {
	changes(opts: PouchChangesOptions, callback: (err: PouchError, res: PouchChanges) => void): PouchCancellable;
	changes(callback: (err: PouchError, res: PouchChanges) => void): PouchCancellable;
}

interface PouchRevsDiffOptions {
}

interface PouchReplicateOptions {
	continuous?: bool;
	onChange?: (any) => void;
	filter?: any;			// Can be either string or PouchFilter
	complete?: (err: PouchError, res: PouchChanges) => void;
}

interface PouchReplicateResponse {
	ok: bool;
	start_time: Date;
	end_time: Date;
	docs_read: number;
	docs_written: number;
}

interface PouchReplicate {
	from(url: string, opts: PouchReplicateOptions, callback: (err: PouchError, res: PouchReplicateResponse) => void): PouchCancellable;
	from(url: string, callback: (err: PouchError, res: PouchReplicateResponse) => void): PouchCancellable;
	to(dbName: string, opts: PouchReplicateOptions, callback: (err: PouchError, res: PouchReplicateResponse) => void): PouchCancellable;
	to(dbName: string, callback: (err: PouchError, res: PouchReplicateResponse) => void): PouchCancellable;
}

interface PouchApi {
	revsDiff(req: any, opts: PouchRevsDiffOptions, callback: (missing: any) => void): void;
	revsDiff(req: any, callback: (missing: any) => void): void;
	replicate: PouchReplicate;
}

interface PouchOptions {
	name?: string;
	adapter?: string;
}

interface Pouch extends PouchApi {
	(name: string, opts: PouchOptions, callback: (err: PouchError, res: Pouch) => void ): Pouch;
	(name: string, callback: (err: PouchError, res: Pouch) => void ): Pouch;
	destroy(name: string, callback: (err: PouchError) => void): void;
}

var Pouch: Pouch;
//
// emit is the function that the PouchFilter.map function should call in order to add a particular item to
// a filter view.
//
declare function emit(key: any, value: any);
