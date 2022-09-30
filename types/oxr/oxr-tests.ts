import * as oxr from 'oxr';

const OXR = oxr.factory({
  appId: 'appId',
});
OXR.latest();
OXR.historical(new Date());
OXR.currencies();
