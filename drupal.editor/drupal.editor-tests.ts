/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="../drupal.core/drupal.core-ajax.d.ts"/>
/// <reference path="drupal.editor.d.ts"/>

(function (
    Drupal: drupal.IDrupalStatic
) {

    'use strict';

    var behavior: drupal.Core.IBehavior;

    behavior = Drupal.behaviors.editor;
    behavior = Drupal.behaviors.initializeFilterConfiguration;

}(Drupal));
