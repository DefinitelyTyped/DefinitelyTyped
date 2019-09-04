// Type definitions for vue-tel-input 2.6
// Project: https://github.com/davidroyer/vue2-editor/#readme
// Definitions by: Komang Suryadana <https://github.com/suryadana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { VueConstructor } from 'vue';
import { DirectiveOptions } from 'vue/types/options';

export default VueEditor;
export const VueEditor: VueEditorConstructor;

export interface VueEditorProps {
    id: string;
    placeholder: string;
    value: string;
    disabled: boolean;
    editorToolbar: any[];
    editorOptions: any;
    useCustomImageHandler: any;
    useMarkdownShortcuts: boolean;
}

export interface VueEditorData {
    quill: any;
}

export interface VueEditorWatch {
    value: (val: any) => void;
    disabled: (status: boolean) => void;
}

export interface VueEditorMethods {
    initializeEditor: () => void;
    setupQuillEditor: () => void;
    setModules: () => void;
    prepareEditorConfig: (editorConfig: any) => void;
    registerPrototypes: () => void;
    registerEditorEventListeners: () => void;
    listenForEditorEvent: (type: any) => void;
    handleInitialContent: () => void;
    handleSelectionChange: (range: any, oldRange: any) => void;
    handleTextChange: () => void;
    checkForCustomImageHandler: () => void;
    setupCustomImageHandler: () => void;
    customImageHandler: (image: any, callback: any) => void;
    emitImageInfo: ($event: Event) => void;
}

export interface VueEditorConstructor extends VueConstructor {
    props: VueEditorProps;
    data: () => VueEditorData;
    watch: VueEditorWatch;
    methods: VueEditorMethods;
}
