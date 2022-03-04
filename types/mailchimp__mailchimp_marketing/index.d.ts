// Type definitions for @mailchimp/mailchimp_marketing 3.0
// Project: https://github.com/mailchimp/mailchimp-client-lib-codegen
// Definitions by: Jan Müller <https://github.com/rattkin>
//                 Jérémy Barbet <https://github.com/jeremybarbet>
//                 Daniel Castro <https://github.com/odanieldcs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// API Documentation: https://mailchimp.com/developer/marketing/api/

export function setConfig(config: Config): void;

export interface Config {
    apiKey?: string | undefined;
    accessToken?: string | undefined;
    server?: string | undefined;
}

export interface Options {
    skipMergeValidation: boolean;
}

export type Status = 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';

export interface Body {
    status?: Status | undefined;
    email_type?: string | undefined;
    merge_fields?: Record<string, any> | undefined;
    interests?: Record<string, any> | undefined;
    language?: string | undefined;
    vip?: boolean | undefined;
    location?:
        | {
              lat: number;
              lon: number;
          }
        | undefined;
    marketing_permissions?:
        | Array<{
              marketing_permission_id: string;
              enabled: boolean;
          }>
        | undefined;
    ip_signup?: string | undefined;
    timestamp_signup?: string | undefined;
    ip_opt?: string | undefined;
    timestamp_opt?: string | undefined;
}

export interface AddListMemberBody extends Body {
    email_address: string;
    tags?: string[] | undefined;
}

export interface UpdateListMemberBody extends Body {
    email_address?: string | undefined;
}

export interface SetListMemberBody {
    email_address: string;
    status_if_new: Status;
    merge_fields?: Record<string, any> | undefined;
}

export type StatusTag = 'active' | 'inactive';

export interface TagBody {
    name: string;
    status: StatusTag;
}

export interface MemberTagsBody {
    tags: TagBody[];
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
    function setListMember(
        listId: string,
        subscriberHash: string,
        body: SetListMemberBody,
        opts?: Options,
    ): Promise<void>;

    function getListMember(listId: string, subscriberHash: string, opts?: Options): Promise<void>;

    function addListMember(listId: string, body: AddListMemberBody, opts?: Options): Promise<void>;

    function updateListMember(
        listId: string,
        subscriberHash: string,
        body: UpdateListMemberBody,
        opts?: Options,
    ): Promise<void>;

    function deleteListMemberPermanent(listId: string, subscriberHash: string): Promise<void>;

    function updateListMemberTags(listId: string, subscriberHash: string, body: any): Promise<void>;
}
