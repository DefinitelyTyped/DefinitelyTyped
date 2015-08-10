///<reference path="shepherd.d.ts" />

var tour = new Shepherd.Tour({
    defaults: {
        classes: 'shepherd-theme-default'
    }
});

tour.addStep('test-step', {
    text: 'This is a test step being added to the test tour',
    title: 'Test Step Title',
    attachTo: {
        element: '#button',
        on: 'right'
    }
});
