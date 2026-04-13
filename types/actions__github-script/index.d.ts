/**
 * Types taken from https://github.com/actions/github-script/blob/main/types/async-function.d.ts
 *
 * This package exists because the maintainer doesn't plan to publish the package on npm:
 * https://github.com/actions/github-script/issues/487#issuecomment-2824376694
 */
/// <reference types="node" />
import * as core from "@actions/core";
import * as exec from "@actions/exec";
import { context, getOctokit } from "@actions/github";
import * as glob from "@actions/glob";
import * as io from "@actions/io";

export type Octokit = typeof getOctokit;
export type Github = ReturnType<Octokit>;
export type Context = typeof context;
export type Core = typeof core;
export type Exec = typeof exec;
export type Glob = typeof glob;
export type IO = typeof io;
export interface AsyncFunctionArguments {
    context: Context;
    core: Core;
    github: Github;
    octokit: Github;
    getOctokit: Octokit;
    exec: Exec;
    glob: Glob;
    io: IO;
    require: NodeJS.Require;
    __original_require__: NodeJS.Require;
}
export function callAsyncFunction(args: AsyncFunctionArguments, source: string): Promise<any>;
