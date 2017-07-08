import angularTouchSpin = require("angular-touchspin");
import * as angular from 'angular';

angular
    .module('touchspin-tests', ['nk.touchspin'])
    .config(function(touchspinConfigProvider: angular.touchspin.ITouchSpinConfigProvider) {
        touchspinConfigProvider.defaults(<angular.touchspin.ITouchSpinOptions>{
            min: 0,
            max: 0,
            step: 0,
            decimals: 0,
            stepInterval: 0,
            forceStepDivisibility: '', // none | floor | round | ceil
            stepIntervalDelay: 0,
            verticalButtons: true,
            verticalUpClass: '',
            verticalDownClass: '',
            initVal: 0,
            prefix: '',
            postfix: '',
            prefixExtraClass: '',
            postfixExtraClass: '',
            mousewheel: true,
            buttonDownClass: '',
            buttonUpClass: '',
            buttonDownTxt: '',
            buttonUpTxt: ''
        });
    });
