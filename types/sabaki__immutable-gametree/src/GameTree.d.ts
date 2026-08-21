import Draft = require("./Draft");
type Primitive = string | number | symbol;

type Property =
    | "AB"
    | "AE"
    | "AN"
    | "AP"
    | "AR"
    | "AS"
    | "AW"
    | "B"
    | "BL"
    | "BM"
    | "BR"
    | "BT"
    | "C"
    | "CA"
    | "CP"
    | "CR"
    | "DD"
    | "DM"
    | "DO"
    | "DT"
    | "EV"
    | "FF"
    | "FG"
    | "GB"
    | "GC"
    | "GM"
    | "GN"
    | "GW"
    | "HA"
    | "HO"
    | "IP"
    | "IT"
    | "IY"
    | "KM"
    | "KO"
    | "LB"
    | "LN"
    | "MA"
    | "MN"
    | "N"
    | "OB"
    | "ON"
    | "OT"
    | "OW"
    | "PB"
    | "PC"
    | "PL"
    | "PM"
    | "PW"
    | "RE"
    | "RO"
    | "RU"
    | "SE"
    | "SL"
    | "SO"
    | "SQ"
    | "ST"
    | "SU"
    | "SZ"
    | "TB"
    | "TE"
    | "TM"
    | "TR"
    | "TW"
    | "UC"
    | "US"
    | "V"
    | "VW"
    | "W"
    | "WL"
    | "WR"
    | "WT";

interface NodeObject<ID extends Primitive = number> {
    id: ID;
    data: Partial<Record<Property, string[]>>;
    parentId: ID | null;
    children: NodeObject<ID>[];
}

interface GameTreeOptions<ID extends Primitive = number> {
    getId?: () => ID;
    merger?: (node: NodeObject<ID>, data: NodeObject<ID>["data"]) => NodeObject<ID>["data"] | null;
    root?: NodeObject<ID>;
}

type CurrentsObject<ID extends Primitive = number> = Record<ID, ID>;

type Step = 1 | -1;

declare class GameTree<ID extends Primitive = number> {
    constructor(options?: GameTreeOptions<ID>);

    getId: () => ID;

    merger: (node: NodeObject<ID>, data: NodeObject<ID>["data"]) => NodeObject<ID>["data"] | null;

    root: NodeObject<ID>;

    get(id: ID): NodeObject<ID> | null;

    getSequence(id: ID): Generator<NodeObject<ID>, void>;

    mutate(mutator: (draft: Draft<ID>) => void): GameTree;

    navigate(id: ID, step: number, currents: CurrentsObject<ID>): NodeObject<ID> | null;

    listNodes(): Generator<NodeObject<ID>, void>;

    listNodesHorizontally(startId: ID, step: Step): Generator<NodeObject<ID>, void>;

    listNodesVertically(startId: ID, step: Step, currents: CurrentsObject<ID>): Generator<NodeObject<ID>, void>;

    listCurrentNodes(currents: CurrentsObject<ID>): Generator<NodeObject<ID>, void>;

    listMainNodes(): Generator<NodeObject<ID>, void>;

    getLevel(id: ID): number | null;

    getSection(level: number): Generator<NodeObject<ID>, void>;

    getCurrentHeight(currents: CurrentsObject<ID>): number;

    getHeight(): number;

    getHash(): string;

    getStructureHash(): string;

    onCurrentLine(id: ID, currents: CurrentsObject<ID>): boolean;

    onMainLine(id: ID): boolean;

    toJSON(): NodeObject<ID>;
}

declare namespace GameTree {
    export { Draft, NodeObject, Primitive, Property };
}
export = GameTree;
