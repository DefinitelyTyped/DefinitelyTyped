/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.color.d.ts"/>

(function (
    Drupal: drupal.IDrupalStatic
) {

    'use strict';

    var gCollection: {
        [key: string]: drupal.Color.IGradient
    } = {};

    var colorCallbackSettings = {
        gradients: gCollection
    };

    colorCallbackSettings.gradients['foo'] = {
        colors: ['green'],
        vertical: true
    };

    Drupal.color.callback(
        new HTMLElement(),
        colorCallbackSettings,
        new HTMLFormElement(),
        'any',
        42,
        42
    );

}(Drupal));
