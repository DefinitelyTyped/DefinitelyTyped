import virtual_dom = require("virtual-dom");
import VNode = require("virtual-dom/vnode/vnode");
import VText = require("virtual-dom/vnode/vtext");
import h = virtual_dom.h;
import isVNode = virtual_dom.isVNode;
import isVText = virtual_dom.isVText;
import isWidget = virtual_dom.isWidget;
import isThunk = virtual_dom.isThunk;

function renderAny(object: any): virtual_dom.VNode {
  if (object === undefined) {
    return h('i.undefined', 'undefined');
  }
  else if (object === null) {
    return h('b.null', 'null');
  }
  else if (Array.isArray(object)) {
    return h('span.array', ['[', object.map(renderAny), ']']);
  }
  else if (typeof object === 'object') {
    var object_children = Object.keys(object).map(key => {
      var child = object[key];
      return h('div', [
        h('span.key', [key, ':']),
        renderAny(child),
      ]);
    });
    return h('div.object', object_children);
  }
  else if (typeof object === 'number') {
    return h('span.number', object.toString());
  }
  else if (typeof object === 'boolean') {
    return h('span.boolean', object.toString());
  }
  return h('span.string', object.toString());
}

const newNode = new VNode("tag", {}, []);
const newText = new VText("text");
newText.text = "new-text";
const tree: any = newNode;

if (isVNode(tree)) {
  tree.children = [];
} else if (isVText(tree)) {
  tree.text = "hello";
} else if (isWidget(tree)) {
  tree.init();
} else if (isThunk(tree)) {
  tree.vnode = newNode;
}

virtual_dom.patch(document.createElement("div"), []);
virtual_dom.patch(document.createElement("div"), [], {
  patch: (rootNode: HTMLDivElement, patches: virtual_dom.VPatch[]) => {
    return rootNode;
  }
});
