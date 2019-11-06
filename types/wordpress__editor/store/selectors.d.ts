import { Schema } from '@wordpress/api-fetch';
import { EditorSettings } from '@wordpress/block-editor';
import { BlockInstance } from '@wordpress/blocks';
import { Autosave } from '@wordpress/core-data';

export {
    canInsertBlockType,
    getAdjacentBlockClientId,
    getBlock,
    getBlockAttributes,
    getBlockCount,
    getBlockHierarchyRootClientId,
    getBlockIndex,
    getBlockInsertionPoint,
    getBlockListSettings,
    getBlockMode,
    getBlockName,
    getBlockOrder,
    getBlockRootClientId,
    getBlockSelectionEnd,
    getBlockSelectionStart,
    getBlocks,
    getBlocksByClientId,
    getClientIdsOfDescendants,
    getClientIdsWithDescendants,
    getFirstMultiSelectedBlockClientId,
    getGlobalBlockCount,
    getInserterItems,
    getLastMultiSelectedBlockClientId,
    getMultiSelectedBlockClientIds,
    getMultiSelectedBlocks,
    getMultiSelectedBlocksEndClientId,
    getMultiSelectedBlocksStartClientId,
    getNextBlockClientId,
    getPreviousBlockClientId,
    getSelectedBlock,
    getSelectedBlockClientId,
    getSelectedBlockCount,
    getSelectedBlocksInitialCaretPosition,
    getTemplate,
    getTemplateLock,
    hasInserterItems,
    hasMultiSelection,
    hasSelectedBlock,
    hasSelectedInnerBlock,
    isAncestorMultiSelected,
    isBlockInsertionPointVisible,
    isBlockMultiSelected,
    isBlockSelected,
    isBlockValid,
    isBlockWithinSelection,
    isCaretWithinFormattedText,
    isFirstMultiSelectedBlock,
    isMultiSelecting,
    isSelectionEnabled,
    isTyping,
    isValidTemplate,
} from '@wordpress/block-editor/store/selectors';

/**
 * Returns whether or not the user has the unfiltered_html capability.
 *
 * @returns Whether the user can or can't post unfiltered HTML.
 */
export function canUserUseUnfilteredHTML(): boolean;

/**
 * Returns `true` if a previous post save was attempted but failed, or `false` otherwise.
 *
 * @returns Whether the post save failed.
 */
export function didPostSaveRequestFail(): boolean;

/**
 * Returns `true` if a previous post save was attempted successfully, or `false` otherwise.
 *
 * @returns Whether the post was saved successfully.
 */
export function didPostSaveRequestSucceed(): boolean;

/**
 * Returns the active post lock.
 */
export function getActivePostLock(): string | undefined;

/**
 * Returns the current autosave, or an empty object if one is not set (i.e. if the post has yet to
 * be autosaved, or has been saved or published since the last autosave).
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )`
 * 			   selector from the '@wordpress/core-data' package.
 */
export function getAutosave(): Autosave | {};

/**
 * Returns an attribute value of the current autosave revision for a post, or an empty object if
 * there is no autosave for the post.
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )` selector
 * 			   from the '@wordpress/core-data' package and access properties on the returned
 * 			   autosave object using getPostRawValue.
 *
 * @param attributeName - Autosave attribute name.
 */
export function getAutosaveAttribute<T extends keyof Autosave>(attributeName: T): Autosave[T] | {};

/**
 * Returns a set of blocks which are to be used in consideration of the post's generated save
 * content.
 *
 * @returns Filtered set of blocks for save.
 */
export function getBlocksForSerialization(): BlockInstance[];

/**
 * Returns the post currently being edited in its last known saved state, not including unsaved
 * edits. Returns an object containing relevant default post values if the post has not yet been
 * saved.
 */
export function getCurrentPost(): Schema.Decontextualize<Schema.PostOrPage<'edit'>>;

/**
 * Returns an attribute value of the saved post.
 *
 * @param attributeName - Post attribute name.
 */
export function getCurrentPostAttribute<T extends keyof Schema.PostOrPage<'edit'>>(
    attributeName: T
): Schema.Decontextualize<Schema.PostOrPage<'edit'>>[T] | undefined;

/**
 * Returns the ID of the post currently being edited.
 */
export function getCurrentPostId(): number;

/**
 * Returns the last revision ID of the post currently being edited, or `null` if the post has no
 * revisions.
 */
export function getCurrentPostLastRevisionId(): number | null;

/**
 * Returns the number of revisions of the post currently being edited.
 */
export function getCurrentPostRevisionsCount(): number;

/**
 * Returns the post type of the post currently being edited.
 */
export function getCurrentPostType(): string;

/**
 * Returns a single attribute of the post being edited, preferring the unsaved edit if one exists,
 * but falling back to the attribute for the last known saved state of the post.
 *
 * @param attributeName - Post attribute name.
 */
export function getEditedPostAttribute<T extends keyof Schema.PostOrPage<'edit'>>(
    attributeName: T
): Schema.Decontextualize<Schema.PostOrPage<'edit'>>[T] | undefined;

/**
 * Returns the content of the post being edited, preferring raw string edit before falling back to
 * serialization of block state.
 */
export function getEditedPostContent(): string;

/**
 * Returns the post preview link.
 */
export function getEditedPostPreviewLink(): string | null;

/**
 * Returns the current visibility of the post being edited, preferring the unsaved value if
 * different than the saved post. The return value is one of `"private"`, `"password"`, or `"public"`.
 */
export function getEditedPostVisibility(): 'password' | 'private' | 'public';

/**
 * Return the current block list.
 */
export function getEditorBlocks(): BlockInstance[];

/**
 * Returns the post editor settings.
 */
export function getEditorSettings(): EditorSettings;

/**
 * Returns the permalink for the post.
 *
 * @returns The permalink, or `null` if the post is not viewable.
 */
export function getPermalink(): string | null;

/**
 * Returns the permalink for a post, split into it's three parts: the prefix, the postName, and the
 * suffix.
 *
 * @returns An object containing the prefix, postName, and suffix for the permalink, or `null` if
 * the post is not viewable.
 */
export function getPermalinkParts(): { postName: string; prefix: string; suffix?: string } | null;

/**
 * Returns any post values which have been changed in the editor but not yet been saved.
 *
 * @returns Object of key value pairs comprising unsaved edits.
 */
export function getPostEdits(): Partial<Schema.Decontextualize<Schema.PostOrPage<'edit'>>>;

/**
 * Returns details about the post lock user.
 */
export function getPostLockUser(): Schema.User | undefined | null;

/**
 * Returns a new reference when edited values have changed. This is useful in inferring where an
 * edit has been made between states by comparison of the return values using strict equality.
 *
 * @example
 * ```js
 * const hasEditOccurred = (
 *    getReferenceByDistinctEdits( beforeState ) !==
 *    getReferenceByDistinctEdits( afterState )
 * );
 * ```
 *
 * @returns A value whose reference will change only when an edit occurs.
 */
export function getReferenceByDistinctEdits(): [];

/**
 * Returns state object prior to a specified optimist transaction ID, or `null` if the transaction
 * corresponding to the given ID cannot be found.
 *
 * @param transactionId - Optimist transaction ID.
 *
 * @returns Global application state prior to transaction.
 */
export function getStateBeforeOptimisticTransaction(transactionId: object): any;

/**
 * Returns a suggested post format for the current post, inferred only if there is a single block
 * within the post and it is of a type known to match a default post format. Returns `null` if the
 * format cannot be determined.
 */
export function getSuggestedPostFormat(): string | null;

/**
 * Returns the true if there is an existing autosave, otherwise false.
 *
 * @deprecated since 5.6. Callers should use the `getAutosave( postType, postId, userId )` selector
 *             from the '@wordpress/core-data' package and check for a truthy value.
 */
export function hasAutosave(): boolean;

/**
 * Returns `true` if content includes unsaved changes, or `false` otherwise.
 */
export function hasChangedContent(): boolean;

/**
 * Returns `true` if any future editor history snapshots exist, or `false` otherwise.
 */
export function hasEditorRedo(): boolean;

/**
 * Returns `true` if any past editor history snapshots exist, or `false` otherwise.
 */
export function hasEditorUndo(): boolean;

/**
 * Returns `true` if an optimistic transaction is pending commit, for which the before state
 * satisfies the given predicate function.
 *
 * @param predicate - Function given state, returning `true` if match.
 */
export function inSomeHistory(predicate: (state: Record<string, any>) => boolean): boolean;

/**
 * Returns `true` if the post is autosaving, or `false` otherwise.
 */
export function isAutosavingPost(): boolean;

/**
 * Returns `true` if there are no unsaved values for the current edit session and if the currently
 * edited post is new (has never been saved before).
 */
export function isCleanNewPost(): boolean;

/**
 * Returns `true` if post is pending review.
 */
export function isCurrentPostPending(): boolean;

/**
 * Return `true` if the current post has already been published.
 */
export function isCurrentPostPublished(): boolean;

/**
 * Returns `true` if post is already scheduled.
 */
export function isCurrentPostScheduled(): boolean;

/**
 * Returns `true` if the post can be autosaved, or `false` otherwise.
 */
export function isEditedPostAutosaveable(): boolean;

/**
 * Return `true` if the post being edited is being scheduled. Preferring the unsaved status values.
 */
export function isEditedPostBeingScheduled(): boolean;

/**
 * Returns whether the current post should be considered to have a "floating" date (i.e. that it
 * would publish "Immediately" rather than at a set time).
 *
 * @remarks
 * Unlike in the PHP backend, the REST API returns a full date string for posts where the
 * 0000-00-00T00:00:00 placeholder is present in the database. To infer that a post is set to
 * publish "Immediately" we check whether the date and modified date are the same.
 */
export function isEditedPostDateFloating(): boolean;

/**
 * Returns `true` if there are unsaved values for the current edit session, or `false` if the
 * editing state matches the saved or new post.
 */
export function isEditedPostDirty(): boolean;

/**
 * Returns `true` if the edited post has content. A post has content if it has at least one saveable
 * block or otherwise has a non-empty content property assigned.
 */
export function isEditedPostEmpty(): boolean;

/**
 * Returns `true` if the currently edited post is yet to be saved, or `false` if the post has been
 * saved.
 */
export function isEditedPostNew(): boolean;

/**
 * Return `true` if the post being edited can be published.
 */
export function isEditedPostPublishable(): boolean;

/**
 * Returns `true` if the post can be saved, or `false` otherwise. A post must contain a title, an
 * excerpt, or non-empty content to be valid for save.
 */
export function isEditedPostSaveable(): boolean;

/**
 * Returns whether the permalink is editable or not.
 */
export function isPermalinkEditable(): boolean;

/**
 * Returns whether the edition of the post has been taken over.
 */
export function isPostLockTakeover(): boolean;

/**
 * Returns whether the post is locked.
 */
export function isPostLocked(): boolean;

/**
 * Returns whether post saving is locked.
 */
export function isPostSavingLocked(): boolean;

/**
 * Returns `true` if the post is being previewed, or `false` otherwise.
 */
export function isPreviewingPost(): boolean;

/**
 * Returns whether the pre-publish panel should be shown or skipped when the user clicks the
 * "publish" button.
 */
export function isPublishSidebarEnabled(): boolean;

/**
 * Returns `true` if the post is being published, or `false` otherwise.
 */
export function isPublishingPost(): boolean;

/**
 * Returns `true` if the post is currently being saved, or `false` otherwise.
 */
export function isSavingPost(): boolean;
