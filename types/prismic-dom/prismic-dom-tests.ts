import prismicDom = require("prismic-dom");

const string = '';
const rendered: string = prismicDom.RichText.asHtml({}, () => string, () => string);
const link: string = prismicDom.Link.url({}, ({}) => string);
