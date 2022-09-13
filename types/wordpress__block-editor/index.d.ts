// Type definitions for @wordpress/block-editor 7.0
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
//                 Jon Surrell <https://github.com/sirreal>
//                 Dennis Snell <https://github.com/dmsnell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6
import { BlockIconNormalized } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';

export * from './components';
export * from './utils';
export { storeConfig } from './store';
export { SETTINGS_DEFAULTS } from './store/defaults';

declare module '@wordpress/data' {
    function dispatch(key: 'core/block-editor'): typeof import('./store/actions');
    function select(key: 'core/block-editor'): typeof import('./store/selectors');
}

export const store: any;

export type EditorBlockMode = 'html' | 'visual';
export type EditorMode = 'text' | 'visual';
export type EditorTemplateLock = 'all' | 'insert' | false;

export interface EditorBaseSetting {
    name: string;
    slug: string;
}

export interface EditorBlockListSettings {
    allowedBlocks?: string[] | undefined;
    templateLock?: EditorTemplateLock | undefined;
}

export interface EditorColor extends EditorBaseSetting {
    color: string;
}

export interface EditorFontSize extends EditorBaseSetting {
    size: number;
}

export type EditorImageSize = EditorBaseSetting;

export interface EditorInserterItem {
    /**
     * Unique identifier for the item.
     */
    id: string;
    /**
     * The type of block to create.
     */
    name: string;
    /**
     * Attributes to pass to the newly created block.
     */
    initialAttributes: Record<string, any>;
    /**
     * Title of the item, as it appears in the inserter.
     */
    title: string;
    /**
     * Icon for the item, as it appears in the inserter.
     */
    icon: BlockIconNormalized;
    /**
     * Block category that the item is associated with.
     */
    category: string;
    /**
     * Keywords that can be searched to find this item.
     */
    keywords: string[];
    /**
     * Whether or not the user should be prevented from inserting this item.
     */
    isDisabled: boolean;
    /**
     * How useful we think this item is, between 0 and 3.
     */
    utility: number;
    /**
     * Hueristic that combines frequency and recency.
     */
    frecency: number;
    hasChildBlocksWithInserterSupport: boolean;
}

export interface EditorSelection {
    /**
     * The selected block client ID.
     */
    clientId?: string | undefined;
    /**
     * The selected block attribute key.
     */
    attributeKey?: string | undefined;
    /**
     * The selected block attribute offset.
     */
    offset?: number | undefined;
}

export interface EditorStyle {
    css: string;
    baseURL?: string | undefined;
}

export interface EditorSettings {
    /**
     * Enable/Disable Wide/Full Alignments
     * @defaultValue `false`
     */
    alignWide: boolean;
    /**
     * Array of allowed block types, `true` for all blocks, or `false` for no blocks.
     * @defaultValue `true`
     */
    allowedBlockTypes: string[] | boolean;
    /**
     * Mapping of extension:mimetype
     * @example
     * ```js
     * {
     *   "jpg|jpeg|jpe": "image/jpeg",
     * }
     * ```
     */
    allowedMimeTypes: Record<string, string> | null;
    autosaveInterval: number;
    /**
     * Array of objects representing the legacy widgets available.
     */
    availableLegacyWidgets: Array<{
        description: string;
        isCallbackWidget: boolean;
        isHidden: boolean;
        name: string;
    }>;
    // FIXME: it is unclear what this value should be.
    availableTemplates: any[];
    /**
     * Empty post placeholder.
     * @defaultValue `"Start writing or type / to choose a block"`
     */
    bodyPlaceholder: string;
    /**
     * Whether or not the user can switch to the code editor.
     */
    codeEditingEnabled: boolean;
    /**
     * Palette colors.
     */
    colors: EditorColor[];
    /**
     * Whether or not the custom colors are disabled.
     */
    disableCustomColors: boolean;
    /**
     * Whether or not the custom font sizes are disabled.
     */
    disableCustomEditorFontSizes: boolean;
    /**
     * Whether or not the custom post formats are disabled.
     */
    disablePostFormats: boolean;
    /**
     * Whether or not the custom fields are enabled.
     */
    enableCustomFields: boolean;
    /**
     * Whether the focus mode is enabled or not.
     */
    focusMode: boolean;
    /**
     * Array of available font sizes.
     */
    fontSizes: EditorFontSize[];
    /**
     * Whether or not the editor toolbar is fixed.
     */
    hasFixedToolbar: boolean;
    /**
     * Whether or not the user is able to manage widgets.
     */
    hasPermissionsToManageWidgets: boolean;
    /**
     * Available image sizes.
     */
    imageSizes: EditorImageSize[];
    /**
     * Whether the editor is in RTL mode.
     */
    isRTL: boolean;
    maxUploadFileSize: number;
    /**
     * Max width to constraint resizing.
     */
    maxWidth: number;
    postLock: {
        isLocked: boolean;
        user: null | string;
    };
    postLockUtils: {
        nonce: string;
        unlockNonce: string;
        ajaxUrl: string;
    };
    richEditingEnabled: boolean;
    styles: EditorStyle[];
    /**
     * Empty title placeholder.
     * @defaultValue `"Add title"`
     */
    titlePlaceholder: string;
}
