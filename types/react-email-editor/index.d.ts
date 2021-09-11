// Type definitions for react-email-editor 1.1
// Project: https://github.com/unlayer/react-email-editor
// Definitions by: Nikita Granko <https://github.com/ngranko>
//                 Vladimir Penyazkov <https://github.com/mindtraveller>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component as ReactComponent, CSSProperties } from 'react';

export type ThemeColor = 'light' | 'dark';
export type DockPosition = 'right' | 'left';
export interface AppearanceConfig {
    readonly theme?: ThemeColor | undefined;
    readonly panels?: {
        readonly tools?: {
            readonly dock: DockPosition;
        } | undefined;
    } | undefined;
}

export interface User {
    readonly id?: number | undefined;
    readonly name?: string | undefined;
    readonly email?: string | undefined;
}

export interface GroupedMergeTag {
    readonly name: string;
    readonly mergeTags: Array<SimpleMergeTag | GroupedMergeTag>;
}

export interface SimpleMergeTag {
    readonly name: string;
    readonly value: string;
}

export interface ConditionalMergeTagRule {
    readonly name: string;
    readonly before: string;
    readonly after: string;
}

export interface ConditionalMergeTag {
    readonly name: string;
    readonly rules: ConditionalMergeTagRule[];
    readonly mergeTags?: SimpleMergeTag[] | undefined;
}

export type MergeTag = SimpleMergeTag | ConditionalMergeTag | GroupedMergeTag;

export interface DesignTagConfig {
    readonly delimeter: [string, string];
}

export interface DisplayCondition {
    readonly type: string;
    readonly label: string;
    readonly description: string;
    readonly before: string;
    readonly after: string;
}

export type EmptyDisplayCondition = object;

export interface ToolConfig {
    readonly enabled?: boolean | undefined;
    readonly position?: number | undefined;
    readonly data?: StringList | undefined;
}

export interface ToolsConfig {
    readonly [key: string]: ToolConfig;
}

export interface EditorConfig {
    readonly minRows?: number | undefined;
    readonly maxRows?: number | undefined;
}

export interface Features {
    readonly preview?: boolean | undefined;
    readonly imageEditor?: boolean | undefined;
    readonly undoRedo?: boolean | undefined;
    readonly stockImages?: boolean | undefined;
    readonly textEditor?: TextEditor | undefined;
}

export interface TextEditor {
    readonly spellChecker?: boolean | undefined;
    readonly tables?: boolean | undefined;
    readonly cleanPaste?: boolean | undefined;
    readonly emojis?: boolean | undefined;
}

export type Translations = Record<string, Record<string, string>>;

export type DisplayMode = 'email' | 'web';
export interface UnlayerOptions {
    readonly id?: string | undefined;
    readonly displayMode?: DisplayMode | undefined;
    readonly projectId?: number | undefined;
    readonly locale?: string | undefined;
    readonly appearance?: AppearanceConfig | undefined;
    readonly user?: User | undefined;
    readonly mergeTags?: MergeTag[] | undefined;
    readonly designTags?: StringList | undefined;
    readonly designTagsConfig?: DesignTagConfig | undefined;
    readonly tools?: ToolsConfig | undefined;
    readonly blocks?: object[] | undefined;
    readonly editor?: EditorConfig | undefined;
    readonly safeHtml?: boolean | undefined;
    readonly customJS?: string[] | undefined;
    readonly customCSS?: string[] | undefined;
    readonly features?: Features | undefined;
    readonly translations?: Translations | undefined;
    readonly displayConditions?: DisplayCondition[] | undefined;
}

export interface EmailEditorProps {
    readonly style?: CSSProperties | undefined;
    readonly minHeight?: number | undefined;
    readonly options?: UnlayerOptions | undefined;
    readonly tools?: ToolsConfig | undefined;
    readonly appearance?: AppearanceConfig | undefined;
    readonly projectId?: number | undefined;
    onLoad?(): void;
}

export interface HtmlExport {
    readonly design: Design;
    readonly html: string;
}

export interface FileInfo {
    readonly accepted: File[];
    readonly attachments: File[];
}

export interface FileUploadDoneData {
    readonly progress: number;
    readonly url?: string | undefined;
}

export interface Design {
    readonly counters?: object | undefined;
    readonly body: {
        readonly rows: object[];
        readonly values?: object | undefined;
    };
}

export type SaveDesignCallback = (data: Design) => void;
export type ExportHtmlCallback = (data: HtmlExport) => void;
export type EventCallback = (data: object) => void;
export type FileUploadCallback = (file: FileInfo, done: FileUploadDoneCallback) => void;
export type FileUploadDoneCallback = (data: FileUploadDoneData) => void;

export type DisplayConditionDoneCallback = (data: DisplayCondition | null) => void;
export type DisplayConditionCallback = (data: DisplayCondition | EmptyDisplayCondition, done: DisplayConditionDoneCallback) => void;

export default class Component extends ReactComponent<EmailEditorProps> {
    private unlayerReady(): void;
    registerCallback(type: 'image', callback: FileUploadCallback): void;
    registerCallback(type: 'displayCondition', callback: DisplayConditionCallback): void;
    addEventListener(type: string, callback: EventCallback): void;
    loadDesign(design: Design): void;
    saveDesign(callback: SaveDesignCallback): void;
    exportHtml(callback: ExportHtmlCallback): void;
    setMergeTags(mergeTags: ReadonlyArray<MergeTag>): void;
}

export {};

interface StringList {
    [key: string]: string;
}
