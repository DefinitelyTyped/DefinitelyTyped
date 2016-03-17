// Type definitions for node-config
// Project: https://github.com/lorenwest/node-config
// Definitions by: Roman Korneev <https://github.com/RWander>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "config" {

    var c: c.IConfig;

    namespace c {

			// see https://github.com/lorenwest/node-config/wiki/Using-Config-Utilities
			interface IUtil {
				// Extend an object (and any object it contains) with one or more objects (and objects contained in them).
				extendDeep(mergeInto: any, mergeFrom: any, depth?: number): any;

				// Return a deep copy of the specified object.
				cloneDeep(copyFrom: any, depth?: number): any;

				// Return true if two objects have equal contents.
				equalsDeep(object1: any, object2: any, dept?: number): boolean;

				// Returns an object containing all elements that differ between two objects.
				diffDeep(object1: any, object2: any, depth?: number): any;

				// Make a javascript object property immutable (assuring it cannot be changed from the current value).
				makeImmutable(object: any, propertyName?: string, propertyValue?: string): any;

				// Make an object property hidden so it doesn't appear when enumerating elements of the object.
				makeHidden(object: any, propertyName: string, propertyValue?: string): any;

				// Get the current value of a config environment variable
				getEnv(varName: string): string;
			}

			interface IConfig {
					get<T>(setting: string): T;
					has(setting: string): boolean;
					util: IUtil;
			}
		}

    export = c;
}
