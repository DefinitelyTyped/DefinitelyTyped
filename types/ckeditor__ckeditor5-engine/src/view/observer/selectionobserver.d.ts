import DocumentSelection from '../documentselection';
import DomConverter from '../domconverter';
import MutationObserver from './mutationobserver';
import Observer from './observer';

export default class SelectionObserver extends Observer {
    /**
     * Instance of the mutation observer. Selection observer calls
     * {@link module:engine/view/observer/mutationobserver~MutationObserver#flush} to ensure that the mutations will be handled
     * before the {@link module:engine/view/document~Document#event:selectionChange} event is fired.
     */
    readonly mutationObserver: MutationObserver;

    /**
     * Reference to the view {@link module:engine/view/documentselection~DocumentSelection} object used to compare
     * new selection with it.
     */
    readonly selection: DocumentSelection;

    /**
     * Reference to the {@link module:engine/view/view~View#domConverter}.
     */
    readonly domConverter: DomConverter;

    observe(domElement: HTMLElement): void;

    destroy(): void;
}

declare module '@ckeditor/ckeditor5-engine/src/view/view' {
    interface Observers {
        SelectionObserver: SelectionObserver;
    }
}
