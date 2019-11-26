import * as babel from '@babel/standalone';

const options = {
    ast: true,
    sourceMaps: true
};

babel.transform('code()', options);

const ast = {
    type: "Program",
    start: 0,
    end: 2,
    directives: [],
    body: [
      {
        type: "ExpressionStatement",
        start: 0,
        end: 1,
        expression: {
          type: "NumericLiteral",
          start: 0,
          end: 2,
          value: 42,
          raw: "42",
        },
      },
    ],
    sourceType: "script",
};

babel.transformFromAst(ast, "42", { presets: ['es2015'] });

const lolizer = () => ({
    visitor: {
      Identifier(path: { node: { name: string}}) {
        path.node.name = "LOL";
      },
    },
});

babel.registerPlugin("lolizer", lolizer);

babel.registerPreset("lulz", { plugins: [lolizer] });
