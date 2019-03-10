export interface WikidataTimeDataValue {
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

export interface WikidataEntityDataValue {
  type: "wikibase-entityid";
  value: {
    "numeric-id": number;
    "entity-type": string;
  };
}

export interface WikidataMainSnak {
  datatype: string;
  snaktype: string;
  property: string;
  hash: string;
  datavalue: WikidataTimeDataValue | WikidataEntityDataValue;
}

export interface WikidataClaim {
  rank: string;
  id: string;
  type: string;
  mainsnak: WikidataMainSnak;
}
