import commitlintLoad, { Level } from '@commitlint/load';

// $ExpectType Promise<CommitlintConfig>
commitlintLoad();

commitlintLoad().then(config => {
    config.rules["body-leading-blank"] = [Level.Warn, 'always', undefined];
    config.rules["body-max-length"] = [1, 'never', 72];
    config.rules["header-case"] = [Level.Disable, 'always', 'camel-case'];
    config.rules["type-enum"] = [Level.Error, 'always', ['foo', 'bar', 'baz']];
    config.extends = ['foo'];
});
