
import virtual_dom = require("virtual-dom");
import VNode = virtual_dom.VNode;
import h = virtual_dom.h;

function renderAny(object: any): VNode {
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
