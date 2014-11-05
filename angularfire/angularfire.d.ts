// Type definitions for AngularFire 0.8.2 and Firebase Simple Login 1.6.4
// Project: http://angularfire.com
// Definitions by: Dénes Harmath <http://github.com/thSoft>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts"/>
/// <reference path="../firebase/firebase.d.ts"/>

interface AngularFireService {
    (firebase: Firebase, config?:any): AngularFire;
}

interface AngularFire {
    $asArray(): AngularFireArray;
    $asObject(): AngularFireObject;
    $ref(): Firebase;
    $push(data: any): ng.IPromise<Firebase>;
    $set(key: string, data: any): ng.IPromise<Firebase>;
    $set(data: any): ng.IPromise<Firebase>;
    $remove(key?: string): ng.IPromise<Firebase>;
    $update(key: string, data: any): ng.IPromise<Firebase>;
    $update(data: any): ng.IPromise<Firebase>;
    $transaction(updateFn: (currentData: any) => any, applyLocally?: boolean): ng.IPromise<IFirebaseDataSnapshot>;
}

interface AngularFireObject {
    $id: string;
    $priority: number;
    $value: any;
    $save(): ng.IPromise<Firebase>;
    $loaded(): ng.IPromise<AngularFireObject>;
    $inst(): Firebase;
    $bindTo(scope: ng.IScope, varName: string): ng.IPromise<any>;
    $watch(callback: Function, context: any): Function;
    $destroy(): void;

    $extendFactory(ChildClass: Object, methods?: Object);
}

interface AngularFireArray extends Array<any> {
    $add(newData: any): ng.IPromise<Firebase>;
    $save(recordOrIndex: any): ng.IPromise<Firebase>;
    $remove(recordOrIndex: any): ng.IPromise<Firebase>;
    $getRecord(key: string): any;
    $keyAt(recordOrIndex: any): string;
    $indexFor(key: string): number;
    $loaded(): ng.IPromise<AngularFireArray>;
    $inst(): Firebase;
    $watch(cb: (event: string, key: string, prevChild: string) => void, context?: any): Function;
    $destroy(): void;

    $extendFactory(ChildClass:Object, methods?:Object);
}



interface AngularFireAuthService {
	(firebase: Firebase): AngularFireAuth;
}

interface AngularFireAuth {
	$getCurrentUser(): ng.IPromise<any>;
	$login(provider: string, options?: Object): ng.IPromise<any>;
	$logout(): void;
	$createUser(email: string, password: string): ng.IPromise<any>;
	$changePassword(email: string, oldPassword: string, newPassword: string): ng.IPromise<any>;
	$removeUser(email: string, password: string): ng.IPromise<any>;
	$sendPasswordResetEmail(email: string): ng.IPromise<any>;
}
