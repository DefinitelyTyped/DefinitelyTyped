import clamp = require('clamp-js-main');
import { ClampOptions, ClampResponse } from 'clamp-js-main';

const element: HTMLElement = document.createElement('div');
element.style.setProperty('width', '5px');
element.style.setProperty('height', '5px');
element.style.setProperty('font-size', '12px');

const span: HTMLSpanElement = document.createElement('span');
span.textContent = "Lorem ipsum. Lorem ipsum";
element.appendChild(span);

const simpleClamp: ClampResponse = clamp(element);

const options: ClampOptions = {
  clamp: 2,
  useNativeClamp: false,
  splitOnChars: ['.'],
  animate: true,
  truncationChar: '--',
  truncationHTML: '<span></span>'
};
const clampWithOptions: ClampResponse = clamp(element, options);
