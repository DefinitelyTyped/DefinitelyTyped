// Type definitions for sendcloud 1.6
// Project: https://github.com/shanelau/sendcloud
// Definitions by: bangbang93 <https://github.com/bangbang93>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3
/// <reference types="node" />

import { SentMessageInfo } from 'nodemailer';

declare class Sendcloud {
    constructor(apiUser: string, apiKey: string, from: string, name?: string, apiUserBatch?: string);

    readonly EmailList: EmailList;
    readonly ListMember: ListMember;

    send(to: string, subject: string, html: string, options?: SendOptions): Promise<SuccessResp | ErrorResp>;
    sendEmailSmtp(to: string, subject: string, data: string): Promise<SentMessageInfo>;
    templateToOne(
        to: string,
        subject: string,
        templateName: string,
        sub: object,
        options: TemplateSendOptions,
    ): Promise<TemplateSendResponse>;
    sendByTemplate(
        to: string[],
        subject: string,
        templateName: string,
        sub: object,
        options: TemplateSendOptions,
    ): Promise<TemplateSendResponse>;
    sendByMailList(
        to: string,
        subject: string,
        templateName: string,
        options: TemplateSendOptions,
    ): Promise<TemplateSendResponse>;
}

declare class EmailList {
    apiUser: string;
    apiKey: string;

    constructor(apiUser: string, apiKey: string);

    static getListMemberData(
        mail_list_addr: string,
        member_addr: string,
        name: string,
        options: object,
    ): Promise<object>;

    getData(url: string, data: object): Promise<object>;
    getEmailList(data?: EmailListListData): Promise<EmailListResponse>;
    createEmailList(
        address: string,
        name: string,
        options: EmailListCreateOptions,
    ): Promise<EmailListCreateResponse>;
    updateEmailList(address: string, options: EmailListUpdateOptions): Promise<EmailListUpdateResponse>;
    updateListMember(
        mail_list_addr: string,
        member_addr: string,
        name: string,
        options: ListMemberUpdateOptions,
    ): Promise<ListMemberAddResposne>;
}

declare class ListMember {
    apiUser: string;
    apiKey: string;

    constructor(apiUser: string, apiKey: string);

    static getListMemberData(
        mail_list_addr: string,
        member_addr: string,
        name: string,
        options: object,
    ): Promise<object>;

    getData(url: string, data: object): Promise<object>;
    getListMember(mail_list_addr: string, options: ListMemberListOptions): Promise<ListMemberListResponse>;
    addListMember(
        mail_list_addr: string,
        member_addr: string,
        name: string,
        options: ListMemberAddOptions,
    ): Promise<ListMemberAddResposne>;
    deleteListMember(mail_list_addr: string, member_addr: string): Promise<ListMemberDeleteResposne>;
    addToOtherList(sourceList: string, targetList: string): Promise<ListMemberAddResposne[]>;
}

interface EmailListListData {
    start?: number;
    limit?: number;
}

interface EmailListCreateOptions {
    api_user: string;
    api_key: string;
    address?: string;
    start?: number;
    limit?: number;
}

interface EmailListResponse {
    message: 'success';
    count: number;
    lists: Array<{
        created_at: string;
        modify_at: string;
        address: string;
        members_count: number;
        description: string;
        name: string;
    }>;
}

interface EmailListCreateResponse {
    message: 'success';
    list: {
        created_at: string;
        address: string;
        members_count: number;
        description: string;
        name: string;
    };
}

interface EmailListUpdateOptions {
    api_user: string;
    api_key: string;
    address: string;
    toAddress?: string;
    name?: string;
    description?: string;
}

interface EmailListUpdateResponse {
    message: 'success';
    list: {
        modify_at: string;
        address: string;
        members_count: number;
        description: string;
        name: string;
    };
}

interface ListMemberListOptions {
    api_user: string;
    api_key: string;
    mail_list_addr?: string;
    member_addr?: string;
    start?: number;
    end?: number;
}

interface ListMemberListResponse {
    message: 'success';
    total_count: number;
    members: Array<{
        created_at: string;
        modify_at: string;
        address: string;
        name: string;
        subscribed: string;
        vars: object;
    }>;
}

interface ListMemberAddOptions {
    name?: string;
    vars?: string;
    description?: string;
    upsert?: string;
}

interface ListMemberAddResposne {
    message: 'success';
    total_counts: number;
}

interface ListMemberDeleteResposne {
    message: 'success';
    del_count: number;
}

interface ListMemberUpdateOptions {
    name?: string;
    vars?: string;
}

interface SendOptions {
    api_user?: string;
    api_key?: string;
    from?: string;
    to?: string;
    subject?: string;
    html?: string;
    fromname?: string;
    bcc?: string;
    cc?: string;
    replyto?: string;
    label?: number;
    headers?: string;
    files?: string;
    x_smtpapi?: string;
    resp_email_id?: string;
    use_maillist?: string;
    gzip_compress?: string;
}

interface TemplateSendOptions {
    api_user?: string;
    api_key?: string;
    from?: string;
    substitution_vars?: string;
    to?: string;
    subject?: string;
    template_invoke_name?: string;
    fromname?: string;
    replyTo?: string;
    label?: number;
    headers?: string;
    files?: string;
    resp_email_id?: string;
    use_maillist?: string;
    gzip_compress?: string;
}

interface TemplateSendResponse {
    message: 'success';
    email_id_list: string[];
}

interface SuccessResp {
    message: 'success';
    email_id_list: string[];
}

interface ErrorResp {
    message: 'error';
    errors: string[];
}

export = Sendcloud;
