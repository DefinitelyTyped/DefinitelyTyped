import * as diacritics from "diacritics";

const replacementListItem = diacritics.replacementList[1];

// tslint:disable-next-line:no-unused-expression
replacementListItem.base === "0";
replacementListItem.chars === "\u07C0";

const mapItem = diacritics.diacriticsMap["A"];

// tslint:disable-next-line:no-unused-expression
diacritics.remove("foo") === "bar";
