export default interface DomElement {
    appendTo(referenceEl: string | Node): this;
    prependTo(referenceEl: string | Node): this;
    replace(referenceEl: string | Node): this;
    replaceChildrenOf(referenceEl: string | Node): this;
    insertBefore(referenceEl: string | Node): this;
    insertAfter(referenceEl: string | Node): this;
}
