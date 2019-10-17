// Type definitions for Knockstrap
// Project: http://faulknercs.github.io/Knockstrap/
// Definitions by: Adam Pluciński <https://github.com/adaskothebeast>
//                 Michael Kriese <https://github.com/viceice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="jquery" />
/// <reference types="knockout" />

declare namespace ko.utils {
    function uniqueId(prefix: string): string;
    function unwrapProperties(wrappedProperies: any): any;
}

declare namespace ko.templateSources {
    const stringTemplate: {
        prototype: KnockstrapStringTemplate;
        new (template: string): KnockstrapStringTemplate;
    };
}

interface KnockstrapStringTemplate extends ko.TemplateSource {
    templateName: string;
}

declare namespace ko {
    const stringTemplateEngine: {
        prototype: KnockstrapStringTemplateEngine;
        new (): KnockstrapStringTemplateEngine;
        instance: KnockstrapStringTemplateEngine;
    };
}

interface KnockstrapStringTemplateEngine extends ko.templateEngine {
    allowTemplateRewriting: boolean;
    makeTemplateSource(template: string): KnockstrapStringTemplate;
    addTemplate(name: string, template: any): void;
    removeTemplate(name: string): void;
    isTemplateExist(name: string): boolean;
    getTemplate(name: string): any;
}

declare namespace ko {
    interface BindingHandlers {
        alert: AlertKnockoutBindingHandler;
        carousel: CarouselKnockoutBindingHandler;
        checkbox: BindingHandler;
        modal: ModalKnockoutBindingHandler;
        popover: PopoverKnockoutBindingHandler;
        progress: ProgressKnockoutBindingHandler;
        radio: BindingHandler;
        toggle: BindingHandler;
        tooltip: BindingHandler;
    }
}

interface KnockoutControlsDescendantBindings {
    controlsDescendantBindings: boolean;
}

interface AlertKnockoutBindingHandler extends ko.BindingHandler {
    init?(
        element: any,
        valueAccessor: () => any,
        allBindingsAccessor: ko.AllBindings,
        viewModel: any,
        bindingContext: ko.BindingContext,
    ): KnockoutControlsDescendantBindings;
}

interface CarouselKnockoutBindingHandler extends ko.BindingHandler {
    init?(
        element: any,
        valueAccessor: () => any,
        allBindingsAccessor: ko.AllBindings,
        viewModel: any,
        bindingContext: ko.BindingContext,
    ): KnockoutControlsDescendantBindings;
    defaults: KnockstrapCarouselDefaults;
}

interface KnockstrapCarouselDefaults {
    css: string;
    controlsTemplate: KnockstrapCarouselDefaultsControlsTemplate;
    indicatorsTemplate: KnockstrapCarouselDefaultsIndicatorsTemplate;
    itemTemplate: KnockstrapCarouselDefaultsItemTemplate;
}

interface KnockstrapDefaultsTemplateBase {
    name: string;
    templateEngine: KnockstrapStringTemplateEngine;
}

interface KnockstrapCarouselDefaultsControlsTemplate extends KnockstrapDefaultsTemplateBase {
    dataConverter(value: any): KnockstrapCarouselDefaultsIdDataConverted;
}

interface KnockstrapCarouselDefaultsIdDataConverted {
    id: ko.Computed<string>;
}

interface KnockstrapCarouselDefaultsIndicatorsTemplate extends KnockstrapDefaultsTemplateBase {
    dataConverter(value: any): KnockstrapCarouselDefaultsIdItemsDataConverted;
}

interface KnockstrapCarouselDefaultsIdItemsDataConverted extends KnockstrapCarouselDefaultsIdDataConverted {
    items: any;
}

interface KnockstrapCarouselDefaultsItemTemplate extends KnockstrapDefaultsTemplateBase {
    converter(value: any): any;
}

interface ModalKnockoutBindingHandler extends ko.BindingHandler {
    init?(
        element: any,
        valueAccessor: () => any,
        allBindingsAccessor: ko.AllBindings,
        viewModel: any,
        bindingContext: ko.BindingContext,
    ): KnockoutControlsDescendantBindings;
    defaults: KnockstrapModalDefaults;
}

interface KnockstrapModalDefaults {
    css: string;
    attributes: KnockstrapModalDefaultsAttributes;
    headerTemplate: KnockstrapDefaultsTemplateBase;
    bodyTemplate: KnockstrapDefaultsTemplateBase;
    footerTemplate: KnockstrapModalDefaultsFooterTemplate;
}

interface KnockstrapModalDefaultsAttributes {
    role: string;
}

interface KnockstrapModalDefaultsFooterTemplate extends KnockstrapDefaultsTemplateBase {
    data: KnockstrapModalDefaultsFooterData;
}

interface KnockstrapModalDefaultsFooterData {
    closeLabel: string;
    primaryLabel: string;
}

interface PopoverKnockoutBindingHandler extends ko.BindingHandler {
    init?(
        element: any,
        valueAccessor: () => any,
        allBindingsAccessor: ko.AllBindings,
        viewModel: any,
        bindingContext: ko.BindingContext,
    ): KnockoutControlsDescendantBindings;
}

interface ProgressKnockoutBindingHandler extends ko.BindingHandler {
    init?(
        element: any,
        valueAccessor: () => any,
        allBindingsAccessor: ko.AllBindings,
        viewModel: any,
        bindingContext: ko.BindingContext,
    ): KnockoutControlsDescendantBindings;
    defaults: KnockstrapProgressDefaults;
}

interface KnockstrapProgressDefaults {
    css: string;
    text: string;
    textHidden: boolean;
    striped: boolean;
    type: string;
    animated: boolean;
}
