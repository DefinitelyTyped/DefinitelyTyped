import * as React from 'react';
import * as d3 from 'd3';
import { createElement, Element } from 'react-faux-dom';

class SomeChart extends React.Component {
  render() {
    const el = createElement('div');

    const paragraph = new Element('p', el);
    paragraph.appendChild(createElement('a'));
    paragraph.appendChild(createElement('span'));

    paragraph.textContent = 'Hello, World!';
    paragraph.style = 'color:red';

    d3.select(el).append('div').html('Hello World!');

    el.style.setProperty('color', 'red');
    el.setAttribute('class', 'box');

    return el.toReact();
  }
}
