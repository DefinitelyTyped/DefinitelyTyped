import * as Video from 'twilio-video';

// Examples taken from https://twilio.github.io/twilio-video/ (v2.x)

let room: Video.Room | null = null;
let localVideoTrack: Video.LocalVideoTrack | null = null;
let localAudioTrack: Video.LocalAudioTrack | null = null;

async function initRoom() {
  // Connect to Twilio without creating audio and video track
  room = await Video.connect('$TOKEN', {
    name: 'room-name',
    video: false,
    audio: false,
    dominantSpeaker: true,
    networkQuality: true,
    region: 'au1',
    maxAudioBitrate: 500,
    maxVideoBitrate: 200,
    bandwidthProfile: {
      video: {
        dominantSpeakerPriority: 'high',
        renderDimensions: {
          low: {
            height: 500,
            width: null
          }
        }
      }
    }
  });
  await Video.connect('$TOKEN', {
    networkQuality: {
      local: 3,
      remote: 1
    }
  });
  // Create local video track from default input
  localVideoTrack = await Video.createLocalVideoTrack({ name: 'camera' });
  // Create local audio track from default input
  localAudioTrack = await Video.createLocalAudioTrack({ name: 'microphone' });
  // Publish audio track
  room.localParticipant.publishTrack(localAudioTrack);
  // Subscribe to remote participant tracks
  room.participants.forEach(participantConnected);
  // Set up listeners
  room.on('participantConnected', participantConnected);
  room.on('participantDisconnected', participantDisconnected);
  room.once('disconnected', (room: Video.Room, error: Video.TwilioError) => {
    room.participants.forEach(participantDisconnected);
    room.localParticipant.tracks.forEach((publication: Video.LocalTrackPublication) => {
      publication.unpublish();
      if (publication.track.kind !== 'data') trackUnsubscribed(publication.track);
    });
  });
}

function unpublishTracks() {
  if (room && localVideoTrack) room.localParticipant.unpublishTrack(localVideoTrack);
  if (room && localAudioTrack) room.localParticipant.unpublishTrack(localAudioTrack);
  if (room && localVideoTrack && localAudioTrack) room.localParticipant.unpublishTracks([localVideoTrack, localAudioTrack]);
}

function participantConnected(participant: Video.Participant) {
  participant.on('trackSubscribed', trackSubscribed);
  participant.on('trackUnsubscribed', trackUnsubscribed);

  participant.tracks.forEach(publication => {
    const remotePublication = publication as Video.RemoteTrackPublication;
    if (remotePublication.isSubscribed) {
      trackSubscribed(remotePublication.track as Video.VideoTrack | Video.AudioTrack);
    }
  });
}

function participantDisconnected(participant: Video.Participant) {
  participant.tracks.forEach((publication) => {
    const remotePublication = publication as Video.RemoteTrackPublication;
    if (remotePublication.isSubscribed) {
      const { track } = remotePublication;
      if (track) trackUnsubscribed(track as Video.AudioTrack | Video.VideoTrack);
    }
  });
}

function trackSubscribed(track: Video.VideoTrack | Video.AudioTrack) {
  const media = track.attach();
  insertDomElement(media);
}

function trackUnsubscribed(track: Video.VideoTrack | Video.AudioTrack) {
  track.detach().forEach(element => element.remove());
  // Alternative if Safari crashes when detaching tracks
  track._attachments!.forEach((detachedElement) => detachedElement.remove());
}

function insertDomElement(element: HTMLMediaElement) {
  // Do something with the dom element
  document.createElement('div');
  element.appendChild(element);
}

initRoom();
// Do something with your video
// You can call unpublish tracks
unpublishTracks();
