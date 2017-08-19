const params: ReCaptchaV2.Parameters = {
  sitekey: "mySuperSecretKey",
  theme: "light",
  type: "image",
  size: "normal",
  tabindex: 5,
  callback: (response: string) => { },
  "expired-callback": () => { },
};

const size1: ReCaptchaV2.Size = "compact";
const size2: ReCaptchaV2.Size = "invisible";
const size3: ReCaptchaV2.Size = "normal";

const badge1: ReCaptchaV2.Badge = "bottomleft";
const badge2: ReCaptchaV2.Badge = "bottomright";
const badge3: ReCaptchaV2.Badge = "inline";

const invisibleParams: ReCaptchaV2.Parameters = {
  sitekey: "siteKey",
  badge: badge1,
};

const id1: number = grecaptcha.render("foo");
const id2: number = grecaptcha.render("foo", params);
const id3: number = grecaptcha.render(document.getElementById("foo"));
const id4: number = grecaptcha.render(document.getElementById("foo"), params);

// response takes a number and returns a string
const response1: string = grecaptcha.getResponse(id1);

// reset takes a number
grecaptcha.reset(id1);

grecaptcha.execute();
grecaptcha.execute(id1);
