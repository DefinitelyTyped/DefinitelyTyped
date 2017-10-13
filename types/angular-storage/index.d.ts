// Type definitions for angular-storage v0.0.11
// Project: https://github.com/auth0/angular-storage
// Definitions by: Matthew DeKrey <https://github.com/mdekrey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as angular from 'angular';

declare module 'angular' {
	export namespace a0.storage {
		interface IStoreService extends INamespacedStoreService {
			/**
			 * Returns a namespaced store
			 *
			 * @param {String} namespace - The namespace
			 * @param {String} storage - The name of the storage service. Defaults to local storage.
			 * @param {String} delimiter - The delimiter to use to separate the namespace and the keys.
			 * @returns {INamespacedStoreService}
			 */
			getNamespacedStore(namespace: string, storage?: string, delimiter?: string): INamespacedStoreService;
		}

		interface INamespacedStoreService {
			/**
			 * Sets a new value to the storage with the key name. It can be any object.
			 *
			 * @param {String} name - The key name for the location of the value
			 * @param value - The value to store
			 */
			set(name: string, value: any): void;

			/**
			 * Returns the saved value with they key name.
			 *
			 * @param {String} name - The key name for the location of the value
			 * @returns The saved value; if you saved an object, you get an object
			 */
			get(name: string): any;

			/**
			 * Deletes the saved value with the key name
			 *
			 * @param {String} name - The key name for the location of the value to remove
			 */
			remove(name: string): void;
		}

		interface IStoreProvider {

		    /**
		     * Sets the storage.
		     *
		     * @param {String} storage - The storage name
		     */
			setStore(storage: string): void;
		}
	}
}
