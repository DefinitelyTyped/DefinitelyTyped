/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.core-vertical_tabs.d.ts"/>

(function (
    Drupal: drupal.IDrupalStatic
) {

    'use strict';

    var $element = $('#foo');

    var behavior: drupal.Core.IBehavior;
    behavior = Drupal.behaviors.verticalTabs;

    var verticalTabs: drupal.Core.IVerticalTabThemeReturn;
    verticalTabs = Drupal.theme.verticalTab();
    verticalTabs.item = $element;
    verticalTabs.link = $element;
    verticalTabs.summary = $element;

    var vtSettings: drupal.Core.IVerticalTabThemeSettings;
    vtSettings = {
        title: 'foo',
        details: $element
    };

    var verticalTab: drupal.Core.IVerticalTab;
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
