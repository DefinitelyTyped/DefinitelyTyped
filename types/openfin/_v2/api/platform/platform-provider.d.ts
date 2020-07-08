import { Environment } from '../../environment/environment';
import { OverrideCallback } from '../../shapes/Platform';
export default function initConstructor(environment: Environment): (userOverrideFn: OverrideCallback<any>) => Promise<void>;
/**
 * ApplySnapshotOptions interface
 * @typedef { object } ApplySnapshotOptions
 * @property { boolean } [closeExistingWindows=false] When true, applySnapshot will close existing windows,
 * replacing current Platform state with the given snapshot.
 * @property { boolean } [skipOutOfBoundsCheck=false] When true, applySnapshot will not check whether any windows in a
 * snapshot are off-screen. By default, such windows will be repositioned to be on-screen,
 * as defined by {@link PlatformProvider#positionOutOfBoundsWindows PlatformProvider.positionOutOfBoundsWindows}.
 */
/**
 * Payload sent to Platform Provider when {@link Platform#applySnapshot Platform.applySnapshot} is called.
 * @typedef { object } ApplySnapshotPayload
 * @property { Snapshot } snapshot The snapshot to be applied.
 * @property { ApplySnapshotOptions } [options] Options to customize snapshot application.
 */
/**
 * CreateViewPayload interface
 * @typedef { object } CreateViewPayload
 * @property { View~options } opts Options for the view to be added.
 * @property { Identity } [target] Window the view will be added to. If no target is provided, a new window will be created.
 */
/**
 * CloseViewPayload interface
 * @typedef { object } CloseViewPayload
 * @property { Identity } target View to be closed.
 */
/**
 * ReplaceLayoutOpts interface
 * @typedef { object } ReplaceLayoutOpts
 * @property { LayoutConfig } layout Layout config to be applied.
 */
/**
 * ReplaceLayoutPayload interface
 * @typedef { object } ReplaceLayoutPayload
 * @property { ReplaceLayoutOpts } opts Object containing the layout to be applied.
 * @property { Identity } target Identity of the window whose layout will be replace.
 */
/**
 * SetWindowContextPayload interface
 * @typedef { object } SetWindowContextPayload
 * @property { any } context The requested context update.
 * @property { EntityType } entityType Entity type of the target of the context update ('view' or 'window').
 * @property { Identity } target Identity of the entity targeted by the call to {@link Platform#setWindowContext Platform.setWindowContext}.
 */
/**
 * SetWindowContextPayload interface
 * @typedef { object } SetWindowContextPayload
 * @property { any } context The requested context update.
 * @property { EntityType } entityType Entity type of the target of the context update ('view' or 'window').
 * @property { Identity } target Identity of the entity targetted by the call to {@link Platform#setWindowContext Platform.setWindowContext}.
 */
/**
 * GetWindowContextPayload interface
 * @typedef { object } GetWindowContextPayload
 * @property { EntityType } entityType Entity type of the target of the context update ('view' or 'window').
 * @property { Identity } target Identity of the entity targeted by the call to {@link Platform#getWindowContext Platform.getWindowContext}.
 */
/**
 * HostContextChangedPayload interface
 * @typedef { object } HostContextChangedPayload
 * @property { any } context The new context object
 * @property { string } reason The reason for the update: 'updated' or 'reparented'
 */
