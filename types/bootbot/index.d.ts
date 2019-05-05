// Type definitions for Express 4.16
// Project: http://expressjs.com
// Definitions by: Vladyslav Kyrychenko <https://github.com/kirick1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4.5

/// <reference types="node" />

declare module 'bootbot' {
    export interface ISendMessageOptions {
        typing?: boolean | number | false
        messagingType?: string | 'RESPONSE'
        tag?: string
        onDelivery?: Function
        onRead?: Function
    }
    export interface IQuickReply {
        content_type: string
        title: string
        payload: string | number
        image_url?: string
    }
    export interface IMessage {
        text: string
        attachment: any
        quick_reply?: Array<IQuickReply>
        metadata?: string
    }
    export interface IOptions {
        accessToken: string
        verifyToken: string
        appSecret: string
        webhook: string
        broadcastEchoes: boolean
        graphApiVersion: string
    }
    export interface IRecipient {
        id: string
    }
    export interface IProfile {
        id: number
        first_name: string
        last_name: string
        profile_pic: string
        locale: string
        gender: string
        messenger_id?: number
      }
    export interface IBootBot {
        accessToken: string
        verifyToken: string
        appSecret: string
        webhook: string
        broadcastEchoes: boolean
        graphApiVersion: string
        start (port?: number): void
        close (): Promise<void>
        on (event: string, handler: Function): void
        sendTextMessage (recipientId: IRecipient | string, text: string, quickReplies: Array<IQuickReply | object>, options?: ISendMessageOptions): Promise<void>
        sendButtonTemplate (recipientId: IRecipient | string, text: string, buttons: Array<string | Button>, options?: ISendMessageOptions): Promise<void>
        sendGenericTemplate (recipientId: IRecipient | string, elements: Array<Element>, options?: SendMessageOptions): Promise<void>
        sendListTemplate (recipientId: IRecipient | string, elements: Array<Element>, buttons: Array<string | Button>, options?: SendMessageOptions): Promise<void>
        sendTemplate (recipientId: IRecipient | string, payload: object, options?: SendMessageOptions): Promise<void>
        sendAttachment (recipientId: IRecipient | string, type: AttachmentType | string, url: string, quickReplies: Array<QuickReply>, options?: SendMessageOptions): Promise<void>
        sendAction (recipientId: IRecipient | string, action: Action | string, options?: SendMessageOptions): Promise<void>
        sendMessage (recipientId: IRecipient | string, message: Message, options?: SendMessageOptions): Promise<void>
        sendRequest (body: object, endpoint: string, method: string): Promise<void>
        sendThreadRequest (body: object, method: string): Promise<void>
        sendProfileRequest (body: object, method: string): Promise<void>
        sendTypingIndicator (recipientId: IRecipient | string, milliseconds: number): Promise<void>
        getUserProfile (userId: string): Promise<IProfile>
        setGreetingText (text: string | Array<object>): void
        setGetStartedButton (action: string | Function): void
        deleteGetStartedButton (): void
        setPersistentMenu (buttons: Array<string | object>, disableInput?: boolean | false): void
        deletePersistentMenu (): void
        say (recipientId: IRecipient | string, message: string | IMessage | Array<any>, options?: SendMessageOptions): Promise<void>
        hear (keywords: string | RegExp | Array<any>, callback: Function): any
        module (factory: Function): void
        conversation (recipientId: IRecipient | string, factory: Function): any
        handleFacebookData (data: object | any): any
    }
    export interface IChat {
        bot: any
        userId: string
        say (message: IMessage, options: ISendMessageOptions): Promise<void>
        sendTextMessage (text: string, quickReplies: Array<IQuickReply | string>, options?: ISendMessageOptions): Promise<void>
        sendButtonTemplate (text: string, buttons: Array<string | Button>, options?: ISendMessageOptions): Promise<void>
        sendGenericTemplate (cards: Array<Element>, options?: ISendMessageOptions | Function): Promise<void>
        sendListTemplate (elements: Array<Element>, buttons: Array<string | Button>, options?: ISendMessageOptions): Promise<void>
        sendTemplate (payload: object, options?: ISendMessageOptions): Promise<void>
        sendAttachment (type: AttachmentType, url: string, quickReplies: Array<QuickReply>, options?: SendMessageOptions): Promise<void>
        sendAction (action: string, options?: SendMessageOptions): Promise<void>
        sendMessage (message: Message, options?: SendMessageOptions): Promise<void>
        sendRequest (body: object, endpoint: string, method: string): Promise<void>
        sendTypingIndicator (milliseconds: number): Promise<void>
        getUserProfile (): Promise<ProfileObject>
        conversation (factory: Function): void
    }
    export interface IConversation extends IChat {
        bot: IBootBot
        userId: string
        ask (question: string | object | Array<any>, answer: Function, callbacks?: Array<Function>, options?: SendMessageOptions): void
        respond (payload: object, data: object): Promise<void>
        isActive (): boolean
        isWaitingForAnswer (): boolean
        stopWaitingForAnswer (): void
        start (): void
        end (): Promise<void>
        get (property: string): any
        set (property: string, value: any): any
    }
}
