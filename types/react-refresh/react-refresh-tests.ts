import ReactRefreshRuntime from 'react-refresh/runtime';
import ReactRefreshBabelPlugin from 'react-refresh/babel';

import * as Babel from '@babel/core';

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

ReactRefreshBabelPlugin(Babel);
ReactRefreshBabelPlugin(Babel, {});
ReactRefreshBabelPlugin(Babel, { emitFullSignatures: true });
ReactRefreshBabelPlugin(Babel, { refreshReg: STRING });
ReactRefreshBabelPlugin(Babel, { refreshSig: STRING });
ReactRefreshBabelPlugin(Babel, { emitFullSignatures: true });
ReactRefreshBabelPlugin(Babel, {
    emitFullSignatures: true,
    refreshReg: STRING,
    refreshSig: STRING,
    skipEnvCheck: true,
});
