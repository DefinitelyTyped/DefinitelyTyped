import { Plugin } from '@ckeditor/ckeditor5-core';

export default class RestrictedEditingModeEditing extends Plugin {
    static readonly pluginName: 'RestrictedEditingModeEditing';
    init(): void;
    enableCommand(commandName: string): void;
}
