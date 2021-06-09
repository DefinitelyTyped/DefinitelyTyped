import * as DockerModem from 'docker-modem';

import { AuthConfig, AuthConfigData, Callback, GraphDriverData } from './common';
import { Config as ContainerConfig } from './container';

declare namespace Image {
    interface Info {
        Id: string;
        RepoTags?: string[];
        RepoDigests?: string[];
        Parent: string;
        Comment: string;
        Created: string;
        Container: string;
        ContainerConfig?: ContainerConfig;
        DockerVersion: string;
        Author: string;
        Config?: ContainerConfig;
        Architecture: string;
        Os: string;
        OsVersion?: string;
        Size: number;
        VirtualSize: number;
        GraphDriver: GraphDriverData;
        RootFS: {
            Type: string;
            Layers?: string[];
            BaseLayer?: string;
        };
        Metadata?: { LastTagTime?: string };
    }

    type HistoryInfo = Array<{
        Id: string;
        Created: number;
        CreatedBy: string;
        Tags: string[];
        Size: number;
        Comment: string;
    }>;

    interface PushOptions {
        tag?: string;
        authconfig?: AuthConfigData;
    }

    interface TagOptions {
        repo?: string;
        tag?: string;
    }

    interface RemoveOptions {
        force?: boolean;
        noprune?: boolean;
    }

    type RemoveInfo = Array<{
        Untagged?: string;
        Deleted?: string;
    }>;

    interface CreateOptions {
        fromImage?: string;
        fromSrc?: string;
        repo?: string;
        tag?: string;
        message?: string;
        platform?: string;
        authconfig?: AuthConfigData;
    }

    interface LoadOptions {
        quite?: boolean;
    }

    interface BuildOptions {
        dockerfile?: string;
        t?: string;
        extrahosts?: string;
        remote?: string;
        q?: boolean;
        nocache?: boolean;
        cachefrom?: string;
        pull?: string;
        rm?: boolean;
        forcerm?: boolean;
        memory?: number;
        memswap?: number;
        cpushares?: number;
        cpusetcpus?: number;
        cpuperiod?: number;
        cpuquota?: number;
        buildargs?: Record<string, string>;
        shmsize?: number;
        squash?: boolean;
        labels?: Record<string, string>;
        networkmode?: string;
        platform?: string;
        target?: string;
        outputs?: string;
        authconfig?: AuthConfig;
    }

    interface BuildContext {
        context: string;
        src: string[];
    }

    interface ListOptions {
        all?: boolean;
        filters?: ListFilters;
        digests?: boolean;
    }

    type ListFilters =
        | string
        | {
              before?: string[];
              dangling?: boolean[];
              label?: string[];
              reference?: string[];
              since?: string[];
          };

    interface SearchOptions {
        term: string;
        limit?: number;
        filters?: SearchFilters;
    }

    type SearchFilters =
        | string
        | {
              'is-automated'?: boolean[];
              'is-official'?: boolean[];
              stars?: number[];
          };

    interface PruneOptions {
        filters?: PruneFilters;
    }

    type PruneFilters =
        | string
        | {
              dangling?: boolean[];
              until?: string[];
              label?: string[];
          };

    interface PruneInfo {
        ImagesDeleted: Array<{ Untagged: string; Deleted: string }>;
        SpaceReclaimed: number;
    }

    interface SearchResult {
        is_official?: boolean;
        is_automated?: boolean;
        name?: string;
        star_count?: number;
    }

    interface Summary {
        Id: string;
        ParentId: string;
        RepoTags: string[];
        RepoDigests: string[];
        Created: number;
        Size: number;
        SharedSize: number;
        VirtualSize: number;
        Labels: Record<string, string>;
        Containers: number;
    }
}

declare class Image {
    constructor(modem: DockerModem, name: string);

    modem: DockerModem;
    id: string;

    inspect(callback: Callback<Image.Info>): void;
    inspect(): Promise<Image.Info>;

    history(callback: Callback<Image.HistoryInfo>): void;
    history(): Promise<Image.HistoryInfo>;

    get(callback: Callback<NodeJS.ReadableStream>): void;
    get(): Promise<NodeJS.ReadableStream>;

    push(options: Image.PushOptions, callback: Callback<NodeJS.ReadableStream>): void;
    push(callback: Callback<NodeJS.ReadableStream>): void;
    push(options?: Image.PushOptions): Promise<NodeJS.ReadableStream>;

    tag(options: Image.TagOptions, callback: Callback<void>): void;
    tag(callback: Callback<void>): void;
    tag(options?: Image.TagOptions): Promise<void>;

    remove(options: Image.RemoveOptions, callback: Callback<Image.RemoveInfo>): void;
    remove(callback: Callback<Image.RemoveInfo>): void;
    remove(options?: Image.RemoveOptions): Promise<Image.RemoveInfo>;
}

export = Image;
