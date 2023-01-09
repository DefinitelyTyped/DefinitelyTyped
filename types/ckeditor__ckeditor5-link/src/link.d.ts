import { Plugin } from '@ckeditor/ckeditor5-core';
import LinkEditing from './linkediting';
import LinkUI from './linkui';
import AutoLink from './autolink';

/**
 * The link plugin.
 *
 * This is a "glue" plugin that loads the {@link module:link/linkediting~LinkEditing link editing feature}
 * and {@link module:link/linkui~LinkUI link UI feature}.
 */
export default class Link extends Plugin {
    static readonly requires: [typeof LinkEditing, typeof LinkUI, typeof AutoLink];
    static readonly pluginName: 'Link';
}

export interface LinkDecoratorDefinition {
    mode: 'automatic' | 'manual';
}

export interface LinkDecoratorAutomaticDefinition extends LinkDecoratorDefinition {
    attributes?: Record<string, string>;
    callback(url: string): boolean;
    mode: 'automatic';
    classes?: string | string[];
    styles?: Record<string, string>;
}

export interface LinkDecoratorManualDefinition extends LinkDecoratorDefinition {
    attributes?: Record<string, string>;
    defaultValue?: boolean | undefined;
    label: string;
    mode: 'manual';
    styles?: Record<string, string>;
    classes?: string | string[];
}

/**
 * The configuration of the {@link module:link/link~Link} feature.
 *
 * Read more in {@link module:link/link~LinkConfig}.
 */
export interface LinkConfig {
    addTargetToExternalLinks?: boolean | undefined;
    decorators?: Record<string, LinkDecoratorManualDefinition | LinkDecoratorAutomaticDefinition> | undefined;
    defaultProtocol?: string | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Link: Link;
    }
}

declare module '@ckeditor/ckeditor5-core/src/editor/editorconfig' {
    interface EditorConfig {
        link?: LinkConfig | undefined;
        'link.addTargetToExternalLinks'?: LinkConfig['addTargetToExternalLinks'];
        'link.decorators'?: LinkConfig['decorators'];
        'link.defaultProtocol'?: LinkConfig['defaultProtocol'];
    }
}
