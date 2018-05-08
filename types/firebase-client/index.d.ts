// Type definitions for Firebase Client 0.1.0
// Project: https://www.github.com/jpstevens/firebase-client
// Definitions by: Andrew Breen <https://github.com/fpsscarecrow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Q from "q";

interface PushResponse {
	/**
	 * Name ref (key) of the child resource
	 */
	name : string;
}

interface FirebaseConfig {
	/**
	 * path for the Firebase instance
	 */
	url : string;

	/**
	 * Token for authorisation
	 */
	auth: string;
}

interface FirebaseClient {
	/**
	 * Creates a new FirebaseClient given the provided configuration
	 */
	new (config : FirebaseConfig) : FirebaseClient;

	/**
	 * Retrieves all objects at the base path
	 */
	get<T>() : Q.Promise<T>;

	/**
	 * Retrieves an object
	 * @param path Relative path from the base for the resource
	 */
	get<T>(path : string) : Q.Promise<T>;

	/**
	 * Returns a promise of the HTTP response from setting the value at the given path
	 * @param path Relative path from the base for the resource
	 * @param data Data to be set as the value for the given path
	 */
	set<T>(path : string, data : T) : Q.Promise<T>;

	/**
	 * Update a node at a given path
	 * @param path Relative path from the base for the resource
	 * @param value Value of the response
	 */
	update<T>(path : string, value : T) : Q.Promise<T>;

	/**
	 * Deletes the resource at a given path
	 * @param path Relative path from the base for the resource
	 */
	delete(path : string) :  Q.Promise<void>;

	/**
	 * @param path Relative path from the base for the resource
	 * @param value Object to push to the path
	 */
	push<T>(path : string, value : T) : Q.Promise<PushResponse>;
}

declare var FirebaseClient: FirebaseClient;

export = FirebaseClient;
export as namespace FirebaseClient;
