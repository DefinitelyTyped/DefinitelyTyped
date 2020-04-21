// Type definitions for sendcloud 1.6.3
// Project: https://github.com/shanelau/sendcloud
// Definitions by: bangbang93 <https://github.com/bangbang93>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import {SentMessageInfo} from 'nodemailer'

declare class Sendcloud {
    constructor(
        apiUser: string,
        apiKey: string,
        from: string,
        name?: string,
        apiUserBatch?: string,
    )

    public readonly EmailList: EmailList
    public readonly ListMember: ListMember

    public send(to: string, subject: string, html: string, options?: ISendOptions): Promise<ISuccessResp | IErrorResp>
    public sendEmailSmtp(to: string, subject: string, data: string): Promise<SentMessageInfo>
    public templateToOne(to: string, subject: string, templateName: string, sub: object, options: ITemplateSendOptions): Promise<ITemplateSendResponse>
    public sendByTemplate(to: string[], subject: string, templateName: string, sub: object, options: ITemplateSendOptions): Promise<ITemplateSendResponse>
    public sendByMailList(to: string, subject: string, templateName: string, options: ITemplateSendOptions): Promise<ITemplateSendResponse>
}

declare class EmailList {
    public apiUser: string
    public apiKey: string

    constructor(
        apiUser: string,
        apiKey: string,
    )

    public static getListMemberData(mail_list_addr: string, member_addr: string, name: string, options: object): Promise<object>

    public getData(url: string, data: object): Promise<object>
    public getEmailList(data?: IEmailListListData): Promise<IEmailListResponse>
    public createEmailList(address: string, name: string, options: IEmailListCreateOptions): Promise<IEmailListCreateResponse>
    public updateEmailList(address: string, options: IEmailListUpdateOptions): Promise<IEmailListUpdateResponse>
    public updateListMember(mail_list_addr: string, member_addr: string, name: string, options: IListMemberUpdateOptions): Promise<IListMemberAddResposne>
}

declare class ListMember {
    public apiUser: string
    public apiKey: string

    constructor(
        apiUser: string,
        apiKey: string,
    )

    public static getListMemberData(mail_list_addr: string, member_addr: string, name: string, options: object): Promise<object>

    public getData(url: string, data: object): Promise<object>
    public getListMember(mail_list_addr: string, options: IListMemberListOptions): Promise<IListMemberListResponse>
    public addListMember(mail_list_addr: string, member_addr: string, name: string, options: IListMemberAddOptions): Promise<IListMemberAddResposne>
    public deleteListMember(mail_list_addr: string, member_addr: string): Promise<IListMemberDeleteResposne>
    public addToOtherList(sourceList: string, targetList: string): Promise<IListMemberAddResposne[]>
}

interface IEmailListListData {
    start?: number
    limit?: number
}

interface IEmailListCreateOptions {
    api_user: string
    api_key: string
    address?: string
    start?: number
    limit?: number
}

interface IEmailListResponse {
    message: 'success'
    count: number
    lists: {
        created_at: string
        modify_at: string
        address: string
        members_count: number
        description: string
        name: string
    }[]
}

interface IEmailListCreateResponse {
    message: 'success'
    list: {
        created_at: string
        address: string
        members_count: number
        description: string
        name: string
    }
}

interface IEmailListUpdateOptions {
    api_user: string
    api_key: string
    address: string
    toAddress?: string
    name?: string
    description?: string
}

interface IEmailListUpdateResponse {
    message: 'success'
    list: {
        modify_at: string
        address: string
        members_count: number
        description: string
        name: string
    }
}

interface IListMemberListOptions {
    api_user: string
    api_key: string
    mail_list_addr?: string
    member_addr?: string
    start?: number
    end?: number
}

interface IListMemberListResponse {
    message: 'success'
    total_count: number
    members: {
        created_at: string
        modify_at: string
        address: string
        name: string
        subscribed: string
        vars: object
    }[]
}

interface IListMemberAddOptions {
    name?: string
    vars?: string
    description?: string
    upsert?: string
}

interface IListMemberAddResposne {
    message: 'success'
    total_counts: number
}

interface IListMemberDeleteResposne {
    message: 'success'
    del_count: number
}

interface IListMemberUpdateOptions {
    name?: string
    vars?: string
}

interface ISendOptions {
    api_user?: string
    api_key?: string
    from?: string
    to?: string
    subject?: string
    html?: string
    fromname?: string
    bcc?: string
    cc?: string
    replyto?: string
    label?: number
    headers?: string
    files?: string
    x_smtpapi?: string
    resp_email_id?: string
    use_maillist?: string
    gzip_compress?: string
}

interface ITemplateSendOptions {
    api_user?: string
    api_key?: string
    from?: string
    substitution_vars?: string
    to?: string
    subject?: string
    template_invoke_name?: string
    fromname?: string
    replyTo?: string
    label?: number
    headers?: string
    files?: string
    resp_email_id?: string
    use_maillist?: string
    gzip_compress?: string
}

interface ITemplateSendResponse {
    message: 'success'
    email_id_list: string[]
}

interface ISuccessResp {
    message: 'success'
    email_id_list: string[]
}

interface IErrorResp {
    message: 'error'
    errors: string[]
}

export = Sendcloud