import hbs = require('htmlbars-inline-precompile');

const likeThisDotRender = (s: string | string[]) => {};

likeThisDotRender(hbs`this is allowed`);
