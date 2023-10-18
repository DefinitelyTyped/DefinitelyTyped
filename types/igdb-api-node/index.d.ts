import { Apicalypse, ApicalypseConfig } from "apicalypse";

export function getTagNumber(category: number, id: number): number;

declare function igdb(clientId?: string, appAccessToken?: string, opts?: ApicalypseConfig): Apicalypse;
export default igdb;
