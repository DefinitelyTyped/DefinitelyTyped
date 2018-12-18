import * as React from "react";
import RichTextEditor, { EditorValue } from "react-rte";

interface Props {
    onChange: (val: string) => void;
}

class MyStatefulEditor extends React.Component<Props, any> {
  state = {
    value: RichTextEditor.createEmptyValue()
  };

  onChange = (value: EditorValue) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  }

  render() {
    return (
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}
