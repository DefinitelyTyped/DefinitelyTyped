// Ref: https://github.com/brave/adblock-rust/blob/master/js/src/lib.rs

/// <reference types="node" />

export interface ResourceType {
    name: string;
    aliases: string[];
    kind: unknown; // FIXME
    content: string;
}

export interface FilterListMetadata {
    homepage: string | null;
    title: string | null;
    expires: number | null;
    redirect: string | null;
}

export interface ParseOptions {
    format: typeof FilterFormat;
    rule_types: typeof RuleTypes;
}

export class Engine {
    constructor(rules: FilterSet, debug: boolean);
    addResource(resource: ResourceType): null;
    check(url: string, source_url: string, request_type: string, debug?: boolean): boolean;
    clearTags(): null;
    deserialize(serialized_handle: ArrayBuffer): null;
    enableTag(tag: string): null;
    getResource(name: string): ResourceType;
    serializeCompressed(): ArrayBuffer;
    serializeRaw(): ArrayBuffer;
    tagExists(tag: string): boolean;
    useResources(resources: ResourceType[]): null;
}

export class FilterSet {
    constructor(debug: boolean);
    addFilter(filter: string, opts?: ParseOptions): null;
    addFilters(rules: string[], opts?: ParseOptions): FilterListMetadata;
    intoContentBlocking(): [unknown, string[]] | null; // FIXME
}

export const FilterFormat: {
    HOSTS: string;
    STANDARD: string;
};

export const RuleTypes: {
    ALL: string;
    COSMETIC_ONLY: string;
    NETWORK_ONLY: string;
};

export function uBlockResources(
    web_accessible_resource_dir: string,
    redirect_resources_path: string,
    scriptlets_path?: string,
): ResourceType[];
