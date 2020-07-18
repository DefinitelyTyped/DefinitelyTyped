import * as wsd from 'websequencediagrams';

wsd.diagram('Alice->Bob: message', 'modern-blue', 'png', (error, buffer, mimeType) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Received MIME type:', mimeType);
    console.log('Received Buffer:', buffer);
  }
});

wsd.diagram_url('Alice->Bob: message', 'modern-blue', 'png', (error, url) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Received URL:', url);
  }
});
