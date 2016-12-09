interface CloudApp {
	init(serverUrl? :string, applicationId? :string, applicationKey? :string, opts? :any):void
	onConnect(functionToFire :any):void
	onDisconnect(functionToFire :any):void
	connect():void
	disconnect():void
}
interface CloudNotification {
	on(channelName:any, callback?:any, done?:any)
	off(channelName:any, done?:any)
	publish(channelName:any, data?:any, done?:any)
}
interface CloudPush {
	send(data:any,query?:any,callback?:any)
	enableWebNotifications(callback?:any)
	disableWebNotifications(callback?:any)
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
		addColumn(column :any)
		getColumn(columnName :any)
		updateColumn(column :any)
		deleteColumn(column :any)
		delete(callback? :any)
		save(callback? :any)
		static getAll(callback? :any)
		static get(table :any, callback? :any)
		columns:any
		name:any
		id:any
	}
	export class ACL {
		constructor()
		setPublicWriteAccess(value? :any)
		setPublicReadAccess(value? :any)
		setUserWriteAccess(userId :any, value? :any)
		setUserReadAccess(userId :any, value? :any)
		setRoleWriteAccess(roleId :any, value? :any)
		setRoleReadAccess(roleId :any, value? :any)
	}
	export class CloudCache {
		constructor(cacheName :string)
		set(key:any, value?:any, callback?:any)
		deleteItem(key:any, callback?:any)
		create(callback?:any)
		get(key:any, callback?:any)
		getInfo(callback?:any)
		getItemsCount(callback?:any)
		getAll(callback?:any)
		clear(callback?:any)
		delete(callback?:any)
		static getAll(callback? :any)
		static deleteAll(callback? :any)
		name:any
		size:any
		items:any
	}
	export class CloudObject {
		constructor(tableName:string, id?:any)
		set(columnName:any, data:any)
		relate(columnName:any, objectTableName:any, objectId?:any)
		get(columnName:any)
		unset(columnName:any)
		save(callback?:any)
		fetch(callback?:any)
		delete(callback?:any)
		static on(tableName:any, eventType?:any, cloudQuery?:any, callback?:any, done?:any)
		static off(tableName:any, eventType?:any, done?:any)
		static saveAll(array?:any,callback?:any)
		static deleteAll(array?:any,callback?:any)
		ACL:any
		id:any
		createdAt:any
		updatedAt:any
		expires:any
	}
	export class CloudFile extends CloudObject {
		constructor(file:any,data?:any,type?:any)
		save(callback?:any)
		delete(callback?:any)
		getFileContent(callback?:any)
		type:any
		url:any
		size:any
		name:any
	}
	export class CloudGeoPoint {
		constructor(longitude?:any , latitude?:any)
		get(name:any)
		set(name:any,value:any)
		distanceInKMs(point:any)
		distanceInMiles(point:any)
		distanceInRadians(point:any)
		latitude:any
		longitude:any
	}
	export class CloudQuery {
		constructor(tableName:string)
		search (search?:any, language?:any, caseSensitive?:any, diacriticSensitive?:any)
		equalTo (columnName?:any, data?:any)
		includeList (columnName:any)
		include (columnName:any)
		all (columnName:any)
		any (columnName:any)
		first (columnName:any)
		notEqualTo (columnName?:any, data?:any)
		greaterThan (columnName?:any, data?:any)
		greaterThanEqualTo (columnName?:any, data?:any)
		lessThan (columnName?:any, data?:any)
		lessThanEqualTo (columnName?:any, data?:any)
		orderByAsc (columnName:any)
		orderByDesc (columnName:any)
		setLimit (data?:any)
		setSkip (data?:any)
		paginate (pageNo?:any,totalItemsInPage?:any,callback?:any)
		selectColumn (columnNames?:any)
		doNotSelectColumn (columnNames?:any)
		containedIn (columnName?:any, data?:any)
		notContainedIn (columnName?:any, data?:any)
		exists (columnName:any)
		doesNotExists (columnName:any)
		containsAll (columnName:any, data?:any)
		startsWith (columnName:any, data?:any)
		regex (columnName:any, value?:any, isCaseInsensitive?:any)
		substring (columnName:any, value?:any, isCaseInsensitive?:any)
		near (columnName:any, geoPoint?:any, maxDistance?:any, minDistance?:any)
		geoWithin (columnName:any, geoPoint?:any, radius?:any)
		count (callback?:any)
		find (callback?:any)
		findOne (callback?:any)
		distinct (keys?:any, callback?:any)
		get (keys?:any, callback?:any)
		findById (keys?:any, callback?:any)
		static or(obj1:any, obj2:any)
	}
	export class CloudQueue {
		constructor(queueName:any,queueType?:any)
		addMessage(queueMessage:any, callback?:any)
		updateMessage(queueMessage:any, callback?:any)
		getMessage(count?:any,callback?:any)
		create(callback?:any)
		get(callback?:any)
		getAllMessages(callback?:any)
		getMessageById(id:any, callback?:any)
		addSubscriber(url:any,callback?:any)
		removeSubscriber(url:any,callback?:any)
		peekMessage(count?:any, callback?:any)
		delete(callback?:any)
		clear(callback?:any)
		update(callback?:any)
		refreshMessageTimeout(id?:any,timeout?:any ,callback?:any)
		deleteMessage(id:any, callback?:any)
		static getAll(callback?:any)
		static get(queueName?:any, callback?:any)
		static delete(queueName?:any, callback?:any)
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
		changePassword(oldPassword:any, newPassword:any, callback?:any)
		addToRole(role:any, callback?:any)
		removeFromRole(role:any, callback?:any)
		isInRole(role?:any)
		logOut(callback?:any)
		logIn(callback?:any)
		signUp(callback?:any)
		static getCurrentUser(callback?:any)
		static resetPassword(email:any,callback?:any)
		static authenticateWithProvider(dataJson?:any, callback?:any)
		username:any
		password:any
		email:any
	}
}

export = cloudboost
