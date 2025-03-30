import * as Draft from "./Draft";
import GameTree from "./GameTree";
import * as Types from "./types";

// eslint-disable-next-line @definitelytyped/export-just-namespace
export = GameTree;

export as namespace GameTree;

declare namespace GameTree {
    type Draft<ID extends Primitive = number> = Draft.Draft<ID>;
    type NodeObject<ID extends Primitive = number> = Types.NodeObject<ID>;
    type Primitive = Types.Primitive;
    type Property = Types.Property;
}
