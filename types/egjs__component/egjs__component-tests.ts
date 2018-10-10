import * as Component from "@egjs/component";

class TestKlass extends Component {
}
let is = false;
const klass = new TestKlass();
klass.options;

is = klass.hasOn("click");
klass.on("click", () => {
});
klass.on({
  click1: () => {
  },
  click2: e => {
  }
});
klass.once("click", () => {
});
klass.once({
  click1: () => {
  },
  click2: e => {
  }
});
klass.off("click", () => {
});
klass.off("click");
klass.off();
is = klass.trigger("click");
is = klass.trigger("click", {
  test: 1
});
