// Type definitions for git-clone 3.0
// Project: https://gitlab.com/flippidippi/download-git-repo
// Definitions by: Christoph Thiede <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Options as CloneOptions } from 'git-clone';
import { DownloadOptions } from 'download';

declare namespace download {
    interface Options extends CloneOptions, DownloadOptions {
        /**
         * If `true`, use `git clone` instead of an http download. While this can be a bit slower, it does allow private repositories to be used if the appropriate SSH keys are setup.
         * Defaults to `false`.
         */
        clone?: boolean;
    }
}

/**
 * Download a git `repository` to a `destination` folder with `options`, then `callback`.
 * @param repository The shorthand repository string to download the repository from:
 *
 *  - **GitHub** - `github:owner/name` or simply `owner/name`
 *  - **GitLab** - `gitlab:owner/name`
 *  - **Bitbucket** - `bitbucket:owner/name`
 * The `repository` parameter defaults to the `master` branch, but you can specify a branch or tag as a URL fragment like `owner/name#my-branch`. In addition to specifying the type of where to
 * download, you can also specify a custom origin like `gitlab:custom.com:owner/name`. Custom origin will default to `https` or `git@` for http and clone downloads respectively, unless protocol is
 * specified. Feel free to submit an issue or pull request for additional origin options.
 *
 * In addition to having the shorthand for supported git hosts, you can also hit a repository directly with:
 *
 *  - **Direct** - `direct:url`
 *
 *  This will bypass the shorthand normalizer and pass `url` directly. If using `direct` without `clone`, you must pass the full url to the zip file, including paths to branches if needed. If using
 * `direct` with clone, you must pass the full url to the git repo and you can specify a branch like `direct:url#my-branch`.
 * @param destination The file path to download the repository to.
 * @param options An optional options object parameter with download options.
 * @param callback The callback function.
 */
declare function download(repository: string, dest: string, options: download.Options, callback: (error?: Error | unknown) => void): void;
declare function download(repository: string, destination: string, callback: (error?: Error | unknown) => void): void;

export = download;
