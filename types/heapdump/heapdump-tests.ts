import * as heapdump from 'heapdump';

heapdump.writeSnapshot('/tmp/myDump', (err) => {
  if (err) {
    console.log('Failed to dump heap: ' + err);
  } else {
    console.log('Successfully dumped heap!');
  }
});
