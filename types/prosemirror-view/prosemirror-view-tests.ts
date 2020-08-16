import * as model from 'prosemirror-model';
import * as schema from 'prosemirror-schema-basic';
import * as state from 'prosemirror-state';
import * as view from 'prosemirror-view';

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
res1_1.setProps({ scrollThreshold: 42 });

const res2_1: view.EditorProps = {} as any;
const res2_plugin = new state.Plugin({});
const res2_2: state.Selection = res2_1.createSelectionBetween!.call(res2_plugin, {}, {}, {});
const res2_3: view.DecorationSet = res2_1.decorations!.call(res2_plugin, {});

const res3_1: view.EditorProps["attributes"] = () => {};
const res3_2: view.EditorProps["attributes"] = () => null;
const res3_3: view.EditorProps["attributes"] = () => undefined;

// Test binding of 'this'
const res4_plugin = new state.Plugin<string, typeof schema.schema>({
    props: {
        decorations(editorState) {
            // Just testing one function from EditorProps.
            // Ensure that `this` is bound to type Plugin<string>
            const p: state.Plugin<string, typeof schema.schema> = this;
            return null;
        },
    },
});

const res5_view = new view.EditorView<typeof schema.schema>(undefined, {
    state: {} as any, // this is not part of the test

    dispatchTransaction(tr) {
        // From DirectEditorProps
        // Ensure that `this` is bound to type EditorView<schema.schema>
        const v: view.EditorView<typeof schema.schema> = this;
    },
});

// Test `plain: boolean`
const res6_plugin = new state.Plugin({
    props: {
        transformPastedText(text, plain) {
            const isPlain: boolean = plain;
            return text;
        },

        clipboardTextParser(text, $context, plain) {
            const isPlain: boolean = plain;
            return model.Slice.empty;
        }
    }
});
