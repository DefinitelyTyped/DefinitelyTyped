export interface TimeDataValue {
    type: "time";
    value: {
        time: string;
        timezone: number;
        before: number;
        after: number;
        precision: number;
        calendermodel: string;
    };
}

export interface EntityDataValue {
    type: "wikibase-entityid";
    value: {
        "numeric-id": number;
        "entity-type": string;
    };
}

export interface MainSnak {
    datatype: string;
    snaktype: string;
    property: string;
    hash: string;
    datavalue: TimeDataValue | EntityDataValue;
}

export interface Claim {
    rank: string;
    id: string;
    type: string;
    mainsnak: MainSnak;
}
