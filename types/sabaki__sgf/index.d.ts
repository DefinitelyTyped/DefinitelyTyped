export * from "./src/main";

export namespace Types {
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

    interface SGFToken {
        type: string;
        value: string;
        row: number;
        col: number;
        pos: number;
        progress: number;
    }

    interface NodeObject<ID extends Primitive = number> {
        id: ID;
        data: Partial<Record<Property, string[]>>;
        parentId: ID | null;
        children: NodeObject<ID>[];
    }

    type Vertex = [number, number];

    type Dates = [number, number?, number?];
}
