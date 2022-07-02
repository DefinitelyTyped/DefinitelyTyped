// Type definitions for strophejs-plugin-roster 1.1
// Project: https://github.com/strophe/strophejs-plugin-roster#readme
// Definitions by: LeartS <https://github.com/LeartS>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import { Strophe } from 'strophe.js';

export {};

export type IqCallback = (stanza: Element) => any;
export type IqID = string;
export type RosterSubscriptionState = 'none' | 'to' | 'from' | 'both' | 'remove';
export type PresenceSubscriptionType = 'subscribe' | 'unsubscribe' | 'subscribed' | 'unsubscribed';

export interface RosterResource {
    priority: string;
    show: string;
    status: string;
}

export interface RosterItem {
    name: string;
    jid: string;
    subscription: RosterSubscriptionState;
    ask: string;
    groups: string[];
    resources: { [resourceId: string]: RosterResource };
}

export type RosterUpdateCallback =
    (items: RosterItem[], item: RosterItem, previousItem: RosterItem) => any;
export type PresenceRequestCallback = (from: string) => any;

interface StropheRosterPlugin {
    supportVersioning(): boolean;

    get(userCallback: IqCallback, ver?: string, items?: string[]): IqID;

    registerCallback(callback: RosterUpdateCallback): void;

    registerRequestCallback(callback: PresenceRequestCallback): void;

    findItem(jid: string): RosterItem | false;

    removeItem(jid: string): boolean;

    subscribe(jid: string, message?: string, nick?: string): void;

    unsubscribe(jid: string, message?: string): void;

    authorize(jid: string, message?: string): void;

    unauthorize(jid: string, message?: string): void;

    add(jid: string, name: string, groups: string[], call_back?: IqCallback): IqID;

    update(jid: string, name?: string, groups?: string[], call_back?: IqCallback): IqID;

    remove(jid: string, call_back?: IqCallback): void;
}

/*~ Here, declare the same module as the one you imported above */
declare module 'strophe.js' {
    namespace Strophe {
        interface Connection {
            roster: StropheRosterPlugin;
        }
    }
}

declare global {
    namespace Strophe {
        interface Connection {
            roster: StropheRosterPlugin;
        }
    }
}
