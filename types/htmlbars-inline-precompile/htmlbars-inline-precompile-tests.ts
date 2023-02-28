import hbs, { TemplateFactory } from 'htmlbars-inline-precompile';

const likeThisDotRender = (s: TemplateFactory) => {};

likeThisDotRender(hbs`this is allowed`);
