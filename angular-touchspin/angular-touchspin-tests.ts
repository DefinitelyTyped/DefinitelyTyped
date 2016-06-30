/// <reference path='../angularjs/angular.d.ts' />
/// <reference path='angular-touchspin.d.ts' />

angular
    .module('touchspin-tests', ['lm.touchspin'])
    .config(function(touchspinConfigProvider: angularTouchSpin.ITouchSpinConfigProvider) {
        touchspinConfigProvider.defaults(<angularTouchSpin.ITouchSpinOptions>{
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
