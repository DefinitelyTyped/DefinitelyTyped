import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';

angular.module('app', [uiBootstrap]);

// type defined in the angular namespace
declare const $uibModal: angular.ui.bootstrap.IModalService;
$uibModal.open({ templateUrl: 'template.hmtl' });
