interface View extends HummerComponent, ContainerComponent {
  style: import("../interface/style").viewStyle;
  getRect: (cb: (rect: import("../interface/info").viewRect) => void) => void;
}
declare const View: {
  prototype: View;
  new (id?: string): View;
};
