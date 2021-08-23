import { Disposable, TextEditor, TextEditorElement } from '../index';

/**
 *  ViewRegistry handles the association between model and view types in Atom.
 *  We call this association a View Provider. As in, for a given model, this class
 *  can provide a view via ::getView, as long as the model/view association was
 *  registered via ::addViewProvider.
 */
export interface ViewRegistry {
    /**
     *  Add a provider that will be used to construct views in the workspace's view
     *  layer based on model objects in its model layer.
     */
    addViewProvider(createView: (model: object) => HTMLElement | undefined): Disposable;
    /**
     *  Add a provider that will be used to construct views in the workspace's view
     *  layer based on model objects in its model layer.
     */
    // tslint:disable-next-line:no-any
    addViewProvider<T>(
        modelConstructor: { new (...args: any[]): T }, // tslint:disable-line no-any
        createView: (instance: T) => HTMLElement | undefined,
    ): Disposable;

    /** Get the view associated with an object in the workspace. */
    getView(obj: TextEditor): TextEditorElement;
    getView(obj: object): HTMLElement;
}

export interface ViewModel {
    getTitle: () => string;
}
