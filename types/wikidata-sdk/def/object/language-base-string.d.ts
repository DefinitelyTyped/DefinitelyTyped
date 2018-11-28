import { WikidataLanguage } from "wikidata-sdk";

export type WikidataLanguageBaseString = {
  [Key in WikidataLanguage]?: {
    language: Key;
    value: string;
  }
};

export type WikidataLanguageBaseStringSimplify = { [key in WikidataLanguage]?: string };

export type WikidataLanguageBaseArrayString = {
  [Key in WikidataLanguage]: {
    language: Key;
    value: string;
  }[]
};

export type WikidataLanguageBaseArrayStringSimplify = { [key in WikidataLanguage]: string[] };
