interface Input extends HummerComponent {
  style: import("../interface/style").inputStyle;
  text: string;
  placeholder: string;
  focused: boolean;
}
declare const Input: {
  prototype: Input;
  new (): Input;
};
