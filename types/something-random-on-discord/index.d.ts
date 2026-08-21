export class Random {
    constructor();

    getMeme(): Promise<object>;
    getJoke(): Promise<object>;
    getString(): Promise<string>;
    getNeko(): Promise<object>;
    getKpop(): Promise<object>;
    getAnimeImgURL(action: string): Promise<string>;
    getAdvice(): Promise<object>;
}
