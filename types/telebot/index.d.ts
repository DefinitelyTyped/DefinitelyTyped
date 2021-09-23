// Type definitions for telebot 1.2
// Project: https://github.com/mullwar/telebot
// Definitions by: Simone Mariotti <https://github.com/mariotsi>
//                 Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
export = telebot;
declare namespace telebot {
    interface config {
        token: string; // Required. Telegram Bot API token.
        polling?: {
            // Optional. Use polling.
            interval?: number | undefined; // Optional. How often check updates (in ms).
            timeout?: number | undefined; // Optional. Update polling timeout (0 - short polling).
            limit?: number | undefined; // Optional. Limits the number of updates to be retrieved.
            retryTimeout?: number | undefined; // Optional. Reconnecting timeout (in ms).
            proxy?: string | undefined; // Optional. An HTTP proxy to be used.
        } | undefined;
        webhook?: {
            // Optional. Use webhook instead of polling.
            key?: string | undefined; // Optional. Private key for server.
            cert?: string | undefined; // Optional. key.
            url?: string | undefined; // HTTPS url to send updates to.
            host?: string | undefined; // Webhook server host.
            port?: number | undefined; // Server port.
            maxConnections?: number | undefined; // Optional. Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
        } | undefined;
        allowedUpdates?: string[] | undefined; // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
        usePlugins?: string[] | undefined; // Optional. Use build-in plugins from pluginFolder.
        pluginFolder?: string | undefined; // Optional. Plugin folder location relative to telebot package.
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
            parseMode?: string | undefined;
            replyToMessage?: number | undefined;
            replyMarkup?: any;
            notification?: boolean | undefined;
            webPreview?: boolean | undefined;
        }
    ): any;

    forwardMessage(
        chat_id: number | string,
        from_chat_id: number | string,
        message_id: number,
        opt?: { notification?: boolean | undefined }
    ): any;

    deleteMessage(
        chat_id: number | string,
        from_message_id: number
    ): boolean;

    sendPhoto(
        chat_id: number | string,
        file: string | Buffer | NodeJS.ReadableStream | any,
        opt?: {
            caption?: string | undefined;
            fileName?: string | undefined;
            serverDownload?: boolean | undefined;
            replyToMessage?: number | undefined;
            replyMarkup?: any;
            notification?: boolean | undefined;
        }
    ): any;

    sendAudio(
        chat_id: number | string,
        file: string | Buffer | NodeJS.ReadableStream | any,
        opt?: {
            title?: string | undefined;
            performer?: string | undefined;
            duration?: number | undefined;
            caption?: string | undefined;
            fileName?: string | undefined;
            serverDownload?: boolean | undefined;
            replyToMessage?: number | undefined;
            replyMarkup?: any;
            notification?: boolean | undefined;
        }
    ): any;

    sendDocument(
        chat_id: number | string,
        file: string | Buffer | NodeJS.ReadableStream | any,
        opt?: {
            caption?: string | undefined;
            fileName?: string | undefined;
            serverDownload?: boolean | undefined;
            replyToMessage?: number | undefined;
            replyMarkup?: any;
            notification?: boolean | undefined;
        }
    ): any;

    sendSticker(
        chat_id: number | string,
        file: string | Buffer | NodeJS.ReadableStream | any,
        opt?: {
            fileName?: string | undefined;
            serverDownload?: boolean | undefined;
            replyToMessage?: number | undefined;
            replyMarkup?: any;
            notification?: boolean | undefined;
        }
    ): any;

    sendVideo(
        chat_id: number | string,
        file: string | Buffer | NodeJS.ReadableStream | any,
        opt?: {
            duration?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            caption?: string | undefined;
            fileName?: string | undefined;
            serverDownload?: boolean | undefined;
            replyToMessage?: number | undefined;
            replyMarkup?: any;
            notification?: boolean | undefined;
        }
    ): any;

    sendVideoNote(
        chat_id: number | string,
        file: string | Buffer | NodeJS.ReadableStream | any,
        opt?: {
            duration?: number | undefined;
            fileName?: string | undefined;
            serverDownload?: boolean | undefined;
            replyToMessage?: number | undefined;
            replyMarkup?: any;
            notification?: boolean | undefined;
        }
    ): any;

    sendVoice(
        chat_id: number | string,
        file: string | Buffer | NodeJS.ReadableStream | any,
        opt?: {
            duration?: number | undefined;
            caption?: string | undefined;
            fileName?: string | undefined;
            serverDownload?: boolean | undefined;
            replyToMessage?: number | undefined;
            replyMarkup?: any;
            notification?: boolean | undefined;
        }
    ): any;

    sendLocation(
        chat_id: number | string,
        coords: [number, number],
        opt?: { replyToMessage?: number | undefined; replyMarkup?: any; notification?: boolean | undefined }
    ): any;

    sendVenue(
        chat_id: number | string,
        coords: [number, number],
        title: string,
        address: string,
        opt?: {
            foursquareId?: string | undefined;
            replyToMessage?: number | undefined;
            replyMarkup?: any;
            notification?: boolean | undefined;
        }
    ): any;

    sendContact(
        chat_id: number | string,
        number: string,
        firstName: string,
        lastName?: string,
        opt?: { replyToMessage?: number | undefined; replyMarkup?: any; notification?: boolean | undefined }
    ): any;

    sendAction(chat_id: number | string, action: string): boolean;

    sendGame(
        chat_id: number | string,
        game_short_name: string,
        opt?: { replyToMessage?: number | undefined; replyMarkup?: any; notification?: boolean | undefined }
    ): any;

    setGameScore(
        user_id: number,
        score: number,
        opt?: {
            force?: boolean | undefined;
            disableEditMessage?: boolean | undefined;
            chatId?: number | undefined;
            messageId?: number | undefined;
            inlineMessageId?: string | undefined;
        }
    ): boolean | Error | any;

    getGameHighScores(
        user_id: number,
        opt?: { chatId?: number | undefined; messageId?: number | undefined; inlineMessageId?: string | undefined }
    ): any[];

    getUserProfilePhotos(
        user_id: number,
        opt?: { offset?: number | undefined; limit?: number | undefined }
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
            photo?: { url?: string | undefined; width?: number | undefined; height?: number | undefined } | undefined;
            need?: {
                name?: boolean | undefined;
                phoneNumber?: boolean | undefined;
                email?: boolean | undefined;
                shippingAddress?: boolean | undefined;
            } | undefined;
            isFlexible?: boolean | undefined;
            notification?: boolean | undefined;
            replyToMessage?: number | undefined;
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
            inlineMsgId?: number | undefined;
        }|{
            chatId?: number | string | undefined;
            messageId?: number | undefined;
            inlineMsgId: number;
        },
        text: string,
        opt?: {
            parseMode?: string | undefined;
        }
    ): any | boolean;

    editMessageCaption(
        config: {
            chatId: number | string;
            messageId: number;
            inlineMsgId?: number | undefined;
        }|{
            chatId?: number | string | undefined;
            messageId?: number | undefined;
            inlineMsgId: number;
        },
        caption: string
    ): any | boolean;

    editMessageReplyMarkup(
        config: {
            chatId: number | string;
            messageId: number;
            inlineMsgId?: number | undefined;
        }|{
            chatId?: number | string | undefined;
            messageId?: number | undefined;
            inlineMsgId: number;
        },
        replyMarkup: any
    ): any | boolean;

    answerCallbackQuery(
        callback_query_id: string,
        opt?: {
            text?: string | undefined;
            url?: string | undefined;
            showAlert?: boolean | undefined;
            cacheTime?: number | undefined;
        }
    ): boolean;

    answerShippingQuery(
        shipping_query_id: string,
        ok: boolean,
        opt?: { shippingOptions?: any[] | undefined; errorMessage?: string | undefined }
    ): boolean;

    answerPreCheckoutQuery(
        pre_checkout_query_id: string,
        ok: boolean,
        opt?: { errorMessage?: string | undefined }
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
