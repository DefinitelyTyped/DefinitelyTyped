import * as copy from 'copy-to-clipboard';

copy('Text');

// Copy with options
copy('Text', {
  debug: true,
  message: 'Press #{key} to copy',
});
