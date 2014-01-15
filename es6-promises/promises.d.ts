interface Thenable<R> {
	then<U>(onFulfill: (value: R) => Thenable<U>,  onReject?: (error: any) => void): Thenable<U>;
    then<U>(onFulfill: (value: R) => U,  onReject?: (error: any) => void): Thenable<U>;
	then<U>(onFulfill: (value: R) => Thenable<U>,  onReject?: (error: any) => Thenable<U>): Thenable<U>;
    then<U>(onFulfill: (value: R) => Thenable<U>, onReject?: (error: any) => U): Thenable<U>;
    then<U>(onFulfill: (value: R) => U, onReject?: (error: any) => Thenable<U>): Thenable<U>;
    then<U>(onFulfill: (value: R) => U, onReject?: (error: any) => U): Thenable<U>;
}

declare class Promise<R> implements Thenable<R> {
	constructor(callback: (resolve : (result: R) => void, reject: (error: any) => void) => void);
	constructor(callback: (resolve : (result: Thenable<R>) => void, reject: (error: any) => void) => void);
	
    then<U>(onFulfill: (value: R) => Thenable<U>,  onReject?: (error: any) => void): Promise<U>;
    then<U>(onFulfill: (value: R) => U,  onReject?: (error: any) => void): Promise<U>;
	then<U>(onFulfill: (value: R) => Thenable<U>,  onReject?: (error: any) => Thenable<U>): Promise<U>;
    then<U>(onFulfill: (value: R) => Thenable<U>, onReject?: (error: any) => U): Promise<U>;
    then<U>(onFulfill: (value: R) => U, onReject?: (error: any) => Thenable<U>): Promise<U>;
    then<U>(onFulfill: (value: R) => U, onReject?: (error: any) => U): Promise<U>;
	
	catch<U>(onReject?: (error: any) => Thenable<U>): Promise<U>
	catch<U>(onReject?: (error: any) => U): Promise<U>
}

declare module Promise {
	
	
	function cast<R>(promise: Promise<R>): Promise<R>;
	function cast<R>(object: R): Promise<R>;
	
	function resolve<R>(thenable: Thenable<R>): Promise<R>;
	function resolve<R>(object: R): Promise<R>;
	
	function reject(error: any): Promise<any>;
	
	function all<R>(promises: Promise<R>[]): Promise<R[]>;
	
	function race<R>(promises: Promise<R>[]): Promise<R>;
}