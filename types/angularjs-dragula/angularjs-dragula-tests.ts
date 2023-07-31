/// <reference types="angularjs-dragula" />

const app = angular.module('my-app', [angularDragula(angular)]);
app.controller('ExampleCtrl', [
    '$scope',
    'dragulaService',
    ($scope: angular.IScope, dragulaService: angular.dragula.DragulaService) => {
        dragulaService.options($scope, 'third-bag', {
            removeOnSpill: true,
            copy: true,
            moves: (el, container, handle) => {
                return handle?.classList.contains('handle') || false;
            },
        });
    },
]);
