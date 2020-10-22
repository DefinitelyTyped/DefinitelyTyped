import * as React from "react";
import { RichTextEditor } from "react-native-zss-rich-text-editor";

interface Props {
    value: string;
}

export class WyswygComponent extends React.Component<Props> {
  private editorInst: RichTextEditor;

  render() {
    const {value} = this.props;
    return <RichTextEditor
      ref={this.saveEditorReference}
      hiddenTitle={true}
      initialContentHTML={value}
    />;
  }

  private readonly saveEditorReference = (ref: RichTextEditor) => {
    this.editorInst = ref;
  }
}
