import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TinyMCE = require('react-mce');

class Example extends React.Component {
  private _onChangeTextarea(e: any) {
    console.log(e.target.getContent());
  }

  render() {
    return (
      <div>
        <div>
          <h3>TinyMCE Textarea</h3>

          <TinyMCE
            content="Hello"
            config={{
              plugins: 'autolink link image lists print preview',
              toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
            }}
            onChange={(e, editor) => this._onChangeTextarea(e)}
          />

        </div>
        <div>
          <h3>TinyMCE Inline</h3>

          <TinyMCE
            config={{ inline: true }}
            content="Click here!"
          />

        </div>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
