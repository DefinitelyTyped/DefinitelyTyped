// Type definitions for PouchDB 5.0.0
// Project: http://pouchdb.com
// Definitions by: Bill Sears <https://github.com/MrBigDog2U/>, Roland Greim <https://github.com/tigerxy/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../levelup/levelup.d.ts" />

declare module PouchDB {
	interface PouchDBFactory {
		new (name: string, options?: PouchDBOptions): PouchDB
	
		replicate(source: string, target: string, options?: PouchDBOptions): PouchDBSync
		sync(source: string, target: string, options?: PouchDBOptions): PouchDBSync
		on(event: string, callback: (dbName: string) => void): PouchDBPromise
		defaults(defaults: Object): void
		plugin(plugin: Object): void
		debug: PouchDBDebug
	}
	interface PouchDBOptions extends levelupOptions {
		auto_compaction?: boolean
		adapter?: string
		ajax?: PouchDBAjax
		auth?: PouchDBAuth
		live?: boolean
		retry?: boolean
	}
	interface PouchDBAjax {
		cache?: boolean
		timeout?: number
		headers?: Object
	}
	interface PouchDBAuth {
		username: string
		password: string
	}
	interface PouchDB {
		destroy(options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		put(doc: PouchDBDoc, docId?: string, docRev?: string, options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		put(doc: Object, docId?: string, docRev?: string, options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		post(doc: Object, options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		get(docId: string, options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		remove(doc: PouchDBDoc, options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		remove(doc: Object, options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		remove(docId: string, docRev: string, options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		bulkDocs(docs: Array<PouchDBDoc>, options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		bulkDocs(docs: Array<Object>, options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		allDocs(options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		changes(options: PouchDBChangesOptsA): PouchDBChanges
		changes(options: PouchDBChangesOptsB): PouchDBChanges
		replicate: PouchDBReplicateFromTo
		putAttachment(docId: string, attachmentId: string, attachment: Blob, type: string, callback?: (error: Object, result: Object) => void): PouchDBPromise
		putAttachment(docId: string, attachmentId: string, rev: string, attachment: Blob, type: string, callback?: (error: Object, result: Object) => void): PouchDBPromise
		getAttachment(docId: string, attachmentId: string, options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		removeAttachment(docId: string, attachmentId: string, rev: string, callback?: (error: Object, result: Object) => void): PouchDBPromise
		query(fun: Object, options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		query(fun: string, options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		query(fun: (doc: PouchDBDoc) => PouchDBDoc, options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		query(fun: (doc: Object) => Object, options?: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
		viewCleanup(callback?: (error: Object, result: Object) => void): PouchDBPromise
		info(callback?: (error: Object, result: Object) => void): PouchDBPromise
		compact(options?: Object): PouchDBPromise
		sync(remoteDB: string, options?: Object): PouchDBSync
		revsDiff(diff: Object, callback?: (error: Object, result: Object) => void): PouchDBPromise
	}
	interface PouchDBDoc {
		_id: string
		_rev?: string
	}
	interface PouchDBAllDocsOpts {
		include_docs?: boolean
		conflicts?: boolean
		attachments?: boolean
		binary?: boolean
		limit?: number
		descending?: boolean
		startkey?: string
		endkey?: string
		inclusive_end?: boolean
		key?: string
		keys?: Array<string>
	}
	interface PouchDBChangesOpts {
		include_docs?: boolean
		conflicts?: boolean
		attachments?: boolean
		binary?: boolean
		limit?: number
		descending?: boolean
		live?: boolean
		since?: any
		timeout?: number
		heartbeat?: number
	}
	interface PouchDBChangesOptsA extends PouchDBChangesOpts, PouchDBFilteringOptionsA { }
	interface PouchDBChangesOptsB extends PouchDBChangesOpts, PouchDBFilteringOptionsB { }
	interface PouchDBChanges extends PouchDBPromise {
		on(handle: string, callback: (infoOrErr?: Object) => void): PouchDBChanges
		cancel(): void
	}
	interface PouchDBReplicateOptsA extends PouchDBFilteringOptionsA {}
	interface PouchDBReplicateOptsB extends PouchDBFilteringOptionsB {}
	interface PouchDBFilteringOptions {
		doc_ids?: string[]
		query_params?: Object
		view?: string
		live?: boolean
		retry?: boolean
		back_off_function?: (delay: number) => number
	}
	interface PouchDBFilteringOptionsA extends PouchDBFilteringOptions {
		filter?: string
	}
	interface PouchDBFilteringOptionsB extends PouchDBFilteringOptions {
		filter?: (doc: Object) => boolean
	}
	interface PouchDBReplicateFromTo {
		to(remoteDB: string, options?: PouchDBReplicateOptsA): PouchDBPromise
		from(remoteDB: string, options?: PouchDBReplicateOptsA): PouchDBPromise
		to(remoteDB: string, options?: PouchDBReplicateOptsB): PouchDBPromise
		from(remoteDB: string, options?: PouchDBReplicateOptsB): PouchDBPromise
	}
	interface PouchDBSync extends PouchDBPromise {
		on(handle: string, callback: (infoOrErr?: Object) => void): PouchDBSync
		cancel(): void
	}
	interface PouchDBDebug {
		enable(module: string): void
		disable(): void
	}
	interface PouchDBPromise {
		then(callback: (result: Object) => void): PouchDBPromise
		catch(callback: (err: Object) => void): PouchDBPromise
	}
}

declare var PouchDB: PouchDB.PouchDBFactory

declare module "PouchDB" {
	export = PouchDB;
}
