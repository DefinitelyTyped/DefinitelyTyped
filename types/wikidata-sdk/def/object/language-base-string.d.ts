import { WikidataLanguage } from "../type/language";

export type WikidataLanguageBaseString = {
    [Key in WikidataLanguage]?: {
        language: Key;
        value: string;
    }
};

export type WikidataLanguageBaseStringSimplify = { [key in WikidataLanguage]?: string };

export type WikidataLanguageBaseArrayString = {
    [Key in WikidataLanguage]: Array<{
        language: Key;
        value: string;
    }>
};

export type WikidataLanguageBaseArrayStringSimplify = { [key in WikidataLanguage]: string[] };
