// Type definitions for cucumber-js 4.0
// Project: https://github.com/cucumber/cucumber-js
// Definitions by: Abraão Alves <https://github.com/abraaoalves>
//                 Jan Molak <https://github.com/jan-molak>
//                 Isaiah Soung <https://github.com/isoung>
//                 BendingBender <https://github.com/BendingBender>
//                 ErikSchierboom <https://github.com/ErikSchierboom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export enum Status {
    AMBIGUOUS = "ambiguous",
    FAILED = "failed",
    PASSED = "passed",
    PENDING = "pending",
    SKIPPED = "skipped",
    UNDEFINED = "undefined"
}

export interface World {
    [key: string]: any;
}

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

export type StepDefinitionCode = (this: World, ...stepArgs: any[]) => any;

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

export function After(code: HookCode): void;
export function After(options: HookOptions | string, code: HookCode): void;
export function AfterAll(code: GlobalHookCode): void;
export function AfterAll(options: HookOptions | string, code: GlobalHookCode): void;
export function Before(code: HookCode): void;
export function Before(options: HookOptions | string, code: HookCode): void;
export function BeforeAll(code: GlobalHookCode): void;
export function BeforeAll(options: HookOptions | string, code: GlobalHookCode): void;

export function defineParameterType(transform: Transform): void;
export function defineStep(pattern: RegExp | string, code: StepDefinitionCode): void;

export function Given(pattern: RegExp | string, code: StepDefinitionCode): void;
export function Given(pattern: RegExp | string, options: StepDefinitionOptions, code: StepDefinitionCode): void;
export function setDefaultTimeout(time: number): void;
export function setDefinitionFunctionWrapper(fn: () => void, options?: {[key: string]: any}): void;
// tslint:disable-next-line ban-types
export function setWorldConstructor(world: ((this: World, init: {attach: Function, parameters: {[key: string]: any}}) => void) | {}): void;
export function Then(pattern: RegExp | string, options: StepDefinitionOptions, code: StepDefinitionCode): void;
export function Then(pattern: RegExp | string, code: StepDefinitionCode): void;
export function When(pattern: RegExp | string, options: StepDefinitionOptions, code: StepDefinitionCode): void;
export function When(pattern: RegExp | string, code: StepDefinitionCode): void;

export interface HookScenarioResult {
    sourceLocation: SourceLocation;
    result: ScenarioResult;
    pickle: pickle.Pickle;
}

export interface SourceLocation {
    line: number;
    url: string;
}

export interface ScenarioResult {
    duration: number;
    status: Status;
}

export namespace pickle {
    interface Pickle {
        language: string;
        locations: Location[];
        name: string;
        steps: Step[];
        tags: string[];
    }

    interface Location {
        column: number;
        line: number;
    }

    interface Step {
        arguments: Argument[];
        locations: Location[];
        text: string;
    }

    interface Argument {
        rows: Cell[];
    }

    interface Cell {
        location: Location;
        value: string;
    }
}

export type HookCode = (this: World, scenario: HookScenarioResult, callback?: CallbackStepDefinition) => void;
export type GlobalHookCode = (callback?: CallbackStepDefinition) => void;

export interface Transform {
    regexp: RegExp;
    transformer(arg: string): any;
    useForSnippets?: boolean;
    preferForRegexpMatch?: boolean;
    name?: string;
    typeName?: string; // deprecated
}

export interface HookOptions {
    timeout?: number;
    tags?: any;
}

export interface Hooks {
    Before(code: HookCode): void;
    Before(options: HookOptions | string, code: HookCode): void;
    BeforeAll(code: GlobalHookCode): void;
    BeforeAll(options: HookOptions | string, code: GlobalHookCode): void;
    After(code: HookCode): void;
    After(options: HookOptions | string, code: HookCode): void;
    AfterAll(code: GlobalHookCode): void;
    AfterAll(options: HookOptions | string, code: GlobalHookCode): void;
    setDefaultTimeout(time: number): void;
    // tslint:disable-next-line ban-types
    setWorldConstructor(world: ((this: World, init: {attach: Function, parameters: {[key: string]: any}}) => void) | {}): void;
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
        name: string;
        data: any;
    }

    // tslint:disable-next-line no-empty-interface
    interface EventPayload {
    }

    interface FeaturesPayload extends EventPayload {
        getFeatures(): any[];                   // https://github.com/cucumber/cucumber-js/blob/dc698bf5bc10d591fa7adeec5fa21b2d90dc9679/lib/cucumber/runtime.js#L34
    }

    interface FeaturesResultPayload extends EventPayload {
        duration: number;
        scenarioResults: any[];
        success: boolean;
        stepsResults: any[];
        strict: boolean;
    }

    interface FeaturePayload extends EventPayload {
        description: string;
        keyword: string;
        line: number;
        name: string;
        tags: Tag[];
        uri: string;
        scenarios: Scenario[];
    }

    interface ScenarioPayload extends EventPayload {
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

    interface ScenarioResultPayload extends EventPayload {
        duration: any;
        failureException: Error;
        scenario: Scenario;
        status: Status;
        stepResults: any[];
    }

    interface StepPayload extends EventPayload {
        arguments: any;
        line: number;
        name: string;
        scenario: Scenario;
        uri: string;
        isBackground: boolean;
        keyword: string;
        keywordType: string;
    }

    interface StepResultPayload extends EventPayload {
        ambiguousStepDefinitions: any;
        attachments: any[];
        duration: any;
        failureException: Error;
        step: Step;
        stepDefinition: StepDefinition;
        status: Status;
    }
}

export interface StepDefinition {
    // tslint:disable-next-line ban-types
    code: Function;
    line: number;
    options: {};
    pattern: any;
    uri: string;
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

export type EventHook = (event: events.Event, callback?: () => void) => void;

export type SupportCodeConsumer = (stepDefinitions: StepDefinitions & Hooks) => void;

export function defineSupportCode(consumer: SupportCodeConsumer): void;

export function getSupportCodeFns(): SupportCodeConsumer[];

export function clearSupportCodeFns(): void;

// https://github.com/cucumber/cucumber-js/commit/231183a8a11c985ef7ced1155b7a75f5120a34b6
export class Formatter {
    constructor(options?: any);

    log(data: any): void;
}

export class SummaryFormatter extends Formatter {
    indent(text: string, numberOfSpaces: number): any;
}

export class PrettyFormatter extends SummaryFormatter {
    formatTags(tags: Tag[]): any;
    logIndented(text: string, level: number): void;
    logStepResult(stepResult: any): void;
}

export class ProgressFormatter extends SummaryFormatter {
}

export class RerunFormatter extends Formatter {
}

export class SnippetsFormatter extends Formatter {
}

export class UsageFormatter extends Formatter {
}

export class UsageJsonFormatter extends Formatter {
}

export class JsonFormatter extends Formatter {
}
