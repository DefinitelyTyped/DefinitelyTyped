import * as angular from 'angular';
import * as ng from 'angular';
import oc = require('oclazyload');

angular.module('app', ['oc.lazyLoad']).config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider: oc.ILazyLoadProvider) {
    $ocLazyLoadProvider.config({
        debug: true,
        events: true,
        modules: [{
            name: 'TestModule',
            files: ['js/TestModule.js']
        }]
    })
}]);

angular.module('app').controller('FooCtrl', ['$ocLazyLoad', function ($ocLazyLoad: oc.ILazyLoad) {
    $ocLazyLoad.load('testModule.js');

    $ocLazyLoad.load(['testModule.js', 'testModuleCtrl.js', 'testModuleService.js']);

    $ocLazyLoad.load([
        'testModule.js',
        {
            type: 'css',
            path: 'testModuleCtrl'
        },
        {
            type: 'html',
            path: 'testModuleCtrl.html'
        },
        {
            type: 'js',
            path: 'testModuleCtrl'
        },
        'js!testModuleService',
        'less!testModuleLessFile'
    ]);

    $ocLazyLoad.load([
        {
            files: [
                'testModule.js',
                'bower_components/bootstrap/dist/js/bootstrap.js'
            ],
            cache: false,
            // kjdf: false
        },
        {
            files: ['anotherModule.js'],
            cache: true
        }
    ]);

    $ocLazyLoad.load(
        [
            'testModule.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'anotherModule.js'
        ],
        {
            cache: false
        });

    $ocLazyLoad.load(
        [
            'partials/template1.html',
            'partials/template2.html'
        ],
        {
            cache: false,
            reconfig: true,
            rerun: true,
            serie: true,
            insertBefore: '#load_css_before',
            timeout: 5000
        });

    $ocLazyLoad.setModuleConfig({
        files: [
            'testModule.js'
        ],
        cache: true
    });

    var getConfig: oc.IModuleConfig = $ocLazyLoad.getModuleConfig('testModule');

    var getModules: string[] = $ocLazyLoad.getModules();

    var isLoaded: boolean = $ocLazyLoad.isLoaded([
        'testModule1.js',
        'testModule2.js'
    ]);

    var promise: ng.IPromise<any> = $ocLazyLoad.inject('testModule');

    $ocLazyLoad.toggleWatch(true);
}]);
