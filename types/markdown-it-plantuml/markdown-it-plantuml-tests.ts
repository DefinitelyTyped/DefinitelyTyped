import MarkdownIt = require('markdown-it');
import MarkdownItPlantuml = require('markdown-it-plantuml');

const options: MarkdownItPlantuml.Options = {
    closeMarker: '@endditaa',
    diagramName: 'ditaa',
    generateSource: function generateSource(umlCode: string) {
        return `https://your.server/plant-uml/${umlCode}`;
    },
    imageFormat: 'png',
    openMarker: '@startditaa',
    render: function renderDiagram(tokens, index, options, _, self) {
        return self.renderToken(tokens, index, options);
    },
    server: 'https://your.server/plat-uml/',
};

const md = MarkdownIt().use(MarkdownItPlantuml, options);

const source = `@startditaa
+--------+   +-------+    +-------+
|        +---+ ditaa +--> |       |
|  Text  |   +-------+    |diagram|
|Document|   |!magic!|    |       |
|     {d}|   |       |    |       |
+---+----+   +-------+    +-------+
    :                         ^
    |       Lots of work      |
    +-------------------------+
@endditaa`;

md.render(source);
