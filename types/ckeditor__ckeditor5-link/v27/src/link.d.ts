import { Plugin } from '@ckeditor/ckeditor5-core';
import LinkEditing from './linkediting';
import LinkUI from './linkui';
import AutoLink from './autolink';

export default class Link extends Plugin {
    static readonly requires: [typeof LinkEditing, typeof LinkUI, typeof AutoLink];
    static readonly pluginName: 'Link';
}

export interface LinkDecoratorDefinition {
    mode: 'automatic' | 'manual';
}

export interface LinkDecoratorAutomaticDefinition extends LinkDecoratorDefinition {
    attributes: Record<string, string>;
    callback(url: string): boolean;
    mode: 'automatic';
}

export interface LinkDecoratorManualDefinition extends LinkDecoratorDefinition {
    attributes: Record<string, string>;
    defaultValue?: boolean;
    label: string;
    mode: 'manual';
}

export interface LinkConfig {
    addTargetToExternalLinks?: boolean;
    decorators?: Record<string, LinkDecoratorDefinition>;
    defaultProtocol?: string;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Link: Link;
    }
}
