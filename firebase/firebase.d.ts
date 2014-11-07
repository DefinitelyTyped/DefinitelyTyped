// Type definitions for Firebase API 2.0.2
// Project: https://www.firebase.com/docs/javascript/firebase
// Definitions by: Vincent Botone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IFirebaseAuthResult {
	auth: any;
	expires: number;
}

interface IFirebaseDataSnapshot {
	val(): any;
	child(childPath: string): IFirebaseDataSnapshot;
	forEach(childAction: (childSnapshot: IFirebaseDataSnapshot) => boolean): boolean;
	hasChild(childPath: string): boolean;
	hasChildren(): boolean;
	name(): string;
	numChildren(): number;
	ref(): Firebase;
	getPriority(): any; // string or number
	exportVal(): Object;
}

interface IFirebaseOnDisconnect {
	set(value: any, onComplete?: (error: any) => void): void;
	setWithPriority(value: any, priority: string, onComplete?: (error: any) => void): void;
	setWithPriority(value: any, priority: number, onComplete?: (error: any) => void): void;
	update(value: any, onComplete?: (error: any) => void): void;
	remove(onComplete?: (error: any) => void): void;
	cancel(onComplete?: (error: any) => void): void;
}

interface IFirebaseQuery {
	on(eventType: string, callback: (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void, cancelCallback?: ()=> void, context?: Object): (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void;
	off(eventType?: string, callback?: (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void, context?: Object): void;
	once(eventType: string, successCallback: (dataSnapshot: IFirebaseDataSnapshot) => void, failureCallback?: () => void, context?: Object): void;
	limit(limit: number): IFirebaseQuery;
	startAt(priority?: string, name?: string): IFirebaseQuery;
	startAt(priority?: number, name?: string): IFirebaseQuery;
	endAt(priority?: string, name?: string): IFirebaseQuery;
	endAt(priority?: number, name?: string): IFirebaseQuery;
	ref(): Firebase;
}

declare class Firebase implements IFirebaseQuery {
    /**
     * Constructs a new Firebase reference from a full Firebase URL.
     */
	constructor(firebaseURL: string);
    /**
     * @deprecated Use authWithCustomToken() instead.
     * Authenticates a Firebase client using the provided authentication token or Firebase Secret.
     */
	auth(authToken: string, onComplete?: (error: any, result: IFirebaseAuthResult) => void, onCancel?: (error: any) => void): void;
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
     * 
     */
	remove(onComplete?: (error: any) => void): void;
	push(value: any, onComplete?: (error: any) => void): Firebase;
	setWithPriority(value: any, priority: string, onComplete?: (error: any) => void): void;
	setWithPriority(value: any, priority: number, onComplete?: (error: any) => void): void;
	setPriority(priority: string, onComplete?: (error: any) => void): void;
	setPriority(priority: number, onComplete?: (error: any) => void): void;
	transaction(updateFunction: (currentData: any)=> any, onComplete?: (error: any, committed: boolean, snapshot: IFirebaseDataSnapshot) => void, applyLocally?: boolean): void;
	onDisconnect(): IFirebaseOnDisconnect;
	on(eventType: string, callback: (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void, cancelCallback?: ()=> void, context?: Object): (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void;
	off(eventType?: string, callback?: (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void, context?: Object): void;
	once(eventType: string, successCallback: (dataSnapshot: IFirebaseDataSnapshot) => void, failureCallback?: () => void, context?: Object): void;
	limit(limit: number): IFirebaseQuery;
	startAt(priority?: string, name?: string): IFirebaseQuery;
	startAt(priority?: number, name?: string): IFirebaseQuery;
	endAt(priority?: string, name?: string): IFirebaseQuery;
	endAt(priority?: number, name?: string): IFirebaseQuery;
	ref(): Firebase;
	goOffline(): void;
	goOnline(): void;
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