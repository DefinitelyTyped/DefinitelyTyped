import Element = require("./Element.js");

declare function JSONify<TNode extends Element.Node>(el: TNode): TNode extends Element ? JSONify.ElementJson : TNode;
export = JSONify;

declare namespace JSONify {
    interface ElementJson {
        name: string;
        attrs: { [attrName: string]: any };
        children: Array<ElementJson | Element.Node>;
    }
}
