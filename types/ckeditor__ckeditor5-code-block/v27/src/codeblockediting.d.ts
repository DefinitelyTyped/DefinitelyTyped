import { Plugin } from '@ckeditor/ckeditor5-core';
import { ShiftEnter } from '@ckeditor/ckeditor5-enter';

export default class CodeBlockEditing extends Plugin {
    static readonly pluginName: 'CodeBlockEditing';
    static readonly requires: [typeof ShiftEnter];
    init(): void;
    afterInit(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        CodeBlockEditing: CodeBlockEditing;
    }
}
