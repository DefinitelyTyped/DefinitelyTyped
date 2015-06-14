/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.content_translation.d.ts"/>

(function (
    drupalSettings: drupal.IDrupalSettings
) {

    'use strict';

    drupalSettings.contentTranslationDependentOptions.dependent_selectors['foo']['bar'] = 'okay';

    var behavior: drupal.Core.IBehavior;

    behavior = Drupal.behaviors.contentTranslation;
    behavior = Drupal.behaviors.contentTranslationDependentOptions;

}(drupalSettings));
