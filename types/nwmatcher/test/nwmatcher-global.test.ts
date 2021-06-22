const matcher = NW.Dom;

/**
 * Test matcher (select/first/...) functions.
 */

const element: Element = {} as any;

let resultElementOrNull: Element | null;
let resultStringOrUndefined: string | undefined;
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

resultStringOrUndefined = matcher.getAttribute(element, 'foo');

resultBoolean = matcher.hasAttribute(element, 'foo');
