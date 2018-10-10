// From https://github.com/jpuri/react-draft-wysiwyg/blob/master/stories/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor } from 'react-draft-wysiwyg';

import './styles.css';

const Basic = () => (<div className="rdw-storybook-root">
  <Editor
    ref={(ref: Editor) => {console.log('hey ref', ref.focusEditor()); }}
    toolbarClassName="rdw-storybook-toolbar"
    wrapperClassName="rdw-storybook-wrapper"
    editorClassName="rdw-storybook-editor"
  />
</div>);

ReactDOM.render(<Basic />, document.getElementById('target'));
