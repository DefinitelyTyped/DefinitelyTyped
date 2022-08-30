import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';

// tslint:disable-next-line:no-empty-interface
export default interface Token extends Observable {}

export default class Token implements Observable {
    constructor(
        tokenUrlOrRefreshToken: string | (() => Promise<Token>),
        options: { initValue?: string | undefined; autoRefresh?: boolean | undefined },
    );

    get value(): string;
    protected set value(value: string);
    init(): Promise<Token>;
    refreshToken(): Promise<Token>;
    destroy(): void;

    static create(
        tokenUrlOrRefreshToken: string | (() => Promise<Token>),
        options: { initValue?: string | undefined; autoRefresh?: boolean | undefined },
    ): Promise<Token>;
}
