import DomConverter from '../domconverter';
import Element from '../element';
import Node from '../node';
import Renderer from '../renderer';
import Text from '../text';
import Observer from './observer';

/**
 * Mutation observer class observes changes in the DOM, fires {@link module:engine/view/document~Document#event:mutations} event, mark view
 * elements as changed and call {@link module:engine/view/renderer~Renderer#render}.
 * Because all mutated nodes are marked as "to be rendered" and the
 * {@link module:engine/view/renderer~Renderer#render} is called, all changes will be reverted, unless the mutation will be handled by the
 * {@link module:engine/view/document~Document#event:mutations} event listener. It means user will see only handled changes, and the editor
 * will block all changes which are not handled.
 *
 * Mutation Observer also take care of reducing number of mutations which are fired. It removes duplicates and
 * mutations on elements which do not have corresponding view elements. Also
 * {@link module:engine/view/observer/mutationobserver~MutatedText text mutation} is fired only if parent element do not change child list.
 *
 * Note that this observer is attached by the {@link module:engine/view/view~View} and is available by default.
 */
export default class MutationObserver extends Observer {
    /**
     * Reference to the {@link module:engine/view/view~View#domConverter}.
     */
    readonly domConverter: DomConverter;

    /**
     * Reference to the {@link module:engine/view/view~View#_renderer}.
     */
    readonly renderer: Renderer;

    /**
     * Synchronously fires {@link module:engine/view/document~Document#event:mutations} event with all mutations in record queue.
     * At the same time empties the queue so mutations will not be fired twice.
     */
    flush(): void;

    observe(domElement: HTMLElement): void;

    enable(): void;

    disable(): void;

    destroy(): void;
}

declare module '@ckeditor/ckeditor5-engine/src/view/view' {
    interface Observers {
        MutationObserver: MutationObserver;
    }
}

export interface MutatedChildren {
    newChildren: Node[];
    node: Element;
    oldChildren: Node[];
    type: string;
}

export interface MutatedText {
    newText: string;
    node: Text;
    oldText: string;
    type: string;
}
