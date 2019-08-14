import GlobalsResolver from "@ember/application/globals-resolver";

const gr = GlobalsResolver.create();

gr.resolve('App.IndexController');
gr.resolve(); // $ExpectError
