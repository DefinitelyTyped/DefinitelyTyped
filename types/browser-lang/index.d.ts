export interface BrowserOption {
    languages: string[];
    fallback: string;
}

declare function browserLang(option?: BrowserOption): string;

export default browserLang;
