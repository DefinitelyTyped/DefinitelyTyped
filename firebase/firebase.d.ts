// Type definitions for Firebase API 2.0.2
// Project: https://www.firebase.com/docs/javascript/firebase
// Definitions by: Vincent Botone <https://github.com/vbortone/>, Shin1 Kashimura <https://github.com/in-async/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IFirebaseAuthResult {
	auth: any;
	expires: number;
}

interface IFirebaseDataSnapshot {
	/**
	 * Gets the JavaScript object representation of the DataSnapshot.
	 */
	val(): any;
	/**
	 * Gets a DataSnapshot for the location at the specified relative path.
	 */
	child(childPath: string): IFirebaseDataSnapshot;
	/**
	 * Enumerates through the DataSnapshot’s children (in the default order).
	 */
	forEach(childAction: (childSnapshot: IFirebaseDataSnapshot) => void): boolean;
	forEach(childAction: (childSnapshot: IFirebaseDataSnapshot) => boolean): boolean;
	/**
	 * Returns true if the specified child exists.
	 */
	hasChild(childPath: string): boolean;
	/**
	 * Returns true if the DataSnapshot has any children.
	 */
	hasChildren(): boolean;
	/**
	 * Gets the key name of the location that generated this DataSnapshot.
	 */
	key(): string;
	/**
	 * @deprecated Use key() instead.
	 * Gets the key name of the location that generated this DataSnapshot.
	 */
	name(): string;
	/**
	 * Gets the number of children for this DataSnapshot.
	 */
	numChildren(): number;
	/**
	 * Gets the Firebase reference for the location that generated this DataSnapshot.
	 */
	ref(): Firebase;
	/**
	 * Gets the priority of the data in this DataSnapshot.
	 * @returns {string, number, null} The priority, or null if no priority was set.
	 */
	getPriority(): any; // string or number
	/**
	 * Exports the entire contents of the DataSnapshot as a JavaScript object.
	 */
	exportVal(): Object;
}

interface IFirebaseOnDisconnect {
	/**
	 * Ensures the data at this location is set to the specified value when the client is disconnected 
	 * (due to closing the browser, navigating to a new page, or network issues).
	 */
	set(value: any, onComplete?: (error: any) => void): void;
	/**
	 * Ensures the data at this location is set to the specified value and priority when the client is disconnected 
	 * (due to closing the browser, navigating to a new page, or network issues).
	 */
	setWithPriority(value: any, priority: string, onComplete?: (error: any) => void): void;
	setWithPriority(value: any, priority: number, onComplete?: (error: any) => void): void;
	/**
	 * Writes the enumerated children at this Firebase location when the client is disconnected 
	 * (due to closing the browser, navigating to a new page, or network issues).
	 */
	update(value: Object, onComplete?: (error: any) => void): void;
	/**
	 * Ensures the data at this location is deleted when the client is disconnected 
	 * (due to closing the browser, navigating to a new page, or network issues).
	 */
	remove(onComplete?: (error: any) => void): void;
	/**
	 * Cancels all previously queued onDisconnect() set or update events for this location and all children.
	 */
	cancel(onComplete?: (error: any) => void): void;
}

declare class IFirebaseQuery {
	/**
	 * Listens for data changes at a particular location.
	 */
	on(eventType: string, callback: (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void, cancelCallback?: (error: any) => void, context?: Object): (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void;
	/**
	 * Detaches a callback previously attached with on().
	 */
	off(eventType?: string, callback?: (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void, context?: Object): void;
	/**
	 * Listens for exactly one event of the specified event type, and then stops listening.
	 */
	once(eventType: string, successCallback: (dataSnapshot: IFirebaseDataSnapshot) => void, context?: Object): void;
	once(eventType: string, successCallback: (dataSnapshot: IFirebaseDataSnapshot) => void, failureCallback?: (error: any) => void, context?: Object): void;
	/**
	 * Generates a new Query object ordered by the specified child key.
	 */
	orderByChild(key: string): IFirebaseQuery;
	/**
	 * Generates a new Query object ordered by key name.
	 */
	orderByKey(): IFirebaseQuery;
	/**
	 * Generates a new Query object ordered by priority.
	 */
	orderByPriority(): IFirebaseQuery;
	/**
	 * @deprecated Use limitToFirst() and limitToLast() instead.
	 * Generates a new Query object limited to the specified number of children.
	 */
	limit(limit: number): IFirebaseQuery;
	/**
	 * Creates a Query with the specified starting point. 
	 * The generated Query includes children which match the specified starting point.
	 */
	startAt(value: string, key?: string): IFirebaseQuery;
	startAt(value: number, key?: string): IFirebaseQuery;
	/**
	 * Creates a Query with the specified ending point. 
	 * The generated Query includes children which match the specified ending point.
	 */
	endAt(value: string, key?: string): IFirebaseQuery;
	endAt(value: number, key?: string): IFirebaseQuery;
	/**
	 * Creates a Query which includes children which match the specified value.
	 */
	equalTo(value: string, key?: string): IFirebaseQuery;
	equalTo(value: number, key?: string): IFirebaseQuery;
	/**
	 * Generates a new Query object limited to the first certain number of children.
	 */
	limitToFirst(limit: number): IFirebaseQuery;
	/**
	 * Generates a new Query object limited to the last certain number of children.
	 */
	limitToLast(limit: number): IFirebaseQuery;
	/**
	 * Gets a Firebase reference to the Query's location.
	 */
	ref(): Firebase;
}

declare class Firebase extends IFirebaseQuery {
	/**
	 * Constructs a new Firebase reference from a full Firebase URL.
	 */
	constructor(firebaseURL: string);
	/**
	 * @deprecated Use authWithCustomToken() instead.
	 * Authenticates a Firebase client using the provided authentication token or Firebase Secret.
	 */
	auth(authToken: string, onComplete?: (error: any, result: IFirebaseAuthResult) => void, onCancel?:(error: any) => void): void;
	/**
	 * Authenticates a Firebase client using an authentication token or Firebase Secret.
	 */
	authWithCustomToken(autoToken: string, onComplete: (error: any, authData: IFirebaseAuthData) => void, options?:Object): void;
	/**
	 * Authenticates a Firebase client using a new, temporary guest account.
	 */
	authAnonymously(onComplete: (error: any, authData: IFirebaseAuthData) => void, options?: Object): void;
	/**
	 * Authenticates a Firebase client using an email / password combination.
	 */
	authWithPassword(credentials: IFirebaseCredentials, onComplete: (error: any, authData: IFirebaseAuthData) => void, options?: Object): void;
	/**
	 * Authenticates a Firebase client using a popup-based OAuth flow.
	 */
	authWithOAuthPopup(provider: string, onComplete:(error: any, authData: IFirebaseAuthData) => void, options?: Object): void;
	/**
	 * Authenticates a Firebase client using a redirect-based OAuth flow.
	 */
	authWithOAuthRedirect(provider: string, onComplete: (error: any) => void, options?: Object): void;
	/**
	 * Authenticates a Firebase client using OAuth access tokens or credentials.
	 */
	authWithOAuthToken(provider: string, credentials: string, onComplete: (error: any, authData: IFirebaseAuthData) => void, options?: Object): void;
	authWithOAuthToken(provider: string, credentials: Object, onComplete: (error: any, authData: IFirebaseAuthData) => void, options?: Object): void;
	/**
	 * Synchronously access the current authentication state of the client.
	 */
	getAuth(): IFirebaseAuthData;
	/**
	 * Listen for changes to the client's authentication state.
	 */
	onAuth(onComplete: (authData: IFirebaseAuthData) => void, context?: Object): void;
	/**
	 * Detaches a callback previously attached with onAuth().
	 */
	offAuth(onComplete: (authData: IFirebaseAuthData) => void, context?: Object): void;
	/**
	 * Unauthenticates a Firebase client.
	 */
	unauth(): void;
	/**
	 * Gets a Firebase reference for the location at the specified relative path.
	 */
	child(childPath: string): Firebase;
	/**
	 * Gets a Firebase reference to the parent location.
	 */
	parent(): Firebase;
	/**
	 * Gets a Firebase reference to the root of the Firebase.
	 */
	root(): Firebase;
	/**
	 * Returns the last token in a Firebase location.
	 */
	key(): string;
	/**
	 * @deprecated Use key() instead.
	 * Returns the last token in a Firebase location.
	 */
	name(): string;
	/**
	 * Gets the absolute URL corresponding to this Firebase reference's location.
	 */
	toString(): string;
	/**
	 * Writes data to this Firebase location.
	 */
	set(value: any, onComplete?: (error: any) => void): void;
	/**
	 * Writes the enumerated children to this Firebase location.
	 */
	update(value: Object, onComplete?: (error: any) => void): void;
	/**
	 * Removes the data at this Firebase location.
	 */
	remove(onComplete?: (error: any) => void): void;
	/**
	 * Generates a new child location using a unique name and returns a Firebase reference to it.
	 * @returns {Firebase} A Firebase reference for the generated location.
	 */
	push(value?: any, onComplete?: (error: any) => void): Firebase;
	/**
	 * Writes data to this Firebase location. Like set() but also specifies the priority for that data.
	 */
	setWithPriority(value: any, priority: string, onComplete?: (error: any) => void): void;
	setWithPriority(value: any, priority: number, onComplete?: (error: any) => void): void;
	/**
	 * Sets a priority for the data at this Firebase location.
	 */
	setPriority(priority: string, onComplete?: (error: any) => void): void;
	setPriority(priority: number, onComplete?: (error: any) => void): void;
	/**
	 * Atomically modifies the data at this location.
	 */
	transaction(updateFunction: (currentData: any)=> any, onComplete?: (error: any, committed: boolean, snapshot: IFirebaseDataSnapshot) => void, applyLocally?: boolean): void;
	/**
	 * Creates a new user account using an email / password combination.
	 */
	createUser(credentials: IFirebaseCredentials, onComplete: (error: any) => void): void;
	/**
	 * Change the password of an existing user using an email / password combination.
	 */
	changePassword(credentials: { email: string; oldPassword: string; newPassword: string }, onComplete: (error: any) => void): void;
	/**
	 * Removes an existing user account using an email / password combination.
	 */
	removeUser(credentials: IFirebaseCredentials, onComplete: (error: any) => void): void;
	/**
	 * Sends a password-reset email to the owner of the account, containing a token that may be used to authenticate and change the user password.
	 */
	resetPassword(credentials: { email: string }, onComplete: (error: any) => void): void;
	onDisconnect(): IFirebaseOnDisconnect;
	/**
	 * Manually disconnects the Firebase client from the server and disables automatic reconnection.
	 */
	static goOffline(): void;
	/**
	 * Manually reestablishes a connection to the Firebase server and enables automatic reconnection.
	 */
	static goOnline(): void;

	static ServerValue: {
		/**
		 * A placeholder value for auto-populating the current timestamp 
		 * (time since the Unix epoch, in milliseconds) by the Firebase servers.
		 */
		TIMESTAMP: any;
	};
}

// Reference: https://www.firebase.com/docs/web/api/firebase/getauth.html
interface IFirebaseAuthData {
	uid: string;
	provider: string;
	token: string;
	expires: number;
	auth: Object;
}

interface IFirebaseCredentials {
	email: string;
	password: string;
}