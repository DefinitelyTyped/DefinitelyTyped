import * as angular from 'angular';

function JQLite() {
    function indexSignature() {
        angular.element('p')[0]; // $ExpectType HTMLElement
    }
}
