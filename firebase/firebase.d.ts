// Type definitions for Firebase API
// Project: https://www.firebase.com/docs/javascript/firebase/index.html
// Definitions by: Vincent Botone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IFirebaseAuthResult {
	auth: any;
	expires: number;
}

interface IFirebaseDataSnapshot {
	val(): any;
	child(): IFirebaseDataSnapshot;
	forEach(childAction: (childSnapshot: IFirebaseDataSnapshot) => bool): bool;
	hasChild(childPath: string): bool;
	hasChildren(): bool;
	name(): string;
	numChildren(): number;
	ref(): Firebase;
	getPriority(): string;
	getPriority(): number;
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

class Firebase implements IFirebaseQuery {
	constructor(firebaseURL: string);
	auth(authToken: string, onComplete?: (error: string, result: IFirebaseAuthResult) => void, onCancel?:(error: string) => void): void;
	unauth(): void;
	child(childPath: string): Firebase;
	parent(): Firebase;
	root(): Firebase;
	name(): string;
	toString(): string;
	set(value: any, onComplete?: (error: any) => void): void;
	update(value: any, onComplete?: (error: any) => void): void;
	remove(onComplete?: (error: any) => void);
	push(value: any, onComplete?: (error: any) => void): Firebase;
	setWithPriority(value: any, priority: string, onComplete?: (error: any) => void): void;
	setWithPriority(value: any, priority: number, onComplete?: (error: any) => void): void;
	setPriority(priority: string, onComplete?: (error: any) => void): void;
	setPriority(priority: number, onComplete?: (error: any) => void): void;
	transaction(updateFunction: (currentData: any)=> any, onComplete?: (error: any, committed: bool, snapshot: IFirebaseDataSnapshot) => void, applyLocally?: bool): void;
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
}