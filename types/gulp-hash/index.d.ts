// Type definitions for gulp-hash 4.2
// Project: https://github.com/Dragory/gulp-hash
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface GulpHash {
    (options?: GulpHash.Options): NodeJS.ReadWriteStream;
    manifest(manifestPath: string, options?: GulpHash.ManifestOptions): NodeJS.ReadWriteStream;
    manifest(manifestPath: string, append?: boolean, space?: string): NodeJS.ReadWriteStream;
}

declare namespace GulpHash {
    interface Options {
        /**
         * A hashing algorithm for crypto.createHash
         *
         * @default 'sha1'
         */
        algorithm?: string;

        /**
         * The length of the hash to add to the file's name (slice from the start of the full hash)
         *
         * @default 8
         */
        hashLength?: number;

        /**
         * The template used when adding the hash
         *
         * @default '<%= name %>-<%= hash %><%= ext %>'
         */
        template?: string;

        /**
         * A key to change the files' hashes without actually changing their content; appended to the contents when hashing
         */
        version?: string;
    }

    interface ManifestOptions {
        /**
         * Whether to merge the new manifest with an existing one's contents (same filename, doesn't have to exist before first run)
         *
         * @default true
         */
        append?: boolean;

        /**
         * The space parameter for JSON.stringify()
         *
         * @default null
         */
        space?: string | null;

        /**
         * If set to true, deletes old versions of hashed files
         *
         * @default false
         */
        deleteOld?: boolean;

        /**
         * Used with deleteOld. Specifies where to search for old files to delete.
         *
         * @default __dirname
         */
        sourceDir?: string;
    }
}

declare const gulpHash: GulpHash;

export = gulpHash;
