import { createElement, render, Component } from 'ereact';

class TestComponent extends Component {
  render() {
    return (<div></div>);
  }
}

render(<div></div>, {});

createElement('div', { className: 'test' }, null);
