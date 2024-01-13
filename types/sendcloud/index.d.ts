/// <reference types="node" />

import { SentMessageInfo } from "nodemailer";

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
    start?: number | undefined;
    limit?: number | undefined;
}

interface EmailListCreateOptions {
    api_user: string;
    api_key: string;
    address?: string | undefined;
    start?: number | undefined;
    limit?: number | undefined;
}

interface EmailListResponse {
    message: "success";
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
    message: "success";
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
    toAddress?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
}

interface EmailListUpdateResponse {
    message: "success";
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
    mail_list_addr?: string | undefined;
    member_addr?: string | undefined;
    start?: number | undefined;
    end?: number | undefined;
}

interface ListMemberListResponse {
    message: "success";
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
    name?: string | undefined;
    vars?: string | undefined;
    description?: string | undefined;
    upsert?: string | undefined;
}

interface ListMemberAddResposne {
    message: "success";
    total_counts: number;
}

interface ListMemberDeleteResposne {
    message: "success";
    del_count: number;
}

interface ListMemberUpdateOptions {
    name?: string | undefined;
    vars?: string | undefined;
}

interface SendOptions {
    api_user?: string | undefined;
    api_key?: string | undefined;
    from?: string | undefined;
    to?: string | undefined;
    subject?: string | undefined;
    html?: string | undefined;
    fromname?: string | undefined;
    bcc?: string | undefined;
    cc?: string | undefined;
    replyto?: string | undefined;
    label?: number | undefined;
    headers?: string | undefined;
    files?: string | undefined;
    x_smtpapi?: string | undefined;
    resp_email_id?: string | undefined;
    use_maillist?: string | undefined;
    gzip_compress?: string | undefined;
}

interface TemplateSendOptions {
    api_user?: string | undefined;
    api_key?: string | undefined;
    from?: string | undefined;
    substitution_vars?: string | undefined;
    to?: string | undefined;
    subject?: string | undefined;
    template_invoke_name?: string | undefined;
    fromname?: string | undefined;
    replyTo?: string | undefined;
    label?: number | undefined;
    headers?: string | undefined;
    files?: string | undefined;
    resp_email_id?: string | undefined;
    use_maillist?: string | undefined;
    gzip_compress?: string | undefined;
}

interface TemplateSendResponse {
    message: "success";
    email_id_list: string[];
}

interface SuccessResp {
    message: "success";
    email_id_list: string[];
}

interface ErrorResp {
    message: "error";
    errors: string[];
}

export = Sendcloud;
