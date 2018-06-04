// Type definitions for cucumber-js 1.3
// Project: https://github.com/cucumber/cucumber-js
// Definitions by: Abraão Alves <https://github.com/abraaoalves>
//                 Jan Molak <https://github.com/jan-molak>
//                 Isaiah Soung <https://github.com/isoung>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface CallbackStepDefinition {
    pending(): PromiseLike<any>;
    (error?: any, pending?: string): void;
}

export interface TableDefinition {
    raw(): string[][];
    rows(): string[][];
    rowsHash(): { [firstCol: string]: string };
    hashes(): Array<{ [colName: string]: string }>;
}

export type StepDefinitionParam = string | CallbackStepDefinition | TableDefinition;

export type StepDefinitionCode = (this: { [key: string]: any }, ...stepArgs: StepDefinitionParam[]) => PromiseLike<any> | any | void;

export interface StepDefinitionOptions {
    timeout?: number;
}

export interface StepDefinitions {
    Given(pattern: RegExp | string, options: StepDefinitionOptions, code: StepDefinitionCode): void;
    Given(pattern: RegExp | string, code: StepDefinitionCode): void;
    When(pattern: RegExp | string, options: StepDefinitionOptions, code: StepDefinitionCode): void;
    When(pattern: RegExp | string, code: StepDefinitionCode): void;
    Then(pattern: RegExp | string, options: StepDefinitionOptions, code: StepDefinitionCode): void;
    Then(pattern: RegExp | string, code: StepDefinitionCode): void;
    setDefaultTimeout(time: number): void;
}

export interface HookScenario {
    getKeyword(): string;
    getName(): string;
    getDescription(): string;
    getUri(): string;
    getLine(): number;
    getTags(): string[];
    getException(): Error;
    getAttachments(): any[];
    attach(data: any, mimeType?: string, callback?: (err?: any) => void): void;
    isSuccessful(): boolean;
    isFailed(): boolean;
    isPending(): boolean;
    isUndefined(): boolean;
    isSkipped(): boolean;
}

export type HookCode = (this: { [key: string]: any }, scenario: HookScenario, callback?: CallbackStepDefinition) => void;

// tslint:disable-next-line ban-types
export type AroundCode = (scenario: HookScenario, runScenario?: (error: string, callback?: Function) => void) => void;

export interface HookOptions {
    timeout?: number;
    tags?: any;
}

export interface Hooks {
    Before(code: HookCode): void;
    Before(options: HookOptions, code: HookCode): void;
    After(code: HookCode): void;
    After(options: HookOptions, code: HookCode): void;
    Around(code: AroundCode): void;
    setDefaultTimeout(time: number): void;
    registerHandler(handlerOption: string, code: (event: any, callback: CallbackStepDefinition) => void): void;
    registerListener(listener: EventListener): void;
}

export class EventListener {
    hear(event: events.Event, callback: () => void): void;
    hasHandlerForEvent(event: events.Event): boolean;
    buildHandlerNameForEvent(event: events.Event): string;
    getHandlerForEvent(event: events.Event): EventHook;
    buildHandlerName(shortName: string): string;
    setHandlerForEvent(shortName: string, handler: EventListener): void;
}

export function Listener(): EventListener;

export namespace events {
    interface Event {
        getName(): string;
        getPayloadItem(name: string): EventPayload;
    }

    // tslint:disable-next-line no-empty-interface
    interface EventPayload {
    }

    interface FeaturesPayload extends EventPayload {
        getFeatures(): any[];                   // https://github.com/cucumber/cucumber-js/blob/dc698bf5bc10d591fa7adeec5fa21b2d90dc9679/lib/cucumber/runtime.js#L34
    }

    interface FeaturesResultPayload extends EventPayload {
        getDuration(): any;
        getScenarioCounts(): any;
        getStepCounts(): any;
        isSuccessful(): boolean;
    }

    interface FeaturePayload extends EventPayload {
        getStepKeywordByLines(): any;
        getScenarioKeyword(): string;
        getKeyword(): string;
        getName(): string;
        getDescription(): string;
        getUri(): string;
        getLine(): number;
        getTags(): Tag[];
        getScenarios(): ScenarioPayload[];
        getPayloadItem(): FeaturePayload;
    }

    interface ScenarioPayload extends EventPayload {
        getName(): string;
        getKeyword(): string;
        getDescription(): string;
        getFeature(): FeaturePayload;
        getUri(): string;
        getUris(): string[];
        getLine(): number;
        getLines(): number[];
        getTags(): Tag[];
        getSteps(): any[];
        getPayloadItem(): ScenarioPayload;
    }

    interface ScenarioResultPayload extends EventPayload {
        getFailureException(): Error;
        getScenario(): any;
        getStatus(): any;
    }

    interface StepPayload extends EventPayload {
        isHidden(): boolean;
        isOutlineStep(): boolean;
        getKeyword(): string;
        getName(): string;
        hasUri(): boolean;
        getUri(): string;
        getLine(): number;
        getPreviousStep(): any;
        hasPreviousStep(): boolean;
        getAttachment(): any;
        getAttachmentContents(): any;
        getDocString(): string;
        getDataTable(): any;
        hasAttachment(): boolean;
        hasDocString(): boolean;
        hasDataTable(): boolean;
        ensureDataTableIsAttached(): void;
        isOutcomeStep(): boolean;
        isEventStep(): boolean;
        hasOutcomeStepKeyword(): boolean;
        hasEventStepKeyword(): boolean;
        isRepeatingOutcomeStep(): boolean;
        isRepeatingEventStep(): boolean;
        hasRepeatStepKeyword(): boolean;
        isPrecededByOutcomeStep(): boolean;
        isPrecededByEventStep(): boolean;
    }

    interface StepResultPayload extends EventPayload {
        getAmbiguousStepDefinitions(): any[];
        getAttachments(): any[];
        getDuration(): any;
        getFailureException(): Error;
        getStep(): any;
        getStepDefinition(): any;
        getStatus(): any;
        hasAttachments(): boolean;
    }
}

export interface Tag {
    getName(): string;
    getLine(): number;
}

export interface Scenario {
    getKeyword(): string;
    getName(): string;
    getDescription(): string;
    getUri(): string;
    getLine(): number;
    getTags(): Tag[];
    getException(): Error;
    getAttachments(): any[];
    attach(data: any, mimeType?: string, callback?: (err?: any) => void): void;
    isSuccessful(): boolean;
    isFailed(): boolean;
    isPending(): boolean;
    isUndefined(): boolean;
    isSkipped(): boolean;
}

export type EventHook = (event: events.Event, callback?: () => void) => void;
