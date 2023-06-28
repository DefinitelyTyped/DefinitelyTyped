// Type definitions for Cmake JS 7.2
// Project: https://github.com/cmake-js/cmake-js
// Definitions by: Veyis Aliyev <https://github.com/MDReal32/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as OS from "os";

export {};

interface ExtractOptions {
    type?: string | undefined;
    Directory?: boolean | undefined;
    path?: string | undefined;
    strip?: number | undefined;
}

export interface CMLogOptions {
    logName?: string;
    noLog?: boolean;
}

export interface CmakeOptions {
    directory?: string;
    out?: string;
    cmakePath?: string;
    debug?: boolean;
    config?: {};
    cMakeOptions?: string[];
    extraCMakeArgs?: string[];
    silent?: boolean;
}

export interface BuildSystemOptions extends CmakeOptions {
    runtime?: string;
    runtimeVersion?: string;
    arch?: string;
}

export interface DistOptions {
    runtimeDirectory: string;
}

export interface Environment {
    cmakeJsVersion: string;
    platform: ReturnType<(typeof OS)["platform"]>;
    isWin: boolean;
    isLinux: boolean;
    isOSX: boolean;
    readonly isPosix: boolean;
    arch: ReturnType<(typeof OS)["arch"]>;
    isX86: boolean;
    isX64: boolean;
    isArm: boolean;
    runtime: "node";
    runtimeVersion: string;
    home: string;
    EOL: typeof OS.EOL;
    readonly isNinjaAvailable: boolean;
    readonly isMakeAvailable: boolean;
    readonly isGPPAvailable: boolean;
    readonly isClangAvailable: boolean;
}

export type TargetOptionsOptions = Pick<Environment, "runtime" | "runtimeVersion" | "arch">;

export interface ToolsetOptions extends Pick<Environment, "platform">, CMLogOptions {}

export interface DownloadFileOptions {
    path?: string;
    hash?: string;
}

export interface DownloadTgzOptions extends ExtractOptions, Pick<DownloadFileOptions, "hash"> {
    cwd?: string;
}

export type TestSumOptions = Pick<DownloadFileOptions, "hash">;

export class CMLog {
    constructor(options?: CMLogOptions);

    silly(cat: string, msg: string): void;

    verbose(cat: string, msg: string): void;

    info(cat: string, msg: string): void;

    warn(cat: string, msg: string): void;

    http(cat: string, msg: string): void;

    error(cat: string, msg: string): void;
}

export class Cmake {
    constructor(options?: CmakeOptions);

    static isAvailable(): boolean;

    static getGenerators(options?: CmakeOptions, log?: CMLog): string[];

    getGenerators(): string[];

    verifyIfAvailable(): void;

    getConfigureCommand(): string[];

    getCmakeJsLibString(): string;

    getCmakeJsIncludeString(): string;

    getCmakeJsSrcString(): string;

    getNodeLibDefPath(): string;

    configure(): Promise<void>;

    ensureConfigured(): Promise<void>;

    getBuildCommand(): string[];

    build(): Promise<void>;

    getCleanCommand(): string[];

    clean(): Promise<void>;

    reconfigure(): Promise<void>;

    rebuild(): Promise<void>;

    compile(): Promise<void>;
}

export class BuildSystem extends Cmake {
    constructor(options?: BuildSystemOptions);

    install(): Promise<void>;
}

export class Dist {
    readonly internalPath: string;
    readonly externalPath: string;
    readonly downloaded: boolean;
    readonly winLibs: string[];
    readonly headerOnly: boolean;

    constructor(options: DistOptions);

    ensureDownloaded(): Promise<void>;

    download(): Promise<void>;
}

export class Downloader {
    downloadToStream(url: string, stream: NodeJS.WritableStream, hash?: string): Promise<void>;

    downloadString(url: string): Promise<string>;

    downloadFile(url: string, options?: string | DownloadFileOptions): Promise<string>;

    downloadTgz(url: string, options?: string | DownloadTgzOptions): Promise<string>;

    testSum(url: string, sum: string, options: TestSumOptions): Promise<boolean>;
}

export const environment: Environment;

export class TargetOptions {
    readonly arch: Environment["arch"];
    readonly isX86: Environment["isX86"];
    readonly isX64: Environment["isX64"];
    readonly isArm: Environment["isArm"];
    readonly runtime: Environment["runtime"];
    readonly runtimeVersion: Environment["runtimeVersion"];

    constructor(options: TargetOptionsOptions);
}

// WIP: This is a placeholder for the toolset class
export class Toolset {
    constructor(options?: ToolsetOptions);

    initialize(): Promise<void>;
}
