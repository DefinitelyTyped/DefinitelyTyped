import * as jsmediatags from 'jsmediatags';
import MediaFileReader from "./build2/MediaFileReader";
import MediaTagReader from './build2/MediaTagReader';

const url = '';

jsmediatags.read(url, {
  onSuccess: function(tag: any) {
  },
  onError: function(error: any) {
  },
});

class TestFileReader extends MediaFileReader {

}
class TestTagReader extends MediaTagReader {

}

jsmediatags.Config.addFileReader(TestFileReader)
    .addTagReader(TestTagReader)
    .removeTagReader(TestTagReader);
jsmediatags.Config.setDisallowedXhrHeaders(['']);
jsmediatags.Config.setXhrTimeoutInSec(0);
jsmediatags.Config.EXPERIMENTAL_avoidHeadRequests();
