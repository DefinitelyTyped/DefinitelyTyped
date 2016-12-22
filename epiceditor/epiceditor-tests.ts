

var editor = new EpicEditor().load();

editor.load(function () {
    console.log("Editor loaded.")
});

editor.unload(function () {
    console.log("Editor unloaded.")
});

editor.getElement('editor').body.innerHTML;

if (editor.is('loaded'))
    editor.enterFullscreen();

editor.open('some-file');
editor.importFile('some-file', "#Imported markdown\nFancy, huh?");
var theContent = editor.exportFile();

var newName = prompt('What do you want to rename this file to?');
editor.rename('old-filename.md', newName);

editor.save();
editor.remove('example.md');
var files = editor.getFiles();

editor.on('unload', function () {
    console.log('Editor was removed');
});

editor.emit('unload');

editor.removeListener('unload');

editor.preview();

editor.edit();

editor.enterFullscreen();

editor.exitFullscreen();

editor.reflow();
editor.reflow('height');

var marked: any;
var opts = {
    container: 'epiceditor',
    textarea: <any>null,
    basePath: 'epiceditor',
    clientSideStorage: true,
    localStorageName: 'epiceditor',
    useNativeFullsreen: true,
    parser: marked,
    file: {
        name: 'epiceditor',
        defaultContent: '',
        autoSave: 100
    },
    theme: {
        base: '/themes/base/epiceditor.css',
        preview: '/themes/preview/preview-dark.css',
        editor: '/themes/editor/epic-dark.css'
    },
    focusOnLoad: false,
    shortcut: {
        modifier: 18,
        fullscreen: 70,
        preview: 80
    },
    string: {
        togglePreview: 'Toggle Preview Mode',
        toggleEdit: 'Toggle Edit Mode',
        toggleFullscreen: 'Enter Fullscreen'
    }
}
var editor2 = new EpicEditor(opts);
