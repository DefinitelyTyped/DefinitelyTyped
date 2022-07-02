import { Schema } from './schema';
import { Autosave, Entity } from './';

/**
 * Adds new entities.
 *
 * @param entities - Entities received.
 */
export function addEntities(entities: Entity[]): void;

/**
 * Returns an action object used in signalling that the autosaves for a post have been received.
 *
 * @param postId - The id of the post that is parent to the autosave.
 * @param autosaves - An array of autosaves or singular autosave object.
 */
export function receiveAutosaves(postId: number, autosaves: Autosave | Autosave[]): void;

/**
 * Returns an action used in signalling that the current user has been received.
 *
 * @param currentUser - Current user object.
 */
export function receiveCurrentUser(currentUser: Schema.User): void;

/**
 * Returns an action object used in signalling that the preview data for a given URl has been
 * received.
 *
 * @param url - URL to preview the embed for.
 * @param preview - Preview data.
 */
export function receiveEmbedPreview(url: string, preview: Record<string, any>): void;

/**
 * Returns an action object used in signalling that entity records have been received.
 *
 * @param kind - Kind of the received entity.
 * @param name - Name of the received entity.
 * @param records - Records received.
 * @param query - Query Object.
 * @param invalidateCache - Should invalidate query caches?
 */
export function receiveEntityRecords(
    kind: string,
    name: string,
    records: Record<string, any> | Array<Record<string, any>>,
    query?: Record<string, any>,
    invalidateCache?: boolean
): void;

/**
 * Returns an action object used in signalling that the index has been received.
 *
 * @param themeSupports - Theme support for the current theme.
 */
export function receiveThemeSupports(themeSupports: Schema.Theme['theme_supports']): void;

/**
 * Returns an action object used in signalling that Upload permissions have been received.
 *
 * @param hasUploadPermissions - Does the user have permission to upload files?
 */
export function receiveUploadPermissions(hasUploadPermissions: boolean): void;

/**
 * Returns an action object used in signalling that the current user has permission to perform an
 * action on a REST resource.
 *
 * @param key - A key that represents the action and REST resource.
 * @param isAllowed - Whether or not the user can perform the action.
 */
export function receiveUserPermission(key: string, isAllowed: boolean): void;

/**
 * Returns an action object used in signalling that authors have been received.
 *
 * @param queryID - Query ID.
 * @param users - Users received.
 */
export function receiveUserQuery(queryID: string, users: Schema.User | Schema.User[]): void;

/**
 * Action triggered to save an entity record.
 *
 * @param kind - Kind of the received entity.
 * @param name - Name of the received entity.
 * @param record - Record to be saved.
 */
export function saveEntityRecord(kind: string, name: string, record: Record<string, any>): IterableIterator<void>;
