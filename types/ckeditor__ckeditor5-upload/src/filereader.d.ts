import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";

export default class FileRead implements Observable {
    loaded: number;
    readonly error: Error;
    readonly data: File | undefined;
    read(file: File): Promise<string>;
    abort(): void;

    set(option: Record<string, string>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
}
