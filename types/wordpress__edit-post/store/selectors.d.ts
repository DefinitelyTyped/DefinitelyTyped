import { EditorMode, MetaboxDescriptor, MetaboxLocation } from '../';

/**
 * Returns the current active general sidebar name, or `null` if there is no general sidebar active.
 *
 * @remarks
 * The active general sidebar is a unique name to identify either an editor or plugin sidebar.
 *
 * Examples:
 *  - `edit-post/document`
 *  - `my-plugin/insert-image-sidebar`
 */
export function getActiveGeneralSidebarName(): string | null;

/**
 * Returns an array of active meta box locations.
 */
export function getActiveMetaBoxLocations(): MetaboxLocation[];

/**
 * Returns the list of all the available meta boxes.
 */
export function getAllMetaBoxes(): MetaboxDescriptor[];

/**
 * Returns the current editing mode.
 */
export function getEditorMode(): EditorMode;

/**
 * Returns the list of all the available meta boxes for a given location.
 *
 * @param location - Meta box location to test.
 */
export function getMetaBoxesPerLocation(location: MetaboxLocation): MetaboxDescriptor[] | undefined;

/**
 * Returns the value of a given preference.
 *
 * @param preferenceKey - Preference Key.
 * @param [defaultValue] - Default Value.
 */
export function getPreference<T = unknown>(preferenceKey: string): T | undefined; // tslint:disable-line:no-unnecessary-generics
export function getPreference<T>(
    preferenceKey: string,
    defaultValue: T
): T extends string ? string : T extends number ? number : T;

/**
 * Returns the preferences (these preferences are persisted locally).
 */
export function getPreferences(): Record<string, any>;

/**
 * Returns `true` if the post is using Meta Boxes, `false` otherwise.
 */
export function hasMetaBoxes(): boolean;

/**
 * Returns `true` if the given panel is enabled, or `false` otherwise. Panels are enabled by
 * default.
 *
 * @param panelName - A string that identifies the panel.
 */
export function isEditorPanelEnabled(panelName: string): boolean;

/**
 * Returns `true` if the given panel is open, or `false` otherwise. Panels are closed by default.
 *
 * @param panelName - A string that identifies the panel.
 */
export function isEditorPanelOpened(panelName: string): boolean;

/**
 * Returns `true` if the given panel was programmatically removed, or `false` otherwise.  All panels
 * are not removed by default.
 *
 * @param panelName - A string that identifies the panel.
 */
export function isEditorPanelRemoved(panelName: string): boolean;

/**
 * Returns `true` if the editor sidebar is opened, `false` otherwise.
 */
export function isEditorSidebarOpened(): boolean;

/**
 * Returns whether the given feature is enabled or not.
 *
 * @param feature - Feature slug.
 */
export function isFeatureActive(feature: string): boolean;

/**
 * Returns `true` if there is an active meta box in the given location, or `false` otherwise.
 *
 * @param location - Meta box location to test.
 */
export function isMetaBoxLocationActive(location: MetaboxLocation): boolean;

/**
 * Returns `true` if a metabox location is active and visible, `false` otherwise.
 *
 * @param location - Meta box location to test.
 */
export function isMetaBoxLocationVisible(location: MetaboxLocation): boolean;

/**
 * Returns `true` if a modal is active, or `false` otherwise.
 *
 * @param modalName - A string that uniquely identifies the modal.
 */
export function isModalActive(modalName: string): boolean;

/**
 * Returns `true` if the plugin item is pinned to the header. When the value is not set it defaults
 * to `true`.
 *
 * @param pluginName - Plugin item name.
 */
export function isPluginItemPinned(pluginName: string): boolean;

/**
 * Returns `true` if the plugin sidebar is opened, `false` otherwise.
 */
export function isPluginSidebarOpened(): boolean;

/**
 * Returns `true` if the publish sidebar is opened, `false` otherwise.
 */
export function isPublishSidebarOpened(): boolean;

/**
 * Returns `true` if the Meta Boxes are being saved, `false` otherwise.
 */
export function isSavingMetaBoxes(): boolean;
