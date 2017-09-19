

var intro = introJs();
var introWithElement = introJs(document.body);
var introWithQuerySelector = introJs('body');

intro.setOption('doneLabel', 'Next page');
intro.setOption('overlayOpacity', 50);
intro.setOption('showProgress', true);
intro.setOptions({
    hidePrev: true,
    hideNext: false,
    scrollPadding: 30,
    hintAnimation: false,
    steps: [
        {
            intro: "Hello world!"
        },
        {
            element: document.querySelector('#step1') as HTMLElement,
            intro  : "This is a tooltip."
        },
        {
            element : document.querySelectorAll('#step2')[0] as HTMLElement,
            intro   : "Ok, wasn't that fun?",
            position: 'right'
        },
        {
            element : '#step3',
            intro   : 'More features, more fun.',
            position: 'left'
        },
        {
            element : '#step4',
            intro   : "Another step.",
            position: 'bottom'
        },
        {
            element: '#step5',
            intro  : 'Get it, use it.'
        }
    ],
    hints: [
        {
            element: '#step1',
            hint: 'This is a hint',
            hintPosition: 'middle-right'
        },
        {
            element: document.querySelectorAll('#step2')[0] as HTMLElement,
            hint: 'This is another hint',
            hintPosition: 'top-left'
        }
    ]
});

intro.start()
    .nextStep()
    .previousStep()
    .goToStepNumber(1).start()
    .goToStep(2)
    .exit()
    .refresh()
    .onbeforechange(function (element) {
        element.getAttribute('class');
    })
    .onafterchange(function (element) {
        element.getAttribute('class');
    })
    .onchange(function (element) {
        element.getAttribute('class');
    })
    .oncomplete(function () {
        alert('Done');
    })
    .onexit(function () {
        alert('Exiting');
    })
    .onhintsadded(function () {
        alert('Hints added');
    })
    .onhintclick(function (hintElement, item, stepId) {
        hintElement.getAttribute('class');
    })
    .onhintclose(function (stepId) {
        alert('Hint close for Step ID ' + stepId);
    })
    .addHints()
    .showHint(1)
    .showHints()
    .hideHint(1)
    .hideHints()
    .hideHint(1)
    .hideHints()
    .clone();

introWithElement.start()
    .exit()
    .clone();
    
introWithQuerySelector.start()
    .exit()
    .clone();
