/// <reference types="jquery" />
/// <reference types="knockout" />

interface KnockoutUtils {
    uniqueId(prefix: string): string;
    unwrapProperties(wrappedProperies: any): any;
}

interface KnockoutTemplateSources {
    stringTemplate: {
        prototype: KnockstrapStringTemplate;
        new(template: string): KnockstrapStringTemplate;
    };
}

interface KnockstrapStringTemplate extends KnockoutTemplateSourcesDomElement {
    templateName: string;
}

interface KnockoutStatic {
    stringTemplateEngine: {
        prototype: KnockstrapStringTemplateEngine;
        new(): KnockstrapStringTemplateEngine;
        instance: KnockstrapStringTemplateEngine;
    };
}

interface KnockstrapStringTemplateEngine extends KnockoutNativeTemplateEngine {
    allowTemplateRewriting: boolean;
    makeTemplateSource(template: string): KnockstrapStringTemplate;
    addTemplate(name: string, template: any): void;
    removeTemplate(name: string): void;
    isTemplateExist(name: string): boolean;
    getTemplate(name: string): any;
}

interface KnockoutBindingHandlers {
    alert: AlertKnockoutBindingHandler;
    carousel: CarouselKnockoutBindingHandler;
    checkbox: KnockoutBindingHandler;
    modal: ModalKnockoutBindingHandler;
    popover: PopoverKnockoutBindingHandler;
    progress: ProgressKnockoutBindingHandler;
    radio: KnockoutBindingHandler;
    toggle: KnockoutBindingHandler;
    tooltip: KnockoutBindingHandler;
}

interface KnockoutControlsDescendantBindings {
    controlsDescendantBindings: boolean;
}

interface AlertKnockoutBindingHandler extends KnockoutBindingHandler {
    init?(
        element: any,
        valueAccessor: () => any,
        allBindingsAccessor: KnockoutAllBindingsAccessor,
        viewModel: any,
        bindingContext: KnockoutBindingContext,
    ): KnockoutControlsDescendantBindings;
}

interface CarouselKnockoutBindingHandler extends KnockoutBindingHandler {
    init?(
        element: any,
        valueAccessor: () => any,
        allBindingsAccessor: KnockoutAllBindingsAccessor,
        viewModel: any,
        bindingContext: KnockoutBindingContext,
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
    id: KnockoutComputed<string>;
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

interface ModalKnockoutBindingHandler extends KnockoutBindingHandler {
    init?(
        element: any,
        valueAccessor: () => any,
        allBindingsAccessor: KnockoutAllBindingsAccessor,
        viewModel: any,
        bindingContext: KnockoutBindingContext,
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

interface PopoverKnockoutBindingHandler extends KnockoutBindingHandler {
    init?(
        element: any,
        valueAccessor: () => any,
        allBindingsAccessor: KnockoutAllBindingsAccessor,
        viewModel: any,
        bindingContext: KnockoutBindingContext,
    ): KnockoutControlsDescendantBindings;
}

interface ProgressKnockoutBindingHandler extends KnockoutBindingHandler {
    init?(
        element: any,
        valueAccessor: () => any,
        allBindingsAccessor: KnockoutAllBindingsAccessor,
        viewModel: any,
        bindingContext: KnockoutBindingContext,
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
