import * as Globalize from "../globalize";

declare module "../globalize" {
	interface Static {
		/**
		 * Load messages data.
		 * @param {Object} json JSON object of messages data. Keys can use any character, except /, { and }. Values (i.e., the message content itself) can contain any character.
		 * @returns {void}
		 */
		loadMessages(json: Object): void;
	}
	interface Shared {
		/**
		 * Return a function that formats a message (using ICU message format pattern) given its path and a set of variables into a user-readable string. It supports pluralization and gender inflections.
		 * @param path String or Array containing the path of the message content, eg. "greetings/bye", or [ "greetings", "bye" ].
		 * @returns {Function} Return A function that formats a message (using ICU message format pattern) given its path and a set of variables into a user-readable string. It supports pluralization and gender inflections.
		 */
		messageFormatter(path: string | string[]): (variables?: string | string[] | Object) => string;
		/**
		 * Formats a message (using ICU message format pattern) given its path and a set of variables into a user-readable string
		 * @param path String or Array containing the path of the message content, eg. "greetings/bye", or [ "greetings", "bye" ].
		 * @param variables Variables can be Objects, where each property can be referenced by name inside a message; or Arrays, where each entry of the Array can be used inside a message, using numeric indices. When passing one or more arguments of other types, they're converted to an Array and used as such.
		 * @returns {string} Return a user-readable string.
		 */
		formatMessage(path: string | string[], variables?: string | string[] | Object): string
	}
}

export = Globalize;
