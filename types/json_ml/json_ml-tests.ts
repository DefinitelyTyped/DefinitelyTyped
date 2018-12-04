/// <reference types="node" />
import { Node, parse, stringify } from "json_ml";

const nodes: Node[] = parse(
    '<ul><li style="color:red">First Item</li><li title="Some hover text." style="color:green">Second Item</li><li><span class="code-example-third">Third</span>Item</li></ul>'
);
stringify(nodes, el => (el.is("li") ? null : el), 2);

stringify(
    [
        [
            "ul",
            ["li", { style: "color: red" }],
            ["li", { title: "Some hover text", style: "color: green" }],
            ["li", ["span", { class: "code-example-third" }]]
        ]
    ],
    null,
    2
);
