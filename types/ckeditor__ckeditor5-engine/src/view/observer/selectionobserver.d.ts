import DocumentSelection from "../documentselection";
import DomConverter from "../domconverter";
import MutationObserver from "./mutationobserver";
import Observer from "./observer";

export default class SelectionObserver extends Observer {
    readonly domConverter: DomConverter;
    readonly mutationObserver: MutationObserver;
    readonly selection: DocumentSelection;
}
