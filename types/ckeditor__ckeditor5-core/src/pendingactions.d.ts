import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import ContextPlugin from './contextplugin';

/**
 * The list of pending editor actions.
 *
 * This plugin should be used to synchronise plugins that execute long-lasting actions
 * (e.g. file upload) with the editor integration. It gives the developer who integrates the editor
 * an easy way to check if there are any actions pending whenever such information is needed.
 * All plugins that register a pending action also provide a message about the action that is ongoing
 * which can be displayed to the user. This lets them decide if they want to interrupt the action or wait.
 *
 * Adding and updating a pending action:
 *
 *     const pendingActions = editor.plugins.get( 'PendingActions' );
 *     const action = pendingActions.add( 'Upload in progress: 0%.' );
 *
 *    // You can update the message:
 *     action.message = 'Upload in progress: 10%.';
 *
 * Removing a pending action:
 *
 *     const pendingActions = editor.plugins.get( 'PendingActions' );
 *     const action = pendingActions.add( 'Unsaved changes.' );
 *
 *     pendingActions.remove( action );
 *
 * Getting pending actions:
 *
 *     const pendingActions = editor.plugins.get( 'PendingActions' );
 *
 *     const action1 = pendingActions.add( 'Action 1' );
 *     const action2 = pendingActions.add( 'Action 2' );
 *
 *     pendingActions.first; // Returns action1
 *     Array.from( pendingActions ); // Returns [ action1, action2 ]
 *
 * This plugin is used by features like {@link module:upload/filerepository~FileRepository} to register their ongoing actions
 * and by features like {@link module:autosave/autosave~Autosave} to detect whether there are any ongoing actions.
 * Read more about saving the data in the {@glink builds/guides/integration/saving-data Saving and getting data} guide.
 */
export default class PendingActions extends ContextPlugin implements Iterable<Observable & { message: string }> {
    static readonly pluginName: 'PendingActions';
    init(): void;
    /**
     * Defines whether there is any registered pending action.
     */
    get hasAny(): boolean;
    protected set hasAny(value: boolean);
    /**
     * Adds an action to the list of pending actions.
     *
     * This method returns an action object with an observable message property.
     * The action object can be later used in the {@link #remove} method. It also allows you to change the message.
     */
    add(message: string): Observable & { message: string };
    /**
     * Removes an action from the list of pending actions.
     */
    remove(action: Observable & { message: string }): void;
    /**
     * Returns the first action from the list or null when list is empty
     */
    readonly first: null | (Observable & { message: string });
    [Symbol.iterator](): Iterator<Observable & { message: string }>;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        PendingActions: PendingActions;
    }
}
