/// <reference types="jquery"/>


/**
 * @summary Test for "accwizard" without options.
 */
function testBasic() {
    $('#test').accwizard();
}

/**
 * @summary Test for "accwizard" with options.
 */
function testWithOptions() {
    var options: AccWizardOptions = {
        addButtons:     true,
        sidebar:        '.acc-wizard-sidebar',
        activeClass:    'acc-wizard-active',
        completedClass: 'acc-wizard-completed',
        todoClass:      'acc-wizard-todo',
        stepClass:      'acc-wizard-step',
        nextText:       'Next Step',
        backText:       'Go Back',
        nextType:       'submit',
        backType:       'reset',
        nextClasses:    'btn btn-primary',
        backClasses:    'btn',
        autoScrolling:  true,
        onNext:         function() {},
        onBack:         function() {},
        onInit:         function() {},
        onDestroy:      function() {}
    };
    
    $('#test').accwizard(options);
}