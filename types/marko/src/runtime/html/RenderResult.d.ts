import DomElement from '../DomElement';
import Component from '../../components/Component';

export default interface RenderResult extends DomElement {
    document: Document | false;

    (out: any): this;
    getComponent(): Component;
    getComponents(selector?: any): Component[];
    afterInsert(doc: Document): this;
    getNode(doc: Document): Node;
    getOutput(): any;
}
