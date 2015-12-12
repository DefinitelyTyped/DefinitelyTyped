// Type definitions for cucumber-js
// Project: https://github.com/cucumber/cucumber-js
// Definitions by: Abraão Alves <https://github.com/abraaoalves>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts" />

declare module cucumber {
	
	export interface CallbackStepDefinition{
		pending : () => Thenable<any>;	
		(errror?:any):void;
	}
	
	interface StepDefinitionCode {
		(...stepArgs: Array<string |CallbackStepDefinition>): Thenable<any> | any | void;
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
		attach(text: string, mimeType?: string, callback?: (err?:any) => void): void;
		isFailed() : boolean;
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