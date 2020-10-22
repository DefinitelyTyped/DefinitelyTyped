// Type definitions for AngularFire 0.8.2
// Project: http://angularfire.com
// Definitions by: Dénes Harmath <https://github.com/thSoft>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular"/>
/// <reference types="firebase"/>

interface AngularFireService {
    (firebase: Firebase, config?: any): AngularFire;
}

/**
 * @deprecated. Not possible with AngularFire 1.0+
 */
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

/**
 * Creates and maintains a synchronized object, with 2-way bindings between Angular and Firebase.
 */
interface AngularFireObject extends AngularFireSimpleObject {
    $id: string;
    $priority: number;
    $value: any;

    /**
     * Removes all keys from the FirebaseObject and also removes
     * the remote data from the server.
     *
     * @returns a promise which will resolve after the op completes
     */

    $remove(): ng.IPromise<Firebase>;
    /**
     * Saves all data on the FirebaseObject back to Firebase.
     * @returns a promise which will resolve after the save is completed.
     */
    $save(): ng.IPromise<Firebase>;

    /**
     * The loaded method is invoked after the initial batch of data arrives from the server.
     * When this resolves, all data which existed prior to calling $asObject() is now cached
     * locally in the object.
     *
     * As a shortcut is also possible to pass resolve/reject methods directly into this
     * method just as they would be passed to .then()
     *
     * @param {Function} resolve
     * @param {Function} reject
     * @returns a promise which resolves after initial data is downloaded from Firebase
     */
    $loaded(resolve?: (x: AngularFireObject) => ng.IHttpPromise<{}>, reject?: (err: any) => any): ng.IPromise<AngularFireObject>;

    /**
     * The loaded method is invoked after the initial batch of data arrives from the server.
     * When this resolves, all data which existed prior to calling $asObject() is now cached
     * locally in the object.
     *
     * As a shortcut is also possible to pass resolve/reject methods directly into this
     * method just as they would be passed to .then()
     *
     * @param {Function} resolve
     * @param {Function} reject
     * @returns a promise which resolves after initial data is downloaded from Firebase
     */
    $loaded(resolve?: (x: AngularFireObject) => ng.IPromise<{}>, reject?: (err: any) => any): ng.IPromise<AngularFireObject>;

    /**
     * The loaded method is invoked after the initial batch of data arrives from the server.
     * When this resolves, all data which existed prior to calling $asObject() is now cached
     * locally in the object.
     *
     * As a shortcut is also possible to pass resolve/reject methods directly into this
     * method just as they would be passed to .then()
     *
     * @param {Function} resolve
     * @param {Function} reject
     * @returns a promise which resolves after initial data is downloaded from Firebase
     */
    $loaded(resolve?: (x: AngularFireObject) => void, reject?: (err: any) => any): ng.IPromise<AngularFireObject>;

    /**
     * @returns {Firebase} the original Firebase instance used to create this object.
     */
    $ref(): Firebase;

    /**
     * Creates a 3-way data sync between this object, the Firebase server, and a
     * scope variable. This means that any changes made to the scope variable are
     * pushed to Firebase, and vice versa.
     *
     * If scope emits a $destroy event, the binding is automatically severed. Otherwise,
     * it is possible to unbind the scope variable by using the `unbind` function
     * passed into the resolve method.
     *
     * Can only be bound to one scope variable at a time. If a second is attempted,
     * the promise will be rejected with an error.
     *
     * @param {object} scope
     * @param {string} varName
     * @returns a promise which resolves to an unbind method after data is set in scope
     */
    $bindTo(scope: ng.IScope, varName: string): ng.IPromise<any>;

    /**
     * Listeners passed into this method are notified whenever a new change is received
     * from the server. Each invocation is sent an object containing
     * <code>{ type: 'value', key: 'my_firebase_id' }</code>
     *
     * This method returns an unbind function that can be used to detach the listener.
     *
     * @param {Function} cb
     * @param {Object} [context]
     * @returns {Function} invoke to stop observing events
     */
    $watch(callback: Function, context?: any): Function;

    /**
     * Informs $firebase to stop sending events and clears memory being used
     * by this object (delete's its local content).
     */
    $destroy(): void;
}
interface AngularFireObjectService {
    /**
     * Creates a synchronized object with 2-way bindings between Angular and Firebase.
     *
     * @param {Firebase} ref
     * @returns {FirebaseObject}
     */
    (firebase: Firebase): AngularFireObject;
    $extend(ChildClass: Object, methods?: Object): Object;
}

/**
 * Creates and maintains a synchronized list of data. This is a pseudo-read-only array. One should
 * not call splice(), push(), pop(), et al directly on this array, but should instead use the
 * $remove and $add methods.
 *
 * It is acceptable to .sort() this array, but it is important to use this in conjunction with
 * $watch(), so that it will be re-sorted any time the server data changes. Examples of this are
 * included in the $watch documentation.
 */
interface AngularFireArray extends Array<AngularFireSimpleObject> {
    /**
     * Create a new record with a unique ID and add it to the end of the array.
     * This should be used instead of Array.prototype.push, since those changes will not be
     * synchronized with the server.
     *
     * Any value, including a primitive, can be added in this way. Note that when the record
     * is created, the primitive value would be stored in $value (records are always objects
     * by default).
     *
     * Returns a future which is resolved when the data has successfully saved to the server.
     * The resolve callback will be passed a Firebase ref representing the new data element.
     *
     * @param data
     * @returns a promise resolved after data is added
     */
    $add(newData: any): ng.IPromise<Firebase>;

    /**
     * Pass either an item in the array or the index of an item and it will be saved back
     * to Firebase. While the array is read-only and its structure should not be changed,
     * it is okay to modify properties on the objects it contains and then save those back
     * individually.
     *
     * Returns a future which is resolved when the data has successfully saved to the server.
     * The resolve callback will be passed a Firebase ref representing the saved element.
     * If passed an invalid index or an object which is not a record in this array,
     * the promise will be rejected.
     *
     * @param {int|object} indexOrItem
     * @returns a promise resolved after data is saved
     */
    $save(recordOrIndex: any): ng.IPromise<Firebase>;

    /**
     * Pass either an existing item in this array or the index of that item and it will
     * be removed both locally and in Firebase. This should be used in place of
     * Array.prototype.splice for removing items out of the array, as calling splice
     * will not update the value on the server.
     *
     * Returns a future which is resolved when the data has successfully removed from the
     * server. The resolve callback will be passed a Firebase ref representing the deleted
     * element. If passed an invalid index or an object which is not a record in this array,
     * the promise will be rejected.
     *
     * @param {int|object} indexOrItem
     * @returns a promise which resolves after data is removed
     */
    $remove(recordOrIndex: any): ng.IPromise<Firebase>;

    /**
     * Returns the record for a given Firebase key (record.$id). If the record is not found
     * then returns null.
     *
     * @param {string} key
     * @returns {Object|null} a record in this array
     */
    $getRecord(key: string): AngularFireSimpleObject;

    /**
     * Given an item in this array or the index of an item in the array, this returns the
     * Firebase key (record.$id) for that record. If passed an invalid key or an item which
     * does not exist in this array, it will return null.
     *
     * @param {int|object} indexOrItem
     * @returns {null|string}
     */
    $keyAt(recordOrIndex: any): string;

    /**
     * The inverse of $keyAt, this method takes a Firebase key (record.$id) and returns the
     * index in the array where that record is stored. If the record is not in the array,
     * this method returns -1.
     *
     * @param {String} key
     * @returns {int} -1 if not found
     */
    $indexFor(key: string): number;

    /**
     * The loaded method is invoked after the initial batch of data arrives from the server.
     * When this resolves, all data which existed prior to calling $asArray() is now cached
     * locally in the array.
     *
     * As a shortcut is also possible to pass resolve/reject methods directly into this
     * method just as they would be passed to .then()
     *
     * @param {Function} [resolve]
     * @param {Function} [reject]
     * @returns a promise
     */
    $loaded(resolve?: (x: AngularFireArray) => ng.IHttpPromise<{}>, reject?: (err: any) => any): ng.IPromise<AngularFireArray>;

    /**
     * The loaded method is invoked after the initial batch of data arrives from the server.
     * When this resolves, all data which existed prior to calling $asArray() is now cached
     * locally in the array.
     *
     * As a shortcut is also possible to pass resolve/reject methods directly into this
     * method just as they would be passed to .then()
     *
     * @param {Function} [resolve]
     * @param {Function} [reject]
     * @returns a promise
     */
    $loaded(resolve?: (x: AngularFireArray) => ng.IPromise<{}>, reject?: (err: any) => any): ng.IPromise<AngularFireArray>;

    /**
     * The loaded method is invoked after the initial batch of data arrives from the server.
     * When this resolves, all data which existed prior to calling $asArray() is now cached
     * locally in the array.
     *
     * As a shortcut is also possible to pass resolve/reject methods directly into this
     * method just as they would be passed to .then()
     *
     * @param {Function} [resolve]
     * @param {Function} [reject]
     * @returns a promise
     */
    $loaded(resolve?: (x: AngularFireArray) => void, reject?: (err: any) => any): ng.IPromise<AngularFireArray>;

    /**
     * @returns {Firebase} the original Firebase ref used to create this object.
     */
    $ref(): Firebase;

    /**
     * Listeners passed into this method are notified whenever a new change (add, updated,
     * move, remove) is received from the server. Each invocation is sent an object
     * containing <code>{ type: 'child_added|child_updated|child_moved|child_removed',
     * key: 'key_of_item_affected'}</code>
     *
     * Additionally, added and moved events receive a prevChild parameter, containing the
     * key of the item before this one in the array.
     *
     * This method returns a function which can be invoked to stop observing events.
     *
     * @param {Function} cb
     * @param {Object} [context]
     * @returns {Function} used to stop observing
     */
    $watch(cb: (event: string, key: string, prevChild: string) => void, context?: any): Function;

    /**
     * Informs $firebase to stop sending events and clears memory being used
     * by this array (delete's its local content).
     */
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
    /**
     * Authenticates the Firebase reference with a custom authentication token.
     *
     * @param {string} authToken An authentication token or a Firebase Secret. A Firebase Secret
     * should only be used for authenticating a server process and provides full read / write
     * access to the entire Firebase.
     * @param {Object} [options] An object containing optional client arguments, such as configuring
     * session persistence.
     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
     */
    $authWithCustomToken(authToken: string, options?: Object): ng.IPromise<any>;

    /**
     * Authenticates the Firebase reference anonymously.
     *
     * @param {Object} [options] An object containing optional client arguments, such as configuring
     * session persistence.
     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
     */
    $authAnonymously(options?: Object): ng.IPromise<any>;

    /**
     * Authenticates the Firebase reference with an email/password user.
     *
     * @param {Object} credentials An object containing email and password attributes corresponding
     * to the user account.
     * @param {Object} [options] An object containing optional client arguments, such as configuring
     * session persistence.
     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
     */
    $authWithPassword(credentials: FirebaseCredentials, options?: Object): ng.IPromise<any>;

    /**
     * Authenticates the Firebase reference with the OAuth popup flow.
     *
     * @param {string} provider The unique string identifying the OAuth provider to authenticate
     * with, e.g. google.
     * @param {Object} [options] An object containing optional client arguments, such as configuring
     * session persistence.
     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
     */
    $authWithOAuthPopup(provider: string, options?: Object): ng.IPromise<any>;

    /**
     * Authenticates the Firebase reference with the OAuth redirect flow.
     *
     * @param {string} provider The unique string identifying the OAuth provider to authenticate
     * with, e.g. google.
     * @param {Object} [options] An object containing optional client arguments, such as configuring
     * session persistence.
     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
     */
    $authWithOAuthRedirect(provider: string, options?: Object): ng.IPromise<any>;

    /**
     * Authenticates the Firebase reference with an OAuth token.
     *
     * @param {string} provider The unique string identifying the OAuth provider to authenticate
     * with, e.g. google.
     * @param {string|Object} credentials Either a string, such as an OAuth 2.0 access token, or an
     * Object of key / value pairs, such as a set of OAuth 1.0a credentials.
     * @param {Object} [options] An object containing optional client arguments, such as configuring
     * session persistence.
     * @return {Promise<Object>} A promise fulfilled with an object containing authentication data.
     */
    $authWithOAuthToken(provider: string, credentials: Object|string, options?: Object): ng.IPromise<any>;

    /**
     * Synchronously retrieves the current authentication data.
     *
     * @return {Object} The client's authentication data.
     */
    $getAuth(): FirebaseAuthData;

    /**
     * Asynchronously fires the provided callback with the current authentication data every time
     * the authentication data changes. It also fires as soon as the authentication data is
     * retrieved from the server.
     *
     * @param {function} callback A callback that fires when the client's authenticate state
     * changes. If authenticated, the callback will be passed an object containing authentication
     * data according to the provider used to authenticate. Otherwise, it will be passed null.
     * @param {string} [context] If provided, this object will be used as this when calling your
     * callback.
     * @return {function} A function which can be used to deregister the provided callback.
     */
    $onAuth(callback: Function, context?: any): Function;

    /**
     * Unauthenticates the Firebase reference.
     */
    $unauth(): void;

    /**
     * Utility method which can be used in a route's resolve() method to grab the current
     * authentication data.
     *
     * @returns {Promise<Object|null>} A promise fulfilled with the client's current authentication
     * state, which will be null if the client is not authenticated.
     */
    $waitForAuth(): ng.IPromise<any>;

    /**
     * Utility method which can be used in a route's resolve() method to require that a route has
     * a logged in client.
     *
     * @returns {Promise<Object>} A promise fulfilled with the client's current authentication
     * state or rejected if the client is not authenticated.
     */
    $requireAuth(): ng.IPromise<any>;

    /**
     * Creates a new email/password user. Note that this function only creates the user, if you
     * wish to log in as the newly created user, call $authWithPassword() after the promise for
     * this method has been resolved.
     *
     * @param {Object} credentials An object containing the email and password of the user to create.
     * @return {Promise<Object>} A promise fulfilled with the user object, which contains the
     * uid of the created user.
     */
    $createUser(credentials: FirebaseCredentials): ng.IPromise<any>;

    /**
     * Removes an email/password user.
     *
     * @param {Object} credentials An object containing the email and password of the user to remove.
     * @return {Promise<>} An empty promise fulfilled once the user is removed.
     */
    $removeUser(credentials: FirebaseCredentials): ng.IPromise<any>;

    /**
     * Changes the email for an email/password user.
     *
     * @param {Object} credentials An object containing the old email, new email, and password of
     * the user whose email is to change.
     * @return {Promise<>} An empty promise fulfilled once the email change is complete.
     */
    $changeEmail(credentials: FirebaseChangeEmailCredentials): ng.IPromise<any>;

    /**
     * Changes the password for an email/password user.
     *
     * @param {Object} credentials An object containing the email, old password, and new password of
     * the user whose password is to change.
     * @return {Promise<>} An empty promise fulfilled once the password change is complete.
     */
    $changePassword(credentials: FirebaseChangePasswordCredentials): ng.IPromise<any>;

    /**
     * Sends a password reset email to an email/password user.
     *
     * @param {Object} credentials An object containing the email of the user to send a reset
     * password email to.
     * @return {Promise<>} An empty promise fulfilled once the reset password email is sent.
     */
    $resetPassword(credentials: FirebaseResetPasswordCredentials): ng.IPromise<any>;
}
