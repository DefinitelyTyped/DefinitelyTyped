// noinspection JSUnusedLocalSymbols

import { EasyCaptcha } from "easycaptchajs";

// Calling EasyCaptcha function without arguments
// $ExpectType EasyCaptchaResults
const instance1 = EasyCaptcha();

// Calling EasyCaptcha function with 'verify' method
const data = {} as any; // Mock data
const args = [] as string[]; // Mock arguments
// $ExpectType EasyCaptchaResults
const instance2 = EasyCaptcha("verify", [], data, args);

// Calling EasyCaptcha function with 'getTarget' method
// $ExpectType EasyCaptchaResults
const instance3 = EasyCaptcha("getTarget", [], data, args);
