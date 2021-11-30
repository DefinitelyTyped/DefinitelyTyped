// Type definitions for @xmpp/component 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/component
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component as ComponentCore, jid as xmppJid, xml as xmppXml } from '@xmpp/component-core';
import { IQCallee } from '@xmpp/iq/callee';
import { IQCaller } from '@xmpp/iq/caller';
import { Middleware } from '@xmpp/middleware';
import { Reconnect } from '@xmpp/reconnect';

export function component(options: Options): Component;

export interface Options {
    password?: string | ((authenticate: (password: string) => Promise<void>) => Promise<void>);
    service?: string;
    domain?: string;
}

export interface Component extends ComponentCore {
    entity: Component;
    reconnect: Reconnect<Component>;
    middleware: Middleware<Component>;
    iqCaller: IQCaller<Component>;
    iqCallee: IQCallee<Component>;
}

export const jid: typeof xmppJid;
export const xml: typeof xmppXml;
