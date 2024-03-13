import * as TelegramBot from "node-telegram-bot-api";

declare namespace Tgfancy {
    interface ChatIdResolutionOptions {
        resolve(token: string, chatId: number | string, callback: (error: Error | null, target: any) => void): void;
    }

    interface EmojificationOptions {
        emojify(text: string): string;
    }

    interface RatelimitingOptions {
        maxRetries?: number | undefined;
        timeout?: number | undefined;
        notify?(methodName: string, ...args: any[]): void;
        maxBackoff?: number | undefined;
    }

    interface WebSocketOptions {
        url: string;
        autoOpen?: boolean | undefined;
    }

    interface TgfancyOptions {
        chatIdResolution?: boolean | ChatIdResolutionOptions | undefined;
        emojification?: boolean | EmojificationOptions | undefined;
        kickWithoutBan?: boolean | undefined;
        openshiftWebHook?: boolean | undefined;
        orderedSending?: boolean | undefined;
        ratelimiting?: boolean | RatelimitingOptions | undefined;
        textPaging?: boolean | undefined;
        webSocket?: boolean | WebSocketOptions | undefined;
    }

    interface ConstructorOptions extends TelegramBot.ConstructorOptions {
        tgfancy?: TgfancyOptions | undefined;
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
        last_name?: string | undefined;
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
