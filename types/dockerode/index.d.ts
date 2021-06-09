// Type definitions for dockerode 3.3
// Project: https://github.com/apocas/dockerode
// Definitions by: Carl Winkler <https://github.com/seikho>
//                 Nicolas Laplante <https://github.com/nlaplante>
//                 ByeongHun Yoo <https://github.com/isac322>
//                 Ray Fang <https://github.com/lazarusx>
//                 Marius Meisenzahl <https://github.com/meisenzahl>
//                 Rob Moran <https://github.com/thegecko>
//                 Cameron Diver <https://github.com/CameronDiver>
//                 Pascal Sthamer <https://github.com/p4sca1>
//                 Stuart Thomson <https://github.com/stuartthomson>
//                 Nasreddine Bac Ali <https://github.com/bacali95>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference path="./types/container.d.ts" />
/// <reference path="./types/image.d.ts" />
/// <reference path="./types/volume.d.ts" />
/// <reference path="./types/service.d.ts" />
/// <reference path="./types/task.d.ts" />
/// <reference path="./types/node.d.ts" />
/// <reference path="./types/plugin.d.ts" />
/// <reference path="./types/secret.d.ts" />
/// <reference path="./types/network.d.ts" />
/// <reference path="./types/exec.d.ts" />
/// <reference path="./types/swarm.d.ts" />
/// <reference path="./types/system.d.ts" />
/// <reference path="./types/common.d.ts" />

import * as DockerModem from 'docker-modem';
import { EventEmitter } from 'events';

import * as DockerContainer from './types/container';
import * as DockerImage from './types/image';
import * as DockerVolume from './types/volume';
import * as DockerService from './types/service';
import * as DockerTask from './types/task';
import * as DockerNode from './types/node';
import * as DockerPlugin from './types/plugin';
import * as DockerSecret from './types/secret';
import * as DockerNetwork from './types/network';
import * as DockerExec from './types/exec';
import * as DockerConfig from './types/config';
import { Swarm as DockerSwarm } from './types/swarm';
import { System as DockerSystem } from './types/system';
import { AuthConfig, AuthConfigData, Callback } from './types/common';

declare namespace Dockerode {
    type Container = DockerContainer;

    type Image = DockerImage;

    type Volume = DockerVolume;

    type Service = DockerService;

    type Task = DockerTask;

    type Node = DockerNode;

    type Plugin = DockerPlugin;

    type Secret = DockerSecret;

    type Network = DockerNetwork;

    type Exec = DockerExec;

    type Config = DockerConfig;
}

declare class Dockerode {
    constructor(options?: DockerModem.ConstructorOptions);

    modem: DockerModem;

    createContainer(options: DockerContainer.CreateOptions, callback: Callback<Dockerode.Container>): void;
    createContainer(options: DockerContainer.CreateOptions): Promise<Dockerode.Container>;

    createImage(options: DockerImage.CreateOptions, callback: Callback<NodeJS.ReadableStream>): void;
    createImage(
        auth: AuthConfigData,
        options: DockerImage.CreateOptions,
        callback: Callback<NodeJS.ReadableStream>,
    ): void;
    createImage(options: DockerImage.CreateOptions): Promise<NodeJS.ReadableStream>;
    createImage(auth: AuthConfigData, options: DockerImage.CreateOptions): Promise<NodeJS.ReadableStream>;

    loadImage(
        file: string | NodeJS.ReadableStream,
        options: DockerImage.LoadOptions,
        callback: Callback<NodeJS.ReadableStream>,
    ): void;
    loadImage(file: string | NodeJS.ReadableStream, callback: Callback<NodeJS.ReadableStream>): void;
    loadImage(file: string | NodeJS.ReadableStream, options?: DockerImage.LoadOptions): Promise<NodeJS.ReadableStream>;

    importImage(
        file: string | NodeJS.ReadableStream,
        options: DockerImage.CreateOptions,
        callback: Callback<NodeJS.ReadableStream>,
    ): void;
    importImage(file: string | NodeJS.ReadableStream, callback: Callback<NodeJS.ReadableStream>): void;
    importImage(
        file: string | NodeJS.ReadableStream,
        options?: DockerImage.CreateOptions,
    ): Promise<NodeJS.ReadableStream>;

    buildImage(
        file: string | NodeJS.ReadableStream | DockerImage.BuildContext,
        options: DockerImage.BuildOptions,
        callback: Callback<NodeJS.ReadableStream>,
    ): void;
    buildImage(
        file: string | NodeJS.ReadableStream | DockerImage.BuildContext,
        callback: Callback<NodeJS.ReadableStream>,
    ): void;
    buildImage(
        file: string | NodeJS.ReadableStream | DockerImage.BuildContext,
        options?: DockerImage.BuildOptions,
    ): Promise<NodeJS.ReadableStream>;

    getContainer(id: string): Dockerode.Container;

    getImage(name: string): Dockerode.Image;

    getVolume(name: string): Dockerode.Volume;

    getPlugin(name: string, remote?: string): Dockerode.Plugin;

    getService(id: string): Dockerode.Service;

    getTask(id: string): Dockerode.Task;

    getNode(id: string): Dockerode.Node;

    getNetwork(id: string): Dockerode.Network;

    getSecret(id: string): Dockerode.Secret;

    getExec(id: string): Dockerode.Exec;

    getConfig(id: string): Dockerode.Config;

    listContainers(options: DockerContainer.ListOptions, callback: Callback<DockerContainer.Summary[]>): void;
    listContainers(callback: Callback<DockerContainer.Summary[]>): void;
    listContainers(options?: DockerContainer.ListOptions): Promise<DockerContainer.Summary[]>;

    listImages(options: DockerImage.ListOptions, callback: Callback<DockerImage.Summary[]>): void;
    listImages(callback: Callback<DockerImage.Summary[]>): void;
    listImages(options?: DockerImage.ListOptions): Promise<DockerImage.Summary[]>;

    listServices(options: DockerService.ListOptions, callback: Callback<DockerService.Info[]>): void;
    listServices(callback: Callback<Dockerode.Service[]>): void;
    listServices(options?: DockerService.ListOptions): Promise<DockerService.Info[]>;

    listNodes(options: DockerNode.ListOptions, callback: Callback<DockerNode.Info[]>): void;
    listNodes(callback: Callback<DockerNode.Info[]>): void;
    listNodes(options?: DockerNode.ListOptions): Promise<DockerNode.Info[]>;

    listTasks(options: DockerTask.ListOptions, callback: Callback<DockerTask.Info[]>): void;
    listTasks(callback: Callback<DockerTask.Info[]>): void;
    listTasks(options?: DockerTask.ListOptions): Promise<DockerTask.Info[]>;

    listSecrets(options: DockerSecret.ListOptions, callback: Callback<DockerSecret.Info[]>): void;
    listSecrets(callback: Callback<DockerSecret.Info[]>): void;
    listSecrets(options?: DockerSecret.ListOptions): Promise<DockerSecret.Info[]>;

    listPlugins(options: DockerPlugin.ListOptions, callback: Callback<DockerPlugin.Info[]>): void;
    listPlugins(callback: Callback<DockerPlugin.Info[]>): void;
    listPlugins(options?: DockerPlugin.ListOptions): Promise<DockerPlugin.Info[]>;

    listVolumes(options: DockerVolume.ListOptions, callback: Callback<DockerVolume.ListInfo>): void;
    listVolumes(callback: Callback<DockerVolume.ListInfo>): void;
    listVolumes(options?: DockerVolume.ListOptions): Promise<DockerVolume.ListInfo>;

    listNetworks(options: DockerNetwork.ListOptions, callback: Callback<DockerNetwork.Info[]>): void;
    listNetworks(callback: Callback<DockerNetwork.Info[]>): void;
    listNetworks(options?: DockerNetwork.ListOptions): Promise<DockerNetwork.Info[]>;

    listConfigs(options: DockerConfig.ListOptions, callback: Callback<DockerConfig.Info[]>): void;
    listConfigs(callback: Callback<DockerConfig.Info[]>): void;
    listConfigs(options?: DockerConfig.ListOptions): Promise<DockerConfig.Info[]>;

    createService(options: DockerService.CreateOptions, callback: Callback<Dockerode.Service>): void;
    createService(options: DockerService.CreateOptions): Promise<Dockerode.Service>;
    createService(auth: AuthConfigData, options: DockerService.CreateOptions): Promise<Dockerode.Service>;

    createSecret(options: DockerSecret.CreateOptions, callback: Callback<Dockerode.Secret>): void;
    createSecret(options: DockerSecret.CreateOptions): Promise<Dockerode.Secret>;

    createPlugin(options: string | NodeJS.ReadableStream, callback: Callback<Dockerode.Plugin>): void;
    createPlugin(options: string | NodeJS.ReadableStream): Promise<Dockerode.Plugin>;

    createVolume(options: DockerVolume.CreateOptions, callback: Callback<Dockerode.Volume>): void;
    createVolume(options: DockerVolume.CreateOptions): Promise<Dockerode.Volume>;

    createNetwork(options: DockerNetwork.CreateOptions, callback: Callback<Dockerode.Network>): void;
    createNetwork(options: DockerNetwork.CreateOptions): Promise<Dockerode.Network>;

    searchImages(options: DockerImage.SearchOptions, callback: Callback<DockerImage.SearchResult[]>): void;
    searchImages(options: DockerImage.SearchOptions): Promise<DockerImage.SearchResult[]>;

    pruneImages(options: DockerImage.PruneOptions, callback: Callback<DockerImage.PruneInfo>): void;
    pruneImages(callback: Callback<DockerImage.PruneInfo>): void;
    pruneImages(options?: DockerImage.PruneOptions): Promise<DockerImage.PruneInfo>;

    pruneContainers(options: DockerContainer.PruneOptions, callback: Callback<DockerContainer.PruneInfo>): void;
    pruneContainers(callback: Callback<DockerContainer.PruneInfo>): void;
    pruneContainers(options?: DockerContainer.PruneOptions): Promise<DockerContainer.PruneInfo>;

    pruneVolumes(options: DockerVolume.PruneOptions, callback: Callback<DockerVolume.PruneInfo>): void;
    pruneVolumes(callback: Callback<DockerVolume.PruneInfo>): void;
    pruneVolumes(options?: DockerVolume.PruneOptions): Promise<DockerVolume.PruneInfo>;

    pruneNetworks(options: DockerNetwork.PruneOptions, callback: Callback<DockerNetwork.PruneInfo>): void;
    pruneNetworks(callback: Callback<DockerNetwork.PruneInfo>): void;
    pruneNetworks(options?: DockerNetwork.PruneOptions): Promise<DockerNetwork.PruneInfo>;

    checkAuth(options: AuthConfig, callback: Callback<DockerSystem.AuthInfo>): void;
    checkAuth(options: AuthConfig): Promise<DockerSystem.AuthInfo>;

    info(callback: Callback<DockerSystem.Info>): void;
    info(): Promise<DockerSystem.Info>;

    df(callback: Callback<DockerSystem.DataUsage>): void;
    df(): Promise<DockerSystem.DataUsage>;

    version(callback: Callback<DockerSystem.Version>): void;
    version(): Promise<DockerSystem.Version>;

    ping(callback: Callback<string>): void;
    ping(): Promise<string>;

    getEvents(options: DockerSystem.EventsOptions, callback: Callback<NodeJS.ReadableStream>): void;
    getEvents(callback: Callback<NodeJS.ReadableStream>): void;
    getEvents(options?: DockerSystem.EventsOptions): Promise<NodeJS.ReadableStream>;

    pull(
        repoTag: string,
        options: DockerImage.CreateOptions,
        callback: Callback<NodeJS.ReadableStream>,
        auth?: AuthConfigData,
    ): Dockerode.Image;
    pull(repoTag: string, options?: DockerImage.CreateOptions): Promise<NodeJS.ReadableStream>;

    run(
        image: string,
        cmd: string[],
        outputStream: NodeJS.WritableStream | [NodeJS.WritableStream, NodeJS.WritableStream],
        createOptions: DockerContainer.CreateOptions,
        startOptions: DockerContainer.StartOptions,
        callback: Callback<[any, Dockerode.Container]>,
    ): EventEmitter;
    run(
        image: string,
        cmd: string[],
        outputStream: NodeJS.WritableStream | [NodeJS.WritableStream, NodeJS.WritableStream],
        startOrCreateOptions: DockerContainer.StartOptions | DockerContainer.CreateOptions,
        callback: Callback<[any, Dockerode.Container]>,
    ): EventEmitter;
    run(
        image: string,
        cmd: string[],
        outputStream: NodeJS.WritableStream | [NodeJS.WritableStream, NodeJS.WritableStream],
        callback: Callback<[any, Dockerode.Container]>,
    ): EventEmitter;
    run(
        image: string,
        cmd: string[],
        outputStream: NodeJS.WritableStream | [NodeJS.WritableStream, NodeJS.WritableStream],
        createOptions?: DockerContainer.CreateOptions,
        startOptions?: DockerContainer.StartOptions,
    ): Promise<[any, Dockerode.Container]>;

    swarmInit(options: DockerSwarm.InitOptions, callback: Callback<string>): void;
    swarmInit(options: DockerSwarm.InitOptions): Promise<string>;

    swarmJoin(options: DockerSwarm.JoinOptions, callback: Callback<void>): void;
    swarmJoin(options: DockerSwarm.JoinOptions): Promise<void>;

    swarmLeave(options: DockerSwarm.LeaveOptions, callback: Callback<void>): void;
    swarmLeave(options: DockerSwarm.LeaveOptions): Promise<void>;

    swarmUpdate(options: DockerSwarm.UpdateOptions, callback: Callback<void>): void;
    swarmUpdate(options: DockerSwarm.UpdateOptions): Promise<void>;

    swarmInspect(callback: Callback<DockerSwarm.Info>): void;
    swarmInspect(): Promise<DockerSwarm.Info>;
}

export = Dockerode;
