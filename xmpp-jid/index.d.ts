// Type definitions for @xmpp/jid 0.0
// Project: github.com/node-xmpp/node-xmpp/
// Definitions by: PJakcson <https://github.com/PJakcson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
import {JID} from './lib/JID';

export declare function createJID(local: string, domain: string, resource: string): JID;

export {JID} from './lib/JID';

export declare function equal(a: JID, b: JID): boolean;
export declare function is(a: any): boolean;
