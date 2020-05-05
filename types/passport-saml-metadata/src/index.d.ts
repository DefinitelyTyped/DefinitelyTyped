import { FetchConfig } from "./fetch";
import { MetadataReader } from "./reader";

export function fetch(config: FetchConfig): Promise<MetadataReader>;
export { metadata } from "./metadata";
export { claimsToCamelCase, toPassportConfig } from "./passport";
export { MetadataReader } from "./reader";
