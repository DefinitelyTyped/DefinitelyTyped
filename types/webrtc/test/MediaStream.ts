const mediaStreamConstraints: MediaStreamConstraints = { audio: true, video: true };

const mediaTrackConstraintSet: MediaTrackConstraintSet = {};
const mediaTrackConstraintArray: MediaTrackConstraintSet[] = [];
const mediaTrackConstraints: MediaTrackConstraints = mediaTrackConstraintSet;
const mediaTrackConstraints2: MediaTrackConstraints = { advanced: mediaTrackConstraintArray };

navigator.getUserMedia(mediaStreamConstraints,
  stream => {
    const track: MediaStreamTrack = stream.getTracks()[0];
    console.log('label:' + track.label);
    console.log('ended:' + track.readyState);
    track.onended = (event: Event) => console.log('Track ended');
    const objectUrl = URL.createObjectURL(stream);
  },
  error => {
    console.log('Error message: ' + error.message);
    console.log('Error name: ' + error.name);
  });

navigator.webkitGetUserMedia(mediaStreamConstraints,
  stream => {
    const track: MediaStreamTrack = stream.getTracks()[0];
    console.log('label:' + track.label);
    console.log('ended:' + track.readyState);
    track.onended = (event: Event) => console.log('Track ended');
    const objectUrl = URL.createObjectURL(stream);
  },
  error => {
    console.log('Error message: ' + error.message);
    console.log('Error name: ' + error.name);
  });

navigator.mozGetUserMedia(mediaStreamConstraints,
  stream => {
    const track: MediaStreamTrack = stream.getTracks()[0];
    console.log('label:' + track.label);
    console.log('ended:' + track.readyState);
    track.onended = (event: Event) => console.log('Track ended');
    const objectUrl = URL.createObjectURL(stream);
  },
  error => {
    console.log('Error message: ' + error.message);
    console.log('Error name: ' + error.name);
  });
