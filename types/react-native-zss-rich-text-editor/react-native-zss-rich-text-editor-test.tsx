import * as React from "react";
import { RichTextEditor, RichTextEditorReference } from "react-native-zss-rich-text-editor";

interface Props {
    value: string;
}

export class WyswygComponent extends React.Component<Props> {
  props: Props;
  private editorInst: RichTextEditorReference;

  render() {
    const {value} = this.props;
    return <RichTextEditor
      ref={this.saveEditorReference}
      hiddenTitle={true}
      initialContentHTML={value}
    />;
  }

  private saveEditorReference = (ref) => {
    this.editorInst = ref;
  }
}
