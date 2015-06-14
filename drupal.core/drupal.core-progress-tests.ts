/// <reference path="drupal.core.d.ts"/>
/// <reference path="drupal.core-progress.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic
) {

    'use strict';

    var myThemedProgressBar: string = Drupal.theme.progressBar('foo');

    var updateCallback = function (
        percentage: number,
        message: string, progressBar: drupal.Core.ProgressBar
    ): any {};

    var errorCallback = function (): any {};

    var myProgressBar: drupal.Core.ProgressBar;
    myProgressBar = new Drupal.ProgressBar(
        'foo',
        updateCallback,
        'POST',
        errorCallback
    );

    myProgressBar.setProgress(42, 'Foo', 'foo');
    myProgressBar.startMonitoring('Foo', 42);
    myProgressBar.stopMonitoring();
    myProgressBar.sendPing();
    myProgressBar.displayError('Foo');

}(Drupal));
