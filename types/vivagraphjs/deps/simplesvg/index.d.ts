export = svg;

declare function svg(element: string | svg.SimpleSvg, attrBag?: object): svg.SimpleSvg;
// eslint-disable-next-line no-redeclare
declare namespace svg {
    interface SimpleSvg extends SVGElement {
        simplesvg: boolean;
        attr(name: string, value: string | number): this;
        attr(name: string): string;
        append: (content: string | SimpleSvg) => SimpleSvg;
        link(target: string): this;
        link(): string;
        text(textContent: any): this;
        text(): string;
        on: (name: string, cb: (this: Element, ev: Event) => any, useCapture: boolean) => this;
        off: (name: string, cb: (this: Element, ev: Event) => any, useCapture: boolean) => this;
        dataSource: (model: object) => this;
    }

    const compile: typeof import('./lib/compile');
    const compileTemplate: typeof import('./lib/compile_template');
}
