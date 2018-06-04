import * as view from 'prosemirror-view';
import * as state from 'prosemirror-state';

const decoration = new view.Decoration();

const res1_1 = new view.EditorView({} as any, {} as any);
const res1_2: { pos: number, inside: number } = res1_1.posAtCoords({ left: 0, top: 0})!;

const res2_1: view.EditorProps = {} as any;
const res2_2: state.Selection = res2_1.createSelectionBetween!({} as any, {} as any, {} as any)!;
const res2_3: view.DecorationSet = res2_1.decorations!({} as any)!;

const res3_1: view.EditorProps["attributes"] = () => {};
const res3_2: view.EditorProps["attributes"] = () => null;
const res3_3: view.EditorProps["attributes"] = () => undefined;
