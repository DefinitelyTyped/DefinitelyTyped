import * as React from 'react';
import * as d3 from 'd3';
import { createElement, Element, ReactFauxDomProps, withFauxDOM } from 'react-faux-dom';

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

interface ChartProps extends ReactFauxDomProps {
  chart?: any;
}

class MyReactComponent extends React.Component<ChartProps> {
  componentDidMount() {
    if (this.props.connectFauxDOM && this.props.animateFauxDOM) {
      const faux = this.props.connectFauxDOM('div', 'chart');
      d3.select(faux)
        .append('div')
        .html('Hello World!');
      this.props.animateFauxDOM(800);
    }
  }

  render() {
    return <div>
      <h2>Here is some fancy data:</h2>
      <div className='renderedD3'>
        {this.props.chart}
      </div>
    </div>;
  }
}

const AdvancedComponent = withFauxDOM<ChartProps>(MyReactComponent);
