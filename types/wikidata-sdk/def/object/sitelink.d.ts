import { WikidataSite } from "../type/site";

export type WikidataSiteLink = { [Key in WikidataSite]: { site: Key; title: string; badges: string[] } };

export type WikidataSiteLinkSimplify = { [key in WikidataSite]: string };

export type WikidataSiteLinkWithUrlSimplify = {
    [key in WikidataSite]: {
        title: string;
        url: string;
    }
};
