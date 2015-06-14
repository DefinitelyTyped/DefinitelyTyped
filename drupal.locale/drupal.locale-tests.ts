/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.locale.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic
) {

    'use strict';

    var uiTexts: Array<string>;

    uiTexts = [
        Drupal.theme.localeTranslateChangedMarker(),
        Drupal.theme.localeTranslateChangedWarning()
    ];

}(Drupal));
