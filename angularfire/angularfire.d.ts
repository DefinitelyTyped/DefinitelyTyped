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
	$push(data: any): angular.IPromise<Firebase>;
	$set(key: string, data: any): angular.IPromise<Firebase>;
	$set(data: any): angular.IPromise<Firebase>;
	$remove(key?: string): angular.IPromise<Firebase>;
	$update(key: string, data: Object): angular.IPromise<Firebase>;
	$update(data: any): angular.IPromise<Firebase>;
	$transaction(updateFn: (currentData: any) => any, applyLocally?: boolean): angular.IPromise<FirebaseDataSnapshot>;
	$transaction(key:string, updateFn: (currentData: any) => any, applyLocally?: boolean): angular.IPromise<FirebaseDataSnapshot>;
}

interface AngularFireObject extends AngularFireSimpleObject {
	$id: string;
	$priority: number;
	$value: any;
	$save(): angular.IPromise<Firebase>;
	$loaded(resolve?: (x: AngularFireObject) => angular.IHttpPromise<{}>, reject?: (err: any) => any): angular.IPromise<AngularFireObject>;
	$loaded(resolve?: (x: AngularFireObject) => angular.IPromise<{}>, reject?: (err: any) => any): angular.IPromise<AngularFireObject>;
	$loaded(resolve?: (x: AngularFireObject) => void, reject?: (err: any) => any): angular.IPromise<AngularFireObject>;
	$inst(): AngularFire;
	$bindTo(scope: angular.IScope, varName: string): angular.IPromise<any>;
	$watch(callback: Function, context?: any): Function;
	$destroy(): void;
}
interface AngularFireObjectService {
	$extendFactory(ChildClass: Object, methods?: Object): Object;
}

interface AngularFireArray extends Array<AngularFireSimpleObject> {
	$add(newData: any): angular.IPromise<Firebase>;
	$save(recordOrIndex: any): angular.IPromise<Firebase>;
	$remove(recordOrIndex: any): angular.IPromise<Firebase>;
	$getRecord(key: string): AngularFireSimpleObject;
	$keyAt(recordOrIndex: any): string;
	$indexFor(key: string): number;
	$loaded(resolve?: (x: AngularFireArray) => angular.IHttpPromise<{}>, reject?: (err: any) => any): angular.IPromise<AngularFireArray>;
	$loaded(resolve?: (x: AngularFireArray) => angular.IPromise<{}>, reject?: (err: any) => any): angular.IPromise<AngularFireArray>;
	$loaded(resolve?: (x: AngularFireArray) => void, reject?: (err: any) => any): angular.IPromise<AngularFireArray>;
	$inst(): AngularFire;
	$watch(cb: (event: string, key: string, prevChild: string) => void, context?: any): Function;
	$destroy(): void;
}
interface AngularFireArrayService {
	$extendFactory(ChildClass: Object, methods?: Object): Object;
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
	$getCurrentUser(): angular.IPromise<any>;
	$login(provider: string, options?: Object): angular.IPromise<any>;
	$logout(): void;
	$createUser(email: string, password: string): angular.IPromise<any>;
	$changePassword(email: string, oldPassword: string, newPassword: string): angular.IPromise<any>;
	$removeUser(email: string, password: string): angular.IPromise<any>;
	$sendPasswordResetEmail(email: string): angular.IPromise<any>;
}
