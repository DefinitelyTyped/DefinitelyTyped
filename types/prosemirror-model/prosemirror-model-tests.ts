import * as model from 'prosemirror-model';

let fragment = new model.Fragment();

let domOutputSpec: model.DOMOutputSpec;

domOutputSpec = ['div'];
domOutputSpec = ['div', { class: 'foo' }];
domOutputSpec = ['div', { class: 'foo' }, 0];
domOutputSpec = ['div', 0];
domOutputSpec = ['div', ['div', 0]];
domOutputSpec = ['div', ['div', { class: 'foo' }]];
domOutputSpec = ['div', ['div', { class: 'foo' }, 0]];
