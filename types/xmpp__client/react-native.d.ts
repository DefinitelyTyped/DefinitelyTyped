import * as fullClient from './index';

export function client(...args: Parameters<typeof fullClient.client>): Client;
export type Options = fullClient.Options;
export interface Client extends fullClient.Client {
    mechanisms: Array<{ plain: undefined } | { anonymous: undefined }>;
}
export const jid: typeof fullClient.jid;
export const xml: typeof fullClient.xml;
