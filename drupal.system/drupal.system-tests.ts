/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.system.d.ts"/>

(function (
    drupalSettings: drupal.IDrupalSettings
) {

    'use strict';

    drupalSettings.dateFormats['medium'] = 'Y-m-d H:i:s';

}(drupalSettings));
