import DomConverter from './domconverter';
import Element from './element';

export default class RawElement extends Element {
    getFillerOffset(): null;
    render: undefined | ((domElement: HTMLElement, domConverter: DomConverter) => void);
}
