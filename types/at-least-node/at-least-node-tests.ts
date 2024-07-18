import atLeastNode = require("at-least-node");

// $ExpectType boolean
atLeastNode("0.10.0");

// $ExpectType boolean
atLeastNode("0.12.0");

// @ts-expect-error
atLeastNode(1);

// @ts-expect-error
atLeastNode();
