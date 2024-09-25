import * as babel from "@babel/core";
import * as ReactRefreshRuntime from "react-refresh/runtime";
import ReactRefreshBabelPlugin = require("react-refresh/babel");

const STRING = "example string";
const noop = () => {};

ReactRefreshRuntime.collectCustomHooksForSignature(STRING);
ReactRefreshRuntime.collectCustomHooksForSignature(noop);
const _s = ReactRefreshRuntime.createSignatureFunctionForTransform();
_s();
_s(noop, STRING, true, () => [noop]);
_s(noop, STRING, false);
_s(noop, STRING);
ReactRefreshRuntime.findAffectedHostInstances([]);
ReactRefreshRuntime.findAffectedHostInstances([{ current: noop }]);
// @ts-expect-error
ReactRefreshRuntime.getFamilyByID(1);
ReactRefreshRuntime.getFamilyByID(STRING);
ReactRefreshRuntime.getFamilyByType(STRING);
ReactRefreshRuntime.getFamilyByType(noop);
// $ExpectType boolean
const hasUnrecoverableErrors = ReactRefreshRuntime.hasUnrecoverableErrors();
ReactRefreshRuntime.injectIntoGlobalHook(window);
// @ts-expect-error
ReactRefreshRuntime.injectIntoGlobalHook(STRING);
ReactRefreshRuntime.performReactRefresh();
ReactRefreshRuntime.register("unknown type", STRING);
ReactRefreshRuntime.register(noop, STRING);
ReactRefreshRuntime.register({}, STRING);
ReactRefreshRuntime.setSignature(noop, STRING, true, () => [noop]);
ReactRefreshRuntime.setSignature(noop, STRING, false);
ReactRefreshRuntime.setSignature(noop, STRING);

babel.transform(STRING, { plugins: [ReactRefreshBabelPlugin] });
