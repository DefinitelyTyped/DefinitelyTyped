var app = angular.module('testApp', ['ngProgressLite']);

app.config(
    ['ngProgressLiteProvider',
        (ngProgressLiteProvider: ng.progressLite.INgProgressLiteProvider) => {
            ngProgressLiteProvider.settings.ease = 'ease';
            ngProgressLiteProvider.settings.minimum = 0.08;
            ngProgressLiteProvider.settings.speed = 300;
            ngProgressLiteProvider.settings.trickleRate = 0.02;
            ngProgressLiteProvider.settings.trickleSpeed = 500;
            ngProgressLiteProvider.settings.template = '<div class="ngProgressLite"><div class="ngProgressLiteBar"><div class="ngProgressLiteBarShadow"></div></div></div>';
        }
    ]);

app.controller('testCtrl', ($scope: ng.IScope, ngProgressLite : ng.progressLite.INgProgressLite) => {

    ngProgressLite.set(0.4);

    ngProgressLite.get();

    ngProgressLite.inc();
    ngProgressLite.inc(0.1);

    ngProgressLite.start();

    ngProgressLite.done();
});