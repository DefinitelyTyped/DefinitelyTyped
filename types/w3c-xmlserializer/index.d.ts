// Type definitions for w3c-xmlserializer 2.0
// Project: https://github.com/jsdom/w3c-xmlserializer#readme
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace serialize {
	interface Options {
		/**
		 * Whether the serialization algorithm will throw an `Error`
		 * when the `Node` can't be serialized to well-formed XML.
		 *
		 * @default false
		 */
		requireWellFormed?: boolean;
	}
}

declare function serialize(root: Node, options?: serialize.Options): string;
export = serialize;
