/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.toolbar.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic,
    drupalSettings: drupal.DrupalSettings
) {

    'use strict';

    drupalSettings.toolbar.breakpoints['toolbar.narrow'] = 'My Media Query';
    drupalSettings.toolbar.strings['foo'] = Drupal.theme.toolbarOrientationToggle();


}(Drupal, drupalSettings));
