import { DiscoveryStatusType } from "./enums";
import { Links, Meta } from "./shared";

export interface ResponseCommonDiscoveryStatus {
  data: Data;
  links: Links;
  meta?: Meta;
}
export interface Data {
  status: DiscoveryStatusType;
  explanation?: string;
  detectionTime?: string;
  expectedResolutionTime?: string;
  updateTime: string;
}

