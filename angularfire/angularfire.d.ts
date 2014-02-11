interface AngularFireService {
	(firebase: Firebase): AngularFire;
}

interface AngularFire {
	$add(value: any): void;
	$remove(key?: string): void;
	$save(key?: string): void;
	$child(key: string): AngularFire;
	$set(value: any): void;
	$getIndex(): number;
	$priority: number;
	$on(eventType: string, callback: (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void, cancelCallback?: ()=> void, context?: Object): (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void;
	$off(eventType: string, callback: (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void, cancelCallback?: ()=> void, context?: Object): (dataSnapshot: IFirebaseDataSnapshot, prevChildName?: string) => void;
	$bind($scope: ng.IScope, modelName: string): ng.IPromise<any>;
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
