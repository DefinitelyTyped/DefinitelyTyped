/**
 * Types taken from https://github.com/actions/github-script/blob/main/types/async-function.d.ts
 *
 * This package exists because the maintainer doesn't plan to publish the package on npm:
 * https://github.com/actions/github-script/issues/487#issuecomment-2824376694
 */
/// <reference types="node" />
import type * as core from "@actions/core" with { "resolution-mode": "import" };
import type * as exec from "@actions/exec" with { "resolution-mode": "import" };
import { context, getOctokit } from "@actions/github";
import type * as glob from "@actions/glob" with { "resolution-mode": "import" };
import type * as io from "@actions/io" with { "resolution-mode": "import" };
export interface AsyncFunctionArguments {
    context: typeof context;
    core: typeof core;
    github: ReturnType<typeof getOctokit>;
    octokit: ReturnType<typeof getOctokit>;
    getOctokit: typeof getOctokit;
    exec: typeof exec;
    glob: typeof glob;
    io: typeof io;
    require: NodeJS.Require;
    __original_require__: NodeJS.Require;
}
export function callAsyncFunction(args: AsyncFunctionArguments, source: string): Promise<any>;
