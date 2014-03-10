// Type definitions for node-git
// Project: https://github.com/christkv/node-git
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "git" {
    // lib/git/git.js
    export class Git {

        constructor(gitDirectory:any);

        refs(options:any, prefix:string, callback:(err:any, data:string)=>void):void;

        fs_read(gitDirectory:string, file:string, callback:(err:any, data:any)=>void):void;

        transform_options(options:any):string[];

        git(functionName:any, options:any, ...args:any[]):void; // last element is callback

        call_git(prefix:string, command:any, postfix:string, options:any, args:any, callback: (error: any, result: string) => void):void;

        rev_list(callback:Function):void;

        rev_list(options:any, callback:Function):void;

        rev_list(options:any, reference:string, callback:Function):void;

        rev_parse(options:any, str:string, callback:Function):void;

        rev_parse(options:any, str:string, level:number, callback:Function):void;

        ls_tree(treeish:any, callback:Function):void;

        ls_tree(treeish:any, paths:any[], callback:Function):void;

        ls_tree(treeish:any, paths:any[], options:any, callback:Function):void;

        cat_file(type:any, ref:any, callback:Function):void;

        file_size(ref:any, callback:Function):void;

        fs_mkdir(dir:any, callback:Function):void;

        init(options:any, callback:Function):void;

        // not implemented!
        clone(options:any, originalPath:any, targetPath:any, callback:Function):void;

        diff(commit1:any, commit2:any, callback: (error: any, patch: string) => void):void;

		diff(commit1: any, commit2: any, options: any, callback: (error: any, patch: string) => void):void;

        fs_exist(path:any, callback:Function):void;

        fs_write(file:any, content:any, callback:Function):void;

        log(commit:any, path:any, options:any, callback:Function):void;

        select_existing_objects(objectIds:any[], callback:Function):void;

        format_patch(options:any, reference:any, callback:Function):void;

        blame(callback:Function):void;

        blame(options:any, callback:Function):void;

        blame_tree(commit:any, callback:Function):void;

        blame_tree(commit:any, path:any, callback:Function):void;

        looking_for(commit:any, callback:Function):void;

        looking_for(commit:any, path:any, callback:Function):void;

        commit(...args:any[]):void; // last element is callback

        commit(options:any, ...args:any[]):void; // last element is callback

        config(...args:any[]):void; // last element is callback

        config(options:any, ...args:any[]):void; // last element is callback

        add(...args:any[]):void; // last element is callback

        add(options:any, ...args:any[]):void; // last element is callback

        remove(...args:any[]):void; // last element is callback

        remove(options:any, ...args:any[]):void; // last element is callback

        ls_files(...args:any[]):void; // last element is callback

        ls_files(options:any, ...args:any[]):void; // last element is callback

        diff_files(...args:any[]):void; // last element is callback

        diff_files(options:any, ...args:any[]):void; // last element is callback

        diff_index(...args:any[]):void; // last element is callback

        diff_index(options:any, ...args:any[]):void; // last element is callback

        file_type(...args:any[]):void; // last element is callback

        file_type(options:any, ...args:any[]):void; // last element is callback

        put_raw_object(...args:any[]):void; // last element is callback

        put_raw_object(options:any, ...args:any[]):void; // last element is callback

        commit_from_sha(id:string):any;
    }

    // lib/git/actor.js
    export class Actor {
        name:string;
        email:string;

        constructor(name:string, email:string);

        static from_string(str:string):Actor;
    }

    // lib/git/blame.js
    export class Blame {
        repo:Repo;
        file:string;
        commit:string;
        lines:BlameLine[];

        constructor(repo:Repo, file:string, callback:(err:any, blame:Blame)=>void);

        constructor(repo:Repo, file:string, commit:string, callback:(err:any, blame:Blame)=>void);
    }

    // lib/git/blame_line.js
    export class BlameLine {
        lineno:number;
        oldlineno:number;
        commit:any;
        line:string;

        constructor(lineno:number, oldlineno:number, commit:any, line:string);
    }

    // lib/git/blob.js
    export class Blob {
        repo:Repo;
        id:any;
        mode:any;
        name:any;
        data:any;
        size:any;
        mine_type:any;
        basename:any;

        constructor(repo:any, id:any, mode:any, name:any);

        static blame(repo:any, commit:any, file:any, callback:Function):void;
    }

    // lib/git/commit.js
    export class Commit {
        repo:Repo;
        id:string;
        parents:any[];
        tree:any;
        author:Actor;
        sha:string; // synonym to id
        authored_date:string;
        committer:Actor;
        committed_date:string;
        message:string;
        filechanges:any;
        short_message:string;
        _id_abbrev:any;

        constructor(repo:Repo, id:string, parents:any[], tree:any, author:Actor, authoredDate:string, committer:Actor, committedDate:string, message:string, filechanges:any);

        load(callback:Function):void;

        id_abbrev(callback:Function):void;

        static list_from_string(repo:any, text:any):Commit[];

        static find_all(repo:any, callback:Function):void;

        static find_all(repo:any, reference:any, callback:Function):void;

        static find_all(repo:any, reference:any, options:any, callback:Function):void;

        static count(repo:any, ref:any, callback:Function):void;

        static diff(repo:any, a:any, callback:Function):void;

        static diff(repo:any, a:any, b:any, callback:Function):void;

        static diff(repo:any, a:any, b:any, paths:any, callback:Function):void;

        show(callback:Function):void;

        diffs(callback:Function):void;

        toPatch(callback:Function):void;
    }

    // lib/git/commit_stats.js
    export class CommitStats {
        repo:any;
        id:any;
        files:any[];
        additions:any;
        deletions:any;
        total:any;

        constructor(repo:any, id:any, files:any[]);

        static find_all(repo:any, reference:any, callback:Function):void;

        static find_all(repo:any, reference:any, options:any, callback:Function):void;

        static list_from_string(repo:any, text:string):CommitStats[];
    }

    // lib/git/config.js
    export class Config {
        repo:any;
        data:any;

        constructor(repo:any);

        fetch(key:any, defaultValue:any):any

        set(key:any, value:any, callback:Function):void;
    }

    // lib/git/diff.js
    export class Diff {
        repo:any;
        a_path:any;
        b_path:any;
        a_blob:any;
        b_blob:any;
        a_mode:any;
        b_mode:any;
        new_file:any;
        deleted_file:any;
        diff:any;

        constructor(repo:any, aPath:any, bPath:any, aBlob:any, bBlob:any, aMode:any, bMode:any, newFile:any, deletedFile:any, diff:any);

        static list_from_string(repo:any, text:any, callback:Function):void;
    }

    // lib/git/file_index/js
    export class FileIndex {
        repo_path:any;
        index_file:any;
        sha_count:any;
        commit_index:any;
        commit_order:any;
        all_files:any;

        constructor(repoPath:any, callback:Function);

        commits_from(commitSha:any, callback:Function):void;

        sort_commits(shaArray:any[]):any[];

        files(commitSha:any, callback:Function):void;

        count_all(callback:Function):void;

        count(commitSha:any, callback:Function):void;

        commits_for(file:any, callback:Function):void;

        last_commits(commitSha:any, filesMatcher:any, callback:Function):void;
    }

    // lib/git/file_window.js
    export class FileWindow {
        idxfile:any;
        version:any;
        global_offset:any;
        offset:any;
        seek_offset:any;

        constructor(idxfile:any, version:any);

        unmap():void;

        index(idx:number):void;

        index(idx:any[]):void;

        close():void;
    }

    // lib/git/git_file_operations.js
    export class GitFileOperations {
        static glob_streaming(path:any):any;

        static glob(path:any, callback:Function):void;

        static glob(path:any, files:any, callback:Function):void;

        static fs_read(path:any, file:any, callback:Function):void;

        static fs_mkdir(dir:any, callback:Function):void;

        static fs_exist(dir:any, path:any, callback:Function):void;

        static fs_rmdir_r(dir:any, callback:Function):void;

        static fs_write(dir:any, file:any, content:any, callback:Function):void;
    }

    // lib/git/git_index.js
    export class GitIndex {
        repo:any;
        tree:any;
        current_tree:any;

        constructor(repo:any);

        read_tree(tree:any, callback:Function):void;

        add(filePath:any, data:any):void;

        commit(message:any, callback:Function):void;

        commit(message:any, parents:any, callback:Function):void;

        commit(message:any, parents:any, actor:any, callback:Function):void;

        commit(message:any, parents:any, actor:any, lastTree:any, callback:Function):void;

        write_tree(tree:any, callback:Function):any;

        write_tree(tree:any, nowTree:any, callback:Function):any;

        write_blob(data:any):any;
    }

    // lib/git/git_object.js
    export class GitObject {
        static from_raw(rawObject:any, repository:any):any;
    }

    // lib/git/head.js
    export class Head {
        name:string;
        commit:any; // string or Commit or ...?

        constructor(name:string, commit:any);

        static current(repo:any, callback:Function):void;

        static current(repo:any, options:any, callback:Function):void;

        static find_all(repo:any, callback:Function):void;

        static find_all(repo:any, options:any, callback:Function):void;
    }

    // lib/git/loose_storage.js
    export class LooseStorage {
        directory:any;

        constructor(directory:any);

        find(sha1:any):RawObject;

        get_raw_object(buf:any):RawObject;

        unpack_object_header_gently(buf:any):any[];

        is_legacy_loose_object(buf:any):boolean;

        put_raw_object(content:any, type:any, callback:Function):void;

        static verify_header(type:any, size:any):void;
    }

    // lib/git/merge.js
    export class Merge {
        static STATUS_BOTH:string;
        static STATUS_OURS:string;
        static STATUS_THEIRS:string;

        conflicts:any;
        text:any;
        sections:any;

        constructor(str:string);
    }

    // lib/git/pack_storage.js
    export class PackStorage {
        name:any;
        cache:any;
        version:any;
        offsets:any;
        size:any;

        constructor(file:any);

        find(sha1:any):RawObject;

        close():void;

        parse_object(pack:any, offset:any):RawObject;

        unpack_object(pack:any, packfile:any, offset:any, options:any):any[];

        unpack_deltified(packfile:any, type:any, offset:any, objOffset:any, size:any, options:any):any;
    }

    // lib/git/raw.js
    export class RawObject {
        type:any;
        content:any;

        constructor(type:any, content:any);

        sha1(encoding?:string):any;

        sha1_hex():any;
    }

    // lib/git/ref.js
    export class Ref {
    }

    // lib/git/remote.js
    export class Remote {
        constructor(name:any, commit:any);

        find_all(repo:any, callback:Function):void;

        find_all(repo:any, options:any, callback:Function):void;
    }

    // lib/git/repo.js
    export class Repo {
        path:string;
        options:any;
        git:any;
        config_object:any;
        bare:any;
        working_directory:any;

        constructor(path:string, callback:(err:any, repo:Repo)=>void);

        constructor(path:string, options:any, callback:(err:any, repo:Repo)=>void);

        head(callback:(err:any, head:Head)=>void):void;

        heads(callback:(err:any, heads:Head[])=>void):void;

        tags(callback:Function):void;

        commits(callback:Function):void;

        commits(start:string, callback:Function):void;

        commits(start:string, maxCount:number, callback:Function):void;

        commits(start:string, maxCount:number, skip:any, callback:Function):void;

        commit(id:string, callback:Function):void;

        commit_count(start:any, callback:Function):void;

        tree(callback:Function):void;

        tree(treeish:string, callback:Function):void;

        tree(treeish:string, paths:any, callback:Function):void;

        blob(id:string, callback:Function):void;

        init_bare(path:any, gitOptions:any, repoOptions:any, callback:Function):void;

        fork_bare(path:any, callback:Function):void;

        fork_bare(path:any, options:any, callback:Function):void;

        // buggy?
		diff(a: string, callback: (error: any, patch: string) => void):void;

		diff(a: string, b: string, callback: (error: any, patch: string) => void):void;

		diff(a: string, b: string, paths: any, callback: (error: any, patch: string) => void):void;

        commit_diff(commit:string, callback:Function):void;

        alternates(callback:Function):void;

        set_alternates(alts:any, callback:Function):void;

        log(callback:(err:any, commits:Commit[])=>void):void;

        log(commit:string, callback:(err:any, commits:Commit[])=>void):void;

        log(commit:string, path:any, callback:(err:any, commits:Commit[])=>void):void;

        log(commit:string, path:any, options:any, callback:(err:any, commits:Commit[])=>void):void;

        commit_deltas_from(otherRepo:any, callback:Function):void;

        commit_deltas_from(otherRepo:any, reference:any, callback:Function):void;

        commit_deltas_from(otherRepo:any, reference:any, otherReference:any, callback:Function):void;

        refs(callback:Function):void;

        description(callback:Function):void;

        update_ref(head:any, commitSha:any, callback:Function):void;

        get_head(headName:any, callback:Function):void;

        blame(file:string, commit:string, callback:(err:any, blame:Blame)=>void):void;

        commit_stats(callback:Function):void;

        commit_stats(start:any, callback:Function):void;

        commit_stats(start:any, maxCount:any, callback:Function):void;

        commit_stats(start:any, maxCount:any, skip:any, callback:Function):void;

        commit_index(message:any, callback:Function):void;

        commit_all(message:any, callback:Function):void;

        config(callback:Function):void;

        add(files:any, callback:Function):void;

        remove(files:any, callback:Function):void;

        status(callback:Function):void;

        is_head(headName:any, callback:Function):void;

        index(callback:Function):void;
    }

    // lib/git/repository.js
    export class Repository {
        git_directory:any;
        options:any;
        already_searched:any;
        packs:any;
        loose:any;

        constructor(gitDirectory:any, options?:any);

        get_object_by_sha1(sha1:string):any;

        files_changed(treeSha1:any, treeSha2:any, pathLimiter:any):boolean;

        cat_file(sha:any):any;

        cat_file_size(sha:any):number;

        cat_file_type(sha:any):any;

        ls_tree(sha:any, paths:any, recursive:any):any;

        get_raw_tree(sha:any, recursive:any):any;

        get_raw_trees(sha:any, path:any):string;

        ls_tree_path(sha:any, path:any, append:any):any

        quick_diff(tree1:any, tree2:any, path:any, recurse:any):any[];

        list_tree(sha:any):any;

        rev_list(sha:any, options:any, callback:Function):void;

        object_exists(sha1:any, callback:Function):void;

        in_packs(shaHex:any, callback:Function):void;

        in_loose(shaHex:any, callback:Function):void;

        get_subtree(commitSha:any, path:any, callback:Function):void;

        static init(dir:any, bare:any, callback:Function):void;

        put_raw_object(content:any, type:any, callback:Function):any;
    }

    // lib/git/status.js
    export class Status {
        repo:any;
        files:any[];

        constructor(repo:any, callback:Function);

        index(file:any):any;
    }

    // lib/git/status_file.js
    export class StatusFile {
        repo:any;
        path:any;
        type:any;
        stage:any;
        mode_index:any;
        mode_repo:any;
        sha_index:any;
        sha_repo:any;
        untracked:any;

        constructor(repo:any, hash:any);
    }

    // lib/git/sub_module.js
    export class Submodule {
        repo:any;
        id:any;
        mode:any;
        name:any;
        basename:any;

        constructor(repo:any, id:any, mode:any, name:any);

        static create(repo:any, attributes:any, callback:Function):void;

        static config(repo:any, ref:any, callback:Function):void;
    }

    // lib/git/tag.js
    export class Tag {
        name:any;
        commit:any;

        constructor(name:any, commit:any);

        static find_all(repo:any, callback:Function):void;

        static find_all(repo:any, options:any, callback:Function):void;
    }

    // lib/git/tree.js
    export class Tree {
        repo:any;
        id:any;
        mode:any;
        name:any;
        contents:any;
        basename:any;

        constructor(repo:any, id:any, mode:any, name:any, contents:any);

        static content_from_string(repo:any, text:any, callback:Function):void;

        find(file:string):any;

        static create(repo:any, callback:Function):void;

        static create(repo:any, attributes:any, callback:Function):void;
    }

    // lib/git/user_info.js
    export class UserInfo {
        name:any;
        email:any;
        date:any;
        offset:any;

        constructor(str:string);
    }

    // lib/zlib/
    // lib/sprintf/
    // lib/diff/
}
