
import * as VirtualDOM from "virtual-dom";
import h from "virtual-dom/h";
import isVNode from "virtual-dom/vnode/is-vnode";
import isVText from "virtual-dom/vnode/is-vtext";
import isWidget from "virtual-dom/vnode/is-widget";
import isThunk from "virtual-dom/vnode/is-thunk";
import VNode from "virtual-dom/vnode/vnode";
import VText from "virtual-dom/vnode/vtext";

function renderAny(object: any): VirtualDOM.VNode {
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