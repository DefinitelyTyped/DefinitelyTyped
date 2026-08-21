import { EventEmitter } from "@xmpp/events";
import { SASL2 } from "@xmpp/sasl2";
import SASLFactory from "saslmechanisms";

import { Client } from "../..";

export interface Token {
    mechanism: string;
    token: string;
    expiry: string;
}

export interface FAST extends EventEmitter {
    mechanism: null | string;
    mechanisms: string[];

    saveToken(t: Token): Promise<void>;
    fetchToken(): Promise<Token | undefined>;
    deleteToken(): Promise<void>;

    save(t: Token): Promise<void>;
    fetch(): Promise<Token | undefined>;
    delete(): Promise<void>;

    saslFactory: SASLFactory;
}

export default function fast(options: { sasl2: SASL2; entity: Client }): FAST;
