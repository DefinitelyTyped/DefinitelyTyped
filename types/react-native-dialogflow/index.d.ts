// Type definitions for react-native-dialogflow 3.2
// Project: https://github.com/innFactory/react-native-dialogflow#readme
// Definitions by: Jason Merino <https://github.com/jasonmerino>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export namespace Dialogflow {
    export const LANG_CHINESE_CHINA = 'zh-CN';
    export const LANG_CHINESE_HONGKONG: 'zh-HK';
    export const LANG_CHINESE_TAIWAN: 'zh-TW';
    export const LANG_DUTCH: 'nl';
    export const LANG_ENGLISH: 'en';
    export const LANG_ENGLISH_GB: 'en-GB';
    export const LANG_ENGLISH_US: 'en-US';
    export const LANG_FRENCH: 'fr';
    export const LANG_GERMAN: 'de';
    export const LANG_ITALIAN: 'it';
    export const LANG_JAPANESE: 'ja';
    export const LANG_KOREAN: 'ko';
    export const LANG_PORTUGUESE: 'pt';
    export const LANG_PORTUGUESE_BRAZIL: 'pt-BR';
    export const LANG_RUSSIAN: 'ru';
    export const LANG_SPANISH: 'es';
    export const LANG_UKRAINIAN: 'uk';

    export function setConfiguration(accessToken: string, languageTag: string): void;
    export function setEntities(entities: any[]): void;
    export function startListening(resultCallback: (result: object) => void, errorCallback: (error: Error) => void): void;
    export function finishListening(): void;
    export function requestEvent(
        eventName: string,
        eventData: object,
        resultCallback: (result: object) => void,
        errorCallback: (error: Error) => void
    ): Promise<any>;
    export function requestQuery(
        query: string,
        resultCallback: (result: object) => void,
        errorCallback: (error: Error) => void
    ): Promise<any>;
    export function onListeningStarted(callback: () => void): void;
    export function onListeningFinished(callback: () => void): void;
    export function onAudioLevel(callback: (level: number) => void): void;
    export function setContexts(contexts: any[]): void;
    export function resetContexts(resultCallback: (result: object) => void, errorCallback: (error: Error) => void): void;
    export function setPermanentContexts(contexts: any[]): void;
}

export namespace Dialogflow_V2 {
    export const LANG_CHINESE_CHINA = 'zh-CN';
    export const LANG_CHINESE_HONGKONG: 'zh-HK';
    export const LANG_CHINESE_TAIWAN: 'zh-TW';
    export const LANG_DUTCH: 'nl';
    export const LANG_ENGLISH: 'en';
    export const LANG_ENGLISH_GB: 'en-GB';
    export const LANG_ENGLISH_US: 'en-US';
    export const LANG_FRENCH: 'fr';
    export const LANG_GERMAN: 'de';
    export const LANG_ITALIAN: 'it';
    export const LANG_JAPANESE: 'ja';
    export const LANG_KOREAN: 'ko';
    export const LANG_PORTUGUESE: 'pt';
    export const LANG_PORTUGUESE_BRAZIL: 'pt-BR';
    export const LANG_RUSSIAN: 'ru';
    export const LANG_SPANISH: 'es';
    export const LANG_UKRAINIAN: 'uk';

    export function setConfiguration(
        serviceAccount: string,
        privateKey: string,
        language: string,
        projectId: string
    ): void;
    export function startListening(resultCallback: (result: object) => void, errorCallback: (error: Error) => void): void;
    export function finishListening(): void;
    export function requestEvent(
        eventName: string,
        eventData: object,
        resultCallback: (result: object) => void,
        errorCallback: (error: Error) => void
    ): Promise<any>;
    export function requestQuery(
        query: string,
        resultCallback: (result: object) => void,
        errorCallback: (error: Error) => void
    ): Promise<any>;
    export function onListeningStarted(callback: () => void): void;
    export function onListeningFinished(callback: () => void): void;
    export function onAudioLevel(callback: (level: number) => void): void;
    export function setContexts(contexts: any[]): void;
    export function resetContexts(resultCallback: (result: object) => void, errorCallback: (error: Error) => void): void;
    export function setPermanentContexts(contexts: any[]): void;
}
