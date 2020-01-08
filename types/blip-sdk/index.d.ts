// Type definitions for blip-sdk 7.3
// Project: https://github.com/takenet/blip-sdk-js#readme
// Definitions by: Henrique Torquato <https://github.com/henriquetorquato>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export namespace BlipSdk.Extensions {
    interface ArtificialIntelligence {
        // Analysis

        getAnalysis(
            skip?: number,
            take?: number,
            ascending?: boolean,
            filter?: string,
            intents?: string[],
            feedbacks?: string[],
            source?: string,
            beginDate?: string,
            endDate?: string,
            minScore?: string,
            maxScore?: string): Promise<object>;
        analyse(analysis: object): Promise<object>;
        setAnalysisByEmail(
            emailAndFilter: object,
            intents?: string[],
            feedbacks?: string[],
            source?: string,
            beginDate?: string,
            endDate?: string,
            minScore?: string,
            maxScore?: string): Promise<object>;
        setAnalysisFeedback(id: string, analysisFeedback: object): Promise<object>;
        setAnalysesFeedback(analyses: object[]): Promise<object>;

        // Analytics (Confusion Matrix)

        getAnalytics(id?: string): Promise<object>;
        setAnalytics(confusionMatrix: object): Promise<object>;
        deleteAnalytics(id: string): Promise<object>;

        // Intents

        getIntent(id: string, deep?: boolean): Promise<object>;
        getIntents(skip?: number, take?: number, deep?: boolean, name?: string, ascending?: boolean): Promise<object[]>;
        setIntent(intent: object): Promise<object>;
        setIntents(intents: object[]): Promise<object>;
        mergeIntent(intent: object): Promise<object>;
        mergeIntents(intents: object[]): Promise<object>;
        deleteIntent(id: string): Promise<object>;
        deleteIntents(): Promise<object>;

        // Answers

        getIntentAnswers(id?: string, skip?: number, take?: number, ascending?: boolean): Promise<object[]>;
        setIntentAnswers(id: string, answers: object[]): Promise<object>;
        deleteIntentAnswer(id: string, answerId: string): Promise<object>;

        // Questions

        getIntentQuestions(id: string): Promise<object[]>;
        setIntentQuestions(id: string, questions: object[]): Promise<object>;
        deleteIntentQuestion(id: string, questionId: string): Promise<object>;

        // Entity

        getEntity(id: string): Promise<object>;
        getEntities(skip?: number, take?: number, ascending?: boolean, name?: string): Promise<object[]>;
        setEntity(entity: object): Promise<object>;
        deleteEntity(id: string): Promise<object>;
        deleteEntities(): Promise<object>;

        // Model

        getModel(id: string): Promise<object>;
        getModels(skip?: number, take?: number, ascending?: boolean): Promise<object[]>;
        getModelSummary(): Promise<object>;
        trainModel(): Promise<object>;
        publishModel(id: string): Promise<object>;

        // Word Set

        getWordSet(id: string, deep?: boolean): Promise<object>;
        getWordSets(deep?: boolean): Promise<object[]>;
        setWordSetResource(id: string, resource: object[]): Promise<object>;
        setWordSet(wordSet: object): Promise<object>;
        deleteWordSet(id: string): Promise<object>;
        analyseWordSet(analysis: object): Promise<object>;

        // Content Assistant

        analyseContent(analysis: object): Promise<object>;
        matchContent(combination: object): Promise<object>;
        getContents(skip?: number, take?: number, ascending?: boolean, intents?: string[], entities?: string[], text?: string, beginDate?: string, endDate?: string): Promise<object[]>;
        getContent(id: string): Promise<object>;
        setContent(content: object): Promise<object>;
        setContentResult(id: string, content: object): Promise<object>;
        setContentCombination(id: string, combination: object): Promise<object>;
        setContentCombinations(id: string, combinations: object[]): Promise<object>;
        deleteContent(id: string): Promise<object>;
    }
}
