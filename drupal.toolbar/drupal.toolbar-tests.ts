/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.toolbar.d.ts"/>

(function (
    Drupal: drupal.IDrupalStatic,
    drupalSettings: drupal.IDrupalSettings
) {

    'use strict';

    drupalSettings.toolbar.breakpoints['toolbar.narrow'] = 'My Media Query';
    drupalSettings.toolbar.strings['foo'] = Drupal.theme.toolbarOrientationToggle();


}(Drupal, drupalSettings));
