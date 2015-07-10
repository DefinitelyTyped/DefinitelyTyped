/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.views.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic,
    drupalSettings: drupal.DrupalSettings
) {

    'use strict';

    drupalSettings.views.ajaxViews['my_view'] = {
        view_dom_id: 'string',
        view_name: 'string',
        view_display_id: 'string'
    };

    var href = 'http://example.com';
    var myString: string;

    var viewArgs = Drupal.Views.parseViewArgs(href, 'my-view');
    myString = viewArgs.view_args;
    myString = viewArgs.view_path;

    var queryString = Drupal.Views.parseQueryString('foo=bar');
    myString = queryString['foo'];

    myString = Drupal.Views.pathPortion(href);
    myString = Drupal.Views.getPath(href);

    var ajaxView = new Drupal.Views.ajaxView(
        drupalSettings.views.ajaxViews['foo']
    );

    myString = ajaxView.settings.view_display_id;
    myString = ajaxView.settings.view_dom_id;
    myString = ajaxView.settings.view_name;

    ajaxView.refreshViewAjax.instanceIndex = true;
    ajaxView.filterNestedViews();
    ajaxView.attachPagerAjax();
    ajaxView.attachPagerLinkAjax(myString, myString);

    var $element: JQuery;
    $element = ajaxView.$exposed_form;
    $element = ajaxView.$view;

}(Drupal, drupalSettings));
