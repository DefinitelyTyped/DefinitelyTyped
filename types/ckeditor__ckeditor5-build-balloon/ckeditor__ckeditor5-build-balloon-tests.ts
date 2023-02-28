import BuildBalloon from '@ckeditor/ckeditor5-build-balloon';
import { Context, Editor } from '@ckeditor/ckeditor5-core';

class MyEditor extends Editor {}
const editor = new MyEditor();

BuildBalloon.create('', BuildBalloon.defaultConfig);
BuildBalloon.builtinPlugins.forEach(Plugin => {
    if (Plugin.isContextPlugin) {
        new Plugin(new Context());
    } else {
        new Plugin(editor);
    }
});

const el = document.querySelector('#editor');
if (el instanceof HTMLElement) {
    BuildBalloon.create(el)
        .then(editor => {
            if (editor instanceof BuildBalloon) {
                editor.locale.t('').startsWith('');
            }
        })
        .catch(error => {
            console.error(error);
        });
}
