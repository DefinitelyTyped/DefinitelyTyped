import Lexx, { NodeTypes, NodeTypeKeys } from 'xml-zero-lexer';

const xml = '<p>his divine shadow</p>';

const options: Lexx.Options = { jsx: true, html: true, blackholes: ["script"] };

Lexx(xml, options);

const tokens = Lexx(xml);

// 'tokens' is now:
//   [
//     [NodeTypes.ELEMENT_NODE, 1, 2],
//     [NodeTypes.TEXT_NODE, 3, 20],
//     [NodeTypes.CLOSE_ELEMENT],
//   ]

xml.substring(tokens[0][1], tokens[0][2]);
// would return "p"

xml.substring(tokens[1][1], tokens[1][2]);
// would return "his divine shadow"

for (let index = 0; index < NodeTypeKeys.length; index++) {
    const NodeTypeKey = NodeTypeKeys[index];
    const NodeType = NodeTypes[NodeTypeKey];
    NodeType === index; // true
}
