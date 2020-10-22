import init_package_json = require("init-package-json");

init_package_json("", "", (err: any, data: any) => {}); // $ExpectType void
init_package_json("", "", {}, (err: any, data: any) => {}); // $ExpectType void
init_package_json("", "", { foo: "bar" }, (err: any, data: any) => {}); // $ExpectType void

const config: init_package_json.Config = {
  foo: "bar",
  get(k) {
    return "";
  },
};

init_package_json("", "", config, (err: any, data: any) => {}); // $ExpectType void

init_package_json.yes({}); // $ExpectError
init_package_json.yes({ foo: "bar" }); // $ExpectError
init_package_json.yes(config); // $ExpectType boolean
