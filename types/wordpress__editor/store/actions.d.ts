import { EditorSettings } from "@wordpress/block-editor";
import { BlockInstance, TemplateArray } from "@wordpress/blocks";

export {
    clearSelectedBlock,
    enterFormattedText,
    exitFormattedText,
    hideInsertionPoint,
    insertBlock,
    insertBlocks,
    insertDefaultBlock,
    mergeBlocks,
    moveBlocksDown,
    moveBlocksUp,
    moveBlockToPosition,
    multiSelect,
    receiveBlocks,
    removeBlock,
    removeBlocks,
    replaceBlock,
    replaceBlocks,
    resetBlocks,
    selectBlock,
    setTemplateValidity,
    showInsertionPoint,
    startMultiSelect,
    startTyping,
    stopMultiSelect,
    stopTyping,
    synchronizeTemplate,
    toggleBlockMode,
    toggleSelection,
    updateBlock,
    updateBlockAttributes,
    updateBlockListSettings,
} from "@wordpress/block-editor/store/actions";

/**
 * Action generator used in signalling that the post should autosave.
 *
 * @param options - Extra flags to identify the autosave.
 */
export function autosave(options?: Record<string, boolean>): IterableIterator<void>;

/**
 * Signals that an undo history record should be created.
 *
 * @deprecated since 12.2.0.
 */
export function createUndoLevel(): { type: "DO_NOTHING" };

/**
 * Signals that the user has disabled the publish sidebar.
 */
export function disablePublishSidebar(): void;

/**
 * Signals that attributes of the post have been edited.
 *
 * @param edits - Post attributes to edit.
 */
export function editPost(edits: Record<string, any>): void;

/**
 * Signals that the user has enabled the publish sidebar.
 */
export function enablePublishSidebar(): void;

/**
 * Signals that post saving is locked.
 *
 * @param lockName - The lock name.
 */
export function lockPostSaving(lockName: string): void;

/**
 * Signals that undo history should restore last popped state.
 */
export function redo(): void;

/**
 * Action generator for handling refreshing the current post.
 *
 * @deprecated since 12.2.0.
 */
export function refreshPost(): { type: "DO_NOTHING" };

/**
 * Signals that the blocks have been updated.
 *
 * @param blocks - Block Array.
 * @param options - Optional options.
 */
export function resetEditorBlocks(blocks: BlockInstance[], options?: Record<string, any>): IterableIterator<void>;

/**
 * Signals that the latest version of the post has been received, either by initialization or save.
 *
 * @param post - Post object.
 */
export function resetPost(post: Record<string, any>): void;

/**
 * Action generator for saving the current post in the editor.
 */
export function savePost(options?: Record<string, any>): IterableIterator<void>;

/**
 * Signals that editor has initialized with the specified post object and editor settings.
 *
 * @param post - Post object.
 * @param edits - Initial edited attributes object.
 * @param template - Block Template.
 */
export function setupEditor(
    post: Record<string, any>,
    edits?: Record<string, any>,
    template?: TemplateArray,
): IterableIterator<void>;

/**
 * Used to setup the editor state when first opening an editor.
 *
 * @param post - Post object.
 */
export function setupEditorState(post: Record<string, any>): void;

/**
 * Action generator for trashing the current post in the editor.
 */
export function trashPost(): IterableIterator<void>;

/**
 * Signals that undo history should pop.
 */
export function undo(): void;

/**
 * Signals that post saving is unlocked.
 *
 * @param lockName - The lock name.
 */
export function unlockPostSaving(lockName: string): void;

/**
 * Signals that the post editor settings have been updated.
 *
 * @param settings - Updated settings
 */
export function updateEditorSettings(settings: Partial<EditorSettings>): void;

/**
 * Signals that a patch of updates for the latest version of the post have been received.
 *
 * @param edits - Updated post fields.
 */
export function updatePost(edits: Record<string, any>): void;

/**
 * Used to lock the editor.
 *
 * @param lock - Details about the post lock status, user, and nonce.
 */
export function updatePostLock(lock: EditorSettings["postLock"]): void;
