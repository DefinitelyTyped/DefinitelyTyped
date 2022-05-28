import { Editor, Plugin } from '@ckeditor/ckeditor5-core';
import PendingActions from '@ckeditor/ckeditor5-core/src/pendingactions';

/**
 * The {@link module:autosave/autosave~Autosave} plugin allows you to automatically save the data (e.g. send it to the server)
 * when needed (when the user changed the content).
 *
 * It listens to the {@link module:engine/model/document~Document#event:change:data `editor.model.document#change:data`}
 * and `window#beforeunload` events and calls the
 * {@link module:autosave/autosave~AutosaveAdapter#save `config.autosave.save()`} function.
 *
 *    ClassicEditor
 *      .create( document.querySelector( '#editor' ), {
 *        plugins: [ ArticlePluginSet, Autosave ],
 *        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo' ],
 *        image: {
 *          toolbar: [ 'imageStyle:block', 'imageStyle:side', '|', 'toggleImageCaption', 'imageTextAlternative' ],
 *        },
 *        autosave: {
 *          save( editor ) {
 *            // The saveData() function must return a promise
 *            // which should be resolved when the data is successfully saved.
 *            return saveData( editor.getData() );
 *          }
 *        }
 *      } );
 *
 * Read more about this feature in the {@glink builds/guides/integration/saving-data#autosave-feature Autosave feature}
 * section of the {@glink builds/guides/integration/saving-data Saving and getting data}.
 */
export default class Autosave extends Plugin {
    static readonly pluginName: 'Autosave';

    static readonly requires: [typeof PendingActions];

    get state(): 'synchronized' | 'waiting' | 'saving';
    protected set state(state: 'synchronized' | 'waiting' | 'saving');

    init(): void;
    destroy(): void;

    adapter: AutosaveAdapter;

    set(
        ...args:
            | [value: { state: 'synchronized' | 'waiting' | 'saving' }]
            | [key: 'state', value: 'synchronized' | 'waiting' | 'saving']
    ): void;

    save(): Promise<void>;
}

export interface AutosaveAdapter {
    save(editor: Editor): Promise<unknown>;
}

export interface AutosaveConfig {
    waitingTime?: number | undefined;
    save(editor: Editor): Promise<unknown>;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Autosave: Autosave;
    }
}

declare module '@ckeditor/ckeditor5-core/src/editor/editorconfig' {
    interface EditorConfig {
        autosave?: AutosaveConfig | undefined;
        'autosave.waitingTime'?: AutosaveConfig['waitingTime'] | undefined;
    }
}
