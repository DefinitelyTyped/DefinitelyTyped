interface TextArea extends HummerComponent {
  style: import("../interface/style").textAreaStyle;
  text: string;
  placeholder: string;
  focused: boolean;
}
declare const TextArea: {
  prototype: TextArea;
  new (): TextArea;
};
