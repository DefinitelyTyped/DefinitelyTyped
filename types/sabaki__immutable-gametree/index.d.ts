import * as Draft from "./src/Draft";
import GameTree = require("./src/main");
import * as Types from "./src/types";

// eslint-disable-next-line @definitelytyped/export-just-namespace
export = GameTree;

export as namespace GameTree;

declare namespace GameTree {
    type Draft<ID extends Primitive = number> = Draft.Draft<ID>;
    type NodeObject<ID extends Primitive = number> = Types.NodeObject<ID>;
    type Primitive = Types.Primitive;
    type Property = Types.Property;
}
