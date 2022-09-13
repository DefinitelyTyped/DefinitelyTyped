// Tests for Dropbox Chooser DefinitelyTyped TS definitions

const options: Dropbox.ChooserOptions = {
  success: (files: ReadonlyArray<Dropbox.ChooserFile>) => {
    console.log('Success, selected files were:', files);
  },
};

const Dropbox = window.Dropbox!;
Dropbox.choose(options);

const sampleFile: Dropbox.ChooserFile = {
  id: 'SAMPLE_ID',
  name: 'HelloBox.jpg',
  link: 'http://localhost/1.png',
  bytes: 1024,
  icon: 'http://localhost/icons/png.png',
  thumbnailLink: 'http://localhost/thumbnails/1.png',
  isDir: false,
};
