///<reference path="draft-js.d.ts" />
///<reference path="../react/react.d.ts" />
///<reference path="../react/react-dom.d.ts"/>

// Using Rich text editor example as a test: https://github.com/facebook/draft-js/tree/master/examples/rich

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Map} from "immutable";

import {Editor, EditorState, RichUtils, DefaultDraftBlockRenderMap, ContentBlock} from 'draft-js';

class RichEditorExample extends React.Component<{}, { editorState: EditorState }> {
  constructor() {
    super();

    this.state = { editorState: EditorState.createEmpty() };
  }

  onChange: (editorState: EditorState) => void = (editorState: EditorState) => this.setState({ editorState });

  handleKeyCommand: (command: string) => boolean = (command: string) => {
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }

    return false;
  }

  toggleBlockType: (blockType: string) => void = (blockType: string) => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  toggleInlineStyle: (inlineStyle: string) => void = (inlineStyle: string) => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
  }

  render(): React.ReactElement<{}> {
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    var contentState = this.state.editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div className="RichEditor-root">
        <BlockStyleControls
          editorState={this.state.editorState}
          onToggle={this.toggleBlockType}
          />
        <InlineStyleControls
          editorState={this.state.editorState}
          onToggle={this.toggleInlineStyle}
          />
        <div className={className}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            placeholder="Tell a story..."
            ref="editor"
            spellCheck={true}
            />
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block: ContentBlock) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

class StyleButton extends React.Component<{key: string, active: boolean, label: string, onToggle: (blockType: string) => void, style: string}, {}> {
  constructor() {
    super();
  }

  onToggle: (event: Event) => void = (event: Event) => {
      event.preventDefault();
      this.props.onToggle(this.props.style);
    };

  render(): React.ReactElement<{}> {
    let className = 'RichEditor-styleButton';

    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];

const BlockStyleControls = (props: {editorState: EditorState, onToggle: (blockType: string) => void}) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          />
      ) }
    </div>
  );
};

var INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

const InlineStyleControls = (props: {editorState: EditorState, onToggle: (blockType: string) => void}) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style) }
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          />
      ) }
    </div>
  );
};

ReactDOM.render(
  <RichEditorExample />,
  document.getElementById('target')
);