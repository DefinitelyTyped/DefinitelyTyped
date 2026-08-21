import * as ESTreeJSX from "estree-jsx";
import {
    elementType,
    eventHandlers,
    eventHandlersByType,
    getLiteralPropValue,
    getProp,
    getPropValue,
    hasAnyProp,
    hasEveryProp,
    hasProp,
    propName,
} from "jsx-ast-utils";

declare let attribute: ESTreeJSX.JSXAttribute;
declare let attributes: ESTreeJSX.JSXOpeningElement["attributes"];
declare let openingElement: ESTreeJSX.JSXOpeningElement | ESTreeJSX.JSXOpeningFragment;

eventHandlers.map((propName) => propName === "onAbort");
eventHandlersByType.animation.map((propName) => propName === "onAnimationEnd");
eventHandlersByType.clipboard.map((propName) => propName === "onCopy");
eventHandlersByType.composition.map((propName) => propName === "onCompositionEnd");
eventHandlersByType.focus.map((propName) => propName === "onBlur");
eventHandlersByType.form.map((propName) => propName === "onChange");
eventHandlersByType.image.map((propName) => propName === "onError");
eventHandlersByType.keyboard.map((propName) => propName === "onKeyDown");
eventHandlersByType.media.map((propName) => propName === "onAbort");
eventHandlersByType.mouse.map((propName) => propName === "onClick");
eventHandlersByType.selection.map((propName) => propName === "onSelect");
eventHandlersByType.touch.map((propName) => propName === "onTouchCancel");
eventHandlersByType.transition.map((propName) => propName === "onTransitionEnd");
eventHandlersByType.ui.map((propName) => propName === "onScroll");
eventHandlersByType.wheel.map((propName) => propName === "onWheel");

elementType(openingElement);
getLiteralPropValue(attribute);
getProp(attributes, "href", { ignoreCase: false });
getProp(attributes, "href");
getPropValue(attribute);
hasAnyProp(attributes, ["href"], { spreadStrict: false, ignoreCase: true });
hasAnyProp(attributes, ["href"]);
hasEveryProp(attributes, ["href"], { spreadStrict: false, ignoreCase: true });
hasEveryProp(attributes, ["href"]);
hasProp(attributes, "href", { spreadStrict: false, ignoreCase: true });
hasProp(attributes, "href");
propName(attribute);
