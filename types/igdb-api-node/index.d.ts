// Type definitions for igdb-api-node 5.0
// Project: https://github.com/igdb/igdb-api-node
// Definitions by: Susam <https://github.com/susam-projects>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Apicalypse, ApicalypseConfig } from "apicalypse";

export function getTagNumber(category: number, id: number): number;

declare function igdb(clientId?: string, appAccessToken?: string, opts?: ApicalypseConfig): Apicalypse;
export default igdb;
