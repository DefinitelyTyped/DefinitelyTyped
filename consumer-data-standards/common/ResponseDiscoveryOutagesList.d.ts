import { Links, Meta } from "./shared";
import { DiscoveryOutage } from "./DiscoveryOutage"

export interface ResponseDiscoveryOutagesList {
  data: Data;
  links: Links;
  meta?: Meta;
}
export interface Data {
  outages: DiscoveryOutage[] | null;
}

