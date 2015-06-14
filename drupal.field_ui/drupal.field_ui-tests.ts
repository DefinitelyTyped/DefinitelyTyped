/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.field_ui.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic,
    drupalSettings: drupal.DrupalSettings
) {

    'use strict';

    drupalSettings.existingFieldLabels['my_field'] = 'My Label';

}(Drupal, drupalSettings));
