import { AuthOptions } from "./";

declare function registryUrl(scope: string, npmrc?: Pick<AuthOptions, "npmrc">): string;

export = registryUrl;
