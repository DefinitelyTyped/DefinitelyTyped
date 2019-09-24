import * as Rox from 'rox-browser';

const flags = {
  superFlag: new Rox.Flag(false, { freeze: Rox.RoxFlagFreezeLevel.None }),
  superFlag2: new Rox.Flag(),
};

const variants = {
  superVariant: new Rox.Variant('value1', ['value1', 'value2']),
};

const configurations = {
  superConfiguration: new Rox.Configuration('☀️'),
  superConfiguration2: new Rox.Configuration(true),
};

// The register function should be called before the call to Rox.setup()
Rox.register('default', { ...configurations, ...variants, ...flags });
Rox.setContext({ user: 'John Doe' });
Rox.setup('ROLLOUT_IO_KEY', {
  impressionHandler,
  configurationFetchedHandler,
}).then(linkTargetGroupAttributes);

Rox.showOverrides(Rox.RoxOverridesPosition.BottomLeft);

Rox.dynamicApi.isEnabled('system.repotAnalytics', false);
Rox.dynamicApi.value('ui.textColor', 'red');

Rox.flags[0].defaultValue;
Rox.flags[0].name;

configurations.superConfiguration.defaultValue;
configurations.superConfiguration.name;

variants.superVariant.defaultValue;
variants.superVariant.name;

Rox.unfreeze();
flags.superFlag.unfreeze();

function linkTargetGroupAttributes() {
  Rox.setCustomStringProperty('id', 'someId');
  Rox.setCustomBooleanProperty('thisIsATest', true);
  Rox.setCustomNumberProperty('aNumberProperty', 17);
  Rox.setDynamicCustomPropertyRule((propName: string, _context: unknown) => {
    return propName === 'myPropName';
  });
}

function impressionHandler(
  _reporting: Rox.RoxReporting,
  _experiment?: Rox.RoxExperiment,
) {
  // If there is no experiment it means that the user has not been enrolled
  // or that the reporting is not used yet
}

function configurationFetchedHandler(fetcherResult: Rox.RoxFetcherResult) {
  if (
    fetcherResult.hasChanges &&
    fetcherResult.fetcherStatus === Rox.RoxFetcherStatus.AppliedFromCache
  ) {
  }
}
