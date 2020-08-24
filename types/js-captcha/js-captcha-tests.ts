import jCaptcha from "js-captcha";

const myCaptcha1 = new jCaptcha({
  el: "jCaptcha1",

  requiredValue: "*",

  resetOnError:   true,
  focusOnError:   true,
  clearOnSubmit:  true,

  canvasClass: 'jCaptchaCanvas',
  canvasStyle: {
    width: 100,
    height: 15,
    textBaseline: 'top',
    font: '15px Arial',
    textAlign: 'left',
    fillStyle: '#ddd'
  },

  callback: (response, captcha, numberOfTries) => {
    if (response === "success") {
      // Do something
    }

    if (response === "error") {
      // Do something
    }
  },
});

const myCaptcha2 = new jCaptcha({
  canvasStyle: {},
});
