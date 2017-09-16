import * as model from 'prosemirror-model';

const fragment = new model.Fragment();

let domOutputSpec: model.DOMOutputSpec;

domOutputSpec = ['div'];
domOutputSpec = ['div', { class: 'foo' }];
domOutputSpec = ['div', { class: 'foo' }, 0];
domOutputSpec = ['div', 0];
domOutputSpec = ['div', ['div', 0]];
domOutputSpec = ['div', ['div', { class: 'foo' }]];
domOutputSpec = ['div', ['div', { class: 'foo' }, 0]];

export const nodeSpec: model.NodeSpec = {
  attrs: {
    name: { default: '' },
  },
  parseDOM: [{
    tag: 'span[data-name]',
    getAttrs(dom) {
      if (dom instanceof HTMLElement) {
        return {
          name: dom.getAttribute('data-name')!
        };
      }
    }
  }],
  toDOM(node) {
    const { name } = node.attrs;
    const attrs = {
      'data-emoji-name': name,
    };
    return ['span', attrs, 0];
  }
};

const node = new model.Node();
node.nodesBetween(0, 1, () => {});
node.descendants(() => {});
