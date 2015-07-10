/// <reference path="drupal.core.d.ts"/>
/// <reference path="drupal.core-debounce.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic
) {

    'use strict';

    var callback = function (...args: any[]): any {};

    var result: any = Drupal.debounce(
        callback,
        42,
        true
    );

}(Drupal));
