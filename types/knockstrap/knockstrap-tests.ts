// test unique id
var adaskoUnitqueId: string = ko.utils.uniqueId('adaskothebeast');

class Sample {
    public property1: KnockoutObservable<string>;

    constructor() {
        this.property1 = ko.observable('test');
    }
}

var sample = new Sample();

// test unwrap properties
var unwrappedProperties = ko.utils.unwrapProperties(sample);

var kts: KnockoutTemplateSources;
var stringTemplate = new kts.stringTemplate('string-template');
var stname = stringTemplate.templateName;

ko.stringTemplateEngine.instance.allowTemplateRewriting = true;

var templateSource = ko.stringTemplateEngine.instance.makeTemplateSource('template');
ko.stringTemplateEngine.instance.addTemplate('test', {});
ko.stringTemplateEngine.instance.removeTemplate('test');
ko.stringTemplateEngine.instance.isTemplateExist('test');


var alertbh = ko.bindingHandlers.alert;
var carouselbh = ko.bindingHandlers.carousel;
var checkboxbh = ko.bindingHandlers.checkbox;
var modalbh = ko.bindingHandlers.modal;
var popoverbh = ko.bindingHandlers.popover;
var progressbh = ko.bindingHandlers.progress;
var radiobh = ko.bindingHandlers.radio;
var togglebh = ko.bindingHandlers.toggle;
var tooltipbh = ko.bindingHandlers.tooltip;