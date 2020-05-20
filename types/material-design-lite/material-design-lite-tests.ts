// Test file for Google Maps JavaScript API Definition file


componentHandler.upgradeDom();
componentHandler.upgradeDom('MaterialButton');
componentHandler.upgradeDom('MaterialButton', 'mdl-button');

componentHandler.upgradeElement(document.createElement('div'));
componentHandler.upgradeElement(document.getElementById('id'));
componentHandler.upgradeElement(document.getElementsByTagName('button')[0], 'MaterialButton');

componentHandler.upgradeElements(document.getElementsByTagName('div'));
componentHandler.upgradeElements([document.createElement('div')]);
componentHandler.upgradeElements(document.querySelectorAll('div.mdl-button'));

componentHandler.upgradeAllRegistered();

componentHandler.registerUpgradedCallback('MaterialButton', function(element : HTMLElement) {});

componentHandler.register({
    constructor: function(element: HTMLElement) {},
    classAsString: 'MaterialCheese',
    cssClass: 'mdl-cheese'
});
componentHandler.register({
    constructor: function(element: HTMLElement) {},
    classAsString: 'MaterialFoo',
    cssClass: 'mdl-foo',
    widget: true
});
componentHandler.register({
    constructor: function(element: HTMLElement) {},
    classAsString: 'MaterialFoo',
    cssClass: 'mdl-foo',
    widget: 'FooBar'
});

componentHandler.downgradeElements(document.querySelectorAll('div'));
