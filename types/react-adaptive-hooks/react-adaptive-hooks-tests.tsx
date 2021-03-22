import * as React from 'react';
import { useHardwareConcurrency } from 'react-adaptive-hooks/hardware-concurrency';
import { useMediaCapabilities } from 'react-adaptive-hooks/media-capabilities';
import { useMemoryStatus } from 'react-adaptive-hooks/memory';
import { useNetworkStatus } from 'react-adaptive-hooks/network';
import { useSaveData } from 'react-adaptive-hooks/save-data';

const NetworkStatus = () => {
    const initialEffectiveConnectionType = '4g';
    const { effectiveConnectionType } = useNetworkStatus(initialEffectiveConnectionType);

  let media;
  switch (effectiveConnectionType) {
    case 'slow-2g':
      media = <img src='...' alt='low resolution' />;
      break;
    case '2g':
      media = <img src='...' alt='medium resolution' />;
      break;
    case '3g':
      media = <img src='...' alt='high resolution' />;
      break;
    case '4g':
      media = <video muted controls>{/* ... */}</video>;
      break;
    default:
      media = <video muted controls>{/* ... */}</video>;
      break;
  }

  return <div>{media}</div>;
};

const SaveData = () => {
    const initialSaveDataStatus = true;
    const { saveData } = useSaveData(initialSaveDataStatus);

    return (
      <div>
        { saveData ? <img src='...' /> : <video muted controls>{/* ... */}</video> }
      </div>
    );
};

const HardwareConcurrency = () => {
    const { numberOfLogicalProcessors } = useHardwareConcurrency();

    return (
      <div>
        { numberOfLogicalProcessors && numberOfLogicalProcessors <= 4 ? <img src='...' /> : <video muted controls>{/* ... */}</video> }
      </div>
    );
  };

  const MemoryStatus = () => {
    const initialMemoryStatus = { deviceMemory: 4 };
    const { deviceMemory } = useMemoryStatus(initialMemoryStatus);

    return (
      <div>
        { deviceMemory < 4 ? <img src='...' /> : <video muted controls>{/* ... */}</video> }
      </div>
    );
  };

  const webmMediaConfig = {
    type: 'file' as const, // 'record', 'transmission', or 'media-source'
    video: {
      contentType: 'video/webm;codecs=vp8', // valid content type
      width: 800, // width of the video
      height: 600, // height of the video
      bitrate: 10000, // number of bits used to encode 1s of video
      framerate: 30 // number of frames making up that 1s.
    }
  };

  const initialMediaCapabilities = {smooth: false};

  interface MediaCapabilitiesProps {
      videoSources: {
          webm: string;
          mp4: string;
      };
  }

  const MediaCapabilities = ({ videoSources }: MediaCapabilitiesProps) => {
    const { mediaCapabilities } = useMediaCapabilities(webmMediaConfig, initialMediaCapabilities);

    return (
      <div>
        <video src={mediaCapabilities.supported ? videoSources.webm : videoSources.mp4} controls>{/* ... */}</video>
        { (!mediaCapabilities.supported || !mediaCapabilities.hasMediaConfig) && (
          <div className='muted'>
            Defaulted to mp4.
            Couldn't test webm support,
            either the media capabilities api is unavailable or no media configuration was given.
          </div>
        ) }
      </div>
    );
  };
