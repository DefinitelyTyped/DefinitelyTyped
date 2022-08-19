import { MRAID1, MRAID2, MRAID3 } from 'mraid';
// checks the mraid version
function checkMraidVersion(mraid: MRAID1| MRAID2 | MRAID3) {
    return mraid.getVersion();
}
