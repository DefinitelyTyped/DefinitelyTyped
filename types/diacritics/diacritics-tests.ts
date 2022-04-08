import * as diacritics from "diacritics";

const replacementListItem = diacritics.replacementList[1];

replacementListItem.base === "0";
replacementListItem.chars === "\u07C0";

const mapItem = diacritics.diacriticsMap["A"];

diacritics.remove("foo") === "bar";
