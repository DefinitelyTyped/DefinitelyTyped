// Type definitions for @mailchimp/mailchimp_marketing 3.0
// Project: https://github.com/mailchimp/mailchimp-client-lib-codegen
// Definitions by: Jan Müller <https://github.com/rattkin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function setConfig(config: Config): void;

export interface Config {
    apiKey?: string,
    accessToken?: string,
    server?: string
}

export interface SetListMemberOptions {
    skipMergeValidation: boolean
}

export interface SetListMemberBody {
    email_address: string,
    status_if_new: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional'
    merge_fields?: { [key: string]: any }
}


/*~ If there are types, properties, or methods inside dotted names
*~ of the module, declare them inside a 'namespace'.
*/
export namespace lists {
    /*~ For example, given this definition, someone could write:
    *~   import { subProp } from 'yourModule';
    *~   subProp.foo();
    *~ or
    *~   import * as yourMod from 'yourModule';
    *~   yourMod.subProp.foo();
    */
    export function setListMember(listId: string, subscriberHash: string, body: SetListMemberBody, opts?: SetListMemberOptions): Promise<void>
    export function getListMember(listId: string, subscriberHash: string, opts?: SetListMemberOptions): Promise<void>;
}
