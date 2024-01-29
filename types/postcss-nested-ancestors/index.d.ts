import { PluginCreator } from "postcss";

declare namespace nestedAncestors {
    interface Options {
        /**
         * Ancestor selector pattern (utility option to automatically set both `levelSymbol` and `parentSymbol`)
         * @default '^&'
         */
        placeholder?: string | undefined;
        /**
         * Symbol to move up a level of nesting
         * @default '^'
         */
        levelSymbol?: string | undefined;
        /**
         * Symbol to target parent
         * @default '&'
         */
        parentSymbol?: string | undefined;
        /**
         * @experimental
         * Whether to look through CSS for nested ancestor symbols and replace them with the relevant tag
         * @see {@link <https://github.com/toomuchdesign/postcss-nested-ancestors#replacedeclarations-experimental>}
         * @default false
         */
        replaceDeclarations?: boolean | undefined;
    }
}

declare var nestedAncestors: PluginCreator<nestedAncestors.Options>;

export = nestedAncestors;
