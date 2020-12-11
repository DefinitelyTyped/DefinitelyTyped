import { LibraryConfiguration } from "@pnp/common";
import { SPConfigurationPart } from "@pnp/sp";
import { GraphConfigurationPart } from "@pnp/graph";
export interface PnPConfiguration extends LibraryConfiguration, SPConfigurationPart, GraphConfigurationPart {
}
export declare function setup(config: PnPConfiguration): void;
