// Type definitions for PouchDB 5.0.0
// Project: http://pouchdb.com
// Definitions by: Roland Greim <https://github.com/tigerxy/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../levelup/levelup.d.ts" />

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
	destroy(options?: Object, callback?: (error, result) => void): PouchDBPromise
	put(doc: PouchDBDoc, docId?: string, docRev?: string, options?: Object, callback?: (error, result) => void): PouchDBPromise
	put(doc: Object, docId: string, docRev?: string, options?: Object, callback?: (error, result) => void): PouchDBPromise
	post(doc: Object, options?: Object, callback?: (error, result) => void): PouchDBPromise
	get(docId: string, options?: Object, callback?: (error, result) => void): PouchDBPromise
	remove(doc: PouchDBDoc, options?: Object, callback?: (error, result) => void): PouchDBPromise
	remove(docId: string, docRev: string, options?: Object, callback?: (error, result) => void): PouchDBPromise
	bulkDocs(docs: Array<PouchDBDoc>, options?: Object, callback?: (error, result) => void): PouchDBPromise
	bulkDocs(docs: Array<Object>, options?: Object, callback?: (error, result) => void): PouchDBPromise
	allDocs(options?: Object, callback?: (error, result) => void): PouchDBPromise
	changes(options: PouchDBChangesOptsA): PouchDBChanges
	changes(options: PouchDBChangesOptsB): PouchDBChanges
	replicate: PouchDBReplicateFromTo
	putAttachment(docId: string, attachmentId: string, attachment: Blob, type: string, callback?: (error, result) => void): PouchDBPromise
	putAttachment(docId: string, attachmentId: string, rev: string, attachment: Blob, type: string, callback?: (error, result) => void): PouchDBPromise
	getAttachment(docId: string, attachmentId: string, options?: Object, callback?: (error, result) => void): PouchDBPromise
	removeAttachment(docId: string, attachmentId: string, rev: string, callback?: (error, result) => void): PouchDBPromise
	query(fun: Object, options?: Object, callback?: (error, result) => void): PouchDBPromise
	query(fun: string, options?: Object, callback?: (error, result) => void): PouchDBPromise
	query(fun: (doc: PouchDBDoc) => PouchDBDoc, options?: Object, callback?: (error, result) => void): PouchDBPromise
	viewCleanup(callback?: (error, result) => void): PouchDBPromise
	info(callback?: (error, result) => void): PouchDBPromise
	compact(options?: Object): PouchDBPromise
	sync(remoteDB: string, options?: Object): PouchDBSync
	revsDiff(diff: Object, callback?: (error, result) => void): PouchDBPromise
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
	on(handle: string, callback: (infoOrErr?: Object) => void)
}
interface PouchDBReplicateOptsA extends PouchDBFilteringOptionsA {
	live?: boolean
	retry?: boolean
}
interface PouchDBReplicateOptsB extends PouchDBFilteringOptionsB {
	live?: boolean
	retry?: boolean
}
interface PouchDBFilteringOptions {
	doc_ids?: string[]
	query_params?: Object
	view?: string
}
interface PouchDBFilteringOptionsA extends PouchDBFilteringOptions {
	filter?: string
}
interface PouchDBFilteringOptionsB extends PouchDBFilteringOptions {
	filter?: (doc: Object) => boolean
}
interface PouchDBReplicateFromTo {
	to(remoteDB: string, options?: PouchDBReplicateOptsA)
	from(remoteDB: string, options?: PouchDBReplicateOptsA)
	to(remoteDB: string, options?: PouchDBReplicateOptsB)
	from(remoteDB: string, options?: PouchDBReplicateOptsB)
}
interface PouchDBSync extends PouchDBPromise {
	on(handle: string, callback: (infoOrErr?: Object) => void)
	cancel()
}
interface PouchDBDebug {
	enable(module: string)
	disable()
}
interface PouchDBPromise {
	then(callback: (result: Object) => void): PouchDBPromise
	catch(callback: (err: Object) => void): PouchDBPromise
}

declare var PouchDB: PouchDBFactory