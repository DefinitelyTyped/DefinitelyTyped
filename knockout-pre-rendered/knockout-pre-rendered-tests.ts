/// <reference path="knockout-pre-rendered.d.ts" />

function initBindingHandler() {
    ko.bindingHandlers.init = {
        init: (element: any, valueAccessor: () => any, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext) => {},
        update: (element: any, valueAccessor: () => any, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext) => {}
    };
}

function foreachInitBindingHandler() {
    ko.bindingHandlers.foreachInit = {
        init: (element: any, valueAccessor: () => any, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext) => { },
        update: (element: any, valueAccessor: () => any, allBindingsAccessor: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext) => { }
    };
}