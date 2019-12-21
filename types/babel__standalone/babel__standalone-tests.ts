import * as babel from '@babel/standalone';

const options = {
    ast: true,
    sourceMaps: true
};

babel.transform('code()', options);

const lolizer = () => ({
    visitor: {
      Identifier(path: { node: { name: string}}) {
        path.node.name = "LOL";
      },
    },
});

babel.registerPlugin("lolizer", lolizer);

babel.registerPreset("lulz", { plugins: [lolizer] });
