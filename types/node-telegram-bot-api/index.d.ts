// Type definitions for node-telegram-bot-api 0.27
// Project: https://github.com/yagop/node-telegram-bot-api
// Definitions by: Alex Muench <https://github.com/ammuench>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class TelegramBot {
    constructor(token: string, opts?: any);

    startPolling(options?: object): Promise<any>;
    initPolling(options?: object): Promise<any>;
    stopPolling(): Promise<any>;
    isPolling(): boolean;
    openWebHook(): Promise<any>;
    closeWebHook(): Promise<any>;
    hasOpenWebHook(): boolean;
    getMe(): Promise<any>;
    setWebHook(url: string, options?: object): Promise<any>;
    deleteWebHook(): Promise<any>;
    getWebHookInfo(): Promise<any>;
    getUpdates(options?: object): Promise<any>;
    processUpdate(update: any): void;
    sendMessage(chatId: number | string, text: string, options?: object): Promise<any>;
    answerInlineQuery(inlineQueryId: string, results: any[], options?: object): Promise<any>;
    forwardMessage(chatId: number | string, fromChatId: number | string, messageId: number | string, options?: object): Promise<any>;
    sendPhoto(chatId: number | string, photo: any, options?: object): Promise<any>;
    sendAudio(chatId: number | string, audio: any, options?: object): Promise<any>;
    sendDocument(chatId: number | string, doc: any, options?: object, fileOpts?: object): Promise<any>;
    sendSticker(chatId: number | string, sticker: any, options?: object): Promise<any>;
    sendVideo(chatId: number | string, video: any, options?: object): Promise<any>;
    sendVoice(chatId: number | string, voice: any, options?: object): Promise<any>;
    sendChatAction(chatId: number | string, action: string): Promise<any>;
    kickChatMember(chatId: number | string, userId: string): Promise<any>;
    unbanChatMember(chatId: number | string, userId: string): Promise<any>;
    answerCallbackQuery(callbackQueryId: number | string, text: string, showAlert: boolean, options?: object): Promise<any>;
    editMessageText(text: string, options?: object): Promise<any>;
    editMessageCaption(caption: string, options?: object): Promise<any>;
    editMessageReplyMarkup(replyMarkup: object, options?: object): Promise<any>;
    getUserProfilePhotos(userId: string, options?: object): Promise<any>;
    sendLocation(chatId: number | string, latitude: number, longitude: number, options?: object): Promise<any>;
    sendVenue(chatId: number | string, latitude: number, longitude: number, title: string, address: string, options?: object): Promise<any>;
    sendContact(chatId: number | string, phoneNumber: string, firstName: string, options?: object): Promise<any>;
    getFile(fileId: string): Promise<any>;
    getFileLink(fileId: string): Promise<any>;
    downloadFile(fileId: string, downloadDir: string): Promise<any>;
    onText(regexp: any, callback: ((msg: any, match: any[]) => void)): void;
    onReplyToMessage(chatId: number | string, messageId: number | string, callback: ((msg: any) => void)): number;
    removeReplyListener(replyListenerId: number): object;
    getChat(chatId: number | string): Promise<any>;
    getChatAdministrators(chatId: number | string): Promise<any>;
    getChatMembersCount(chatId: number | string): Promise<any>;
    getChatMember(chatId: number | string, userId: string): Promise<any>;
    leaveChat(chatId: number | string): Promise<any>;
    sendGame(chatId: number | string, gameShortName: string, options?: object): Promise<any>;
    setGameScore(userId: string, score: number, options?: object): Promise<any>;
    getGameHighScores(userId: string, options?: object): Promise<any>
}

export = TelegramBot;