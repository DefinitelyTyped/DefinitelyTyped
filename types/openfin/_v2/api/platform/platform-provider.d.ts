import { Environment } from '../../environment/environment';
import { OverrideCallback } from '../../shapes/Platform';
export default function initConstructor(environment: Environment): (userOverrideFn: OverrideCallback<any>) => Promise<void>;
/**
 * ApplySnapshotOptions interface
 * [closeExistingWindows=false] When true, applySnapshot will close existing windows,
 * replacing current Platform state with the given snapshot.
 * [skipOutOfBoundsCheck=false] When true, applySnapshot will not check whether any windows in a
 * snapshot are off-screen. By default, such windows will be repositioned to be on-screen,
 * as defined by {@link PlatformProvider#positionOutOfBoundsWindows PlatformProvider.positionOutOfBoundsWindows}.
 */
/**
 * Payload sent to Platform Provider when {@link Platform#applySnapshot Platform.applySnapshot} is called.
 * snapshot The snapshot to be applied.
 * [options] Options to customize snapshot application.
 */
/**
 * CreateViewPayload interface
 * opts Options for the view to be added.
 * [target] Window the view will be added to. If no target is provided, a new window will be created.
 */
/**
 * CloseViewPayload interface
 * target View to be closed.
 */
/**
 * ReplaceLayoutOpts interface
 * layout Layout config to be applied.
 */
/**
 * ReplaceLayoutPayload interface
 * opts Object containing the layout to be applied.
 * target Identity of the window whose layout will be replace.
 */
/**
 * SetWindowContextPayload interface
 * context The requested context update.
 * entityType Entity type of the target of the context update ('view' or 'window').
 * target Identity of the entity targeted by the call to {@link Platform#setWindowContext Platform.setWindowContext}.
 */
/**
 * SetWindowContextPayload interface
 * context The requested context update.
 * entityType Entity type of the target of the context update ('view' or 'window').
 * target Identity of the entity targetted by the call to {@link Platform#setWindowContext Platform.setWindowContext}.
 */
/**
 * GetWindowContextPayload interface
 * entityType Entity type of the target of the context update ('view' or 'window').
 * target Identity of the entity targeted by the call to {@link Platform#getWindowContext Platform.getWindowContext}.
 */
/**
 * HostContextChangedPayload interface
 * context The new context object
 * reason The reason for the update: 'updated' or 'reparented'
 */
