/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.statistics.d.ts"/>

(function (
    drupalSettings: drupal.IDrupalSettings
) {

    'use strict';

    drupalSettings.statistics.url = 'https://example.com';
    drupalSettings.statistics.data = {
        nid: 42
    };

}(drupalSettings));
