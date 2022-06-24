import GlobalsResolver from '@ember/application/globals-resolver';

const gr = GlobalsResolver.create();

gr.resolve('App.IndexController');
// @ts-expect-error
gr.resolve();
