// Type definitions for PouchDB 5.0.0
// Project: http://pouchdb.com
// Definitions by: Roland Greim <https://github.com/tigerxy/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../levelup/levelup.d.ts" />

interface PouchDBFactory {
	new (name: string, options?: PouchDBOptions): PouchDB

	replicate(source: string, target: string, options?: PouchDBOptions): PouchDBSync
	sync(source: string, target: string, options?: PouchDBOptions): PouchDBSync
	on(event: string, callback: (dbName: string) => void)
	defaults(defaults: Object)
	plugin(plugin: Object)
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
	destroy(options?: Object, callback?: (error, result) => void)
	put(doc: PouchDBDoc, docId?: string, docRev?: string, options?: Object, callback?: (error, result) => void)
	put(doc: Object, docId: string, docRev?: string, options?: Object, callback?: (error, result) => void)
	post(doc: Object, options?: Object, callback?: (error, result) => void)
	get(docId: string, options?: Object, callback?: (error, result) => void)
	remove(doc: PouchDBDoc, options?: Object, callback?: (error, result) => void)
	remove(docId: string, docRev: string, options?: Object, callback?: (error, result) => void)
	bulkDocs(docs: Array<PouchDBDoc>, options?: Object, callback?: (error, result) => void)
	bulkDocs(docs: Array<Object>, options?: Object, callback?: (error, result) => void)
	allDocs(options?: Object, callback?: (error, result) => void)
	changes(options: PouchDBChangesOpts)
	replicate: PouchDBReplicateFromTo
	putAttachment(docId: string, attachmentId: string, attachment: Blob, type: string, callback?: (error, result) => void)
	putAttachment(docId: string, attachmentId: string, rev: string, attachment: Blob, type: string, callback?: (error, result) => void)
	getAttachment(docId: string, attachmentId: string, options?: Object, callback?: (error, result) => void)
	removeAttachment(docId: string, attachmentId: string, rev: string, callback?: (error, result) => void)
	query(fun: Object, options?: Object, callback?: (error, result) => void)
	query(fun: string, options?: Object, callback?: (error, result) => void)
	query(fun: (doc: PouchDBDoc) => PouchDBDoc, options?: Object, callback?: (error, result) => void)
	viewCleanup(callback?: (error, result) => void)
	info(callback?: (error, result) => void)
	compact(options?: Object)
	sync(remoteDB: string, options?: Object): PouchDBSync
	revsDiff(diff: Object, callback?: (error, result) => void)
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
interface PouchDBChangesOpts extends PouchDBFilteringOptions {
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
interface PouchDBReplicateOpts extends PouchDBFilteringOptions {
	live?: boolean
	retry?: boolean
}
interface PouchDBFilteringOptions {
	doc_ids?: string[]
	query_params?: Object
	view?: string
	filter?: string
}
interface PouchDBReplicateFromTo {
	to(remoteDB: string, options?: PouchDBReplicateOpts)
	from(remoteDB: string, options?: PouchDBReplicateOpts)
}
interface PouchDBSync {
	on(handle: string, callback: (infoOrErr?: Object) => void)
	cancel()
}
interface PouchDBDebug {
	enable(module: string)
	disable()
}

declare var PouchDB: PouchDBFactory