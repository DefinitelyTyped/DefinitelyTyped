import { Alignment } from '@ckeditor/ckeditor5-alignment';
import AlignmentCommand from '@ckeditor/ckeditor5-alignment/src/alignmentcommand';
import * as utils from '@ckeditor/ckeditor5-alignment/src/utils';
import { Editor } from '@ckeditor/ckeditor5-core';
import { Locale } from '@ckeditor/ckeditor5-utils';

class MyEditor extends Editor {}
const editor = new MyEditor();

new Alignment(new MyEditor());
Alignment.requires.map(Plugin => {
    new Plugin(new MyEditor());
    if (Plugin.pluginName === 'AlignmentUI' || Plugin.pluginName === 'AlignmentEditing') {
    }
});
Alignment.requires.length === 2;

// $ExpectType boolean
utils.isDefault('left', new Locale());
// $ExpectType boolean
utils.isSupported('left');
utils.supportedOptions.length === 4;
// @ts-expect-error
utils.normalizeAlignmentOptions(['foo']);
// $ExpectType AlignmentFormat[]
utils.normalizeAlignmentOptions(['left']);
// $ExpectType AlignmentFormat[]
utils.normalizeAlignmentOptions([{ name: 'left' }, { name: 'right' }]);
// @ts-expect-error
utils.normalizeAlignmentOptions([{ name: 'foo', className: 'bar' }]);
// $ExpectType AlignmentFormat[]
utils.normalizeAlignmentOptions([{ name: 'left', className: 'bar' }]);

const command = new AlignmentCommand(new MyEditor());
// @ts-expect-error
command.execute('foo');
// $ExpectType void
command.execute();
// $ExpectType void
command.execute({ value: 'left' });

// $ExpectType Alignment
editor.plugins.get('Alignment');

// $ExpectType AlignmentEditing
editor.plugins.get('AlignmentEditing');

// $ExpectType AlignmentUI
editor.plugins.get('AlignmentUI');

// $ExpectType AlignmentCommand | undefined
editor.commands.get('alignment');
