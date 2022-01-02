interface Switch extends HummerComponent {
  style: import("../interface/style").switchStyle;
  checked: boolean;
}
declare const Switch: {
  prototype: Switch;
  new (): Switch;
};
