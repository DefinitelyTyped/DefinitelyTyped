// Type definitions for AngularFire 0.6.0
// Project: http://angularfire.com
// Definitions by: Dénes Harmath <http://github.com/thSoft>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts"/>
/// <reference path="../firebase/firebase.d.ts"/>

interface AngularFireService {
	(firebase: Firebase): AngularFire;
}

interface AngularFire {
	$add(value: any): void;
	$remove(key?: string): void;
	$save(key?: string): void;
	$child(key: string): AngularFire;
	$set(value: any): void;
	$getIndex(): string[];
	$on(eventType: string, callback: (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void, cancelCallback?: ()=> void, context?: Object): (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void;
	$off(eventType?: string, callback?: (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void, cancelCallback?: ()=> void, context?: Object): (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void;
	$bind($scope: ng.IScope, modelName: string): ng.IPromise<any>;
}

interface AngularFireObject {
    $priority: number;
}

interface AngularFireAuthService {
	(firebase: Firebase): AngularFireAuth;
}

interface AngularFireAuth {
	$getCurrentUser(): ng.IPromise<any>;
	$login(provider: string, options?: Object): ng.IPromise<any>;
	$logout(): void;
	$createUser(email: string, password: string, noLogin?: boolean): ng.IPromise<any>;
	$changePassword(email: string, oldPassword: string, newPassword: string): ng.IPromise<any>;
	$removeUser(email: string, password: string): ng.IPromise<any>;
	$sendPasswordResetEmail(email: string): ng.IPromise<any>;
}
