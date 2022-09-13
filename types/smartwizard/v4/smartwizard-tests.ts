import 'jquery';
import 'smartwizard';

$('#smartwizard').smartWizard({
    selected: 0,
    keyNavigation: true,
    autoAdjustHeight: true,
    cycleSteps: false,
    backButtonSupport: true,
    useURLhash: true,
    showStepURLhash: true,
    contentURL: null,
    contentCache: true,
    ajaxSettings: {
        async: true,
        cache: true,
        timeout: 60000,
    },
    disabledSteps: [2],
    errorSteps: [3, 4],
    hiddenSteps: [1],
    theme: 'dots',
    transitionEffect: 'fade',
    transitionSpeed: '400',
    toolbarSettings: {
        toolbarPosition: 'bottom',
        toolbarButtonPosition: 'right',
        showNextButton: true,
        showPreviousButton: true,
        toolbarExtraButtons: [
            $('<button></button>')
                .text('Finish')
                .addClass('btn btn-info')
                .on('click', () => {
                    alert('Finsih button click');
                }),
            $('<button></button>')
                .text('Cancel')
                .addClass('btn btn-danger')
                .on('click', () => {
                    alert('Cancel button click');
                }),
        ],
    },
    anchorSettings: {
        anchorClickable: true,
        enableAllAnchors: false,
        markDoneStep: true,
        markAllPreviousStepsAsDone: true,
        removeDoneStepOnNavigateBack: false,
        enableAnchorOnDoneStep: true,
    },
    lang: {
        next: 'Next',
        previous: 'Previous',
    },
});
