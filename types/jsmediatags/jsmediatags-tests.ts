import * as jsmediatags from 'jsmediatags';
import MediaFileReader from 'jsmediatags/build2/MediaFileReader';
import MediaTagReader from 'jsmediatags/build2/MediaTagReader';

const url = '';

// $ExpectType void
jsmediatags.read(url, {
  onSuccess(tag: any) {
  },
  onError(error: any) {
  },
});

class TestFileReader extends MediaFileReader {
    static canReadFile = (_file: any) => false;
}
class TestTagReader extends MediaTagReader {
}

// $ExpectType Config
jsmediatags.Config.addFileReader(TestFileReader)
    .addTagReader(TestTagReader)
    .removeTagReader(TestTagReader);
// $ExpectType void
jsmediatags.Config.setDisallowedXhrHeaders(['']);
// $ExpectType void
jsmediatags.Config.setXhrTimeoutInSec(0);
// $ExpectType void
jsmediatags.Config.EXPERIMENTAL_avoidHeadRequests();
