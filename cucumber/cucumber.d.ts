// Type definitions for cucumber-js
// Project: https://github.com/cucumber/cucumber-js
// Definitions by: Abraão Alves <https://github.com/abraaoalves>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

	export interface Hooks {
		Before(code: HookCode): void;
		After(code: HookCode): void;
		Around(code: AroundCode):void;
		setDefaultTimeout(time:number): void;
		registerHandler(handlerOption:string, code:(event:any, callback:CallbackStepDefinition) =>void): void;
	}
}

declare module 'cucumber'{
	export = cucumber;
}
