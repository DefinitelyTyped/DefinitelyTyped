import { KeyEventData } from '@ckeditor/ckeditor5-engine/src/view/observer/keyobserver';
import areConnectedThroughProperties from '@ckeditor/ckeditor5-utils/src/areconnectedthroughproperties';
import CKEditorError from '@ckeditor/ckeditor5-utils/src/ckeditorerror';
import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import compareArrays from '@ckeditor/ckeditor5-utils/src/comparearrays';
import Config from '@ckeditor/ckeditor5-utils/src/config';
import count from '@ckeditor/ckeditor5-utils/src/count';
import diff from '@ckeditor/ckeditor5-utils/src/diff';
import diffToChanges from '@ckeditor/ckeditor5-utils/src/difftochanges';
import createElement from '@ckeditor/ckeditor5-utils/src/dom/createelement';
import getAncestors from '@ckeditor/ckeditor5-utils/src/dom/getancestors';
import getBorderWidths from '@ckeditor/ckeditor5-utils/src/dom/getborderwidths';
import getCommonAncestor from '@ckeditor/ckeditor5-utils/src/dom/getcommonancestor';
import getDataFromElement from '@ckeditor/ckeditor5-utils/src/dom/getdatafromelement';
import getPositionedAncestor from '@ckeditor/ckeditor5-utils/src/dom/getpositionedancestor';
import indexOf from '@ckeditor/ckeditor5-utils/src/dom/indexof';
import insertAt from '@ckeditor/ckeditor5-utils/src/dom/insertat';
import isNode from '@ckeditor/ckeditor5-utils/src/dom/isnode';
import isRange from '@ckeditor/ckeditor5-utils/src/dom/isrange';
import isText from '@ckeditor/ckeditor5-utils/src/dom/istext';
import isWindow from '@ckeditor/ckeditor5-utils/src/dom/iswindow';
import { getOptimalPosition, Options } from '@ckeditor/ckeditor5-utils/src/dom/position';
import Rect from '@ckeditor/ckeditor5-utils/src/dom/rect';
import remove from '@ckeditor/ckeditor5-utils/src/dom/remove';
import { scrollAncestorsToShowTarget, scrollViewportToShowTarget } from '@ckeditor/ckeditor5-utils/src/dom/scroll';
import setDataInElement from '@ckeditor/ckeditor5-utils/src/dom/setdatainelement';
import toUnit from '@ckeditor/ckeditor5-utils/src/dom/tounit';
import ElementReplacer from '@ckeditor/ckeditor5-utils/src/elementreplacer';
import EmitterMixin, { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import env from '@ckeditor/ckeditor5-utils/src/env';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import fastDiff from '@ckeditor/ckeditor5-utils/src/fastdiff';
import first from '@ckeditor/ckeditor5-utils/src/first';
import FocusTracker from '@ckeditor/ckeditor5-utils/src/focustracker';
import isIterable from '@ckeditor/ckeditor5-utils/src/isiterable';
import { getCode, getEnvKeystrokeText, keyCodes, parseKeystroke } from '@ckeditor/ckeditor5-utils/src/keyboard';
import KeystrokeHandler from '@ckeditor/ckeditor5-utils/src/keystrokehandler';
import Locale from '@ckeditor/ckeditor5-utils/src/locale';
import mapsEqual from '@ckeditor/ckeditor5-utils/src/mapsequal';
import mix from '@ckeditor/ckeditor5-utils/src/mix';
import nth from '@ckeditor/ckeditor5-utils/src/nth';
import objectToMap from '@ckeditor/ckeditor5-utils/src/objecttomap';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import priorities, { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import spy from '@ckeditor/ckeditor5-utils/src/spy';
import toArray from '@ckeditor/ckeditor5-utils/src/toarray';
import toMap from '@ckeditor/ckeditor5-utils/src/tomap';
import { add } from '@ckeditor/ckeditor5-utils/src/translation-service';
import uid from '@ckeditor/ckeditor5-utils/src/uid';
import {
    isCombiningMark,
    isHighSurrogateHalf,
    isInsideCombinedSymbol,
    isInsideSurrogatePair,
    isLowSurrogateHalf,
} from '@ckeditor/ckeditor5-utils/src/unicode';
import version from '@ckeditor/ckeditor5-utils/src/version';
import isComment from '@ckeditor/ckeditor5-utils/src/dom/iscomment';
import isVisible from '@ckeditor/ckeditor5-utils/src/dom/isvisible';

declare const document: Document;
declare let emitter: Emitter;
declare let htmlElement: HTMLElement;
declare let rect: Rect;
declare let str: string;

// utils/dom

createElement(document, 'p');
createElement(document, 'p', { class: 'foo' });
createElement(document, 'p', null, 'foo');
createElement(document, 'p', null, ['foo', createElement(document, 'img')]);
createElement(document, 'textarea').readOnly = true;
createElement(document, 'input').value = '';
createElement(document, 'img').src = '';
createElement(document, 'a').href = '';

// TODO? utils/dom/emittermixin

getAncestors(htmlElement);

getBorderWidths(htmlElement);

getCommonAncestor(htmlElement, htmlElement);

str = getDataFromElement(htmlElement);

// $ExpectType null
getPositionedAncestor();
// $ExpectType Element | null
getPositionedAncestor(htmlElement);

// $ExpectType number
indexOf(htmlElement);

insertAt(htmlElement, 2, htmlElement);

// $ExpectType boolean
isNode(htmlElement);
// $ExpectType boolean
isNode(new Date());

// $ExpectType boolean
isRange(new Range());
// $ExpectType boolean
isRange(new Date());

// $ExpectType boolean
isText(new Text('foo'));
// $ExpectType boolean
isText(new Date());

// $ExpectType boolean
isWindow(window);
// $ExpectType boolean
isWindow(new Date());

// $ExpectType Position
getOptimalPosition({
    element: htmlElement,
    target: () => htmlElement,
    positions: [
        targetRect => ({
            top: targetRect.bottom,
            left: targetRect.left,
            name: 'mySouthEastPosition',
        }),
    ],
});

// $ExpectType Position
getOptimalPosition({
    element: htmlElement,
    target: htmlElement,
    positions: [
        targetRect => ({
            top: targetRect.bottom,
            left: targetRect.left,
            name: 'mySouthEastPosition',
        }),
        (targetRect, elementRect) => ({
            top: targetRect.top - elementRect.height,
            left: targetRect.left,
            name: 'myNorthEastPosition',
        }),
    ],
    limiter: document.body,
    fitInViewport: true,
});

rect = new Rect(document.body);
rect = new Rect(document.getSelection()!.getRangeAt(0));
rect = new Rect(window);
rect = new Rect({ top: 0, right: 10, bottom: 10, left: 0, width: 10, height: 10 });
rect = new Rect(rect);
rect = new Rect(document.body.getClientRects().item(0)!);

rect = rect.clone();
// $ExpectType boolean
rect.contains(rect);
rect = rect.excludeScrollbarsAndBorders();
// $ExpectType number
rect.getArea();
// $ExpectType Rect | null
rect.getIntersection(rect);
// $ExpectType number
rect.getIntersectionArea(rect);
// $ExpectType Rect | null
rect.getVisible();
// $ExpectType boolean
rect.isEqual(rect);
rect = rect.moveBy(1, 1);
rect = rect.moveTo(1, 1);

remove(htmlElement);

scrollAncestorsToShowTarget(new Range());
scrollAncestorsToShowTarget(htmlElement);

scrollViewportToShowTarget({ target: new Range() });
scrollViewportToShowTarget({ target: htmlElement });
scrollViewportToShowTarget({ target: new Range(), viewportOffset: 30 });
scrollViewportToShowTarget({ target: htmlElement, viewportOffset: 30 });

setDataInElement(htmlElement, '<b>foo</b>');

str = toUnit('rem')(10);

// utils/ckeditorerror ========================================================

const data = { bar: 1 };
// $ExpectType "CKEditorError"
new CKEditorError('foo', {}).name;
// $ExpectType {}
new CKEditorError('foo', {}).context;
// $ExpectType undefined
new CKEditorError('foo', {}).data;
// $ExpectType { bar: number; }
new CKEditorError('foo', data).context;
// $ExpectType { bar: number; }
new CKEditorError('foo', data, data).data;
// $ExpectType boolean
new CKEditorError('foo', {}).is('foo');

// utils/collection ===========================================================

interface Props {
    id: string;
}

// $ExpectType (Props & { id: string; }) | null
new Collection<Props>().first;
// $ExpectType (Record<string, any> & { name: string; }) | null
new Collection({ idProperty: 'name' }).first;
// $ExpectType Collection<Props, "id">
new Collection<Props>().add({ id: 'id' });
// @ts-expect-error
new Collection<Props>().add({ id: '', name: '' });
// $ExpectType ({ name: string; } & { id: string; }) | null
new Collection([{ name: '' }]).first;
// $ExpectType ({ name: string; } & { uuid: string; }) | null
new Collection([{ name: '' }], { idProperty: 'uuid' }).first;
// $ExpectType Collection<{ name: string; }, "id">
new Collection([{ name: '' }]).add({ name: 'foo' });
// @ts-expect-error
new Collection([{ name: '' }]).add({ surname: 'foo' });
// $ExpectType void
new Collection().clear();
// $ExpectType ({ name: string; } & { id: string; })[]
new Collection([{ name: '' }]).filter(item => item.name === '' && item.id === '');
// $ExpectType ({ name: string; } & { id: string; }) | undefined
new Collection([{ name: '' }]).find(item => item.name === '' && item.id === '');
// $ExpectType ({ name: string; } & { id: string; }) | null
new Collection([{ name: '' }]).get(0);
// $ExpectType ({ name: string; } & { id: string; }) | null
new Collection([{ name: '' }]).get('');
// $ExpectType number
new Collection().getIndex('id1');
// $ExpectType number
new Collection().getIndex({});
// @ts-expect-error
new Collection([{ name: '' }]).getIndex({});
// $ExpectType { name: string; } & { id: string; }
new Collection([{ name: '' }]).remove(0);
// $ExpectType { name: string; } & { id: string; }
new Collection([{ name: '' }]).remove('id1');
// $ExpectType { name: string; } & { id: string; }
new Collection([{ name: '' }]).remove({ name: '' });
// @ts-expect-error
new Collection([{ name: '' }]).remove({ surname: '' });
// $ExpectType string[]
new Collection([{ name: '' }]).map(item => item.name);
// $ExpectType number[]
new Collection([{ name: '' }]).map((_, idx) => idx);
new Collection().off("foo", (ev, ...args) => {
    // $ExpectType EventInfo<Collection<Record<string, any>, "id">, "foo">
    ev;
    // $ExpectType any[]
    args;
});

// collection#bindTo

interface LabelObj {
    label: string;
}

interface HiddenObj {
    hidden: boolean;
}

class FactoryClass {
    label: string;
    constructor(data: { label: string }) {
        this.label = data.label;
    }
}

const source = new Collection({ idProperty: 'label' });
const target = new Collection([{ label: '' }]);

target.bindTo(source).as(FactoryClass);

class FooClass {
    fooLabel: string;
    constructor(data: LabelObj) {
        this.fooLabel = data.label;
    }
}

class BarClass {
    barLabel: string;
    constructor(data: LabelObj) {
        this.barLabel = data.label;
    }
}

const source2 = new Collection([{ name: '' }], { idProperty: 'label' });
const target2 = new Collection<FooClass | BarClass>();

target2.bindTo(source2).using(item => {
    if (item.label === 'foo') {
        return new FooClass(item);
    } else {
        return new BarClass(item);
    }
});

const source3 = new Collection({ idProperty: 'label' });
const target3 = new Collection([{ value: '' }]);

target3.bindTo(source3).using('label');
// @ts-expect-error
source3.bindTo(target3).using('label');

const source4 = new Collection<HiddenObj>();

target3.bindTo(source4).using(item => {
    if (item.hidden) {
        return null;
    }

    return item;
});

// utils/comparearrays ========================================================

// $ExpectType number | ArrayRelation
compareArrays([0, 2], [0, 2, 1]);
// $ExpectType number | ArrayRelation
compareArrays(['abc', 0], ['abc', 0, 3]);
// $ExpectType number | ArrayRelation
compareArrays(['abc', 0] as const, ['abc', 0, 3] as const);

// utils/config ===============================================================

declare module '@ckeditor/ckeditor5-core/src/editor/editorconfig' {
    interface EditorConfig {
        foo: number;
    }
}

// $ExpectType Config<Partial<EditorConfig>>
new Config();
// $ExpectType Config<{ foo: number; }>
new Config({ foo: 10 });
// $ExpectType Config<{ foo?: undefined; } | { foo: number; }>
new Config({}, { foo: 10 });
// $ExpectType Config<{ foo: number; }>
new Config({ foo: 10 }, { foo: 10 });
// $ExpectType Config<{ bar: number; }>
new Config({ bar: 10 });
// $ExpectType Config<{ bar?: undefined; } | { bar: number; }>
new Config({}, { bar: 10 });
// $ExpectType number | undefined
new Config({}, { bar: 10 }).get('bar');

new Config().define({
    resize: {
        minHeight: 400,
        hidden: true,
    },
});

new Config().define('resize', { minHeight: 400, hidden: true });
new Config().define('language', 'en');
new Config().define('resize.minHeight', 400);

// $ExpectType string | LanguageConfig | undefined
new Config().get('language');
// $ExpectType any
new Config().get('resize.minHeight');
new Config().define('language', undefined);

// utils/count ================================================================

// $ExpectType number
count([1, 2, 3, 4, 5]);
// $ExpectType number
count([]);

// utils/diff =================================================================

// $ExpectType Change[]
diff('aba', 'acca');
// $ExpectType Change[]
diff(Array.from('aba'), Array.from('acca'));

// utils/difftochanges ========================================================

const input = Array.from('abc');
const output = Array.from('xaby');
const allChanges = diffToChanges(diff(input, output), output);
allChanges.forEach(change => {
    if (change.type === 'insert') {
        input.splice(change.index, 0, ...change.values);
    } else if (change.type === 'delete') {
        input.splice(change.index, change.howMany);
    }
});

// utils/elementreplacer ======================================================

const replacer = new ElementReplacer();

replacer.replace(htmlElement, htmlElement);
replacer.replace(htmlElement);
replacer.restore();

// utils/emittermixin

emitter = Object.create(EmitterMixin);

emitter.delegate('foo');
emitter.delegate('foo', 'bar');
emitter.delegate('foo').to(emitter);
emitter.delegate('foo').to(emitter, 'bar');
emitter.delegate('foo').to(emitter, name => name + '-delegated');

emitter.fire('foo');
emitter.fire('foo', 1, 'b', true);
emitter.fire('getSelectedContent', (evt: EventInfo) => {
    evt.stop();
});

emitter.listenTo(emitter, 'foo', () => {});
emitter.listenTo(emitter, 'foo', () => {}, { priority: 10 });
emitter.listenTo(emitter, 'foo', () => {}, { priority: 'highest' });

emitter.off('foo');
emitter.off('foo', () => {});

emitter.on('foo', () => {});
emitter.on('foo', (info, _data) => {
    info.stop();
});
emitter.on('foo', () => {}, { priority: 10 });
emitter.on('foo', () => {}, { priority: 'normal' });

emitter.once('foo', () => {});
emitter.once('foo', (info, _data) => {
    info.stop();
});
emitter.once('foo', () => {}, { priority: 10 });
emitter.once('foo', () => {}, { priority: 'lowest' });

emitter.stopDelegating();
emitter.stopDelegating('foo');
emitter.stopDelegating('foo', emitter);

emitter.stopListening();
emitter.stopListening(emitter);
emitter.stopListening(emitter, 'foo');
emitter.stopListening(emitter, 'foo', () => {});

// utils/env ==================================================================

// $ExpectType boolean
env.isBlink;
// $ExpectType boolean
env.isMac;

// utils/eventinfo ============================================================

const event = new EventInfo(EmitterMixin, 'test');
// $ExpectType Emitter
event.source;
// $ExpectType "test"
event.name;

event.path[0];

// $ExpectType void
event.stop();
// $ExpectType void
event.off();

// $ExpectType boolean
event.stop.called;
// $ExpectType boolean
event.off.called;

// utils/fastdiff =============================================================

fastDiff(str, '2ab').forEach(change => {
    if (change.type === 'insert') {
        str = str.substring(0, change.index) + change.values.join('') + str.substring(change.index);
    } else if (change.type === 'delete') {
        str = str.substring(0, change.index) + str.substring(change.index + change.howMany);
    }
});

// $ExpectType (InsertChange | DeleteChange)[]
fastDiff([''], [''], () => true);
// $ExpectType (InsertChange | DeleteChange)[]
fastDiff([''], [''], null);
// $ExpectType Change[]
fastDiff([''], [''], () => true, true);
// $ExpectType (InsertChange | DeleteChange)[]
fastDiff([''], [''], null, false);

// utils/first ================================================================

// $ExpectType number | null
first([11, 12]);
// $ExpectType string | number | null
first(['f', 12]);
// $ExpectType null
first([]);
// $ExpectType number | null
first(new Set([4]));
// $ExpectType [string, number] | null
first(new Map([['foo', 4]]));

// utils/focustracker =========================================================

const focusTracker = new FocusTracker();
htmlElement = focusTracker.focusedElement;
// $ExpectType boolean
focusTracker.isFocused;
focusTracker.add(htmlElement);
focusTracker.remove(htmlElement);

// utils/isiterable ===========================================================

// $ExpectType boolean
isIterable('');
// $ExpectType boolean
isIterable(5);
// $ExpectType boolean
isIterable([1, 2, 3]);

// utils/keyboard =============================================================

// $ExpectType 65
keyCodes.a;
// $ExpectType 65
keyCodes['a'];

// $ExpectType number
getCode('0');
// $ExpectType number
getCode({ keyCode: 48, altKey: true, ctrlKey: true, shiftKey: true, metaKey: true });
// $ExpectType string
getEnvKeystrokeText('alt+A');
// $ExpectType number
parseKeystroke('Ctrl+A');
// $ExpectType number
parseKeystroke(['ctrl', 'a']);
// $ExpectType number
parseKeystroke(['shift', 33]);

// utils/keystrokehandler =====================================================

declare const keystroke: KeyEventData;
const keystrokes = new KeystrokeHandler();

const mySpy = spy();
keystrokes.set('Ctrl+A', mySpy);
keystrokes.set(['Ctrl', 'A'], mySpy);
keystrokes.set(['Ctrl', 'A'], mySpy, { priority: 'high' });
keystrokes.set(['Ctrl', 33], mySpy, { priority: 10 });

const emitterMixxin = Object.create(EmitterMixin) as Emitter;
keystrokes.listenTo(emitterMixxin);

// $ExpectType boolean
keystrokes.press(keystroke);

keystrokes.destroy();

// utils/locale ===============================================================

new Locale();
new Locale({ uiLanguage: 'en' });
new Locale({ contentLanguage: 'en' });
new Locale({ uiLanguage: 'en', contentLanguage: 'en' });
// $ExpectType string
new Locale({ uiLanguage: 'en', contentLanguage: 'en' }).contentLanguage;
// $ExpectType string
new Locale({ uiLanguage: 'en', contentLanguage: 'en' }).uiLanguage;
// $ExpectType string
new Locale({ uiLanguage: 'en', contentLanguage: 'en' }).uiLanguageDirection;
// $ExpectType string
new Locale({ uiLanguage: 'en', contentLanguage: 'en' }).contentLanguageDirection;
new Locale({ uiLanguage: 'en', contentLanguage: 'en' }).t('Label');
new Locale({ uiLanguage: 'en', contentLanguage: 'en' }).t("Created file '%0' in %1ms.", ['fileName', '100']);
new Locale({ uiLanguage: 'en', contentLanguage: 'en' }).t('Created file in %1ms.', 5);
new Locale({ uiLanguage: 'en', contentLanguage: 'en' }).t('', '');
new Locale({ uiLanguage: 'en', contentLanguage: 'en' }).t('', [5]);
new Locale({ uiLanguage: 'en', contentLanguage: 'en' }).t('', [5, '']);
// @ts-expect-error
new Locale({ uiLanguage: 'en', contentLanguage: 'en' }).t('', false);

// utils/mapsequal ============================================================

// $ExpectType boolean
mapsEqual(new Map([['foo', 1]]), new Map([['bar', true]]));

// utils/mix ==================================================================

interface SomeMixin {
    a: () => string;
}

class Editor implements SomeMixin {
    a: () => string;
    b() {
        return 3;
    }
}

const SomeMixin = {
    a() {
        return 'a';
    },
};

const SomeMixinNum = {
    b() {
        return 3;
    },
};

mix(Editor, SomeMixin);
mix(Editor, SomeMixinNum);

const editor = new Editor();
str = editor.a();
// $ExpectType number
editor.b();

// utils/nth ==================================================================

function* getGenerator() {
    yield 11;
    yield 22;
    yield 33;
}
// $ExpectType 11 | 22 | 33 | null || 11 | 33 | 22 | null
nth(2, Array.from(getGenerator()));
// $ExpectType null
nth(2, []);
// $ExpectType number | null
nth(2, [5, 5, 6]);
// $ExpectType 5 | null
nth(2, [5] as const);

// utils/objecttomap ==========================================================

// $ExpectType Map<"foo" | "bar", number>
objectToMap({ foo: 1, bar: 2 });
// $ExpectType number | undefined
objectToMap({ foo: 1, bar: 2 }).get('foo');

// utils/observablemixin ======================================================

class Car implements Observable {
    set(...args: [option: Record<string, unknown>] | [name: string, value: unknown] | [name: string]): void {
        throw new Error('Method not implemented.');
    }
    bind(..._bindProperties: string[]): BindChain {
        throw new Error('Method not implemented.');
    }
    unbind(..._unbindProperties: string[]): void {
        throw new Error('Method not implemented.');
    }
    decorate(_methodName: string): void {
        throw new Error('Method not implemented.');
    }
    on<K extends string>(
        _event: K,
        _callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        _options?: { priority?: number | PriorityString | undefined },
    ): void {
        throw new Error('Method not implemented.');
    }
    once<K extends string>(
        _event: K,
        _callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        _options?: { priority?: number | PriorityString | undefined },
    ): void {
        throw new Error('Method not implemented.');
    }
    off<K extends string>(_event: K, _callback?: (this: this, info: EventInfo<this, K>, ...args: any[]) => void): void {
        throw new Error('Method not implemented.');
    }
    listenTo<P extends string, E extends Emitter>(
        _emitter: E,
        _event: P,
        _callback: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
        _options?: { priority?: number | PriorityString | undefined },
    ): void {
        throw new Error('Method not implemented.');
    }
    stopListening<E extends Emitter, P extends string>(
        _emitter?: E,
        _event?: P,
        _callback?: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
    ): void {
        throw new Error('Method not implemented.');
    }
    fire(_eventOrInfo: string | EventInfo, ..._args: any[]): unknown {
        throw new Error('Method not implemented.');
    }
    delegate(..._events: string[]): EmitterMixinDelegateChain {
        throw new Error('Method not implemented.');
    }
    stopDelegating(_event?: string, _emitter?: Emitter): void {
        throw new Error('Method not implemented.');
    }
    color: string;
    used: boolean;
    accelerate(): void {}
}

const bettle = new Car();
const ranger = new Car();

bettle.bind('color', 'year').to(ranger);
bettle.bind('color').to(ranger, 'color');
// @ts-expect-error
bettle.bind('color').to(ranger, 'foo');
// @ts-expect-error
bettle.bind('color', 'year').to(ranger, 'color', ranger, 'used');
bettle.bind('color', 'year').to(ranger, 'color', ranger, 'used', (color: string, used: boolean) => {
    console.log(color, used);
});
bettle.bind('custom').to(ranger, 'color', ranger, 'used', (...args: Array<string | boolean>) => args.join('/'));
// @ts-expect-error
bettle.bind('custom').to(ranger, 'color', ranger, 'used', (...args: number[]) => args.join('/'));

bettle.bind('color').toMany([ranger, ranger], 'color', (color1: string, color2: string) => {
    console.log(color1, color2);
});
// @ts-expect-error
bettle.bind('color').toMany([ranger, ranger], 'year', () => {});
bettle.decorate('color');
bettle.decorate('accelerate');

bettle.set('color', 'red');
bettle.set('seats', undefined);
bettle.set({
    color: 'red',
});
bettle.set('color');

bettle.unbind();
bettle.unbind('color');
bettle.unbind('color', 'year');

// utils/priorities ===========================================================
// $ExpectType number
priorities.get(2);
// $ExpectType number
priorities.get('normal');

// utils/spy

const fn1 = spy();
fn1();
// $ExpectType true | undefined
fn1.called;

// utils/tomap

// $ExpectType Map<"foo" | "bar", number>
toMap({ foo: 1, bar: 2 });
// $ExpectType Map<"foo" | "bar", number>
toMap([
    ['foo', 1],
    ['bar', 2],
]);
// $ExpectType Map<string, number> || Map<"foo" | "bar", number>
toMap(
    new Map([
        ['foo', 1],
        ['bar', 2],
    ]),
);

// utils/translation-service ==================================================

add('pl', {
    OK: 'OK',
    'Cancel [context: reject]': 'Anuluj',
});
add(
    'pl',
    {
        OK: 'OK',
        'Cancel [context: reject]': 'Anuluj',
    },
    n => n - 1,
);
add(
    'pl',
    {
        OK: 'OK',
        'Cancel [context: reject]': 'Anuluj',
    },
    n => !!n,
);

// $ExpectType number | boolean
window.CKEDITOR_TRANSLATIONS.en.getPluralForm(4);
// $ExpectType Record<string, string>
window.CKEDITOR_TRANSLATIONS.en.dictionary;

// utils/uid ==================================================================

str = uid();

// utils/unicode ==============================================================

// $ExpectType boolean
isCombiningMark('a');
// $ExpectType boolean
isHighSurrogateHalf('a');
// $ExpectType boolean
isInsideCombinedSymbol(str, 2);
// $ExpectType boolean
isInsideSurrogatePair(str, 2);
// $ExpectType boolean
isLowSurrogateHalf(String.fromCharCode(57166));

// src/dom/position ===========================================================

let options: Options = {
    element: document.createElement('div'),
    target: () => document.createElement('div'),
    positions: [() => null, () => ({ top: 3, left: 3, name: '' })],
    limiter: () => document.createElement('div'),
    fitInViewport: true,
};

options = {
    element: document.createElement('div'),
    target: document.createElement('div'),
    positions: [() => null, () => ({ top: 3, left: 3, name: '' })],
};

options = {
    element: document.createElement('div'),
    target: new Rect(document.createElement('div')),
    positions: [() => null, () => ({ top: 3, left: 3, name: '' })],
};

options = {
    element: document.createElement('div'),
    target: new Range(),
    positions: [() => null, () => ({ top: 3, left: 3, name: '' })],
};

options = {
    element: document.createElement('div'),
    target: window,
    positions: [() => null, () => ({ top: 3, left: 3, name: '' })],
};

options = {
    element: document.createElement('div'),
    target: document.body.getClientRects().item(0)!,
    positions: [() => null, () => ({ top: 3, left: 3, name: '' })],
};
console.log(options);

// utils/toArray ==============================================================
// $ExpectType number[]
toArray(5);
// $ExpectType number[]
toArray([1, 2, 3]);
// $ExpectType readonly [0]
toArray([0] as const);
// $ExpectType 5[]
toArray(5 as const);

// utils/version

// $ExpectType "32.0.0"
window.CKEDITOR_VERSION;
// $ExpectType "32.0.0"
version;

// utils/areconnectedthroughproperties
// $ExpectType boolean
areConnectedThroughProperties([], []);
// $ExpectType boolean
areConnectedThroughProperties({}, {});

// utils/dom/iscomment
// $ExpectType boolean
isComment('');

// utils/dom/isvisible
// $ExpectType boolean
isVisible(document.documentElement);
// $ExpectType boolean
isVisible(null);
// $ExpectType boolean
isVisible();

declare class Foo implements Emitter {
    on<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: {
            priority?: PriorityString | number | undefined;
        },
    ): void;
    on(
        event: 'init',
        callback: (this: this, info: EventInfo<this, 'init'>, arg: { init: true }) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: {
            priority?: PriorityString | number | undefined;
        },
    ): void;
    once(
        event: 'init',
        callback: (this: this, info: EventInfo<this, 'init'>, arg: { init: true }) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<K extends string>(event: K, callback?: (this: this, info: EventInfo<this, K>, ...args: any[]) => void): void;
    off(event: 'init', callback?: (this: this, info: EventInfo<this, 'init'>, arg: { init: true }) => void): void;
    listenTo<P extends string, E extends Emitter>(
        emitter: E,
        event: P,
        callback: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<E extends Emitter, P extends string>(
        emitter?: E,
        event?: P,
        callback?: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
    ): void;
    fire(eventOrInfo: 'init', arg: { init: true }): unknown;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

const foo = new Foo();

foo.on('init', (info, arg) => {
    // $ExpectType EventInfo<Foo, "init">
    info;
    // $ExpectType { init: true; }
    arg;
});

new Foo().on('foo', (info, ...args) => {
    // $ExpectType EventInfo<Foo, "foo">
    info;
    // $ExpectType any[]
    args;
});

foo.once('init', (info, arg) => {
    // $ExpectType EventInfo<Foo, "init">
    info;
    // $ExpectType { init: true; }
    arg;
});

new Foo().once('foo', (info, ...args) => {
    // $ExpectType EventInfo<Foo, "foo">
    info;
    // $ExpectType any[]
    args;
});

foo.off('init', (info, arg) => {
    // $ExpectType EventInfo<Foo, "init">
    info;
    // $ExpectType { init: true; }
    arg;
});

foo.off('foo', (info, ...args) => {
    // $ExpectType EventInfo<Foo, "foo">
    info;
    // $ExpectType any[]
    args;
});
