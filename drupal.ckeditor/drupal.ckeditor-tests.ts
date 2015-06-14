/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.ckeditor.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic
) {

    'use strict';

    var behavior: drupal.Core.Behavior;

    behavior = Drupal.behaviors.ckeditorAdmin;
    behavior = Drupal.behaviors.ckeditorAdminButtonPluginSettings;
    behavior = Drupal.behaviors.ckeditorDrupalImageSettingsSummary;
    behavior = Drupal.behaviors.ckeditorStylesComboSettings;
    behavior = Drupal.behaviors.ckeditorStylesComboSettingsSummary;

}(Drupal));
