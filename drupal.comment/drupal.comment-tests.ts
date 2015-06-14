/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.comment.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic
) {

    'use strict';

    var behavior: drupal.Core.Behavior;

    behavior = Drupal.behaviors.commentByViewer;
    behavior = Drupal.behaviors.commentFieldsetSummaries;
    behavior = Drupal.behaviors.commentNewIndicator;
    behavior = Drupal.behaviors.nodeNewCommentsLink;

}(Drupal));
