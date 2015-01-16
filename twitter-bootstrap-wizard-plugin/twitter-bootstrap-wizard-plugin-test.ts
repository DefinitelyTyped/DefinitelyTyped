/// <reference path='../jquery/jquery.d.ts'/>
/// <reference path="twitter-bootstrap-wizard-plugin.d.ts" />

var rootwizard: JQuery = $('#rootwizard');

/**
 * @summary Test for basic usage.
 */
function testBasicUsage() {
    rootwizard.bootstrapWizard();
}

/**
 * @summary Test for basic pills usage.
 */
function testOptions() {
    var options: TwitterBootstrapWizard = {'tabClass': 'nav nav-pills', 'backSelector': 'back'};
    rootwizard.bootstrapWizard(options);
}

/**
 * @summary Test for event.
 */
function testEvent() {
    var onTabShowEvent: TwitterBootstrapWizardEvent = (activeTab: JQuery, navigation: JQuery, index: number) => {}
    
    var options: TwitterBootstrapWizard = {onTabShow: onTabShowEvent};
    rootwizard.bootstrapWizard(options);
}