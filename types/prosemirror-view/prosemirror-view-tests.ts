import * as view from 'prosemirror-view';
import * as state from 'prosemirror-state';

const { Decoration } = view;
const decoration = new Decoration();

const plainDecoration = new Decoration<{ a: number }>();
plainDecoration.spec.a; // $ExpectType number

Decoration.widget<{a: number}>(0, (x) => x.dom, { a: '' }); // $ExpectError
Decoration.widget(0, (x) => x.dom, 'this argument should be an object, not a string!'); // $ExpectError
const widgetDecoration = Decoration.widget<{ a: number }>(0, (x) => x.dom, { a: 1 });
widgetDecoration.spec.a; // $ExpectType number
widgetDecoration.spec.stopEvent; // $ExpectType ((event: Event) => boolean) | null | undefined

Decoration.node<{ a: number }>(0, 10, {}, { a: '' }); // $ExpectError
const nodeDecoration = Decoration.node<{ a: number }>(0, 10, {}, { a: 1 });
nodeDecoration.spec.a; // $ExpectType number

const res1_1 = new view.EditorView({} as any, {} as any);
const res1_2: { pos: number, inside: number } = res1_1.posAtCoords({ left: 0, top: 0})!;
const res1_3: boolean = res1_1.editable;

const res2_1: view.EditorProps = {} as any;
const res2_2: state.Selection = res2_1.createSelectionBetween!({} as any, {} as any, {} as any)!;
const res2_3: view.DecorationSet = res2_1.decorations!({} as any)!;

const res3_1: view.EditorProps["attributes"] = () => {};
const res3_2: view.EditorProps["attributes"] = () => null;
const res3_3: view.EditorProps["attributes"] = () => undefined;
