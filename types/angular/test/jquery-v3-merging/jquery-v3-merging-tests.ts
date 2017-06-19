/// <reference types="jquery" />

import * as angular from 'angular';

angular.element('div');
angular.element.noop();
angular.element('div').appendTo('p');

function event() {
    const $div = angular.element('div');

    const Event_v2 = angular.element.Event('click');
    $div.triggerHandler(Event_v2);

    const Event_v3 = jQuery.Event('click');
    $div.triggerHandler(Event_v3);
}
