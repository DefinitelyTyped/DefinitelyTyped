/**
 * Signals that the user closed the sidebar.
 */
export function closeGeneralSidebar(): void;

/**
 * Signals that the user closed a modal.
 */
export function closeModal(): void;

/**
 * Signals that the user closed the publish sidebar.
 */
export function closePublishSidebar(): void;

/**
 * Signals that block types by the given name(s) should be hidden.
 *
 * @param blockNames - Names of block types to hide.
 */
export function hideBlockTypes(blockNames: string | string[]): void;

/**
 * Signals a successful meta box update.
 */
export function metaBoxUpdatesSuccess(): void;

/**
 * Signals that the user opened an editor sidebar.
 *
 * @param name - Sidebar name to be opened.
 */
export function openGeneralSidebar(name: string): void;

/**
 * Signals that the user opened a modal.
 *
 * @param name - A string that uniquely identifies the modal.
 */
export function openModal(name: string): void;

/**
 * Signals that the user opened the publish sidebar.
 */
export function openPublishSidebar(): void;

/**
 * Remove a panel from the editor.
 *
 * @param panelName - A string that identifies the panel to remove.
 */
export function removeEditorPanel(panelName: string): void;

/**
 * Request meta box updates.
 */
export function requestMetaBoxUpdates(): void;

/**
 * Signals what Meta boxes are available in which location.
 *
 * @param metaBoxesPerLocation - Meta boxes per location.
 */
export function setAvailableMetaBoxesPerLocation(metaBoxesPerLocation: object): void;

/**
 * Signals that block types by the given name(s) should be shown.
 *
 * @param blockNames - Names of block types to show.
 */
export function showBlockTypes(blockNames: string | string[]): void;

/**
 * Switches editor mode.
 *
 * @param mode - The mode to switch to.
 */
export function switchEditorMode(mode: 'text' | 'visual'): void;

/**
 * Enables or disables a panel in the editor.
 *
 * @param panelName - A string that identifies the panel to enable or disable.
 */
export function toggleEditorPanelEnabled(panelName: string): void;

/**
 * Opens or closes a panel in the editor.
 *
 * @param panelName - A string that identifies the panel to open or close.
 */
export function toggleEditorPanelOpened(panelName: string): void;

/**
 * Toggles a feature flag.
 *
 * @param feature - Feature name.
 */
export function toggleFeature(feature: string): void;

/**
 * Toggles a pinned plugin item.
 *
 * @param pluginName - Plugin name.
 */
export function togglePinnedPluginItem(pluginName: string): void;

/**
 * Signals that the user toggled the publish sidebar.
 */
export function togglePublishSidebar(): void;
