/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="../drupal.core/drupal.core-ajax.d.ts"/>
/// <reference path="drupal.editor.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic
) {

    'use strict';

    var behavior: drupal.Core.Behavior;

    behavior = Drupal.behaviors.editor;
    behavior = Drupal.behaviors.initializeFilterConfiguration;

}(Drupal));
