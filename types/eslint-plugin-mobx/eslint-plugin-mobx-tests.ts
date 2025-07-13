import pluginMobx = require("eslint-plugin-mobx");
pluginMobx.configs.recommended; // $ExpectType Config<RulesRecord>
pluginMobx.flatConfigs.recommended; // $ExpectType Config<RulesRecord>
