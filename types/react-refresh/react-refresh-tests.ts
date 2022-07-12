import runtime from 'react-refresh/runtime';

const STRING = 'example string';
const noop = () => {};

runtime.collectCustomHooksForSignature(STRING);
runtime.collectCustomHooksForSignature(noop);
runtime.createSignatureFunctionForTransform();
runtime.findAffectedHostInstances([]);
runtime.findAffectedHostInstances([{ current: noop }]);
// $ExpectError
runtime.getFamilyByID(1);
runtime.getFamilyByID(STRING);
runtime.getFamilyByType(STRING);
runtime.getFamilyByType(noop);
// $ExpectType boolean
const hasUnrecoverableErrors = runtime.hasUnrecoverableErrors();
// $ExpectType number
const result = runtime._getMountedRootCount();
runtime.injectIntoGlobalHook(window);
// $ExpectError
runtime.injectIntoGlobalHook(STRING);
runtime.performReactRefresh();
runtime.register('unknown type', STRING);
runtime.register(noop, STRING);
runtime.register({}, STRING);
runtime.setSignature(noop, STRING, true, () => noop);
runtime.setSignature(noop, STRING, false);
runtime.setSignature(noop, STRING);
