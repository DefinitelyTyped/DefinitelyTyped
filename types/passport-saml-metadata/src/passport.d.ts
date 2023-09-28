import { SamlConfig } from "passport-saml";
import { MetadataReader } from "./reader";

export function claimsToCamelCase(claims: any, claimSchema: any): any;

export function toPassportConfig(reader?: MetadataReader, options?: { multipleCerts: boolean }): SamlConfig;
