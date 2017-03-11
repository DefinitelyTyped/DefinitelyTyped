// Type definitions for cucumber-js
// Project: https://github.com/cucumber/cucumber-js
// Definitions by: Abraão Alves <https://github.com/abraaoalves>, Jan Molak <https://github.com/jan-molak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = cucumber;

declare namespace cucumber {

	export interface CallbackStepDefinition{
		pending : () => PromiseLike<any>;
		(error?:any, pending?: string):void;
	}

	export interface TableDefinition{
		raw: () => Array<any>;
		rows: () => Array<any>;
		rowsHash: () => {};
		hashes: () => {};
	}

	type StepDefinitionParam = string | CallbackStepDefinition | TableDefinition;

	interface StepDefinitionCode {
		(...stepArgs: Array<StepDefinitionParam>): PromiseLike<any> | any | void;
	}

	interface StepDefinitionOptions{
		timeout?: number;
	}

	export interface StepDefinitions {
		Given(pattern: RegExp | string, options: StepDefinitionOptions, code: StepDefinitionCode): void;
		Given(pattern: RegExp | string, code: StepDefinitionCode): void;
		When(pattern: RegExp | string,  options: StepDefinitionOptions, code: StepDefinitionCode): void;
		When(pattern: RegExp | string,  code: StepDefinitionCode): void;
		Then(pattern: RegExp | string,  options: StepDefinitionOptions, code: StepDefinitionCode): void;
		Then(pattern: RegExp | string,  code: StepDefinitionCode): void;
		setDefaultTimeout(time:number): void;
	}

	interface HookScenario{
		getKeyword():string;
		getName():string;
		getDescription():string;
		getUri():string;
		getLine():number;
		getTags():string[];
		getException():Error;
		getAttachments():any[];
		attach(data:any, mimeType?:string, callback?:(err?:any) => void):void;
		isSuccessful():boolean;
		isFailed():boolean;
		isPending():boolean;
		isUndefined():boolean;
		isSkipped():boolean;
	}

	interface HookCode {
		(scenario: HookScenario, callback?: CallbackStepDefinition): void;
	}

	interface AroundCode{
		(scenario: HookScenario, runScenario?: (error:string, callback?:Function)=>void): void;
	}

	interface Transform {
		captureGroupRegexps: Array<RegExp | string>;
		transformer: (arg: string) => any;
		typeName: string;
	}

	export interface Hooks {
		Before(code: HookCode): void;
		After(code: HookCode): void;
		Around(code: AroundCode):void;
		setDefaultTimeout(time:number): void;
		setWorldConstructor(world: () => void): void;
		registerHandler(handlerOption:string, code:(event:any, callback:CallbackStepDefinition) =>void): void;
		registerListener(listener: EventListener): void;
		addTransform(transform: Transform): void;
	}

	export class EventListener {
		hear(event: events.Event, callback: ()=>void): void;
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

	interface Tag {
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

	interface EventHook {
		(event: events.Event, callback?: ()=>void): void;
	}

	export interface SupportCodeConsumer {
		(stepDefinitions:StepDefinitions & Hooks):void;
	}

	export function defineSupportCode(consumer:SupportCodeConsumer): void;
	export function getSupportCodeFns(): SupportCodeConsumer[];
	export function clearSupportCodeFns(): void;
}
