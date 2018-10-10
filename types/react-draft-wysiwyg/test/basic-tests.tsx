// From https://github.com/jpuri/react-draft-wysiwyg/blob/master/stories/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor } from 'react-draft-wysiwyg';

const Basic = () => (<div>
  <Editor
      ref={(ref: Editor) => {console.log('hey ref', ref.focusEditor()); }}
  />
</div>);

ReactDOM.render(<Basic />, document.getElementById('target'));
