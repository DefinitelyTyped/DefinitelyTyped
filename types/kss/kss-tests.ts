import kss = require("kss");

kss.traverse("src", { markdown: false })
    .then((styleguide) => styleguide.sections())
    .then((sections) => sections.map((s) => s.toJSON()))
    .then((json) => console.log(json));

const json = kss.parse("file contents", { header: false }).sections().map((s) => s.toJSON());

// both json vars should be the same type
