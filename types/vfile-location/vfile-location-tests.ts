import vfile = require("vfile");
import vfileLocation = require("vfile-location");

const location = vfileLocation(vfile("foo\nbar\nbaz"));

const position = location.toPosition(10);
const offset: number = location.toOffset(position);
