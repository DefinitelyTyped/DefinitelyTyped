/// <reference path="intro.js.d.ts" />

var intro = introJs();

intro.setOption('doneLabel', 'Next page');
intro.setOptions({
    steps: [
        {
            intro: "Hello world!"
        },
        {
            element: document.querySelector('#step1'),
            intro  : "This is a tooltip."
        },
        {
            element : document.querySelectorAll('#step2')[0],
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
    ]
});

intro.start()
    .nextStep()
    .previousStep()
    .goToStep(2)
    .exit()
    .refresh()
    .onbeforechange(function (element) {
        element.getAttribute('class');
    })
    .onafterchange(function (element) {
        element.getAttribute('class');
    })
    .onchange(function () {
        alert('Changed');
    })
    .oncomplete(function () {
        alert('Done');
    });
