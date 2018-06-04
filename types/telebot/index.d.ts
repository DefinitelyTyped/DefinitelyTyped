// Type definitions for telebot 1.2
// Project: https://github.com/mullwar/telebot
// Definitions by: Simone Mariotti <https://github.com/mariotsi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
export = telebot;
declare namespace telebot {
    interface config {
        token: string; // Required. Telegram Bot API token.
        polling?: {
            // Optional. Use polling.
            interval?: number; // Optional. How often check updates (in ms).
            timeout?: number; // Optional. Update polling timeout (0 - short polling).
            limit?: number; // Optional. Limits the number of updates to be retrieved.
            retryTimeout?: number; // Optional. Reconnecting timeout (in ms).
            proxy?: string; // Optional. An HTTP proxy to be used.
        };
        webhook?: {
            // Optional. Use webhook instead of polling.
            key?: string; // Optional. Private key for server.
            cert?: string; // Optional. key.
            url?: string; // HTTPS url to send updates to.
            host?: string; // Webhook server host.
            port?: number; // Server port.
            maxConnections?: number; // Optional. Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
        };
        allowedUpdates?: string[]; // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
        usePlugins?: string[]; // Optional. Use build-in plugins from pluginFolder.
        pluginFolder?: string; // Optional. Plugin folder location relative to telebot package.
        pluginConfig?: any;
    }

    interface module {
        id: string;
        defaultConfig: any;
        plugin(...args: any[]): void;
    }

    type genericCb = (...args: any[]) => any;

    class AnswerList {
        constructor(id: string, opt?: any);
        add(type: string, set?: any): any;
        results(): string;
        addArticle(set?: any): any;
        addPhoto(set?: any): any;
        addVideo(set?: any): any;
        addGif(set?: any): any;
        addVideoGif(set?: any): any;
        addSticker(set?: any): any;
        addVoice(set?: any): any;
        addDocument(set?: any): any;
        addLocation(set?: any): any;
        addVenue(set?: any): any;
        addGame(set?: any): any;
        // Cached methods
        cachedPhoto(set?: any): any;
        cachedGif(set?: any): any;
        cachedVideoGif(set?: any): any;
        cachedSticker(set?: any): any;
        cachedDocument(set?: any): any;
        cachedVideo(set?: any): any;
        cachedVoice(set?: any): any;
        cachedAudio(set?: any): any;
    }
}

declare class telebot {
    constructor(config: string | telebot.config);

    plug(module: telebot.module): void;

    use(module: telebot.module): void;

    start(...args: any[]): void;

    connect(...args: any[]): void;

    stop(message: string): void;

    getUpdates(
        offset: number,
        limit: number,
        timeout: number,
        allowed_updates: string | string[]
    ): void;

    receiveUpdates(updateList: any[]): Promise<any>;

    request(url: string, form: any, data: any): Promise<any>;

    mod(names: string | string[], fn: telebot.genericCb): any;

    modRun(name: string, data: any): any;

    removeMod(name: string, fn: telebot.genericCb): boolean;

    on(
        types: string | string[] | RegExp,
        fn: telebot.genericCb,
        opt?: any
    ): boolean;

    event(
        types: string | string[],
        data: any,
        self?: any
    ): Promise<any>;

    cleanEvent(type: string): boolean;

    removeEvent(type: string, fn: telebot.genericCb): boolean;

    destroyEvent(type: string): boolean;

    properties(form: any, opt: any): any;

    static addMethods(...methods: Array<telebot.genericCb | any>): any;

    // methods.js
    keyboard(buttons: any[][], opt?: any): any;

    button(type: string, text?: string): any;

    inlineKeyboard(inlineButtons: any[][]): any;

    inlineQueryKeyboard(config: any[][]): any;

    inlineButton(text: string, opt?: any): any;

    answerList(id: string, opt?: any): telebot.AnswerList;

    // Telegram API
    getMe(): any;

    answerQuery(...param: any[]): boolean;

    sendMessage(
        chat_id: number | string,
        text: string,
        opt?: {
            parseMode?: string;
            replyToMessage?: number;
            replyMarkup?: any;
            notification?: boolean;
            webPreview?: boolean;
        }
    ): any;

    forwardMessage(
        chat_id: number | string,
        from_chat_id: number | string,
        message_id: number,
        opt?: { notification?: boolean }
    ): any;

    deleteMessage(
        chat_id: number | string,
        from_message_id: number
    ): boolean;

    sendPhoto(
        chat_id: number | string,
        file: string | Buffer | NodeJS.ReadableStream | any,
        opt?: {
            caption?: string;
            fileName?: string;
            serverDownload?: boolean;
            replyToMessage?: number;
            replyMarkup?: any;
            notification?: boolean;
        }
    ): any;

    sendAudio(
        chat_id: number | string,
        file: string | Buffer | NodeJS.ReadableStream | any,
        opt?: {
            title?: string;
            performer?: string;
            duration?: number;
            caption?: string;
            fileName?: string;
            serverDownload?: boolean;
            replyToMessage?: number;
            replyMarkup?: any;
            notification?: boolean;
        }
    ): any;

    sendDocument(
        chat_id: number | string,
        file: string | Buffer | NodeJS.ReadableStream | any,
        opt?: {
            caption?: string;
            fileName?: string;
            serverDownload?: boolean;
            replyToMessage?: number;
            replyMarkup?: any;
            notification?: boolean;
        }
    ): any;

    sendSticker(
        chat_id: number | string,
        file: string | Buffer | NodeJS.ReadableStream | any,
        opt?: {
            fileName?: string;
            serverDownload?: boolean;
            replyToMessage?: number;
            replyMarkup?: any;
            notification?: boolean;
        }
    ): any;

    sendVideo(
        chat_id: number | string,
        file: string | Buffer | NodeJS.ReadableStream | any,
        opt?: {
            duration?: number;
            width?: number;
            height?: number;
            caption?: string;
            fileName?: string;
            serverDownload?: boolean;
            replyToMessage?: number;
            replyMarkup?: any;
            notification?: boolean;
        }
    ): any;

    sendVideoNote(
        chat_id: number | string,
        file: string | Buffer | NodeJS.ReadableStream | any,
        opt?: {
            duration?: number;
            fileName?: string;
            serverDownload?: boolean;
            replyToMessage?: number;
            replyMarkup?: any;
            notification?: boolean;
        }
    ): any;

    sendVoice(
        chat_id: number | string,
        file: string | Buffer | NodeJS.ReadableStream | any,
        opt?: {
            duration?: number;
            caption?: string;
            fileName?: string;
            serverDownload?: boolean;
            replyToMessage?: number;
            replyMarkup?: any;
            notification?: boolean;
        }
    ): any;

    sendLocation(
        chat_id: number | string,
        coords: [number, number],
        opt?: { replyToMessage?: number; replyMarkup?: any; notification?: boolean }
    ): any;

    sendVenue(
        chat_id: number | string,
        coords: [number, number],
        title: string,
        address: string,
        opt?: {
            foursquareId?: string;
            replyToMessage?: number;
            replyMarkup?: any;
            notification?: boolean;
        }
    ): any;

    sendContact(
        chat_id: number | string,
        number: string,
        firstName: string,
        lastName?: string,
        opt?: { replyToMessage?: number; replyMarkup?: any; notification?: boolean }
    ): any;

    sendAction(chat_id: number | string, action: string): boolean;

    sendGame(
        chat_id: number | string,
        game_short_name: string,
        opt?: { replyToMessage?: number; replyMarkup?: any; notification?: boolean }
    ): any;

    setGameScore(
        user_id: number,
        score: number,
        opt?: {
            force?: boolean;
            disableEditMessage?: boolean;
            chatId?: number;
            messageId?: number;
            inlineMessageId?: string;
        }
    ): boolean | Error | any;

    getGameHighScores(
        user_id: number,
        opt?: { chatId?: number; messageId?: number; inlineMessageId?: string }
    ): any[];

    getUserProfilePhotos(
        user_id: number,
        opt?: { offset?: number; limit?: number }
    ): any;

    getFile(file_id: string): any;

    sendInvoice(
        chat_id: number | string,
        invoiceDetails: {
            title: string;
            description: string;
            payload: string;
            providerToken: string;
            startParameter: string;
            currency: string;
            prices: any[];
            photo?: { url?: string; width?: number; height?: number };
            need?: {
                name?: boolean;
                phoneNumber?: boolean;
                email?: boolean;
                shippingAddress?: boolean;
            };
            isFlexible?: boolean;
            notification?: boolean;
            replyToMessage?: number;
            replyMarkup?: any;
        }
    ): any;

    getChat(chat_id: number | string): any;

    leaveChat(chat_id: number | string): boolean;

    getChatAdministrators(chat_id: number | string): any[] | any;

    getChatMembersCount(chat_id: number | string): number;

    getChatMember(chat_id: number | string, user_id: number): any;

    kickChatMember(chat_id: number | string, user_id: number): boolean;

    unbanChatMember(chat_id: number | string, user_id: number): boolean;

    editMessageText(
        config: {
            chatId: number | string;
            messageId: number;
            inlineMsgId?: number;
        }|{
            chatId?: number | string;
            messageId?: number;
            inlineMsgId: number;
        },
        text: string
    ): any | boolean;

    editMessageCaption(
        config: {
            chatId: number | string;
            messageId: number;
            inlineMsgId?: number;
        }|{
            chatId?: number | string;
            messageId?: number;
            inlineMsgId: number;
        },
        caption: string
    ): any | boolean;

    editMessageReplyMarkup(
        config: {
            chatId: number | string;
            messageId: number;
            inlineMsgId?: number;
        }|{
            chatId?: number | string;
            messageId?: number;
            inlineMsgId: number;
        },
        replyMarkup: any
    ): any | boolean;

    answerCallbackQuery(
        callback_query_id: string,
        opt?: {
            text?: string;
            url?: string;
            showAlert?: boolean;
            cacheTime?: number;
        }
    ): boolean;

    answerShippingQuery(
        shipping_query_id: string,
        ok: boolean,
        opt?: { shippingOptions?: any[]; errorMessage?: string }
    ): boolean;

    answerPreCheckoutQuery(
        pre_checkout_query_id: string,
        ok: boolean,
        opt?: { errorMessage?: string }
    ): boolean;

    setWebhook(
        url: string,
        certificate?: any,
        allowed_updates?: string[],
        max_connections?: number
    ): boolean;

    getWebhookInfo(): any;

    deleteWebhook(): boolean;
}
