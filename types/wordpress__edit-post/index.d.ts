import { dispatch, select, StoreDescriptor } from "@wordpress/data";

declare module "@wordpress/data" {
    function dispatch(key: "core/edit-post"): typeof import("./store/actions");
    function select(key: "core/edit-post"): typeof import("./store/selectors");
}

export interface EditPostStoreDescriptor extends StoreDescriptor {
    name: "core/edit-post";
}

export const store: EditPostStoreDescriptor;

export type MetaboxLocation = "advanced" | "normal" | "side";

// FIXME: move this to @wordpress/block-editor when types are created for that package.
export type EditorMode = "text" | "visual";

// FIXME: move this to @wordpress/block-editor when types are created for that package.
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
    colors: Array<{
        color: string;
        name: string;
        slug: string;
    }>;
    /**
     * Whether or not the custom colors are disabled.
     */
    disableCustomColors: boolean;
    /**
     * Whether or not the custom font sizes are disabled.
     */
    disableCustomFontSizes: boolean;
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
    fontSizes: Array<{
        name: string;
        size: number;
        slug: string;
    }>;
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
    imageSizes: Array<{
        name: string;
        slug: string;
    }>;
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
    styles: Array<{
        css: string;
    }>;
    /**
     * Empty title placeholder.
     * @defaultValue `"Add title"`
     */
    titlePlaceholder: string;
}

export interface MetaboxDescriptor {
    id: string;
    title: string;
}

/**
 * Initializes and returns an instance of Editor.
 *
 * The return value of this function is not necessary if we change where we
 * call initializeEditor(). This is due to metaBox timing.
 *
 * @param id - Unique identifier for editor instance.
 * @param postType - Post type of the post to edit.
 * @param postId - ID of the post to edit.
 * @param settings - Editor settings object.
 * @param initialEdits - Programmatic edits to apply initially, to be considered as
 *                       non-user-initiated (bypass for unsaved changes prompt).
 */
export function initializeEditor(
    id: string,
    postType: string,
    postId: string | number,
    settings?: Partial<EditorSettings>,
    // FIXME: it is unclear what this is
    initialEdits?: object,
): void;

/**
 * Reinitializes the editor after the user chooses to reboot the editor after
 * an unhandled error occurs, replacing previously mounted editor element using
 * an initial state from prior to the crash.
 *
 * @param postType - Post type of the post to edit.
 * @param postId - ID of the post to edit.
 * @param target - DOM node in which editor is rendered.
 * @param settings - Editor settings object.
 * @param initialEdits - Programmatic edits to apply initially, to be considered as
 *                       non-user-initiated (bypass for unsaved changes prompt).
 */
export function reinitializeEditor(
    postType: string,
    postId: string | number,
    target: Element,
    settings?: Partial<EditorSettings>,
    // FIXME: it is unclear what this is
    initialEdits?: object,
): void;

export {
    default as PluginBlockSettingsMenuItem,
} from "./components/block-settings-menu/plugin-block-settings-menu-item";
export { default as PluginMoreMenuItem } from "./components/header/plugin-more-menu-item";
export { default as PluginSidebarMoreMenuItem } from "./components/header/plugin-sidebar-more-menu-item";
export { default as PluginDocumentSettingPanel } from "./components/sidebar/plugin-document-setting-panel";
export { default as PluginPostPublishPanel } from "./components/sidebar/plugin-post-publish-panel";
export { default as PluginPostStatusInfo } from "./components/sidebar/plugin-post-status-info";
export { default as PluginPrePublishPanel } from "./components/sidebar/plugin-pre-publish-panel";
export { default as PluginSidebar } from "./components/sidebar/plugin-sidebar";
