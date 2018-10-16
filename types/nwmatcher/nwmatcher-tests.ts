import nwmatcher = require('nwmatcher');

const matcher = nwmatcher({} as { document: Document });
const element = {} as Element;

let resultElementOrNull: Element | null;
let resultString: string;
let resultUndefined: undefined;
let resultElementArray: Element[];
let resultBoolean: boolean;

resultElementOrNull = matcher.first('foo');
resultElementOrNull = matcher.first('foo', element);
resultElementOrNull = matcher.first('foo');
resultElementOrNull = matcher.first('foo', element);

resultBoolean = matcher.match(element, 'foo');
resultBoolean = matcher.match(element, 'foo', element);

resultElementArray = matcher.select('foo');
resultElementArray = matcher.select('foo', element);
resultElementArray = matcher.select('foo', element, (element: Element) => undefined);

resultElementOrNull = matcher.byId('foo');
resultElementOrNull = matcher.byId('foo', element);
resultElementOrNull = matcher.byId('foo');
resultElementOrNull = matcher.byId('foo', element);

resultElementArray = matcher.byTag('foo');
resultElementArray = matcher.byTag('foo', element);

resultElementArray = matcher.byClass('foo');
resultElementArray = matcher.byClass('foo', element);

resultElementArray = matcher.byName('foo');
resultElementArray = matcher.byName('foo', element);

resultString = matcher.getAttribute(element, 'foo');
resultUndefined = matcher.getAttribute(element, 'foo');

resultBoolean = matcher.hasAttribute(element, 'foo');
