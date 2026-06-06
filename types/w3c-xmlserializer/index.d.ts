declare namespace serialize {
    interface Options {
        /**
         * Whether the serialization algorithm will throw an `Error`
         * when the `Node` can't be serialized to well-formed XML.
         *
         * @default false
         */
        requireWellFormed?: boolean | undefined;
    }
}

declare function serialize(root: Node, options?: serialize.Options): string;
export = serialize;
