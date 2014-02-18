// Type definitions for Firebase API
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
	constructor(firebaseURL: string);
	auth(authToken: string, onComplete?: (error: any, result: IFirebaseAuthResult) => void, onCancel?:(error: any) => void): void;
	unauth(): void;
	child(childPath: string): Firebase;
	parent(): Firebase;
	root(): Firebase;
	name(): string;
	toString(): string;
	set(value: any, onComplete?: (error: any) => void): void;
	update(value: any, onComplete?: (error: any) => void): void;
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
