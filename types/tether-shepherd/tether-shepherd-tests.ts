var tour = new Shepherd.Tour({
    defaults: {
        classes: 'shepherd-theme-default'
    }
});

var step1Options: TetherShepherd.IShepherdTourStepOptions = {
    text: 'This is a test step being added to the test tour',
    title: 'Test Step Title',
    attachTo: {
        element: '#button',
        on: 'right'
    },
    buttons: [
        {
            text: 'Continue',
            action: tour.next
        },
        {
            text: 'Cancel',
            action: tour.cancel
        }
    ]
};

tour.addStep('test-step', step1Options);

var step2Options: TetherShepherd.IShepherdTourStepOptions = {
    text: 'This is the next step being added to the test tour',
    title: 'Test Step Title 2 - Electric Boogaloo',
    attachTo: '#anotherButton right',
    buttons: [
        {
            text: 'Done',
            action: tour.next,
            events: {
                'mouseover': () => {
                    console.log('I did not feel like making a function body that pretended to do something else');
                }
            }
        }
    ],
    when: {
        destroy: () => {
            console.log('Destroyed the Step 2');
        }
    },
    showOn: () => {
        return true;
    }
};

tour.addStep('test-step-2', step2Options);

var queriedStep = tour.getById('test-step-2');

queriedStep.destroy();

tour.start();
