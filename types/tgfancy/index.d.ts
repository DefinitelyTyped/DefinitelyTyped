// Type definitions for tgfancy 0.13
// Project: https://github.com/GochoMugo/tgfancy
// Definitions by: Giorgio Garasto <https://github.com/Dabolus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as TelegramBot from 'node-telegram-bot-api';

declare namespace Tgfancy {
    interface ChatIdResolutionOptions {
        resolve(token: string, chatId: number | string, callback: ((error: Error | null, target: any) => void)): void;
    }

    interface EmojificationOptions {
        emojify(text: string): string;
    }

    interface RatelimitingOptions {
        maxRetries?: number;
        timeout?: number;
        notify?(methodName: string, ...args: any[]): void;
        maxBackoff?: number;
    }

    interface WebSocketOptions {
        url: string;
        autoOpen?: boolean;
    }

    interface TgfancyOptions {
        chatIdResolution?: boolean | ChatIdResolutionOptions;
        emojification?: boolean | EmojificationOptions;
        kickWithoutBan?: boolean;
        openshiftWebHook?: boolean;
        orderedSending?: boolean;
        ratelimiting?: boolean | RatelimitingOptions;
        textPaging?: boolean;
        webSocket?: boolean | WebSocketOptions;
    }

    interface ConstructorOptions extends TelegramBot.ConstructorOptions {
        tgfancy?: TgfancyOptions;
    }

    interface ResolvedChat {
        id: number | string;
        username: string;
        type: string;
        when: string;
    }

    interface ResolvedGroupOrChannel extends ResolvedChat {
        title: string;
    }

    interface ResolvedUser extends ResolvedChat {
        first_name: string;
        last_name?: string;
    }
}

declare class Tgfancy extends TelegramBot {
    constructor(token: string, options?: Tgfancy.ConstructorOptions);

    resolveChatId(chatId: string): Promise<Tgfancy.ResolvedChat>;

    openWebSocket(): Promise<undefined>;

    closeWebSocket(): Promise<undefined>;

    hasOpenWebSocket(): boolean;

    kickChatMember(chatId: number | string, userId: number | string, ban?: boolean): Promise<boolean>;
}

export = Tgfancy;
