import factory, { RendererType, RendererFunction, TemplateType } from 'notifme-template';

const renderer: RendererType = (r: string, p: object) => r;

const rendererFunction: RendererFunction = factory(renderer, 'folder');

rendererFunction('test', {}).then((t: TemplateType) => {
    console.log(t.name);
});
