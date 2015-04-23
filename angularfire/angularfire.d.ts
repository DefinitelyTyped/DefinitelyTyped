// Type definitions for AngularFire 1.0.0
// Project: http://angularfire.com
// Definitions by: Keith Garrod <http://github.com/kpgarrod>
// Definitions by: Dénes Harmath <http://github.com/thSoft>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts"/>
/// <reference path="../firebase/firebase.d.ts"/>

interface AngularFireArrayService {
  (firebase: FirebaseQuery): AngularFireArray;
}

interface AngularFireObjectService {
  (firebase: FirebaseQuery): AngularFireObject;
}

interface AngularFireObject extends AngularFireSimpleObject {
  $remove(key?: string): angular.IPromise<Firebase>;
  $save(): angular.IPromise<Firebase>;
  $loaded(resolve?: (x: AngularFireObject) => angular.IHttpPromise<{}>, reject?: (err: any) => any): angular.IPromise<AngularFireObject>;
  $loaded(resolve?: (x: AngularFireObject) => angular.IPromise<{}>, reject?: (err: any) => any): angular.IPromise<AngularFireObject>;
  $loaded(resolve?: (x: AngularFireObject) => void, reject?: (err: any) => any): angular.IPromise<AngularFireObject>;
  $bindTo(scope: angular.IScope, varName: string): angular.IPromise<any>;
  $watch(callback: Function, context?: any): Function;
}

interface AngularFireArray extends Array<AngularFireSimpleObject> {
  $add(newData: any): angular.IPromise<Firebase>;
  $remove(recordOrIndex: any): angular.IPromise<Firebase>;
  $save(recordOrIndex: any): angular.IPromise<Firebase>;
  $getRecord(key: string): AngularFireSimpleObject;
  $keyAt(recordOrIndex: any): string;
  $indexFor(key: string): number;
  $loaded(resolve?: (x: AngularFireArray) => angular.IHttpPromise<{}>, reject?: (err: any) => any): angular.IPromise<AngularFireArray>;
  $loaded(resolve?: (x: AngularFireArray) => angular.IPromise<{}>, reject?: (err: any) => any): angular.IPromise<AngularFireArray>;
  $loaded(resolve?: (x: AngularFireArray) => void, reject?: (err: any) => any): angular.IPromise<AngularFireArray>;
  $watch(cb: (event: string, key: string, prevChild: string) => void, context?: any): Function;
}

interface AngularFireSimpleObject {
  $id: string;
  $priority: number;
  $ref(): Firebase;
  $value: any;
  $extend(methods: Object): Object;
  $destroy(): void;
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
