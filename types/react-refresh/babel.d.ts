declare namespace ReactFreshBabelPlugin {
    interface Options {
        skipEnvCheck?: boolean | undefined;
        emitFullSignatures?: boolean | undefined;
        refreshReg?: string | undefined;
        refreshSig?: string | undefined;
    }
}

declare function ReactFreshBabelPlugin(
    babel: typeof import('@babel/core'),
    opts?: ReactFreshBabelPlugin.Options,
): babel.PluginObj;

export = ReactFreshBabelPlugin;
