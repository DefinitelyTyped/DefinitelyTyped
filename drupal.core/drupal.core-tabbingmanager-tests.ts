/// <reference path="drupal.core.d.ts"/>
/// <reference path="drupal.core-tabbingmanager.d.ts"/>

(function (
    $: JQueryStatic,
    Drupal: drupal.IDrupalStatic
) {

    'use strict';

    var $myElements = [$('.tabs')];
    var myTabbingContext: drupal.Core.ITabbingContext
        = Drupal.tabbingManager.constrain($myElements);

    var myTabbingManager = new Drupal.tabbingManager();
    Drupal.tabbingManager.stack.push(myTabbingManager);
    myTabbingManager.release();
    myTabbingManager.activate(myTabbingContext);
    myTabbingManager.deactivate(myTabbingContext);
    myTabbingManager.recordTabindex($myElements[0], 42);
    myTabbingManager.restoreTabindex($myElements[0], 42);

    myTabbingContext.level = 42;
    myTabbingContext.released = myTabbingContext.active;
    myTabbingContext.$tabbableElements = myTabbingContext.$disabledElements;
    myTabbingContext.activate();
    myTabbingContext.deactivate();
    myTabbingContext.release();

}(jQuery, Drupal));
