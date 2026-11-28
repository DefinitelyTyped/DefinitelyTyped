import {
    configure,
    Context,
    ContextBlock,
    Environment,
    FileSystemLoader,
    PrecompiledLoader,
    PrecompiledTemplate,
    precompileString,
} from "nunjucks";
import * as slim from "nunjucks/browser/nunjucks-slim";

configure(undefined, { autoescape: true });
configure({ tags: { variableStart: "[[" } });
precompileString("Hello {{ name }}", {
    name: "hello.njk",
    wrapper(templates, options) {
        // $ExpectType PrecompiledTemplate[]
        templates;
        // $ExpectType PrecompiledTemplate
        templates[0];
        return templates.map(template => template.template).join("\n");
    },
});
const compiled: PrecompiledTemplate = { name: "hello.njk", template: "compiled code" };
const block: ContextBlock = (env, context, frame, runtime, callback) => {
    // $ExpectType Environment
    env;
    // $ExpectType Context
    context;
    context.setVariable("name", "world");
    // $ExpectType unknown
    context.lookup("name");
    context.addBlock("hello", block).addExport("hello");
    context.getBlock("hello");
    context.getVariables();
    context.getExported();
    context.getSuper(env, "hello", block, frame, runtime, callback);
    callback(null, "hello");
};
// Context is internal, not an exported runtime constructor.
// @ts-expect-error
new Context();

const loader = new slim.PrecompiledLoader({ hello: { root: block } });
const source = loader.getSource("hello");
if (source) {
    // $ExpectType "code"
    source.src.type;
    source.src.obj.root(new Environment(), {} as Context, null, null, () => {});
    // @ts-expect-error
    const text: string = source.src;
}
new slim.Environment(loader);
new slim.Environment([loader]);
new slim.Environment(null, { autoescape: true });

// The slim bundle omits the parser, lexer, AST constructors, and precompiler.
// @ts-expect-error
slim.parser.parse("hello");
// @ts-expect-error
slim.lexer.lex("hello");
// @ts-expect-error
new slim.nodes.Literal();
// @ts-expect-error
slim.precompileString("hello");
// @ts-expect-error
new slim.FileSystemLoader();

const rootLoader = new PrecompiledLoader({ hello: { root: block } });
// $ExpectType PrecompiledSource | null
const rootSource = rootLoader.getSource("hello");
if (rootSource) {
    // $ExpectType "code"
    rootSource.src.type;
    // @ts-expect-error
    const text: string = rootSource.src;
}
new Environment(rootLoader);
new Environment([new FileSystemLoader(), rootLoader]);
new Environment(loader);
new slim.Environment(rootLoader);
const sharedLoader: typeof PrecompiledLoader = slim.PrecompiledLoader;
// @ts-expect-error
new PrecompiledLoader([]);
