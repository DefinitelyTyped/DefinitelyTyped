// Type definitions for plop 1.8.0
// Project: https://github.com/amwmedia/plop
// Definitions by: Alex Young <https://github.com/alsiola/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Inquirer, Question, PromptModule } from "inquirer";

declare module "plop" {
    export interface Action {
        type: string;
        path: string;
        templateFile: string;
    }

    export interface GeneratorConfig {
        description?: string;
        prompts: ReadonlyArray<Question>;
        actions: ReadonlyArray<Action>;
    }

    export interface GeneratorListItem {
        name: string;
        description?: string;
    }

    export interface Plop {
        inquirer: Inquirer;
        handlebars: object;
        registerHelper(name: string, fn: (...args: any[]) => any): void;
        addPartial(name: string, template: string): void;
        addPrompt(name: string, inquirerPlugin: PromptModule): void;
        setGenerator(name: string, config: GeneratorConfig): void;
        load(
            targets: string | ReadonlyArray<string>,
            config?: object,
            include?: object
        ): void;
        renderString(name: string, data: object): string;
        getGenerator(name: string): GeneratorConfig;
        getGeneratorList(): GeneratorListItem[];
        getPlopfilePath(): string;
    }
}
