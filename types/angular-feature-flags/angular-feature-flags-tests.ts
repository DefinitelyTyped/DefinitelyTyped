import * as angular from "angular";

let myApp = angular.module('myApp', ['feature-flags']);

const flagsData: Array<angular.featureflags.FlagData> = [
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

myApp.config(function (featureFlagsProvider: angular.featureflags.FeatureFlagsProvider) {
    featureFlagsProvider.setInitialFlags(flagsData);
});

myApp.run(function ($q: angular.IQService, $http: angular.IHttpService, featureFlags: angular.featureflags.FeatureFlagsService) {
    let deferred = $q.defer();
    deferred.resolve(flagsData);

    featureFlags.set(deferred.promise);

    featureFlags.set($http.get('/data/flags.json'));
});