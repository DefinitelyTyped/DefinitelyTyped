/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.field_ui.d.ts"/>

(function (
    Drupal: drupal.IDrupalStatic,
    drupalSettings: drupal.IDrupalSettings
) {

    'use strict';

    drupalSettings.existingFieldLabels['my_field'] = 'My Label';

}(Drupal, drupalSettings));
