// Type definitions for AngularFire 0.8.2
// Project: http://angularfire.com
// Definitions by: Dénes Harmath <http://github.com/thSoft>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts"/>
/// <reference path="../firebase/firebase.d.ts"/>

interface AngularFireService {
	(firebase: Firebase, config?: any): AngularFire;
}

interface AngularFire {
	$asArray(): AngularFireArray;
	$asObject(): AngularFireObject;
	$ref(): Firebase;
	$push(data: any): ng.IPromise<Firebase>;
	$set(key: string, data: any): ng.IPromise<Firebase>;
	$set(data: any): ng.IPromise<Firebase>;
	$remove(key?: string): ng.IPromise<Firebase>;
	$update(key: string, data: Object): ng.IPromise<Firebase>;
	$update(data: any): ng.IPromise<Firebase>;
	$transaction(updateFn: (currentData: any) => any, applyLocally?: boolean): ng.IPromise<FirebaseDataSnapshot>;
	$transaction(key:string, updateFn: (currentData: any) => any, applyLocally?: boolean): ng.IPromise<FirebaseDataSnapshot>;
}

interface AngularFireObject extends AngularFireSimpleObject {
	$id: string;
	$priority: number;
	$value: any;
	$remove(): ng.IPromise<Firebase>;
	$save(): ng.IPromise<Firebase>;
	$loaded(resolve?: (x: AngularFireObject) => ng.IHttpPromise<{}>, reject?: (err: any) => any): ng.IPromise<AngularFireObject>;
	$loaded(resolve?: (x: AngularFireObject) => ng.IPromise<{}>, reject?: (err: any) => any): ng.IPromise<AngularFireObject>;
	$loaded(resolve?: (x: AngularFireObject) => void, reject?: (err: any) => any): ng.IPromise<AngularFireObject>;
	$ref(): AngularFire;
	$bindTo(scope: ng.IScope, varName: string): ng.IPromise<any>;
	$watch(callback: Function, context?: any): Function;
	$destroy(): void;
}
interface AngularFireObjectService {
	(firebase: Firebase): AngularFireObject;
	$extend(ChildClass: Object, methods?: Object): Object;
}

interface AngularFireArray extends Array<AngularFireSimpleObject> {
	$add(newData: any): ng.IPromise<Firebase>;
	$save(recordOrIndex: any): ng.IPromise<Firebase>;
	$remove(recordOrIndex: any): ng.IPromise<Firebase>;
	$getRecord(key: string): AngularFireSimpleObject;
	$keyAt(recordOrIndex: any): string;
	$indexFor(key: string): number;
	$loaded(resolve?: (x: AngularFireArray) => ng.IHttpPromise<{}>, reject?: (err: any) => any): ng.IPromise<AngularFireArray>;
	$loaded(resolve?: (x: AngularFireArray) => ng.IPromise<{}>, reject?: (err: any) => any): ng.IPromise<AngularFireArray>;
	$loaded(resolve?: (x: AngularFireArray) => void, reject?: (err: any) => any): ng.IPromise<AngularFireArray>;
	$ref(): AngularFire;
	$watch(cb: (event: string, key: string, prevChild: string) => void, context?: any): Function;
	$destroy(): void;
}
interface AngularFireArrayService {
	(firebase: Firebase): AngularFireArray;
	$extend(ChildClass: Object, methods?: Object): Object;
}

interface AngularFireSimpleObject {
	$id: string;
	$priority: number;
	$value: any;
	[key: string]: any;
}


interface AngularFireAuthService {
	(firebase: Firebase): AngularFireAuth;
}

interface AngularFireAuth {
	$authWithCustomToken(authToken: string, options?: Object): ng.IPromise<any>;
	$authAnonymously(options?: Object): ng.IPromise<any>;
	$authWithPassword(credentials: FirebaseCredentials, options?: Object): ng.IPromise<any>;
	$authWithOAuthPopup(provider: string, options?: Object): ng.IPromise<any>;
	$authWithOAuthRedirect(provider: string, options?: Object): ng.IPromise<any>;
	$authWithOAuthToken(provider: string, credentials: Object|string, options?: Object): ng.IPromise<any>;
	$getAuth(): FirebaseAuthData;
	$onAuth(callback: Function, context?: any): Function;
	$unauth(): void;
	$waitForAuth(): ng.IPromise<any>;
	$requireAuth(): ng.IPromise<any>;
	$createUser(credentials: FirebaseCredentials): ng.IPromise<any>;
	$removeUser(credentials: FirebaseCredentials): ng.IPromise<any>;
	$changeEmail(credentials: FirebaseChangeEmailCredentials): ng.IPromise<any>;
	$changePassword(credentials: FirebaseChangePasswordCredentials): ng.IPromise<any>;
	$resetPassword(credentials: FirebaseResetPasswordCredentials): ng.IPromise<any>;
}
