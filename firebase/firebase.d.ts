// Type definitions for Firebase API 2.0.2
// Project: https://www.firebase.com/docs/javascript/firebase
// Definitions by: Vincent Botone <https://github.com/vbortone/>, Shin1 Kashimura <https://github.com/in-async/>, Sebastien Dubois <https://github.com/dsebastien/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface FirebaseAuthResult {
	auth: any;
	expires: number;
}

interface FirebaseDataSnapshot {
	/**
	 * Returns true if this DataSnapshot contains any data.
	 * It is slightly more efficient than using snapshot.val() !== null.
	 */
	exists(): boolean;
	/**
	 * Gets the JavaScript object representation of the DataSnapshot.
	 */
	val(): any;
	/**
	 * Gets a DataSnapshot for the location at the specified relative path.
	 */
	child(childPath: string): FirebaseDataSnapshot;
	/**
	 * Enumerates through the DataSnapshot’s children (in the default order).
	 */
	forEach(childAction: (childSnapshot: FirebaseDataSnapshot) => void): boolean;
	forEach(childAction: (childSnapshot: FirebaseDataSnapshot) => boolean): boolean;
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

interface FirebaseOnDisconnect {
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

interface FirebaseQuery {
	/**
	 * Listens for data changes at a particular location.
	 */
	on(eventType: string, callback: (dataSnapshot: FirebaseDataSnapshot, prevChildName?: string) => void, cancelCallback?: (error: any) => void, context?: Object): (dataSnapshot: FirebaseDataSnapshot, prevChildName?: string) => void;
	/**
	 * Detaches a callback previously attached with on().
	 */
	off(eventType?: string, callback?: (dataSnapshot: FirebaseDataSnapshot, prevChildName?: string) => void, context?: Object): void;
	/**
	 * Listens for exactly one event of the specified event type, and then stops listening.
	 */
	once(eventType: string, successCallback: (dataSnapshot: FirebaseDataSnapshot) => void, context?: Object): void;
	once(eventType: string, successCallback: (dataSnapshot: FirebaseDataSnapshot) => void, failureCallback?: (error: any) => void, context?: Object): void;
	/**
	 * Generates a new Query object ordered by the specified child key.
	 */
	orderByChild(key: string): FirebaseQuery;
	/**
	 * Generates a new Query object ordered by key name.
	 */
	orderByKey(): FirebaseQuery;
	/**
	 * Generates a new Query object ordered by child values.
	 */
	orderByValue(): FirebaseQuery;
	/**
	 * Generates a new Query object ordered by priority.
	 */
	orderByPriority(): FirebaseQuery;
	/**
	 * @deprecated Use limitToFirst() and limitToLast() instead.
	 * Generates a new Query object limited to the specified number of children.
	 */
	limit(limit: number): FirebaseQuery;
	/**
	 * Creates a Query with the specified starting point.
	 * The generated Query includes children which match the specified starting point.
	 */
	startAt(value: string, key?: string): FirebaseQuery;
	startAt(value: number, key?: string): FirebaseQuery;
	/**
	 * Creates a Query with the specified ending point.
	 * The generated Query includes children which match the specified ending point.
	 */
	endAt(value: string, key?: string): FirebaseQuery;
	endAt(value: number, key?: string): FirebaseQuery;
	/**
	 * Creates a Query which includes children which match the specified value.
	 */
	equalTo(value: string, key?: string): FirebaseQuery;
	equalTo(value: number, key?: string): FirebaseQuery;
	equalTo(value: boolean, key?: string): FirebaseQuery;
	/**
	 * Generates a new Query object limited to the first certain number of children.
	 */
	limitToFirst(limit: number): FirebaseQuery;
	/**
	 * Generates a new Query object limited to the last certain number of children.
	 */
	limitToLast(limit: number): FirebaseQuery;
	/**
	 * Gets a Firebase reference to the Query's location.
	 */
	ref(): Firebase;
}

interface Firebase extends FirebaseQuery {
	/**
	 * @deprecated Use authWithCustomToken() instead.
	 * Authenticates a Firebase client using the provided authentication token or Firebase Secret.
	 */
	auth(authToken: string, onComplete?: (error: any, result: FirebaseAuthResult) => void, onCancel?:(error: any) => void): void;
	/**
	 * Authenticates a Firebase client using an authentication token or Firebase Secret.
	 */
	authWithCustomToken(autoToken: string, onComplete: (error: any, authData: FirebaseAuthData) => void, options?:Object): void;
	/**
	 * Authenticates a Firebase client using a new, temporary guest account.
	 */
	authAnonymously(onComplete: (error: any, authData: FirebaseAuthData) => void, options?: Object): void;
	/**
	 * Authenticates a Firebase client using an email / password combination.
	 */
	authWithPassword(credentials: FirebaseCredentials, onComplete: (error: any, authData: FirebaseAuthData) => void, options?: Object): void;
	/**
	 * Authenticates a Firebase client using a popup-based OAuth flow.
	 */
	authWithOAuthPopup(provider: string, onComplete:(error: any, authData: FirebaseAuthData) => void, options?: Object): void;
	/**
	 * Authenticates a Firebase client using a redirect-based OAuth flow.
	 */
	authWithOAuthRedirect(provider: string, onComplete: (error: any) => void, options?: Object): void;
	/**
	 * Authenticates a Firebase client using OAuth access tokens or credentials.
	 */
	authWithOAuthToken(provider: string, credentials: string, onComplete: (error: any, authData: FirebaseAuthData) => void, options?: Object): void;
	authWithOAuthToken(provider: string, credentials: Object, onComplete: (error: any, authData: FirebaseAuthData) => void, options?: Object): void;
	/**
	 * Synchronously access the current authentication state of the client.
	 */
	getAuth(): FirebaseAuthData;
	/**
	 * Listen for changes to the client's authentication state.
	 */
	onAuth(onComplete: (authData: FirebaseAuthData) => void, context?: Object): void;
	/**
	 * Detaches a callback previously attached with onAuth().
	 */
	offAuth(onComplete: (authData: FirebaseAuthData) => void, context?: Object): void;
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
	transaction(updateFunction: (currentData: any)=> any, onComplete?: (error: any, committed: boolean, snapshot: FirebaseDataSnapshot) => void, applyLocally?: boolean): void;
	/**
	 * Creates a new user account using an email / password combination.
	 */
	createUser(credentials: FirebaseCredentials, onComplete: (error: any, userData: any) => void): void;
	/**
	 * Updates the email associated with an email / password user account.
	 */
	changeEmail(credentials: FirebaseChangeEmailCredentials, onComplete: (error: any) => void): void;
	/**
	 * Change the password of an existing user using an email / password combination.
	 */
	changePassword(credentials: FirebaseChangePasswordCredentials, onComplete: (error: any) => void): void;
	/**
	 * Removes an existing user account using an email / password combination.
	 */
	removeUser(credentials: FirebaseCredentials, onComplete: (error: any) => void): void;
	/**
	 * Sends a password-reset email to the owner of the account, containing a token that may be used to authenticate and change the user password.
	 */
	resetPassword(credentials: FirebaseResetPasswordCredentials, onComplete: (error: any) => void): void;
	onDisconnect(): FirebaseOnDisconnect;
}
interface FirebaseStatic {
	/**
	 * Constructs a new Firebase reference from a full Firebase URL.
	 */
	new (firebaseURL: string): Firebase;
	/**
	 * Manually disconnects the Firebase client from the server and disables automatic reconnection.
	 */
	goOffline(): void;
	/**
	 * Manually reestablishes a connection to the Firebase server and enables automatic reconnection.
	 */
	goOnline(): void;

	ServerValue: {
		/**
		 * A placeholder value for auto-populating the current timestamp
		 * (time since the Unix epoch, in milliseconds) by the Firebase servers.
		 */
		TIMESTAMP: any;
	};
}
declare var Firebase: FirebaseStatic;

declare module 'firebase' {
	export = Firebase;
}

// Reference: https://www.firebase.com/docs/web/api/firebase/getauth.html
interface FirebaseAuthData {
	uid: string;
	provider: string;
	token: string;
	expires: number;
	auth: Object;
	google?: FirebaseAuthDataGoogle;
}

interface FirebaseAuthDataGoogle {
	accessToken: string;
	cachedUserProfile: FirebaseAuthDataGoogleCachedUserProfile;
	displayName: string;
	email?: string;
	id: string;
	profileImageURL: string;
}

interface FirebaseAuthDataGoogleCachedUserProfile {
	"family name"?: string;
	gender?: string;
	"given name"?: string;
	id?: string;
	link?: string;
	locale?: string;
	name?: string;
	picture?: string;
}

interface FirebaseCredentials {
	email: string;
	password: string;
}

interface FirebaseChangePasswordCredentials {
	email: string;
	oldPassword: string;
	newPassword: string;
}

interface FirebaseChangeEmailCredentials {
	oldEmail: string;
	newEmail: string;
	password: string;
}

interface FirebaseResetPasswordCredentials {
	email: string;
}
