import * as Rox from 'rox-react-native';

const flags = {
    superFlag: new Rox.Flag(false)
};

const variants = {
    superVariant: new Rox.Variant('value1', ['value1', 'value2'])
};

const configurations = {
    superConfiguration: new Rox.Configuration('☀️')
};

// The register function should be called before the call to Rox.setup()
Rox.register('default', { ...configurations, ...variants, ...flags });
Rox.setup('ROLLOUT_IO_KEY', {
    impressionHandler
}).then(linkTargetGroupAttributes);

function linkTargetGroupAttributes() {
    Rox.setCustomStringProperty('id', 'someId');
    Rox.setCustomBooleanProperty('thisIsATest', true);
    Rox.setCustomNumberProperty('aNumberProperty', 17);
}

function impressionHandler(
    reporting: Rox.RoxReporting,
    experiment?: Rox.RoxExperiment
) {
    // If there is no experiment it means that the user has not been enrolled
    // or that the reporting is not used yet
}
