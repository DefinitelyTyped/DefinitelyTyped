import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";

export default class Token implements Observable {
    value: string;

    constructor(
        tokenUrlOrRefreshToken: string | (() => string),
        options: { initValue?: string; autoRefresh?: boolean },
    );
    destroy(): void;
    init(): Promise<Token>;
    refreshToken(): Promise<Token>;

    static create(
        tokenUrlOrRefreshToken: string | (() => string),
        options: { initValue?: string; autoRefresh?: boolean },
    ): Promise<Token>;

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
}
