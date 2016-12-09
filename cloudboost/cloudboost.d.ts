// Type definitions for cloudboost sdk
// Project: https://cloudboost.io/
// Definitions by: Shubham Aggarwal <https://github.com/shubhamqweasd/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface CloudApp {
	init(serverUrl? :string, applicationId? :string, applicationKey? :string, opts? :any):any
	onConnect(functionToFire :any):any
	onDisconnect(functionToFire :any):any
	connect():any
	disconnect():any
}
interface CloudNotification {
	on(channelName:any, callback?:any, done?:any):any
	off(channelName:any, done?:any):any
	publish(channelName:any, data?:any, done?:any):any
}
interface CloudPush {
	send(data:any,query?:any,callback?:any):any
	enableWebNotifications(callback?:any):any
	disableWebNotifications(callback?:any):any
}

declare module cloudboost {
	export var CloudApp:CloudApp
	export var CloudNotification:CloudNotification
	export var CloudPush:CloudPush
	export class Column {
		constructor(columnName? :string, dataType? :string, required? :boolean, unique? :boolean)
		name:string
		dataType:any
		unique:any
		relatedTo:any
		required:any
		editableByMasterKey:any
		isSearchable:any
	}
	export class CloudTable {
		constructor(tableName :string)
		addColumn(column :any):any
		getColumn(columnName :any):any
		updateColumn(column :any):any
		deleteColumn(column :any):any
		delete(callback? :any):any
		save(callback? :any):any
		static getAll(callback? :any):any
		static get(table :any, callback? :any):any
		columns:any
		name:any
		id:any
	}
	export class ACL {
		constructor()
		setPublicWriteAccess(value? :any):any
		setPublicReadAccess(value? :any):any
		setUserWriteAccess(userId :any, value? :any):any
		setUserReadAccess(userId :any, value? :any):any
		setRoleWriteAccess(roleId :any, value? :any):any
		setRoleReadAccess(roleId :any, value? :any):any
	}
	export class CloudCache {
		constructor(cacheName :string)
		set(key:any, value?:any, callback?:any):any
		deleteItem(key:any, callback?:any):any
		create(callback?:any):any
		get(key:any, callback?:any):any
		getInfo(callback?:any):any
		getItemsCount(callback?:any):any
		getAll(callback?:any):any
		clear(callback?:any):any
		delete(callback?:any):any
		static getAll(callback? :any):any
		static deleteAll(callback? :any):any
		name:any
		size:any
		items:any
	}
	export class CloudObject {
		constructor(tableName:string, id?:any)
		set(columnName:any, data:any):any
		relate(columnName:any, objectTableName:any, objectId?:any):any
		get(columnName:any):any
		unset(columnName:any):any
		save(callback?:any):any
		fetch(callback?:any):any
		delete(callback?:any):any
		static on(tableName:any, eventType?:any, cloudQuery?:any, callback?:any, done?:any):any
		static off(tableName:any, eventType?:any, done?:any):any
		static saveAll(array?:any,callback?:any):any
		static deleteAll(array?:any,callback?:any):any
		ACL:any
		id:any
		createdAt:any
		updatedAt:any
		expires:any
	}
	export class CloudFile extends CloudObject {
		constructor(file:any,data?:any,type?:any)
		save(callback?:any):any
		delete(callback?:any):any
		getFileContent(callback?:any):any
		type:any
		url:any
		size:any
		name:any
	}
	export class CloudGeoPoint {
		constructor(longitude?:any , latitude?:any)
		get(name:any):any
		set(name:any,value:any):any
		distanceInKMs(point:any):any
		distanceInMiles(point:any):any
		distanceInRadians(point:any):any
		latitude:any
		longitude:any
	}
	export class CloudQuery {
		constructor(tableName:string)
		search (search?:any, language?:any, caseSensitive?:any, diacriticSensitive?:any):any
		equalTo (columnName?:any, data?:any):any
		includeList (columnName:any):any
		include (columnName:any):any
		all (columnName:any):any
		any (columnName:any):any
		first (columnName:any):any
		notEqualTo (columnName?:any, data?:any):any
		greaterThan (columnName?:any, data?:any):any
		greaterThanEqualTo (columnName?:any, data?:any):any
		lessThan (columnName?:any, data?:any):any
		lessThanEqualTo (columnName?:any, data?:any):any
		orderByAsc (columnName:any):any
		orderByDesc (columnName:any):any
		setLimit (data?:any):any
		setSkip (data?:any):any
		paginate (pageNo?:any,totalItemsInPage?:any,callback?:any):any
		selectColumn (columnNames?:any):any
		doNotSelectColumn (columnNames?:any):any
		containedIn (columnName?:any, data?:any):any
		notContainedIn (columnName?:any, data?:any):any
		exists (columnName:any):any
		doesNotExists (columnName:any):any
		containsAll (columnName:any, data?:any):any
		startsWith (columnName:any, data?:any):any
		regex (columnName:any, value?:any, isCaseInsensitive?:any):any
		substring (columnName:any, value?:any, isCaseInsensitive?:any):any
		near (columnName:any, geoPoint?:any, maxDistance?:any, minDistance?:any):any
		geoWithin (columnName:any, geoPoint?:any, radius?:any):any
		count (callback?:any):any
		find (callback?:any):any
		findOne (callback?:any):any
		distinct (keys?:any, callback?:any):any
		get (keys?:any, callback?:any):any
		findById (keys?:any, callback?:any):any
		static or(obj1:any, obj2:any):any
	}
	export class CloudQueue {
		constructor(queueName:any,queueType?:any)
		addMessage(queueMessage:any, callback?:any):any
		updateMessage(queueMessage:any, callback?:any):any
		getMessage(count?:any,callback?:any):any
		create(callback?:any):any
		get(callback?:any):any
		getAllMessages(callback?:any):any
		getMessageById(id:any, callback?:any):any
		addSubscriber(url:any,callback?:any):any
		removeSubscriber(url:any,callback?:any):any
		peekMessage(count?:any, callback?:any):any
		delete(callback?:any):any
		clear(callback?:any):any
		update(callback?:any):any
		refreshMessageTimeout(id?:any,timeout?:any ,callback?:any):any
		deleteMessage(id:any, callback?:any):any
		static getAll(callback?:any):any
		static get(queueName?:any, callback?:any):any
		static delete(queueName?:any, callback?:any):any
		retry:any
		size:any
		name:any
		subscribers:any
		type:any
		ACL:any
		id:any
		createdAt:any
		updatedAt:any
		expires:any
	}
	export class QueueMessage {
		constructor(data?:any)
		message:any
		ACL:any
		id:any
		createdAt:any
		updatedAt:any
		expires:any
		timeout:any
		delay:any
	}
	export class CloudRole extends CloudObject {
		constructor(roleName:any)
		name:any
	}
	export class CloudUser extends CloudObject {
		constructor()
		changePassword(oldPassword:any, newPassword:any, callback?:any):any
		addToRole(role:any, callback?:any):any
		removeFromRole(role:any, callback?:any):any
		isInRole(role?:any):any
		logOut(callback?:any):any
		logIn(callback?:any):any
		signUp(callback?:any):any
		static getCurrentUser(callback?:any):any
		static resetPassword(email:any,callback?:any):any
		static authenticateWithProvider(dataJson?:any, callback?:any):any
		username:any
		password:any
		email:any
	}
}

export = cloudboost
