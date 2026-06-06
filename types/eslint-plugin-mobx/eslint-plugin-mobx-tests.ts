import pluginMobx = require("eslint-plugin-mobx");
pluginMobx.configs.recommended; // $ExpectType Config<RulesRecord> || Config<RulesConfig>
pluginMobx.flatConfigs.recommended; // $ExpectType Config<RulesRecord> || Config<RulesConfig>
