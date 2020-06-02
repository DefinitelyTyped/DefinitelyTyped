import React from 'react';
import CopyToClipboard, { CopyToClipboard as CopyToClipboardNamed } from 'react-copy-to-clipboard';

export class OnlyRequiredProps extends React.Component {
    render() {
        return (
          <CopyToClipboard text={"Hello World"}>
              <button>Copy to clipboard with button</button>
          </CopyToClipboard>
        );
    }
}

export class AllProps extends React.Component {
    render() {
        return (
          <CopyToClipboard text={"Hello World"}
                onCopy={() => {}}
                options={{debug: true, message: "message", format: "text/plain"}}>
            <span>Copy to clipboard with span</span>
          </CopyToClipboard>
        );
    }
}

export class App extends React.Component {
    state = {
      value: '',
      copied: false,
    };

    render() {
      return (
        <div>
          <input value={this.state.value}
            onChange={({target: {value}}) => this.setState({value, copied: false})} />

          <CopyToClipboardNamed text={this.state.value}
            onCopy={() => this.setState({copied: true})}>
            <span>Copy to clipboard with span</span>
          </CopyToClipboardNamed>

          <CopyToClipboardNamed text={this.state.value}
            onCopy={() => this.setState({copied: true})}
            options={{debug: true, message: "message", format: "text/plain"}}>
            <button>Copy to clipboard with button</button>
          </CopyToClipboardNamed>

          {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
        </div>
      );
    }
  }
