import Component from '../../components/Component';
import Async from '../Async';

export default interface AsyncVDOMBuilder extends Async {
    isVDOM: true;
    data: any;
    global: any;

    (globalData?: any, parentNode?: any, parentOut?: any): this;
    bc(component: Component): any;
    n(node: any, component: Component): this;
    node(node: any): this;
    h(html?: string): this;
    html(html?: string): this;
    ed(tagName: string, attrs: any, key: string, component: Component, childCount: number, flags?: number, props?: any): any;
    bed(tagName: string, attrs: any, key: string, component: Component, childCount: number, flags?: number, props?: any): this;
    ee(): void;
    comment(comment: any): this;
    t(text: any): this | string | void;
    text(text: any): this | string | void;
    element(tagName: string, attrs: any, key: string, component: Component, childCount: number, flags?: number, props?: any): any;
    be(tagName: string, attrs: any, key: string, component: Component, childCount: number, flags?: number, props?: any): this;
    beginElement(tagName: string, attrs: any, key: string, component: Component, childCount: number, flags?: number, props?: any): this;
    end(): this;
}
