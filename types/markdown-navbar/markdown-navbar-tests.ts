import * as MarkdownNavbar from 'markdown-navbar';

const article = `# Hello World!`;

const navbar = MarkdownNavbar({
    className: 'test',
    source: article,
    declarative: true,
    headingTopOffset: 1,
    ordered: false,
    updateHashAuto: true,
});
