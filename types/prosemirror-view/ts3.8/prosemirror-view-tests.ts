// Test custom nodeviews argument types
import * as view from 'prosemirror-view';
import * as model from 'prosemirror-model';

class TestMarkView implements view.MarkView {
  dom?: Node | null;
  contentDOM?: Node | null;
  mark: model.Mark;
  view: view.EditorView;
  getPos: boolean;
  decorations: view.Decoration[];
  constructor(mark: model.Mark, view: view.EditorView, getPos: boolean, decorations: view.Decoration[]) {
    this.mark = mark;
    this.view = view;
    this.getPos = getPos;
    this.decorations = decorations;
    this.dom = document.createElement("div");
    this.contentDOM = document.createElement("span");
  }
}

class TestNodeView implements view.NodeView {
  dom?: Node | null;
  contentDOM?: Node | null;
  node: model.Node;
  view: view.EditorView;
  getPos: () => number;
  decorations: view.Decoration[];
  constructor(node: model.Node, view: view.EditorView, getPos: () => number, decorations: view.Decoration[]) {
    this.node = node;
    this.view = view;
    this.getPos = getPos;
    this.decorations = decorations;
    this.dom = document.createElement("div");
    this.contentDOM = document.createElement("span");
  }
}

// Arguments for MarkView and NodeView are correct: expect no errors.
const editorView_1 = new view.EditorView(undefined, {
  state: {} as any, // this is not part of the test
  nodeViews: {
    markview: (mark: model.Mark, view: view.EditorView, getPos: boolean, decorations: view.Decoration[]) => new TestMarkView(mark, view, getPos, decorations),
    nodeview: (node: model.Node, view: view.EditorView, getPos: () => number, decorations: view.Decoration[]) => new TestNodeView(node, view, getPos, decorations),
  },
});

// Arguments for MarkView and NodeView are wrong: expect errors between mark, node, and getPos.
const editorView_2 = new view.EditorView(undefined, {
  state: {} as any, // this is not part of the test
  nodeViews: {
    markview: (mark: model.Node, view: view.EditorView, getPos: boolean, decorations: view.Decoration[]) => new TestMarkView(mark, view, getPos, decorations), // $ExpectError
    nodeview: (node: model.Mark, view: view.EditorView, getPos: () => number, decorations: view.Decoration[]) => new TestNodeView(node, view, getPos, decorations), // $ExpectError
  },
});
