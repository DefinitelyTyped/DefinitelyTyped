import { Plugin } from '@ckeditor/ckeditor5-core';
import CodeBlockEditing from './codeblockediting';
import CodeBlockUI from './codeblockui';

export default class CodeBlock extends Plugin {
    static readonly requires: [typeof CodeBlockEditing, typeof CodeBlockUI];
    static readonly pluginName: 'CodeBlock';
}

export interface CodeBlockConfig {
    indentSequence: string;
    languages: CodeBlockLanguageDefinition[];
}

export interface CodeBlockLanguageDefinition {
    class?: string | undefined;
    label: string;
    language: string;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        CodeBlock: CodeBlock;
    }
}
