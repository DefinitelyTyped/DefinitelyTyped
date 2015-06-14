/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.core-vertical_tabs.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic
) {

    'use strict';

    var $element = $('#foo');

    var behavior: drupal.Core.Behavior;
    behavior = Drupal.behaviors.verticalTabs;

    var verticalTabs: drupal.Core.VerticalTabThemeReturn;
    verticalTabs = Drupal.theme.verticalTab();
    verticalTabs.item = $element;
    verticalTabs.link = $element;
    verticalTabs.summary = $element;

    var vtSettings: drupal.Core.VerticalTabThemeSettings;
    vtSettings = {
        title: 'foo',
        details: $element
    };

    var verticalTab: drupal.Core.VerticalTab;
    verticalTab = new Drupal.verticalTab(vtSettings);

    verticalTab.title = 'foo';
    verticalTab.details = $element;
    verticalTab.focus();
    verticalTab.updateSummary();
    verticalTab
        .tabShow()
        .tabHide()
        .tabShow();

}(Drupal));
