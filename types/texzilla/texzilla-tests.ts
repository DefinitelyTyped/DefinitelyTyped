import * as TZ from 'texzilla';

TZ.setDOMParser(new DOMParser());
TZ.setXMLSerializer(new XMLSerializer());

TZ.setSafeMode(false);
TZ.setItexIdentifierMode(true);

const mml1: string = TZ.toMathMLString('e^x');
const mml2: string = TZ.toMathMLString('e^x', true, true, true);
const el1: Element = TZ.toMathML('e^x');
const el2: Element = TZ.toMathML('e^x', true, true, true);

const test = TZ.getTeXSource(el1) === TZ.getTeXSource(mml1);

declare let document: Document;
const img1: HTMLImageElement = TZ.toImage('e^x');
const img2: HTMLImageElement = TZ.toImage('e^x', false, false, 32, document);

const str1: string = TZ.filterString(mml1);
const str2: string = TZ.filterString(mml2, true);

TZ.filterElement(el1);
TZ.filterElement(el2);
