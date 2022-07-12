import ReactRefreshRuntime from 'react-refresh/runtime';
import ReactRefreshBabelPlugin from 'react-refresh/babel';
import babel from '@babel/core';

const STRING = 'example string';
const noop = () => {};

ReactRefreshRuntime.collectCustomHooksForSignature(STRING);
ReactRefreshRuntime.collectCustomHooksForSignature(noop);
ReactRefreshRuntime.createSignatureFunctionForTransform();
ReactRefreshRuntime.findAffectedHostInstances([]);
ReactRefreshRuntime.findAffectedHostInstances([{ current: noop }]);
// $ExpectError
ReactRefreshRuntime.getFamilyByID(1);
ReactRefreshRuntime.getFamilyByID(STRING);
ReactRefreshRuntime.getFamilyByType(STRING);
ReactRefreshRuntime.getFamilyByType(noop);
// $ExpectType boolean
const hasUnrecoverableErrors = ReactRefreshRuntime.hasUnrecoverableErrors();
// $ExpectType number
const result = ReactRefreshRuntime._getMountedRootCount();
ReactRefreshRuntime.injectIntoGlobalHook(window);
// $ExpectError
ReactRefreshRuntime.injectIntoGlobalHook(STRING);
ReactRefreshRuntime.performReactRefresh();
ReactRefreshRuntime.register('unknown type', STRING);
ReactRefreshRuntime.register(noop, STRING);
ReactRefreshRuntime.register({}, STRING);
ReactRefreshRuntime.setSignature(noop, STRING, true, () => noop);
ReactRefreshRuntime.setSignature(noop, STRING, false);
ReactRefreshRuntime.setSignature(noop, STRING);

ReactRefreshBabelPlugin(babel);
ReactRefreshBabelPlugin(babel, {});
ReactRefreshBabelPlugin(babel, { emitFullSignatures: true });
ReactRefreshBabelPlugin(babel, { refreshReg: STRING });
ReactRefreshBabelPlugin(babel, { refreshSig: STRING });
ReactRefreshBabelPlugin(babel, { emitFullSignatures: true });
ReactRefreshBabelPlugin(babel, {
    emitFullSignatures: true,
    refreshReg: STRING,
    refreshSig: STRING,
    skipEnvCheck: true,
});
