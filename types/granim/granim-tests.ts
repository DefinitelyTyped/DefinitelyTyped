import Granim = require('granim');

// Tests from https://sarcadass.github.io/granim.js/api-v2.0.0.html

let granimInstance: Granim = new Granim({
    element: '',
    name: 'granim',
    elToSetClassOn: 'body',
    direction: 'diagonal',
    isPausedWhenNotInView: false,
    scrollDebounceThreshold: 300,
    stateTransitionSpeed: 1000,
    image: {
        source: '../assets/img/bg-forest.jpg',
        position: ['center', 'bottom'],
        stretchMode: ['stretch', 'stretch-if-bigger'],
        blendingMode: 'multiply',
    },
    states: {
        'default-state': {
            gradients: [
                ['#834d9b', '#d04ed6'],
                ['#1CD8D2', '#93EDC7'],
            ],
            transitionSpeed: 5000,
            loop: true,
        },
        'dark-state': {
            gradients: [
                ['#757F9A', '#D7DDE8'],
                ['#5C258D', '#4389A2'],
            ],
            transitionSpeed: 5000,
            loop: true,
        },
    },
    onStart: () => {
        console.log('Granim: onStart');
    },
    onGradientChange: colorDetails => {
        console.log('Granim: onGradientChange, details: ');
        console.log(colorDetails);
    },
    onEnd: () => {
        console.log('Granim: onEnd');
    },
});

granimInstance = new Granim({
    element: '',
    name: 'granim',
    elToSetClassOn: 'body',
    direction: 'diagonal',
    isPausedWhenNotInView: false,
    scrollDebounceThreshold: 300,
    stateTransitionSpeed: 1000,
    states: {
        'default-state': {
            gradients: [
                ['#834d9b', '#d04ed6', '#1CD8D2', '#93EDC7'],
                ['#1CD8D2', '#93EDC7', '#757F9A', '#4389A2'],
            ],
            transitionSpeed: 5000,
            loop: true,
        },
        'dark-state': {
            gradients: [
                ['#757F9A', '#D7DDE8', '#1CD8D2', '#93EDC7'],
                ['#5C258D', '#4389A2', '#1CD8D2', '#93EDC7'],
            ],
            transitionSpeed: 5000,
            loop: true,
        },
    },
});

// Tests from https://sarcadass.github.io/granim.js/examples.html

granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states: {
        'default-state': {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053'],
            ],
        },
    },
});

granimInstance = new Granim({
    element: '#canvas-complex',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states: {
        'default-state': {
            gradients: [
                [
                    { color: '#833ab4', pos: 0.2 },
                    { color: '#fd1d1d', pos: 0.8 },
                    { color: '#38ef7d', pos: 1 },
                ],
                [
                    { color: '#40e0d0', pos: 0 },
                    { color: '#ff8c00', pos: 0.2 },
                    { color: '#ff0080', pos: 0.75 },
                ],
            ],
        },
    },
});

granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image: {
        source: '../assets/img/bg-forest.jpg',
        blendingMode: 'multiply',
    },
    states: {
        'default-state': {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3'],
            ],
            transitionSpeed: 7000,
        },
    },
});

granimInstance = new Granim({
    element: '#logo-canvas',
    direction: 'left-right',
    states: {
        'default-state': {
            gradients: [
                ['#EB3349', '#F45C43'],
                ['#FF8008', '#FFC837'],
                ['#4CB8C4', '#3CD3AD'],
                ['#24C6DC', '#514A9D'],
                ['#FF512F', '#DD2476'],
                ['#DA22FF', '#9733EE'],
            ],
            transitionSpeed: 2000,
        },
    },
});

granimInstance = new Granim({
    element: '#canvas-interactive',
    name: 'interactive-gradient',
    elToSetClassOn: '.canvas-interactive-wrapper',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 500,
    states: {
        'default-state': {
            gradients: [
                ['#B3FFAB', '#12FFF7'],
                ['#ADD100', '#7B920A'],
                ['#1A2980', '#26D0CE'],
            ],
            transitionSpeed: 10000,
        },
        'violet-state': {
            gradients: [
                ['#9D50BB', '#6E48AA'],
                ['#4776E6', '#8E54E9'],
            ],
            transitionSpeed: 2000,
        },
        'orange-state': {
            gradients: [['#FF4E50', '#F9D423']],
            loop: false,
        },
    },
});

// Use both Basic and Complex gradients in the same state

granimInstance = new Granim({
    element: '#canvas-interactive',
    name: 'interactive-gradient',
    elToSetClassOn: '.canvas-interactive-wrapper',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 500,
    states: {
        'default-state': {
            gradients: [
                ['hsl(333, 56%,89%)', '#181818', 'rgba(25,63, 48, .75)'],
                [
                    { color: 'hsla(236, 12%, 44%, .23)', pos: 0.1 },
                    { color: 'rgb(255, 0,25)', pos: 0.2 },
                    { color: '#ff0080', pos: 0.3 },
                ],
            ],
            transitionSpeed: 1000,
            loop: true,
        },
    },
});
