// Type definitions for react-email-editor 0.9
// Project: https://github.com/unlayer/react-email-editor
// Definitions by: Nikita Granko <https://github.com/ngranko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component as ReactComponent, CSSProperties } from 'react';

export type ThemeColor = 'light' | 'dark';
export type DockPosition = 'right' | 'left';
export interface AppearanceConfig {
    readonly theme?: ThemeColor;
    readonly panels?: {
        readonly tools?: {
            readonly dock: DockPosition;
        };
    };
}

export interface User {
    readonly id?: number;
    readonly name?: string;
    readonly email?: string;
}

export interface MergeTag {
    readonly name: string;
    readonly value: string;
}

export interface DesignTagConfig {
    readonly delimeter: [string, string];
}

export interface ToolConfig {
    readonly enabled?: boolean;
    readonly position?: number;
    readonly data?: StringList;
}

export interface ToolsConfig {
    readonly [key: string]: ToolConfig;
}

export interface EditorConfig {
    readonly minRows?: number;
    readonly maxRows?: number;
}

export interface Features {
    readonly preview?: boolean;
    readonly imageEditor?: boolean;
    readonly undoRedo?: boolean;
}

export type DisplayMode = 'email' | 'web';
export interface UnlayerOptions {
    readonly id?: string;
    readonly displayMode?: DisplayMode;
    readonly projectId?: number;
    readonly locale?: string;
    readonly appearance?: AppearanceConfig;
    readonly user?: User;
    readonly mergeTags?: MergeTag[];
    readonly designTags?: StringList;
    readonly designTagsConfig?: DesignTagConfig;
    readonly tools?: ToolsConfig;
    readonly blocks?: object[];
    readonly editor?: EditorConfig;
    readonly safeHtml?: boolean;
    readonly customJS?: string[];
    readonly customCSS?: string[];
    readonly features?: Features;
}

export interface EmailEditorProps {
    readonly style?: CSSProperties;
    readonly minHeight?: number;
    readonly options?: UnlayerOptions;
    readonly tools?: ToolsConfig;
    readonly appearance?: AppearanceConfig;
    readonly projectId?: number;
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
    readonly url?: string;
}

export interface Design {
    readonly counters?: object;
    readonly body: {
        readonly rows: object[];
        readonly values?: object;
    };
}

export type SaveDesignCallback = (data: Design) => void;
export type ExportHtmlCallback = (data: HtmlExport) => void;
export type EventCallback = (data: object) => void;
export type FileUploadCallback = (file: FileInfo, done: FileUploadDoneCallback) => void;
export type FileUploadDoneCallback = (data: FileUploadDoneData) => void;

export default class Component extends ReactComponent<EmailEditorProps> {
    private unlayerReady(): void;
    registerCallback(type: 'image', callback: FileUploadCallback): void;
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
