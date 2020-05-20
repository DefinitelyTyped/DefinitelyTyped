import * as React from 'react';
import * as blessed from 'blessed';
import { render } from 'react-blessed';

// Testing example from demos page
// https://github.com/Yomguithereal/react-blessed/blob/master/examples/dashboard.jsx

const { Component } = React;

/**
 * Stylesheet
 */
const stylesheet = {
  bordered: {
    border: {
      type: 'line'
    },
    style: {
      border: {
        fg: 'blue'
      }
    }
  }
};

/**
 * Top level component.
 */
class Dashboard extends Component {
  render() {
    return (
      <>
        <Log />
        <Request />
        <Response />
        <Jobs />
        <Progress />
        <Stats />
      </>
    );
  }
}

/**
 * Log component.
 */
class Log extends Component {
  render() {
    return (
      <blessed-box
        label="Log"
        class={stylesheet.bordered}
        width="60%"
        height="70%"
        draggable={true}>
        {'Hello'}, {0}, {'World'}
      </blessed-box>
    );
  }
}

/**
 * Request component.
 */
class Request extends Component {
  render() {
    return (
      <blessed-box
        label="Request"
        class={stylesheet.bordered}
        top="70%"
        width="30%">
        {0}
      </blessed-box>
    );
  }
}

/**
 * Response component.
 */
class Response extends Component {
  render() {
    return (
      <blessed-box
        class={stylesheet.bordered}
        top="70%"
        left="30%"
        width="30%"
      />
    );
  }
}

/**
 * Jobs component.
 */
class Jobs extends Component {
  render() {
    return (
      <blessed-box
        label="Jobs"
        class={stylesheet.bordered}
        left="60%"
        width="40%"
        height="60%"
      />
    );
  }
}

/**
 * Progress component.
 */
class Progress extends Component<any, any> {
  state: {
    progress: number,
    color: string,
  } = {
    progress: 0,
    color: 'blue'
  };

  constructor(props: any) {
    super(props);
    const interval: NodeJS.Timer = setInterval(() => {
      const { progress } = this.state;
      if (this.state.progress >= 100) {
        clearInterval(interval);
        return;
      }
      this.setState({
        progress: progress + 1,
      });
    }, 50);
  }

  render() {
    const { progress, color } = this.state;
    const label = `Progress - ${progress}%`;

    return (
      <blessed-progressbar
        label={label}
        onComplete={() => this.setState({
          color: 'green'
        })}
        class={stylesheet.bordered}
        filled={progress}
        top='60%'
        left='60%'
        width='40%'
        height='10%'
        style={{
          bar: {
            bg: color
          }
        }}
      />
    );
  }
}

/**
 * Stats component.
 */
class Stats extends Component {
  render() {
    return (
      <blessed-box
        label='Stats'
        class={stylesheet.bordered}
        top='70%'
        left='60%'
        width='40%'
        height='31%'
      >
        Some stats
      </blessed-box>
    );
  }
}

/**
 * Rendering the screen.
 */
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'react-blessed dashboard'
});

screen.key(['escape', 'q', 'C-c'], () => {
  return process.exit(0);
});

render(<Dashboard />, screen);
