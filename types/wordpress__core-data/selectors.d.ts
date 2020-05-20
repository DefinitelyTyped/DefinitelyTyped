import { Schema } from '@wordpress/api-fetch';

import { Autosave, Entity } from './';

/**
 * Returns whether the current user can perform the given action on the given REST resource.
 *
 * Calling this may trigger an OPTIONS request to the REST API via the `canUser()` resolver.
 *
 * https://developer.wordpress.org/rest-api/reference/
 *
 * @param action - Action to check. One of: 'create', 'read', 'update', 'delete'.
 * @param resource - REST resource to check, e.g. 'media' or 'posts'.
 * @param id - Optional ID of the rest resource to check.
 *
 * @returns Whether or not the user can perform the action, or `undefined` if the OPTIONS request is
 * still being made.
 */
export function canUser(
    action: 'create' | 'read' | 'update' | 'delete',
    resource: string,
    id: string | number
): boolean | undefined;

/**
 * Returns all available authors.
 */
export function getAuthors(): Schema.User[];

/**
 * Returns the autosave for the post and author.
 *
 * @param postType - The type of the parent post.
 * @param postId - The id of the parent post.
 * @param authorId - The id of the author.
 *
 * @returns The autosave for the post and author.
 */
export function getAutosave(postType: string, postId: number, authorId: number): Autosave | undefined;

/**
 * Returns the latest autosaves for the post.
 *
 * May return multiple autosaves since the backend stores one autosave per author for each post.
 *
 * @param postType - The type of the parent post.
 * @param postId - The id of the parent post.
 *
 * @returns An array of autosaves for the post, or undefined if there is none.
 */
export function getAutosaves(postType: string, postId: number): Autosave[] | undefined;

/**
 * Returns the current user.
 */
export function getCurrentUser(): Schema.User;

/**
 * Returns the embed preview for the given URL.
 *
 * @param url - Embedded URL.
 *
 * @returns Undefined if the preview has not been fetched, otherwise, the preview fetched from the embed preview API.
 */
export function getEmbedPreview(url: string): Record<string, any> | undefined;

/**
 * Returns whether the entities for the give kind are loaded.
 *
 * @param kind - Entity kind.
 */
export function getEntitiesByKind(kind: string): Entity[];

/**
 * Returns the entity object given its kind and name.
 *
 * @param kind - Entity kind.
 * @param name - Entity name.
 */
export function getEntity(kind: string, name: string): Entity | undefined;

/**
 * Returns the Entity's record object by key.
 *
 * @param kind - Entity kind.
 * @param name - Entity name.
 * @param key - Record's key
 */
export function getEntityRecord(kind: string, name: string, key: number): Record<string, any> | undefined;

/**
 * Returns the Entity's records.
 *
 * @param kind - Entity kind.
 * @param name - Entity name.
 * @param query - Optional terms query.
 *
 * @returns Records.
 */
export function getEntityRecords(kind: string, name: string, query?: Record<string, any>): Array<Record<string, any>>;

/**
 * Return theme supports data in the index.
 */
export function getThemeSupports(): Partial<Schema.Theme['theme_supports']>;

/**
 * Returns all the users returned by a query ID.
 *
 * @param queryID - Query ID.
 *
 * @returns Users list.
 */
export function getUserQueryResults(queryId: string): Schema.User[];

/**
 * Returns `true` if the REST request for autosaves has completed.
 *
 * @param postType - The type of the parent post.
 * @param postId - The id of the parent post.
 *
 * @returns True if the REST request was completed. False otherwise.
 */
export function hasFetchedAutosaves(postType: string, postId: number): boolean;

/**
 * Returns whether the current user can upload media.
 *
 * Calling this may trigger an OPTIONS request to the REST API via the `canUser()` resolver.
 *
 * https://developer.wordpress.org/rest-api/reference/
 *
 * @deprecated since 5.0. Callers should use the more generic `canUser()` selector instead of
 *                        `hasUploadPermissions()`, e.g. `canUser( 'create', 'media' )`.
 *
 * @returns Whether or not the user can upload media. Defaults to `true` if the OPTIONS request is
 * being made.
 */
export function hasUploadPermissions(): boolean;

/**
 * Determines if the returned preview is an oEmbed link fallback.
 *
 * WordPress can be configured to return a simple link to a URL if it is not embeddable. We need to
 * be able to determine if a URL is embeddable or not, based on what we get back from the oEmbed
 * preview API.
 *
 * @param url - Embedded URL.
 *
 * @returns Is the preview for the URL an oEmbed link fallback.
 */
export function isPreviewEmbedFallback(url: string): boolean;

/**
 * Returns `true` if a request is in progress for embed preview data, or `false` otherwise.
 *
 * @param url - URL the preview would be for.
 *
 * @returns Whether a request is in progress for an embed preview.
 */
export function isRequestingEmbedPreview(url: string): boolean;
