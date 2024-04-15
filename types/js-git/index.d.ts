declare namespace JSGit {
    interface GitObject {
        type: string;
        body: any;
    }

    interface GitCommit {
        tree: string;
        author: GitAuthor;
        message: string;
    }

    interface GitAuthor {
        name: string;
        email: string;
        date: Date;
    }

    interface GitTree {
        [i: number]: GitTreeElem;
    }

    interface GitTreeElem {
        mode: number;
        name: string;
        hash: string;
    }

    interface StringMap {
        [i: string]: string;
    }

    interface Remote {
        hostname: string;
        pathname: string;

        discover(callback: (err: any, refs: StringMap) => void): void;
        fetch(repo: Repo, opts: Object, callback: (err: any) => void): void;
        close(callback?: (err: any) => void): void;
    }

    interface DB {
        /**
         * Load a ref or object from the database.
         * The database should assume that keys that are 40-character long hex strings are sha1 hashes. The value for these will always be binary (Buffer in node, Uint8Array in browser) All other keys are paths like refs/heads/master or HEAD and the value is a string.
         */
        get(key: string, callback: (err: any, value: any) => void): void;

        /**
         * Save a value to the database. Same rules apply about hash keys being binary values and other keys being string values.
         */
        set(key: string, value: any, callback: (err: any) => void): void;

        /**
         * Check if a key is in the database
         */
        has(key: string, callback: (err: any, hasKey: boolean) => void): void;

        /**
         * Remove an object or ref from the database.
         */
        del(key: string, callback: (err: any) => void): void;

        /**
         * Given a path prefix, give all the keys. This is like a readdir if you treat the keys as paths.
         * For example, given the keys refs/heads/master, refs/heads/experimental, refs/tags/0.1.3 and the prefix refs/heads/, the output would be master and experimental.
         * A null prefix returns all non hash keys.
         */
        keys(prefix: string, callback: (err: any, keys: string[]) => void): void;

        /**
         * Initialize a database. This is where you db implementation can setup stuff.
         */
        init(callback: (err: any) => void): void;

        /**
         * This is for when the user wants to delete or otherwise reclaim your database's resources.
         */
        clear(callback: (err: any) => void): void;
    }

    interface Repo {
        /**
         * Load a git object from the database. You can pass in either a hash or a symbolic name like HEAD or refs/tags/v3.1.4.
         *
         * The object will be of the form:
         * {
         *   type: "commit", // Or "tag", "tree", or "blob"
         *   body: { ... } // Or an array for tree and a binary value for blob.
         * }
         */
        load(hashish: string, callback: (err: any, git_object: GitObject) => void): void;

        /**
         * Save an object to the database. This will give you back the hash of the cotent by which you can retrieve the value back.
         */
        save(git_object: GitObject, callback: (err: any, hash: string) => void): void;

        /**
         * This convenience wrapper will call repo.load for you and then check if the type is what you expected. If it is, it will return the body directly. If it's not, it will error.
         *
         * var commit = yield repo.loadAs("commit", "HEAD");
         * var tree = yield repo.loadAs("tree", commit.tree);
         *
         * I'm using yield syntax because it's simpler, you can use callbacks instead if you prefer.
         */
        loadAs(type: string, hash: string, callback: (err: any, body: any) => void): void;

        /**
         * Another convenience wrapper, this time to save objects as a specefic type. The body must be in the right format.
         *
         * var blobHash = yield repo.saveAs("blob", binaryData);
         * var treeHash = yield repo.saveAs("tree", [
         *   { mode: 0100644, name: "file.dat", hash: blobHash }
         * ]);
         * var commitHash = yield repo.saveAs("commit", {
         *   tree: treeHash,
         *   author: { name: "Tim Caswell", email: "tim@creationix.com", date: new Date },
         *   message: "Save the blob"
         * });
         */
        saveAs(type: string, body: any, callback: (err: any, hash: string) => void): void;

        /**
         * Remove an object.
         */
        remove(hash: string, callback: (err: any) => void): void;

        /**
         * Import a packfile stream (simple-stream format) into the current database. This is used mostly for clone and fetch operations where the stream comes from a remote repo.
         *
         * opts is a hash of optional configs.
         *
         * opts.onProgress(progress) - listen to the git progress channel by passing in a event listener.
         * opts.onError(error) - same thing, but for the error channel.
         * opts.deline - If this is truthy, the progress and error messages will be rechunked to be whole lines. They usually come jumbled in the internal sidechannel.
         */
        unpack(packFileStream: any, opts: Object, callback: (err: any) => void): void;

        /**
         * This convenience wrapper creates a readable stream of the history sorted by author date.
         * If you want full history, pass in HEAD for the hash.
         */
        logWalk(hashish: string, callback: (err: any, log_stream: any) => void): void;

        /**
         * This helper will return a stream of files suitable for traversing a file tree as a linear stream. The hash can be a ref to a commit, a commit hash or a tree hash directly.
         */
        treeWalk(hashish: string, callback: (err: any, file_stream: any) => void): void;

        /**
         * This is the generic helper that logWalk and treeWalk use. See js-git.js source for usage.
         */
        walk(seed: any, scan: any, loadKey: any, compare: any): any;

        /**
         * Resolve a ref, branch, or tag to a real hash.
         */
        resolveHashish(hashish: string, callback: (err: any, hash: string) => void): void;

        /**
         * Update whatever branch HEAD is pointing to so that it points to hash.
         * You'll usually want to do this after creating a new commint in the HEAD branch.
         */
        updateHead(hash: string, callback: (err: any) => void): void;

        /**
         * Read the current active branch.
         */
        getHead(callback: (err: any, ref_name: string) => void): void;

        /**
         * Set the current active branch.
         */
        setHead(ref: string, callback: (err: any) => void): void;

        /**
         * Convenience wrapper that fetches from a remote instance and calls repo.unpack with the resulting packfile stream for you.
         */
        fetch(remote: Remote, opts: Object, callback: (err: any) => void): void;
    }
}
