import * as React from 'react';
import VideoPlayer from 'react-native-video-player';

<VideoPlayer
    endWithThumbnail
    thumbnail={{ uri: 'thumb.jpg' }}
    video={{ uri: 'sample.mp4' }}
    videoWidth={1280}
    videoHeight={720}
    ignoreSilentSwitch="ignore"
/>;
