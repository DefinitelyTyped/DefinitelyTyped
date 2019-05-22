// Type definitions for Express 4.16
// Project: http://expressjs.com
// Definitions by: Vladyslav Kyrychenko <https://github.com/kirick1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4.5

/// <reference types="node" />

declare module 'bootbot' {
    export enum MessagingType {
        RESPONSE = 'RESPONSE',
        UPDATE = 'UPDATE',
        MESSAGE_TAG = 'MESSAGE_TAG'
    }
    export enum AttachmentType {
        IMAGE = 'image',
        AUDIO = 'audio',
        VIDEO = 'video',
        FILE = 'file',
        TEMPLATE = 'template'
    }
    export enum Action {
        MARK_SEEN = 'mark_seen',
        TYPING_ON = 'typing_on',
        TYPING_OFF = 'typing_off'
    }
    export enum NotificationType {
        REGULAR = 'REGULAR',
        SILENT_PUSH = 'SILENT_PUSH',
        NO_PUSH = 'NO_PUSH'
    }
    export enum MessageTag {
        BUSINESS_PRODUCTIVITY = 'BUSINESS_PRODUCTIVITY',
        COMMUNITY_ALERT = 'COMMUNITY_ALERT',
        CONFIRMED_EVENT_REMINDER = 'CONFIRMED_EVENT_REMINDER',
        NON_PROMOTIONAL_SUBSCRIPTION = 'NON_PROMOTIONAL_SUBSCRIPTION',
        PAIRING_UPDATE = 'PAIRING_UPDATE',
        APPLICATION_UPDATE = 'APPLICATION_UPDATE',
        ACCOUNT_UPDATE = 'ACCOUNT_UPDATE',
        PAYMENT_UPDATE = 'PAYMENT_UPDATE',
        PERSONAL_FINANCE_UPDATE = 'PERSONAL_FINANCE_UPDATE',
        SHIPPING_UPDATE = 'SHIPPING_UPDATE',
        RESERVATION_UPDATE = 'RESERVATION_UPDATE',
        ISSUE_RESOLUTION = 'ISSUE_RESOLUTION',
        APPOINTMENT_UPDATE = 'APPOINTMENT_UPDATE',
        GAME_EVENT = 'GAME_EVENT',
        TRANSPORTATION_UPDATE = 'TRANSPORTATION_UPDATE',
        FEATURE_FUNCTIONALITY_UPDATE = 'FEATURE_FUNCTIONALITY_UPDATE',
        TICKET_UPDATE = 'TICKET_UPDATE'
    }
    export enum ButtonType {
        POSTBACK = 'postback',
        NESTED = 'nested',
        WEB_URL = 'web_url',
        RECEIPT = 'receipt',
        ACCOUNT_LINK = 'account_link',
        ACCOUNT_UNLINK = 'account_unlink',
        ELEMENT_SHARE = 'element_share'
    }
    export enum ContentType {
        TEXT = 'text',
        EMAIL = 'user_email',
        LOCATION = 'location',
        PHONE_NUMBER = 'user_phone_number'
    }
    export enum WebviewHeightRatioType {
        COMPACT = 'compact',
        TALL = 'tall',
        FULL = 'full'
    }
    export enum WebviewShareButtonType {
        HIDE = 'hide'
    }

    export interface MessagePayload {
        message: {
            text: string
        }
    }
    export interface LocationPayloadAttachment {
        title: string
        url: string
        type: ContentType
        payload: {
            coordinates: {
                lat: number
                long: number
            }
        }
    }
    export interface LocationPayload {
        message: {
            attachments: Array<LocationPayloadAttachment>
        }
    }
    export interface PostbackPayload {
        postback: {
            payload: string
        }
    }
    export type Payload = MessagePayload | LocationPayload | PostbackPayload
    export interface FunctionDataParameterType {
        captured: boolean
    }
    export type FunctionType = (payload: Payload, chat: Chat, data?: FunctionDataParameterType) => any


    export interface QuickReplyButton {
        content_type?: ContentType
        title: string
        payload?: string | number
        image_url?: string
    }
    export interface CallButton {
        type: ContentType.PHONE_NUMBER
        title: string
        payload: string
    }
    export interface LogInButton {
        type: ButtonType.ACCOUNT_LINK,
        url: string
    }
    export interface LogOutButton {
        type: ButtonType.ACCOUNT_UNLINK
    }
    export interface PostbackButton {
        type: ButtonType.POSTBACK
        title: string
        payload: string
    }
    export interface ShereButton {
        type: ButtonType.ELEMENT_SHARE
        share_contents?: any
    }
    export interface URLButton {
        type: ButtonType.WEB_URL
        title: string
        url: string
        webview_height_ration?: WebviewHeightRatioType
        messenger_extensions?: boolean
        fallback_url?: string
        webview_share_button?: WebviewShareButtonType
    }
    export type Button = QuickReplyButton | CallButton | LogInButton | LogOutButton | PostbackButton | ShereButton | URLButton


    export interface SendMessageOptions {
        typing?: boolean | number | false
        messagingType?: MessagingType
        notificationType?: NotificationType
        tag?: MessageTag
        onDelivery?: FunctionType
        onRead?: FunctionType
        topElementStyle?: string
    }
    export interface QuickReply {
        content_type: string
        title: string
        payload: string | number
        image_url?: string
    }
    export interface Message {
        text: string
        attachment: Attachment
        quick_reply?: Array<QuickReply>
        metadata?: string
    }
    export interface Recipient {
        id: string
        phone_number?: string
        user_ref?: string
        name?: {
            first_name?: string
            last_name?: string
        }
    }
      export interface Attachment {
        type: AttachmentType,
        payload: object
      }
      export interface Element {
        title: string
        subtitle?: string
        image_url?: string
        default_action?: object
        buttons: Array<Button>
      }
      export interface Profile {
        id?: number
        first_name?: string
        last_name?: string
        profile_pic?: string
        locale?: string
        gender?: string
      }
      export interface Options {
        accessToken: string
        verifyToken: string
        appSecret: string
        webhook?: string
        broadcastEchoes?: boolean
        graphApiVersion?: string
    }
    export interface BootBot extends Options {
        start (port?: number): void
        close (): Promise<void>
        on (event: string, handler: FunctionType): void
        sendTextMessage (recipientId: Recipient | string, text: string, quickReplies: Array<QuickReply>, options?: SendMessageOptions): Promise<void>
        sendButtonTemplate (recipientId: Recipient | string, text: string, buttons: Array<Button>, options?: SendMessageOptions): Promise<void>
        sendGenericTemplate (recipientId: Recipient | string, elements: Array<Element>, options?: SendMessageOptions): Promise<void>
        sendListTemplate (recipientId: Recipient | string, elements: Array<Element>, buttons: Array<string | Button>, options?: SendMessageOptions): Promise<void>
        sendTemplate (recipientId: Recipient | string, payload: object, options?: SendMessageOptions): Promise<void>
        sendAttachment (recipientId: Recipient | string, type: AttachmentType | string, url: string, quickReplies: Array<QuickReply>, options?: SendMessageOptions): Promise<void>
        sendAction (recipientId: Recipient | string, action: Action, options?: SendMessageOptions): Promise<void>
        sendMessage (recipientId: Recipient | string, message: Message, options?: SendMessageOptions): Promise<void>
        sendRequest (body: object, endpoint: string, method: string): Promise<void>
        sendThreadRequest (body: object, method: string): Promise<void>
        sendProfileRequest (body: object, method: string): Promise<void>
        sendTypingIndicator (recipientId: Recipient | string, milliseconds: number): Promise<void>
        getUserProfile (userId: string): Promise<Profile>
        setGreetingText (text: string | Array<object>): void
        setGetStartedButton (action: string | FunctionType): void
        deleteGetStartedButton (): void
        setPersistentMenu (buttons: Array<string | Button>, disableInput?: boolean): void
        deletePersistentMenu (): void
        say (recipientId: Recipient | string, message: string | Message | Array<any>, options?: SendMessageOptions): Promise<any>
        hear (keywords: string | RegExp | Array<any>, callback: FunctionType): any
        module (factory: FunctionType): void
        conversation (recipientId: Recipient | string, factory: FunctionType): any
        handleFacebookData (data: object | any): any
    }
    export interface Chat {
        bot: BootBot
        userId: string
        say (message: Message, options: SendMessageOptions): Promise<void>
        sendTextMessage (text: string, quickReplies: Array<QuickReply | string>, options?: SendMessageOptions): Promise<void>
        sendButtonTemplate (text: string, buttons: Array<string | Button>, options?: SendMessageOptions): Promise<void>
        sendGenericTemplate (cards: Array<Element>, options?: SendMessageOptions | Function): Promise<void>
        sendListTemplate (elements: Array<Element>, buttons: Array<string | Button>, options?: SendMessageOptions): Promise<void>
        sendTemplate (payload: object, options?: SendMessageOptions): Promise<void>
        sendAttachment (type: AttachmentType, url: string, quickReplies: Array<QuickReply>, options?: SendMessageOptions): Promise<void>
        sendAction (action: string, options?: SendMessageOptions): Promise<void>
        sendMessage (message: Message, options?: SendMessageOptions): Promise<void>
        sendRequest (body: object, endpoint: string, method: string): Promise<void>
        sendTypingIndicator (milliseconds: number): Promise<void>
        getUserProfile (): Promise<Profile>
        conversation (factory: FunctionType): void
    }
    export interface Conversation extends Chat {
        bot: BootBot
        userId: string
        ask (question: string | object | Array<any>, answer: FunctionType, callbacks?: Array<FunctionType>, options?: SendMessageOptions): void
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
