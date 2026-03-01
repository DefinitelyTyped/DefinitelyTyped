// JSBox Text API TypeScript Declaration

declare namespace TextTypes {
    interface SpeechConfig {
        text: string;
        rate?: number;
        language?: string;
        voice?: Voice;
        events?: {
            didStart?: (sender: Speech) => void;
            didFinish?: (sender: Speech) => void;
            didPause?: (sender: Speech) => void;
            didContinue?: (sender: Speech) => void;
            didCancel?: (sender: Speech) => void;
        };
    }

    interface Speech {
        pause: () => void;
        continue: () => void;
        stop: () => void;
    }

    interface Voice {
        readonly language: string;
        readonly identifier: string;
        readonly name: string;
        readonly quality: number;
        readonly gender: number;
        readonly audioFileSettings: any;
    }
}

interface JBText {
    uuid: string;
    tokenize(config: { text: string; handler: (results: string[]) => void }): void;
    analysis(config: { text: string; handler: (results: { token: string; tag: string }[]) => void }): void;
    lookup(text: string): void;
    speech(config: TextTypes.SpeechConfig): TextTypes.Speech;
    ttsVoices(): TextTypes.Voice[];
    base64Encode(text: string): string;
    base64Decode(text: string): string;
    URLEncode(text: string): string;
    URLDecode(text: string): string;
    HTMLEscape(text: string): string;
    HTMLUnescape(text: string): string;
    MD5(text: string): string;
    SHA1(text: string): string;
    SHA256(text: string): string;
    convertToPinYin(text: string): string;
    markdownToHtml(text: string): string;
    htmlToMarkdown(config: { html: string }): Promise<string>;
    htmlToMarkdown(config: { html: string; handler: (markdown: string) => void }): void;
    decodeData(config: { data: NSData; encoding?: number }): string;
    sizeThatFits(config: { text: string; width: number; font: UIFont; lineSpacing?: number }): {
        width: number;
        height: number;
    };
}

declare const $text: JBText;
