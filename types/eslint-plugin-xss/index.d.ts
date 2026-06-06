import type { Linter, Rule } from 'eslint';

export = eslint_plugin_xss;

declare const eslint_plugin_xss: {
  configs: {
    recommended: Linter.LegacyConfig;
  };
  rules: {
    'no-location-href-assign': Rule.RuleModule;
    'no-mixed-html': Rule.RuleModule;
  };
};