import jCaptcha from "js-captcha/dist/js/jCaptcha";

const myCaptcha1 = new jCaptcha({
  el: "jCaptcha1",

  requiredValue: "*",

  resetOnError:   true,
  focusOnError:   true,
  clearOnSubmit:  true,

  canvasWidth:      50,
  canvasHeight:     15,
  canvasFontSize:   "15px",
  canvasFontFamily: "Arial",
  canvasFillStyle:  "#ddd",

  callback: (response: "success" | "error", input: NodeListOf<Element>) => {
    if (response === "success") {
      // Do something
    }

    if (response === "error") {
      // Do something
    }
  },
});

const myCaptcha2 = new jCaptcha({});

const myCaptcha3 = new jCaptcha();
