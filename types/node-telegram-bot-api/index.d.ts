// Type definitions for node-telegram-bot-api 0.28
// Project: https://github.com/yagop/node-telegram-bot-api
// Definitions by: Alex Muench <https://github.com/ammuench>
//                 Agadar <https://github.com/agadar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
/// <reference types="node" />

import { EventEmitter } from 'events';
import { Stream } from "stream";

declare class TelegramBot extends EventEmitter {
    constructor(token: string, opts?: any);

    startPolling(options?: any): Promise<any>;
    initPolling(options?: any): Promise<any>;
    stopPolling(): Promise<any>;
    isPolling(): boolean;
    openWebHook(): Promise<any>;
    closeWebHook(): Promise<any>;
    hasOpenWebHook(): boolean;
    getMe(): Promise<any>;
    setWebHook(url: string, options?: any): Promise<any>;
    deleteWebHook(): Promise<any>;
    getWebHookInfo(): Promise<any>;
    getUpdates(options?: any): Promise<any>;
    processUpdate(update: any): void;
    sendMessage(chatId: number | string, text: string, options?: any): Promise<any>;
    answerInlineQuery(inlineQueryId: string, results: any[], options?: any): Promise<any>;
    forwardMessage(chatId: number | string, fromChatId: number | string, messageId: number | string, options?: any): Promise<any>;
    sendPhoto(chatId: number | string, photo: string | Stream | Buffer, options?: any): Promise<any>;
    sendAudio(chatId: number | string, audio: string | Stream | Buffer, options?: any): Promise<any>;
    sendDocument(chatId: number | string, doc: string | Stream | Buffer, options?: any, fileOpts?: any): Promise<any>;
    sendSticker(chatId: number | string, sticker: string | Stream | Buffer, options?: any): Promise<any>;
    sendVideo(chatId: number | string, video: string | Stream | Buffer, options?: any): Promise<any>;
    sendVideoNote(chatId: number | string, videoNote: string | Stream | Buffer, options?: any): Promise<any>;
    sendVoice(chatId: number | string, voice: string | Stream | Buffer, options?: any): Promise<any>;
    sendChatAction(chatId: number | string, action: string): Promise<any>;
    kickChatMember(chatId: number | string, userId: string): Promise<any>;
    unbanChatMember(chatId: number | string, userId: string): Promise<any>;
    restrictChatMember(chatId: number | string, userId: string, options?: any): Promise<any>;
    promoteChatMember(chatId: number | string, userId: string, options?: any): Promise<any>;
    exportChatInviteLink(chatId: number | string): Promise<any>;
    sendChatPhoto(chatId: number | string, photo: string | Stream | Buffer): Promise<any>;
    deleteChatPhoto(chatId: number | string): Promise<any>;
    setChatTitle(chatId: number | string, title: string): Promise<any>;
    setChatDescription(chatId: number | string, description: string): Promise<any>;
    pinChatMessage(chatId: number | string, messageId: string): Promise<any>;
    unpinChatMessage(chatId: number | string): Promise<any>;
    answerCallbackQuery(options?: any): Promise<any>;
    editMessageText(text: string, options?: any): Promise<any>;
    editMessageCaption(caption: string, options?: any): Promise<any>;
    editMessageReplyMarkup(replyMarkup: any, options?: any): Promise<any>;
    getUserProfilePhotos(userId: number | string, options?: any): Promise<any>;
    sendLocation(chatId: number | string, latitude: number, longitude: number, options?: any): Promise<any>;
    sendVenue(chatId: number | string, latitude: number, longitude: number, title: string, address: string, options?: any): Promise<any>;
    sendContact(chatId: number | string, phoneNumber: string, firstName: string, options?: any): Promise<any>;
    getFile(fileId: string): Promise<any>;
    getFileLink(fileId: string): Promise<any>;
    downloadFile(fileId: string, downloadDir: string): Promise<any>;
    onText(regexp: RegExp, callback: ((msg: any, match: any[]) => void)): void;
    removeTextListener(regexp: RegExp): any;
    onReplyToMessage(chatId: number | string, messageId: number | string, callback: ((msg: any) => void)): number;
    removeReplyListener(replyListenerId: number): any;
    getChat(chatId: number | string): Promise<any>;
    getChatAdministrators(chatId: number | string): Promise<any>;
    getChatMembersCount(chatId: number | string): Promise<any>;
    getChatMember(chatId: number | string, userId: string): Promise<any>;
    leaveChat(chatId: number | string): Promise<any>;
    sendGame(chatId: number | string, gameShortName: string, options?: any): Promise<any>;
    setGameScore(userId: string, score: number, options?: any): Promise<any>;
    getGameHighScores(userId: string, options?: any): Promise<any>;
    deleteMessage(chatId: number | string, messageId: string, options?: any): Promise<any>;
    sendInvoice(chatId: number | string, title: string, description: string, payload: string, providerToken: string, startParameter: string,
                currency: string, prices: any[], options?: any): Promise<any>;
    answerShippingQuery(shippingQueryId: string, ok: boolean, options?: any): Promise<any>;
    answerPreCheckoutQuery(preCheckoutQueryId: string, ok: boolean, options?: any): Promise<any>;
}

export = TelegramBot;
