interface Text extends HummerComponent {
  style: import("../interface/style").textStyle;
  text: string;
  rickText: import("../interface/info").rickTextType;
  textCopyEnable: boolean;
}
declare const Text: {
  prototype: Text;
  new (): Text;
};
