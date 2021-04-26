import * as ckEngine from "@ckeditor/ckeditor5-engine";
import createElement from "@ckeditor/ckeditor5-utils/src/dom/createelement";
import Locale from "@ckeditor/ckeditor5-utils/src/locale";
import EmitterMixin, { Emitter } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import Rect from "@ckeditor/ckeditor5-utils/src/dom/rect";
import getAncestors from "@ckeditor/ckeditor5-utils/src/dom/getancestors";
import getBorderWidths from "@ckeditor/ckeditor5-utils/src/dom/getborderwidths";
import getCommonAncestor from "@ckeditor/ckeditor5-utils/src/dom/getcommonancestor";
import getDataFromElement from "@ckeditor/ckeditor5-utils/src/dom/getdatafromelement";
import getPositionedAncestor from "@ckeditor/ckeditor5-utils/src/dom/getpositionedancestor";
import indexOf from "@ckeditor/ckeditor5-utils/src/dom/indexof";
import insertAt from "@ckeditor/ckeditor5-utils/src/dom/insertat";
import isNode from "@ckeditor/ckeditor5-utils/src/dom/isnode";
import isRange from "@ckeditor/ckeditor5-utils/src/dom/isrange";
import isWindow from "@ckeditor/ckeditor5-utils/src/dom/iswindow";
import isText from "@ckeditor/ckeditor5-utils/src/dom/istext";
import { getOptimalPosition, Options, Position } from "@ckeditor/ckeditor5-utils/src/dom/position";
import remove from "@ckeditor/ckeditor5-utils/src/dom/remove";
import { scrollViewportToShowTarget, scrollAncestorsToShowTarget } from "@ckeditor/ckeditor5-utils/src/dom/scroll";
import setDataInElement from "@ckeditor/ckeditor5-utils/src/dom/setdatainelement";
import toUnit from "@ckeditor/ckeditor5-utils/src/dom/tounit";
import CKEditorError from "@ckeditor/ckeditor5-utils/src/ckeditorerror";
import Collection from "@ckeditor/ckeditor5-utils/src/collection";
import compareArrays from "@ckeditor/ckeditor5-utils/src/comparearrays";
import Config from "@ckeditor/ckeditor5-utils/src/config";
import count from "@ckeditor/ckeditor5-utils/src/count";
import diff from "@ckeditor/ckeditor5-utils/src/diff";
import diffToChanges from "@ckeditor/ckeditor5-utils/src/difftochanges";
import ElementReplacer from "@ckeditor/ckeditor5-utils/src/elementreplacer";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import env from "@ckeditor/ckeditor5-utils/src/env";
import fastDiff from "@ckeditor/ckeditor5-utils/src/fastdiff";
import first from "@ckeditor/ckeditor5-utils/src/first";
import FocusTracker from "@ckeditor/ckeditor5-utils/src/focustracker";
import isIterable from "@ckeditor/ckeditor5-utils/src/isiterable";
import {
    getCode,
    keyCodes,
    getEnvKeystrokeText,
    parseKeystroke,
} from "@ckeditor/ckeditor5-utils/src/keyboard";
import KeystrokeHandler from "@ckeditor/ckeditor5-utils/src/keystrokehandler";
import spy from "@ckeditor/ckeditor5-utils/src/spy";
import mapsEqual from "@ckeditor/ckeditor5-utils/src/mapsequal";
import mix from "@ckeditor/ckeditor5-utils/src/mix";
import nth from "@ckeditor/ckeditor5-utils/src/nth";
import objectToMap from "@ckeditor/ckeditor5-utils/src/objecttomap";
import Observable from "@ckeditor/ckeditor5-utils/src/observablemixin";
import priorities from "@ckeditor/ckeditor5-utils/src/priorities";
import toMap from "@ckeditor/ckeditor5-utils/src/tomap";
import { add } from "@ckeditor/ckeditor5-utils/src/translation-service";
import uid from "@ckeditor/ckeditor5-utils/src/uid";
import toArray from "@ckeditor/ckeditor5-utils/src/toarray";

import {
    isCombiningMark,
    isHighSurrogateHalf,
    isInsideCombinedSymbol,
    isInsideSurrogatePair,
    isLowSurrogateHalf,
} from "@ckeditor/ckeditor5-utils/src/unicode";

declare const document: Document;
declare const locale: Locale;
declare let emitter: Emitter;
declare let htmlElement: HTMLElement;
declare let map: Map<string, number>;
declare let num: number;
declare let bool: boolean;
declare let rect: Rect;
declare let rectOrNull: Rect | null;
declare let str: string;

// utils/dom

createElement(document, "p");
createElement(document, "p", { class: "foo" });
createElement(document, "p", null, "foo");
createElement(document, "p", null, ["foo", createElement(document, "img")]);

// TODO? utils/dom/emittermixin

getAncestors(htmlElement);

getBorderWidths(htmlElement);

getCommonAncestor(htmlElement, htmlElement);

str = getDataFromElement(htmlElement);

let strNull: HTMLElement | null = getPositionedAncestor();
strNull = getPositionedAncestor(htmlElement);

num = indexOf(htmlElement);

insertAt(htmlElement, 2, htmlElement);

bool = isNode(htmlElement);
bool = isNode(new Date());

bool = isRange(new Range());
bool = isRange(new Date());

bool = isText(new Text("foo"));
bool = isText(new Date());

bool = isWindow(window);
bool = isWindow(new Date());

let position: Position;

position = getOptimalPosition({
    element: htmlElement,
    target: () => htmlElement,
    positions: [
        (targetRect, elementRect) => ({
            top: targetRect.top,
            left: targetRect.left + elementRect.width,
            name: "right",
        }),
    ],
});

position = getOptimalPosition({
    element: htmlElement,
    target: htmlElement,
    positions: [
        targetRect => ({
            top: targetRect.bottom,
            left: targetRect.left,
            name: "mySouthEastPosition",
        }),
        (targetRect, elementRect) => ({
            top: targetRect.top - elementRect.height,
            left: targetRect.left,
            name: "myNorthEastPosition",
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
bool = rect.contains(rect);
rect = rect.excludeScrollbarsAndBorders();
num = rect.getArea();
rect = rect.getIntersection(rect);
num = rect.getIntersectionArea(rect);
rectOrNull = rect.getVisible();
bool = rect.isEqual(rect);
rect = rect.moveBy(1, 1);
rect = rect.moveTo(1, 1);

remove(htmlElement);

scrollAncestorsToShowTarget(new Range());
scrollAncestorsToShowTarget(htmlElement);

scrollViewportToShowTarget({ target: new Range() });
scrollViewportToShowTarget({ target: htmlElement });
scrollViewportToShowTarget({ target: new Range(), viewportOffset: 30 });
scrollViewportToShowTarget({ target: htmlElement, viewportOffset: 30 });

setDataInElement(htmlElement, "<b>foo</b>");

str = toUnit("rem")(10);

// utils/ckeditorerror ========================================================

const regularError = new Error("foo");
let ckeditorError: CKEditorError<"foo">;
let ckeditorErrorWithData: CKEditorError<"foo", { bar: number }>;

const data = { bar: 1 };
ckeditorError = new CKEditorError("foo");
ckeditorErrorWithData = new CKEditorError("foo", data);

ckeditorError.is(ckeditorError);
ckeditorError.is(regularError);

// utils/collection ===========================================================

interface Foo {
    foo: number;
}

interface Props {
    id: string;
}

interface PropsStr {
    id: string;
    name: string;
}

declare let foo: Foo;
let items: PropsStr[];
let itemOrNull: Props | null;
let itemOrUndef: Props | undefined;

const item1 = { id: "id1" };
const item2 = { id: "id2" };
const itemStr1 = { id: "foo", name: "yy" };
const itemStr2 = { id: "foo", name: "xx" };

const coll = new Collection<Props>();
const collStr = new Collection<PropsStr>({ idProperty: "name" });

coll.add(item1);
coll.add(item2);
collStr.add(itemStr1);
collStr.add(itemStr2);

coll.add(item1, 0);
coll.add(item1).add(item2);

coll.clear();

items = collStr.filter(item => item.name === "yy");
items = collStr.filter((_, idx) => idx > 0);
items = collStr.filter(function(this: Foo, _, idx) {
    return this.foo > 0 && idx === 0;
}, foo);

itemOrUndef = collStr.find(item => item.name === "yy");
itemOrUndef = collStr.find((_, idx) => idx === 3);
itemOrUndef = collStr.find(function(this: Foo, _, idx) {
    return this.foo > 0 && idx === 0;
}, foo);

itemOrNull = coll.get(0);
itemOrNull = coll.get("id1");

num = coll.getIndex("id1");
num = coll.getIndex(item1);

coll.remove(0);
coll.remove("id1");
coll.remove(item1);

const strings: string[] = collStr.map(item => item.name);
const nums: number[] = collStr.map((_, idx) => idx);
const bools: boolean[] = collStr.map(function(this: Foo, _, idx) {
    return this.foo === idx;
}, foo);

// collection#bindTo

interface LabelObj {
    label: string;
}

interface LabelValueObj {
    label: { value: string };
}

interface HiddenObj {
    hidden: boolean;
}

class FactoryClass {
    factoryLabel: string;
    constructor(data: LabelObj) {
        this.factoryLabel = data.label;
    }
}

const source1 = new Collection<LabelObj>({ idProperty: "label" });
const target1 = new Collection<FactoryClass>();

target1.bindTo(source1).as(FactoryClass);

source1.add({ label: "foo" });
source1.add({ label: "bar" });

source1.remove(0);
console.log(target1.length);
console.log(target1.get(0)!.factoryLabel);

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

const source2 = new Collection<LabelObj>({ idProperty: "label" });
const target2 = new Collection<FooClass | BarClass>();

target2.bindTo(source2).using(item => {
    if (item.label === "foo") {
        return new FooClass(item);
    } else {
        return new BarClass(item);
    }
});

source2.add({ label: "foo" });
source2.add({ label: "bar" });

console.log(target2.length);
console.log(target2.get(0)! instanceof FooClass);
console.log(target2.get(1)! instanceof BarClass);

const source3 = new Collection<LabelValueObj>({ idProperty: "label" });
const target3 = new Collection<LabelValueObj["label"]>();

target3.bindTo(source2).using("label");

source3.add({ label: { value: "foo" } });
source3.add({ label: { value: "bar" } });

console.log(target3.length);
console.log(target3.get(0)!.value);
console.log(target3.get(1)!.value);

const source4 = new Collection<HiddenObj>();
const target4 = new Collection<HiddenObj | null>();

target4.bindTo(source4).using(item => {
    if (item.hidden) {
        return null;
    }

    return item;
});

source4.add({ hidden: true });
source4.add({ hidden: false });

// utils/comparearrays ========================================================

compareArrays([0, 2], [0, 2, 1]);
compareArrays(["abc", 0], ["abc", 0, 3]);

// utils/config ===============================================================

let strOrUndef: string | undefined;
let config: Config;
const defaultConfig = {
    foo: 1,
    bar: 2,
};

config = new Config();
config = new Config({ foo: 10 });
config = new Config({}, defaultConfig);
config = new Config({ foo: 10 }, defaultConfig);

config.define({
    resize: {
        minHeight: 400,
        hidden: true,
    },
});

config.define("resize", { minHeight: 400, hidden: true });
config.define("language", "en");
config.define("resize.minHeight", 400);

str = config.get("language");
num = config.get("resize.minHeight");

config.define("language", undefined);
strOrUndef = config.get("language");

// utils/count ================================================================

num = count([1, 2, 3, 4, 5]);

// utils/diff =================================================================

let changes = diff("aba", "acca");
changes = diff(Array.from("aba"), Array.from("acca"));

// utils/difftochanges ========================================================

const input = Array.from("abc");
const output = Array.from("xaby");
const allChanges = diffToChanges(diff(input, output), output);
allChanges.forEach(change => {
    if (change.type === "insert") {
        input.splice(change.index, 0, ...change.values);
    } else if (change.type === "delete") {
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

emitter.delegate("foo");
emitter.delegate("foo", "bar");
emitter.delegate("foo").to(emitter);
emitter.delegate("foo").to(emitter, "bar");
emitter.delegate("foo").to(emitter, name => name + "-delegated");

emitter.fire("foo");
emitter.fire("foo", 1, "b", true);
emitter.fire("getSelectedContent", (evt: EventInfo<any>) => {
    evt.stop();
});

emitter.listenTo(emitter, "foo", () => {});
emitter.listenTo(emitter, "foo", () => {}, { priority: 10 });
emitter.listenTo(emitter, "foo", () => {}, { priority: "highest" });

emitter.off("foo");
emitter.off("foo", () => {});

emitter.on("foo", () => {});
emitter.on("foo", (info, data) => {
    info.stop();
});
emitter.on("foo", () => {}, { priority: 10 });
emitter.on("foo", () => {}, { priority: "normal" });

emitter.once("foo", () => {});
emitter.once("foo", (info, data) => {
    info.stop();
});
emitter.once("foo", () => {}, { priority: 10 });
emitter.once("foo", () => {}, { priority: "lowest" });

emitter.stopDelegating();
emitter.stopDelegating("foo");
emitter.stopDelegating("foo", emitter);

emitter.stopListening();
emitter.stopListening(emitter);
emitter.stopListening(emitter, "foo");
emitter.stopListening(emitter, "foo", () => {});

// utils/env ==================================================================

bool = env.isBlink;
bool = env.isMac;

// utils/eventinfo ============================================================

const event = new EventInfo({ a: 1 }, "test");
num = event.source.a;
str = event.name;

event.path[0];

event.stop();
event.off();

bool = event.stop.called;
bool = event.off.called;

// utils/fastdiff =============================================================

fastDiff(str, "2ab").forEach(change => {
    if (change.type === "insert") {
        str = str.substring(0, change.index) + change.values.join("") + str.substring(change.index);
    } else if (change.type === "delete") {
        str = str.substring(0, change.index) + str.substring(change.index + change.howMany);
    }
});

// utils/first ================================================================

const collection = [11, 22];
const iterator = collection[Symbol.iterator]();

first(iterator);

// utils/focustracker =========================================================

const focusTracker = new FocusTracker();
htmlElement = focusTracker.focusedElement;
bool = focusTracker.isFocused;
focusTracker.add(htmlElement);
focusTracker.remove(htmlElement);

// utils/isiterable ===========================================================

bool = isIterable(str);
bool = isIterable([1, 2, 3]);

// utils/keyboard =============================================================

num = keyCodes.a;
num = keyCodes["a"];

num = getCode("0");
num = getCode({ keyCode: 48 });
num = getCode({ keyCode: 48, altKey: true, ctrlKey: true, shiftKey: true });

str = getEnvKeystrokeText("alt+A");

num = parseKeystroke("Ctrl+A");
num = parseKeystroke(["ctrl", "a"]);
num = parseKeystroke(["shift", 33]);

// utils/keystrokehandler =====================================================

declare const keystroke: ckEngine.view.observer.KeyEventData;
const keystrokes = new KeystrokeHandler();

const mySpy = spy();
keystrokes.set("Ctrl+A", mySpy);
keystrokes.set(["Ctrl", "A"], mySpy);
keystrokes.set(["Ctrl", "A"], mySpy, { priority: "high" });
keystrokes.set(["Ctrl", 33], mySpy, { priority: 10 });

const emitterMixxin = Object.create(EmitterMixin) as Emitter;
keystrokes.listenTo(emitterMixxin);

bool = keystrokes.press(keystroke);

keystrokes.destroy();

// utils/locale ===============================================================

locale.t("Label");
locale.t('Created file "%0" in %1ms.', ["fileName", "100"]);

// utils/mapsequal ============================================================

mapsEqual(map, map);

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
        return "a";
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
num = editor.b();

// utils/nth ==================================================================

function* getGenerator() {
    yield 11;
    yield 22;
    yield 33;
}

nth(2, getGenerator());

// utils/objecttomap ==========================================================

const objMap: Map<string, number> = objectToMap({ foo: 1, bar: 2 });
num = objMap.get("foo")!;

// utils/observablemixin ======================================================

const vehicle = Object.create(Observable);
const car = Object.create(Observable);

vehicle.bind("color");
vehicle.bind("color", "year");
vehicle.bind("color", "year").to(car);
vehicle.bind("color", "year").to(car, "color");
vehicle.bind("color", "year").to(car, "color", car, "year");
vehicle.bind("year").to(car, "color", car, "year", (a: string, b: number) => a + b);
vehicle.bind("custom").to(car, "color", car, "year", car, "hue", (...args: Array<string | number>) => args.join("/")); // TS 3.0: [string, number, string]
vehicle.bind("color").toMany([car, car], "color", () => {});

vehicle.decorate("method");

car.set("color", "red");
car.set("seats", undefined);
car.set({
    color: "blue",
    wheels: 4,
    seats: 5,
});

vehicle.unbind();
vehicle.unbind("color");
vehicle.unbind("color", "year");

// utils/priorities ===========================================================

num = priorities.get(2);
num = priorities.get("normal");

// utils/spy

const fn1 = spy();
fn1();
bool = fn1.called;

// utils/tomap

map = toMap({ foo: 1, bar: 2 });
map = toMap([
    ["foo", 1],
    ["bar", 2],
]);
map = toMap(map);

// utils/translation-service ==================================================

add("pl", {
    OK: "OK",
    "Cancel [context: reject]": "Anuluj",
});

// utils/uid ==================================================================

str = uid();

// utils/unicode ==============================================================

bool = isCombiningMark("a");
bool = isHighSurrogateHalf("a");
bool = isInsideCombinedSymbol(str, 2);
bool = isInsideSurrogatePair(str, 2);
bool = isLowSurrogateHalf(String.fromCharCode(57166));

// src/dom/position ===========================================================

let options: Options = {
    element: document.createElement("div"),
    target: () => document.createElement("div"),
    positions: [() => null, () => ({ top: 3, left: 3, name: "" })],
    limiter: () => document.createElement("div"),
    fitInViewport: true,
};

options = {
    element: document.createElement("div"),
    target: document.createElement("div"),
    positions: [() => null, () => ({ top: 3, left: 3, name: "" })],
};

// utils/toArray ==============================================================
let myArrayOfOneNumber: [number] = toArray(5);
myArrayOfOneNumber = toArray([5]);
const myArrayOfThreeNumbers: number[] = toArray([1, 2, 3]);
