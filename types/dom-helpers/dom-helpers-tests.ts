import * as helpers from "dom-helpers";
import * as ownerDocument from "dom-helpers/ownerDocument";
import * as ownerWindow from "dom-helpers/ownerWindow";
import * as activeElement from "dom-helpers/activeElement";

import * as classes from "dom-helpers/class";
import * as hasClass from "dom-helpers/class/hasClass";
import * as removeClass from "dom-helpers/class/removeClass";
import * as addClass from "dom-helpers/class/addClass";

import * as events from "dom-helpers/events";
import * as on from "dom-helpers/events/on";
import * as off from "dom-helpers/events/off";
import * as listen from "dom-helpers/events/listen";
import * as filter from "dom-helpers/events/filter";

import * as query from "dom-helpers/query";
import * as matches from "dom-helpers/query/matches";
import * as height from "dom-helpers/query/height";
import * as width from "dom-helpers/query/width";
import * as offset from "dom-helpers/query/offset";
import * as offsetParent from "dom-helpers/query/offsetParent";
import * as position from "dom-helpers/query/position";
import * as contains from "dom-helpers/query/contains";
import * as scrollParent from "dom-helpers/query/scrollParent";
import * as scrollTop from "dom-helpers/query/scrollTop";
import * as querySelectorAll from "dom-helpers/query/querySelectorAll";
import * as closest from "dom-helpers/query/closest";

import * as css from "dom-helpers/style";
import * as getComputedStyle from "dom-helpers/style/getComputedStyle";
import * as removeStyle from "dom-helpers/style/removeStyle";

import * as transition from "dom-helpers/transition";
import * as end from "dom-helpers/transition/end";
import * as properties from "dom-helpers/transition/properties";

const element = helpers.activeElement() || activeElement();
const win =
  helpers.ownerWindow(element || null || undefined) ||
  ownerWindow(element || null || undefined);
const doc = helpers.ownerDocument(element) || ownerDocument(element);
const id = helpers.requestAnimationFrame(() => {});
helpers.requestAnimationFrame.cancel(id);

const padding: string = css(element, "padding");
css(element, "padding", 10);
css(element, "padding", "12px");

events.on(element, "click", () => {});
on(element, "click", () => {});
events.off(element, "click", () => {}, true);
off(element, "click", () => {}, true);
events.listen(element, "click", () => {})();
listen(element, "click", () => {})();
events.on(element, "click", filter("div > a", () => {}));
on(element, "click", events.filter("div > a", () => {}));

classes.addClass(element, "class");
classes.removeClass(element, "class");
classes.hasClass(element, "class");

addClass(element, "class");
removeClass(element, "class");
hasClass(element, "class");

const match: boolean =
    query.matches(element, ".class") || matches(element, ".class");
const h: number = query.height(element) || height(element);
const w: number = query.width(element) || width(element);
const _offset: { top: number; left: number; bottom: number; right: number } =
    query.offset(element) || offset(element);
const _offsetParent: Element =
    query.offsetParent(element) || offsetParent(element);
const _position: { top: number; left: number; bottom: number; right: number } =
    query.position(element) || position(element);
const _contains: boolean =
    query.contains(element, element) || contains(element, element);
const _scrollParent: Element =
    query.scrollParent(element) || scrollParent(element);
const _scrollTop: number = query.scrollTop(element) || scrollTop(element);
query.scrollTop(element, 100);
scrollTop(element, 100);
const _querySelectorAll: HTMLElement[] =
    (query.querySelectorAll(element, "*") as HTMLElement[]) ||
    (querySelectorAll(element, "*") as HTMLElement[]);
const _closest: Element =
  query.closest(element, "*", element) || closest(element, "*", element);

const _getComputedStyle: string = getComputedStyle(element).getPropertyValue(
    "padding"
);
removeStyle(element, "padding");

transition.end(element, (event) => {
    const currentTarget: Element = event.currentTarget;
    const target: Element = event.target;
}, 100);

end(element, (event) => {
    const currentTarget: Element = event.currentTarget;
    const target: Element = event.target;
}, 100);

const transform: string = properties.transform;
