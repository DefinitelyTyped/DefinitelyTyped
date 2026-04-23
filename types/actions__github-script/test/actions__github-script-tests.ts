import * as core from "@actions/core";
import * as exec from "@actions/exec";
import { context, getOctokit } from "@actions/github";
import type { AsyncFunction, AsyncFunctionArguments } from "@actions/github-script";
import * as glob from "@actions/glob";
import * as io from "@actions/io";

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
};

const handler: AsyncFunction<number> = async (args) => {
    const t: AsyncFunctionArguments = args;
    return 0;
};
