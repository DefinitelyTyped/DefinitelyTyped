import * as ng from 'angular';

const myApp = ng.module('myApp', ['feature-flags']);

const flagsData: Array<ng.featureflags.FlagData> = [
    {
        key: '1',
        active: true,
        name: 'flag1',
        description: 'This is the first flag'
    },
    {
        key: '2',
        active: false,
        name: 'flag2',
        description: 'This is the second flag'
    }
];

myApp.config(function(featureFlagsProvider: ng.featureflags.FeatureFlagsProvider) {
    featureFlagsProvider.setInitialFlags(flagsData);
});

myApp.run(function(
    $q: ng.IQService,
    $http: ng.IHttpService,
    featureFlags: ng.featureflags.FeatureFlagsService
) {
    featureFlags.set($q.resolve(flagsData));
    featureFlags.set($http.get('/data/flags.json'));
    featureFlags.set($http.get<Array<ng.featureflags.FlagData>>('/data/flags.json'));
});
