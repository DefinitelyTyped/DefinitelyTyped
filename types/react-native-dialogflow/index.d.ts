// Type definitions for react-native-dialogflow 3.2
// Project: https://github.com/innFactory/react-native-dialogflow#readme
// Definitions by: Jason Merino <https://github.com/jasonmerino>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export namespace Dialogflow {
    const LANG_CHINESE_CHINA = 'zh-CN';
    const LANG_CHINESE_HONGKONG: 'zh-HK';
    const LANG_CHINESE_TAIWAN: 'zh-TW';
    const LANG_DUTCH: 'nl';
    const LANG_ENGLISH: 'en';
    const LANG_ENGLISH_GB: 'en-GB';
    const LANG_ENGLISH_US: 'en-US';
    const LANG_FRENCH: 'fr';
    const LANG_GERMAN: 'de';
    const LANG_ITALIAN: 'it';
    const LANG_JAPANESE: 'ja';
    const LANG_KOREAN: 'ko';
    const LANG_PORTUGUESE: 'pt';
    const LANG_PORTUGUESE_BRAZIL: 'pt-BR';
    const LANG_RUSSIAN: 'ru';
    const LANG_SPANISH: 'es';
    const LANG_UKRAINIAN: 'uk';

    function setConfiguration(accessToken: string, languageTag: string): void;
    function setEntities(entities: any[]): void;
    function startListening(resultCallback: (result: object) => void, errorCallback: (error: Error) => void): void;
    function finishListening(): void;
    function requestEvent(
        eventName: string,
        eventData: object,
        resultCallback: (result: object) => void,
        errorCallback: (error: Error) => void
    ): Promise<any>;
    function requestQuery(
        query: string,
        resultCallback: (result: object) => void,
        errorCallback: (error: Error) => void
    ): Promise<any>;
    function onListeningStarted(callback: () => void): void;
    function onListeningFinished(callback: () => void): void;
    function onAudioLevel(callback: (level: number) => void): void;
    function setContexts(contexts: any[]): void;
    function resetContexts(resultCallback: (result: object) => void, errorCallback: (error: Error) => void): void;
    function setPermanentContexts(contexts: any[]): void;
}

export namespace Dialogflow_V2 {
    const LANG_CHINESE_CHINA = 'zh-CN';
    const LANG_CHINESE_HONGKONG: 'zh-HK';
    const LANG_CHINESE_TAIWAN: 'zh-TW';
    const LANG_DUTCH: 'nl';
    const LANG_ENGLISH: 'en';
    const LANG_ENGLISH_GB: 'en-GB';
    const LANG_ENGLISH_US: 'en-US';
    const LANG_FRENCH: 'fr';
    const LANG_GERMAN: 'de';
    const LANG_ITALIAN: 'it';
    const LANG_JAPANESE: 'ja';
    const LANG_KOREAN: 'ko';
    const LANG_PORTUGUESE: 'pt';
    const LANG_PORTUGUESE_BRAZIL: 'pt-BR';
    const LANG_RUSSIAN: 'ru';
    const LANG_SPANISH: 'es';
    const LANG_UKRAINIAN: 'uk';

    function setConfiguration(
        serviceAccount: string,
        privateKey: string,
        language: string,
        projectId: string
    ): void;
    function startListening(resultCallback: (result: object) => void, errorCallback: (error: Error) => void): void;
    function finishListening(): void;
    function requestEvent(
        eventName: string,
        eventData: object,
        resultCallback: (result: object) => void,
        errorCallback: (error: Error) => void
    ): Promise<any>;
    function requestQuery(
        query: string,
        resultCallback: (result: object) => void,
        errorCallback: (error: Error) => void
    ): Promise<any>;
    function onListeningStarted(callback: () => void): void;
    function onListeningFinished(callback: () => void): void;
    function onAudioLevel(callback: (level: number) => void): void;
    function setContexts(contexts: any[]): void;
    function resetContexts(resultCallback: (result: object) => void, errorCallback: (error: Error) => void): void;
    function setPermanentContexts(contexts: any[]): void;
}
