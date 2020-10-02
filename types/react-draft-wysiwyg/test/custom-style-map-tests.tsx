import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor } from 'react-draft-wysiwyg';

const CustomStyleMapEditor = () => (<div>
  <Editor
    customStyleMap={{
      STRIKETHROUGH: {
        textDecoration: 'line-through',
        color: 'red',
      },
    }}
  />
</div>);

ReactDOM.render(<CustomStyleMapEditor />, document.getElementById('target'));
