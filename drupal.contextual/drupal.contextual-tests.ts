/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.contextual.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic,
    drupalSettings: drupal.DrupalSettings
) {

    'use strict';

    var texts: Array<string>;

    texts = [
        Drupal.theme.contextualTrigger(),
        drupalSettings.contextual.strings.open,
        drupalSettings.contextual.strings.close
    ];

    var behavior: drupal.Core.Behavior;

    behavior = Drupal.behaviors.contextual;
    behavior = Drupal.behaviors.contextualToolbar;

    // @todo More tests.

}(Drupal, drupalSettings));
