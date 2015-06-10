// Type definitions for virtual-dom 2.0.1
// Project: https://github.com/Matt-Esch/virtual-dom
// Definitions by: Christopher Brown <https://github.com/chbrown>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module VirtualDOM {
  interface VHook {
    hook(node: Element, propertyName: string): void;
    unhook(node: Element, propertyName: string): void;
  }

  type EventHandler = (...args: any[]) => void;

  interface VProperties {
    attributes?: {[index: string]: string};
    /**
    I would like to use {[index: string]: string}, but then we couldn't use an
    object literal when setting the styles, since TypeScript doesn't seem to
    infer that {'fontSize': string; 'fontWeight': string;} is actually quite
    assignable to the type { [index: string]: string; }
    */
    style?: any;
    /**
    The relaxation on `style` above is the reason why we need `any` as an option
    on the indexer type.
    */
    [index: string]: any | string | boolean | number | VHook | EventHandler | {[index: string]: string | boolean | number};
  }

  interface VNode {
    tagName: string;
    properties: VProperties;
    children: VTree[];
    key?: string;
    namespace?: string;
    count: number;
    hasWidgets: boolean;
    hasThunks: boolean;
    hooks: any[];
    descendantHooks: any[];
    version: string;
    type: string; // 'VirtualNode'
  }

  interface VText {
    text: string;
    new(text: any): VText;
    version: string;
    type: string; // 'VirtualText'
  }

  interface Widget {
    type: string; // 'Widget'
    init(): Element;
    update(previous: Widget, domNode: Element): void;
    destroy(node: Element): void;
  }

  interface Thunk {
    type: string; // 'Thunk'
    vnode: VTree;
    render(previous: VTree): VTree;
  }

  type VTree = VText | VNode | Widget | Thunk;

  // enum VPatch {
  //   NONE = 0,
  //   VTEXT = 1,
  //   VNODE = 2,
  //   WIDGET = 3,
  //   PROPS = 4,
  //   ORDER = 5,
  //   INSERT = 6,
  //   REMOVE = 7,
  //   THUNK = 8
  // }
  interface VPatch {
    vNode: VNode;
    patch: any;
    new(type: number, vNode: VNode, patch: any): VPatch;
    version: string;
    /**
    type is set to 'VirtualPatch' on the prototype, but overridden in the
    constructor with a number.
    */
    type: number;
  }

  interface createProperties extends VProperties {
    key?: string;
    namespace?: string;
  }

  type VChild = VTree[] | VTree | string[] | string;

  /**
  create() calls either document.createElement() or document.createElementNS(),
  for which the common denominator is Element (not HTMLElement).
  */
  function create(vnode: VText, opts?: {document?: Document; warn?: boolean}): Text;
  function create(vnode: VNode | Widget | Thunk, opts?: {document?: Document; warn?: boolean}): Element;
  function h(tagName: string, properties: createProperties, children: string | VChild[]): VNode;
  function h(tagName: string, children: string | VChild[]): VNode;
  function diff(left: VTree, right: VTree): VPatch[];
  /**
  patch() usually just returns rootNode after doing stuff to it, so we want
  to preserve that type (though it will usually be just Element).
  */
  function patch<T extends Element>(rootNode: T, patches: VPatch[], renderOptions?: any): T;
}

declare module "virtual-dom/h" {
  // export = VirtualDOM.h; works just fine, but the DT checker doesn't like it
  import h = VirtualDOM.h;
  export = h;
}
declare module "virtual-dom/create-element" {
  import create = VirtualDOM.create;
  export = create;
}
declare module "virtual-dom/diff" {
  import diff = VirtualDOM.diff;
  export = diff;
}
declare module "virtual-dom/patch" {
  import patch = VirtualDOM.patch;
  export = patch;
}
declare module "virtual-dom" {
  export = VirtualDOM;
}
