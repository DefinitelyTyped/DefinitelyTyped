import { TurboModule } from "./RCTExport";

export function get<T extends TurboModule>(name: string): T | null;
export function getEnforcing<T extends TurboModule>(name: string): T;
