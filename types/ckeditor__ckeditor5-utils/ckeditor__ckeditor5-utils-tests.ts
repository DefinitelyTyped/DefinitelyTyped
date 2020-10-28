import * as utils from "@ckeditor/ckeditor5-utils";

declare const document: Document;
declare const locale: utils.Locale;
declare let bool: boolean;
declare let changes: utils.Change[];
declare let emitter: utils.Emitter;
declare let htmlElement: HTMLElement;
declare let map: Map<string, number>;
declare let num: number;
declare let rect: utils.Rect;
declare let rectOrNull: utils.Rect | null;
declare let str: string;

// utils/dom

utils.createElement(document, "p");
utils.createElement(document, "p", {class: "foo"});
utils.createElement(document, "p", null, "foo");
utils.createElement(document, "p", null, ["foo", utils.createElement(document, "img")]);

// TODO? utils/dom/emittermixin

utils.getAncestors(htmlElement);

utils.getBorderWidths(htmlElement);

utils.getCommonAncestor(htmlElement, htmlElement);

str = utils.getDataFromElement(htmlElement);

let strNull: HTMLElement | null = utils.getPositionedAncestor();
strNull = utils.getPositionedAncestor(htmlElement);

num = utils.indexOf(htmlElement);

utils.insertAt(htmlElement, 2, htmlElement);

bool = utils.isNode(htmlElement);
bool = utils.isNode(new Date());

bool = utils.isRange(new Range());
bool = utils.isRange(new Date());

bool = utils.isText(new Text("foo"));
bool = utils.isText(new Date());

bool = utils.isWindow(window);
bool = utils.isWindow(new Date());

let position: utils.Position;

position = utils.getOptimalPosition({
    element: htmlElement,
    target: () => htmlElement,
    positions: [(targetRect, elementRect) => ({
        top: targetRect.top,
        left: targetRect.left + elementRect.width,
        name: "right"
    })]
});

position = utils.getOptimalPosition({
    element: htmlElement,
    target: htmlElement,
    positions: [
        (targetRect) => ({
            top: targetRect.bottom,
            left: targetRect.left,
            name: "mySouthEastPosition"
        }),
        (targetRect, elementRect) => ({
            top: targetRect.top - elementRect.height,
            left: targetRect.left,
            name: "myNorthEastPosition"
        })
    ],
    limiter: document.body,
    fitInViewport: true,
});

rect = new utils.Rect(document.body);
rect = new utils.Rect(document.getSelection()!.getRangeAt(0));
rect = new utils.Rect(window);
rect = new utils.Rect({top: 0, right: 10, bottom: 10, left: 0, width: 10, height: 10});
rect = new utils.Rect(rect);
rect = new utils.Rect(document.body.getClientRects().item(0)!);

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

utils.remove(htmlElement);

utils.scrollAncestorsToShowTarget(new Range());
utils.scrollAncestorsToShowTarget(htmlElement);

utils.scrollViewportToShowTarget({target: new Range()});
utils.scrollViewportToShowTarget({target: htmlElement});
utils.scrollViewportToShowTarget({target: new Range(), viewportOffset: 30});
utils.scrollViewportToShowTarget({target: htmlElement, viewportOffset: 30});

utils.setDataInElement(htmlElement, "<b>foo</b>");

str = utils.toUnit("rem")(10);

// utils/ckeditorerror ========================================================

const regularError = new Error("foo");
let ckeditorError: utils.CKEditorError;

const data = {bar: 1};
ckeditorError = new utils.CKEditorError("foo");
ckeditorError = new utils.CKEditorError("foo", data);

utils.CKEditorError.isCKEditorError(ckeditorError);
utils.CKEditorError.isCKEditorError(regularError);

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

const item1 = {id: "id1"};
const item2 = {id: "id2"};
const itemStr1 = {id: "foo", name: "yy"};
const itemStr2 = {id: "foo", name: "xx"};

const coll = new utils.Collection<Props>();
const collStr = new utils.Collection<PropsStr>({idProperty: "name"});

coll.add(item1);
coll.add(item2);
collStr.add(itemStr1);
collStr.add(itemStr2);

coll.add(item1, 0);
coll.add(item1).add(item2);

coll.clear();

items = collStr.filter((item) => item.name === "yy");
items = collStr.filter((_, idx) => idx > 0);
items = collStr.filter(function(this: Foo, _, idx) {return this.foo > 0 && idx === 0; }, foo);

itemOrUndef = collStr.find((item) => item.name === "yy");
itemOrUndef = collStr.find((_, idx) => idx === 3);
itemOrUndef = collStr.find(function(this: Foo, _, idx) {return this.foo > 0 && idx === 0; }, foo);

itemOrNull = coll.get(0);
itemOrNull = coll.get("id1");

num = coll.getIndex("id1");
num = coll.getIndex(item1);

coll.remove(0);
coll.remove("id1");
coll.remove(item1);

const strings: string[] = collStr.map((item) => item.name);
const nums: number[] = collStr.map((_, idx) => idx);
const bools: boolean[] = collStr.map(function(this: Foo, _, idx) {return this.foo === idx; }, foo);

// collection#bindTo

interface LabelObj {
    label: string;
}

interface LabelValueObj {
    label: {value: string};
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

const source1 = new utils.Collection<LabelObj>({idProperty: "label"});
const target1 = new utils.Collection<FactoryClass>();

target1.bindTo(source1).as(FactoryClass);

source1.add({label: "foo"});
source1.add({label: "bar"});

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

const source2 = new utils.Collection<LabelObj>({idProperty: "label"});
const target2 = new utils.Collection<FooClass | BarClass>();

target2.bindTo(source2).using((item) => {
    if (item.label === "foo") {
        return new FooClass(item);
    } else {
        return new BarClass(item);
    }
});

source2.add({label: "foo"});
source2.add({label: "bar"});

console.log(target2.length);
console.log(target2.get(0)! instanceof FooClass);
console.log(target2.get(1)! instanceof BarClass);

const source3 = new utils.Collection<LabelValueObj>({idProperty: "label"});
const target3 = new utils.Collection<LabelValueObj["label"]>();

target3.bindTo(source2).using("label");

source3.add({label: {value: "foo"}});
source3.add({label: {value: "bar"}});

console.log(target3.length);
console.log(target3.get(0)!.value);
console.log(target3.get(1)!.value);

const source4 = new utils.Collection<HiddenObj>();
const target4 = new utils.Collection<HiddenObj | null>();

target4.bindTo(source4).using(item => {
    if (item.hidden) {
        return null;
    }

    return item;
});

source4.add({hidden: true});
source4.add({hidden: false});

// utils/comparearrays ========================================================

utils.compareArrays([0, 2], [0, 2, 1]);
utils.compareArrays(["abc", 0 ], ["abc", 0, 3]);

// utils/config ===============================================================

let strOrUndef: string | undefined;
let config: utils.Config;
const defaultConfig = {
    foo: 1, bar: 2,
};

config = new utils.Config();
config = new utils.Config({foo: 10});
config = new utils.Config({}, defaultConfig);
config = new utils.Config({foo: 10}, defaultConfig);

config.define({
    resize: {
        minHeight: 400,
        hidden: true
    }
});

config.define("resize", {minHeight: 400, hidden: true});
config.define("language", "en");
config.define("resize.minHeight", 400);

str = config.get("language");
num = config.get("resize.minHeight");

config.define("language", undefined);
strOrUndef = config.get("language");

// utils/count ================================================================

num = utils.count([1, 2, 3, 4, 5]);

// utils/diff =================================================================

changes = utils.diff("aba", "acca");
changes = utils.diff(Array.from("aba"), Array.from("acca"));

// utils/difftochanges ========================================================

const input = Array.from("abc");
const output = Array.from("xaby");
const allChanges = utils.diffToChanges(utils.diff(input, output), output);
allChanges.forEach(change => {
    if (change.type === "insert") {
        input.splice(change.index, 0, ...change.values);
    } else if (change.type === "delete") {
        input.splice(change.index, change.howMany);
    }
});

// utils/elementreplacer ======================================================

const replacer = new utils.ElementReplacer();

replacer.replace(htmlElement, htmlElement);
replacer.replace(htmlElement);

replacer.restore();

// utils/emittermixin

emitter = utils.EmitterMixin;
emitter = Object.create(utils.EmitterMixin);

emitter.delegate("foo") ;
emitter.delegate("foo", "bar");
emitter.delegate("foo").to(emitter);
emitter.delegate("foo").to(emitter, "bar");
emitter.delegate("foo").to(emitter, name => name + "-delegated");

emitter.fire("foo");
emitter.fire("foo", 1, "b", true);
emitter.fire("getSelectedContent", (evt: utils.EventInfo<any>) => {
    evt.return = new DocumentFragment();
    evt.stop();
});

emitter.listenTo(emitter, "foo", () => {});
emitter.listenTo(emitter, "foo", () => {}, {priority: 10});
emitter.listenTo(emitter, "foo", () => {}, {priority: "highest"});

emitter.off("foo");
emitter.off("foo", () => {});

emitter.on("foo", () => {});
emitter.on("foo", () => {}, {priority: 10});
emitter.on("foo", () => {}, {priority: "normal"});

emitter.once("foo", () => {});
emitter.once("foo", () => {}, {priority: 10});
emitter.once("foo", () => {}, {priority: "lowest"});

emitter.stopDelegating();
emitter.stopDelegating("foo");
emitter.stopDelegating("foo", emitter);

emitter.stopListening();
emitter.stopListening(emitter);
emitter.stopListening(emitter, "foo");
emitter.stopListening(emitter, "foo", () => {});

// utils/env ==================================================================

bool = utils.env.isEdge;
bool = utils.env.isMac;

// utils/eventinfo ============================================================

const event = new utils.EventInfo({a: 1}, "test");
num = event.source.a;
str = event.name;

event.path[0];

event.stop();
event.off();

bool = event.stop.called;
bool = event.off.called;

// utils/fastdiff =============================================================

utils.fastDiff(str, "2ab").forEach(change => {
    if (change.type === "insert") {
        str = str.substring(0, change.index) + change.values.join("") + str.substring(change.index);
    } else if (change.type === "delete") {
        str = str.substring(0, change.index) + str.substring(change.index + change.howMany);
    }
});

// utils/first ================================================================

const collection = [ 11, 22 ];
const iterator = collection[Symbol.iterator]();

utils.first(iterator);

// utils/focustracker =========================================================

const focusTracker = new utils.FocusTracker();
htmlElement = focusTracker.focusedElement;
bool = focusTracker.isFocused;
focusTracker.add(htmlElement);
focusTracker.remove(htmlElement);

// utils/isiterable ===========================================================

bool = utils.isIterable(str);
bool = utils.isIterable([1, 2, 3]);

// utils/keyboard =============================================================

num = utils.keyCodes.a;
num = utils.keyCodes["a"];

num = utils.getCode("0");
num = utils.getCode({keyCode: 48}) ;
num = utils.getCode({keyCode: 48, altKey: true, ctrlKey: true, shiftKey: true});

str = utils.getEnvKeystrokeText("alt+A");

num = utils.parseKeystroke("Ctrl+A");
num = utils.parseKeystroke(["ctrl", "a"]);
num = utils.parseKeystroke(["shift", 33]);

// utils/keystrokehandler =====================================================

declare const keystroke: utils.KeystrokeInfo;
const keystrokes = new utils.KeystrokeHandler();

const spy = utils.spy();
keystrokes.set("Ctrl+A", spy);
keystrokes.set(["Ctrl", "A"], spy);
keystrokes.set(["Ctrl", "A"], spy, {priority: "high"});
keystrokes.set(["Ctrl", 33], spy, {priority: 10});

const emitterMixxin = Object.create(utils.EmitterMixin) as utils.Emitter;
keystrokes.listenTo(emitterMixxin);

bool = keystrokes.press(keystroke);

keystrokes.destroy();

// utils/locale ===============================================================

locale.t("Label");
locale.t('Created file "%0" in %1ms.', ["fileName", "100"]);

// utils/log ==================================================================

utils.log.warn("message");
utils.log.warn('plugin-load: It was not possible to load the "{$pluginName}" plugin in module "{$moduleName}', {
    pluginName: "foo",
    moduleName: "bar"
});

utils.log.error("message");
utils.log.error('plugin-load: It was not possible to load the "{$pluginName}" plugin in module "{$moduleName}', {
    pluginName: "foo",
    moduleName: "bar"
});

// utils/mapsequal ============================================================

utils.mapsEqual(map, map);

// utils/mix ==================================================================

interface SomeMixin {
    a: () => string;
}

class Editor implements SomeMixin {
    a: () => string;
    b() { return 3; }
}

const SomeMixin = {
    a() { return "a"; }
};

const SomeMixinNum = {
    a() { return 3; }
};

utils.mix(Editor, SomeMixin);
// $ExpectError
utils.mix(Editor, SomeMixinNum);

const editor = new Editor();
str = editor.a();
num = editor.b();

// utils/nth ==================================================================

function* getGenerator() {
    yield 11;
    yield 22;
    yield 33;
}

utils.nth(2, getGenerator());

// utils/objecttomap ==========================================================

const objMap: Map<string, number> = utils.objectToMap({foo: 1, bar: 2});
num = objMap.get("foo")!;

// utils/observablemixin ======================================================

const observable: utils.Observable = utils.ObservableMixin;

const vehicle = Object.create(utils.ObservableMixin) as utils.Observable;
const car = Object.create(utils.ObservableMixin) as utils.Observable;

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

num = utils.priorities.get(2);
num = utils.priorities.get("normal");

// utils/spy

const fn1 = utils.spy();
fn1();
bool = fn1.called;

// utils/tomap

map = utils.toMap({foo: 1, bar: 2});
map = utils.toMap([["foo", 1], ["bar", 2]]);
map = utils.toMap(map);

// utils/translation-service ==================================================

utils.add("pl", {
    OK: "OK",
    "Cancel [context: reject]": "Anuluj"
});

utils.translate("pl", "Cancel [context: reject]");

// utils/uid ==================================================================

str = utils.uid();

// utils/unicode ==============================================================

bool = utils.isCombiningMark("a");
bool = utils.isHighSurrogateHalf("a");
bool = utils.isInsideCombinedSymbol(str, 2);
bool = utils.isInsideSurrogatePair(str, 2);
bool = utils.isLowSurrogateHalf(String.fromCharCode(57166));

// utils/version ==============================================================
