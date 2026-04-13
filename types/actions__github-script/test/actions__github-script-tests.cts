import * as core from "@actions/core";
import * as exec from "@actions/exec";
import { context, getOctokit } from "@actions/github";
import * as glob from "@actions/glob";
import * as io from "@actions/io";
import type { AsyncFunctionArguments } from '@actions/github-script';
 
const { callAsyncFunction } = require("@actions/github-script");
const github: ReturnType<typeof getOctokit> = undefined as any;

const args: AsyncFunctionArguments = {
    context,
    core,
    github,
    octokit: github,
    getOctokit,
    exec,
    glob,
    io,
    require,
    __original_require__: require,
}

const promise: Promise<any> = callAsyncFunction(args, "source");
