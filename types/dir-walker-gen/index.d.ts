declare function DirGen(
    options: {
        /**
         * (Required) List of starting folders
         */
        folders: string[];
        /**
         * Does not show console warning when directories do not exist
         * @default {false}
         */
        silent?: boolean | undefined;
        /**
         * Ignores directories that start with a dot (e.g. .git, .vscode, etc)
         * @default {false}
         */
        ignoreDotDir?: boolean | undefined;
        /**
         * Exclude all folder that ends with any of the given strings
         * @default []
         */
        excludeFolders?: string[] | undefined;
        /**
         * List of extensions to ignore
         * @default []
         */
        excludeExtensions?: string[] | undefined;
        /**
         * List of extensions to scan (all other extensions are ignored)
         * @default []
         */
        includeExtensions?: string[] | undefined;
    },
): IterableIterator<string>;

export = DirGen;
