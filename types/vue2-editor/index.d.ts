import QuillStatic, { DeltaStatic, QuillOptionsStatic, RangeStatic, Sources } from "quill";
import { PluginObject, VueConstructor } from "vue";

declare namespace Vue2Editor {
    interface CustomModule {
        alias: string;
        module: any;
    }

    interface VueEditorProps {
        customModules: CustomModule[];
        id: string;
        placeholder: string;
        value: string;
        disabled: boolean;
        editorToolbar: any;
        editorOptions: QuillOptionsStatic;
        useCustomImageHandler: boolean;
        useMarkdownShortcuts: boolean;
    }

    interface VueEditorData {
        quill: QuillStatic | null;
    }

    interface VueEditorWatch {
        value: (val: string) => void;
        disabled: (status: boolean) => void;
    }

    interface EditorModules {
        toolbar: any;
        markdownShortcuts?: Record<string, any>;
    }

    interface VueEditorMethods {
        registerCustomModules: (Quill: typeof QuillStatic) => void;
        initializeEditor: () => void;
        setupQuillEditor: () => void;
        setModules: () => EditorModules;
        prepareEditorConfig: (editorConfig: QuillOptionsStatic) => void;
        registerPrototypes: () => void;
        registerEditorEventListeners: () => void;
        listenForEditorEvent: (type: "text-change" | "selection-change" | "editor-change") => void;
        handleInitialContent: () => void;
        handleSelectionChange: (range: RangeStatic | null, oldRange: RangeStatic | null, source?: Sources) => void;
        handleTextChange: (delta: DeltaStatic, oldContents: DeltaStatic, source?: Sources) => void;
        handleImageRemoved: (delta: DeltaStatic, oldContents: DeltaStatic) => void;
        checkForCustomImageHandler: () => void;
        setupCustomImageHandler: () => void;
        customImageHandler: () => void;
        emitImageInfo: ($event: Event & { target: HTMLInputElement }) => void;
    }

    interface VueEditorConstructor extends VueConstructor {
        props: VueEditorProps;
        data: () => VueEditorData;
        watch: VueEditorWatch;
        methods: VueEditorMethods;
    }

    interface Vue2EditorPlugin extends PluginObject<undefined> {
        install: (Vue: VueConstructor) => void;
        version: string;
        Quill: typeof QuillStatic;
        VueEditor: VueEditorConstructor;
    }
}

declare const Vue2Editor: Vue2Editor.Vue2EditorPlugin;
export = Vue2Editor;
