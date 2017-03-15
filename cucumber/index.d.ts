// Type definitions for cucumber-js v2.0.0-rc.8
// Project: https://github.com/cucumber/cucumber-js
// Definitions by: Abraão Alves <https://github.com/abraaoalves>, Jan Molak <https://github.com/jan-molak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = cucumber;

declare namespace cucumber {

    export interface CallbackStepDefinition {
        pending: () => PromiseLike<any>;
        (error?: any, pending?: string): void;
    }

    export interface TableDefinition {
        raw: () => Array<any>;
        rows: () => Array<any>;
        rowsHash: () => {};
        hashes: () => {};
    }

    type StepDefinitionParam = string | CallbackStepDefinition | TableDefinition;

    interface StepDefinitionCode {
        (...stepArgs: Array<StepDefinitionParam>): PromiseLike<any> | any | void;
    }

    interface StepDefinitionOptions {
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

    interface HookScenarioResult {
        duration: number;
        failureException: Error;
        scenario: Scenario;
        status: string;
        stepsResults: any;
    }

    interface HookCode {
        (scenario: HookScenarioResult, callback?: CallbackStepDefinition): void;
    }

    interface AroundCode {
        (scenario: HookScenarioResult, runScenario?: (error: string, callback?: Function) => void): void;
    }

    interface Transform {
        regexp: RegExp;
        transformer: (arg: string) => any;
        typeName: string;
    }

    export interface Hooks {
        Before(code: HookCode): void;
        After(code: HookCode): void;
        Around(code: AroundCode): void;
        setDefaultTimeout(time: number): void;
        setWorldConstructor(world: (() => void) | ({})): void;
        registerHandler(handlerOption: string, code: (event: any, callback: CallbackStepDefinition) => void): void;
        registerListener(listener: EventListener): void;
        defineParameterType(transform: Transform): void;
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
        name: string;
        line: number;
    }

    export interface Step {
        arguments: any;
        line: number;
        name: string;
        scenario: Scenario;
        uri: string;
        isBackground: boolean;
        keyword: string;
        keywordType: string;
    }

    export interface Scenario {
        feature: Feature;
        exception: Error;
        keyword: string;
        lines: number[];
        name: string;
        tags: Tag[];
        uri: string;
        line: number;
        description: string;
        steps: Step[];
    }

    export interface Feature {
        description: string;
        keyword: string;
        line: number;
        name: string;
        tags: Tag[];
        uri: string;
        scenarios: Scenario[];
    }

    interface EventHook {
        (event: events.Event, callback?: () => void): void;
    }

    export interface SupportCodeConsumer {
        (stepDefinitions: StepDefinitions & Hooks): void;
    }

    export function defineSupportCode(consumer: SupportCodeConsumer): void;

    export function getSupportCodeFns(): SupportCodeConsumer[];

    export function clearSupportCodeFns(): void;

    // https://github.com/cucumber/cucumber-js/commit/231183a8a11c985ef7ced1155b7a75f5120a34b6
    export class Formatter {}

    export class JsonFormatter {}

    export class PrettyFormatter {}

    export class ProgressFormatter {}

    export class RerunFormatter {}

    export class SnippetsFormatter {}

    export class UsageFormatter {}

    export class UsageJsonFormatter {}

}
