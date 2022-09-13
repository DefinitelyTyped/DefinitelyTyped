import * as angular from 'angular';
import * as angularTooltips from 'angular-tooltips';

angular
    .module('test.angular-tooltips', [
        angularTooltips
    ])
    .config((tooltipsConfProvider: angularTooltips.TooltipsConfProvider) => {
        tooltipsConfProvider.configure({
            side: 'left',
            showTrigger: 'click',
            hideTrigger: 'click',
            class: 'class',
            smart: true,
            closeButton: false,
            size: 'small',
            speed: 'slow',
            tooltipTemplateUrlCache: true,
            show: false
        });
    });
