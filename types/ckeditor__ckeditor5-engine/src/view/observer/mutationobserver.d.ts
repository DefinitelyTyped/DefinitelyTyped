import Observer from "./observer";
import Text from "../../view/text";
import ViewElement from "../../view/element";
import Node from "../../view/node";

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
     * Synchronously fires {@link module:engine/view/document~Document#event:mutations} event with all mutations in record queue.
     * At the same time empties the queue so mutations will not be fired twice.
     */
    flush(): void;

    observe(domElement: HTMLElement): void;
}

/**
 * Mutation item for text.
 *
 * @see module:engine/view/document~Document#event:mutations
 * @see module:engine/view/observer/mutationobserver~MutatedChildren
 */
interface MutatedText {
    type: string;
    text: Text;
    oldText: string;
    newText: string;
}

/**
 * Mutation item for child nodes.
 *
 * @see module:engine/view/document~Document#event:mutations
 * @see module:engine/view/observer/mutationobserver~MutatedText
 */
interface MutatedChildren {
    type: string;
    node: ViewElement;
    oldChildren: Node[];
    newChildren: Node[];
}
