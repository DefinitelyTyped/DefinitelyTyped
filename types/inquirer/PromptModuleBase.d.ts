import inquirer = require(".");

/**
 * Provides prompts for answering questions.
 */
export interface PromptModuleBase {
    /**
     * Register a prompt type
     * @param name Prompt type name
     * @param prompt Prompt constructor
     */
    registerPrompt(name: string, prompt: inquirer.prompts.Base): PromptModuleBase;
    /**
     * Register the defaults provider prompts
     */
    restoreDefaultPrompts(): void;
}