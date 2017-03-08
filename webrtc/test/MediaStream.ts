var mediaStreamConstraints: MediaStreamConstraints = { audio: true, video: true };

var mediaTrackConstraintSet: MediaTrackConstraintSet = {};
var mediaTrackConstraintArray: MediaTrackConstraintSet[] = [];
var mediaTrackConstraints: MediaTrackConstraints = mediaTrackConstraintSet;
var mediaTrackConstraints2: MediaTrackConstraints = { advanced: mediaTrackConstraintArray };

navigator.getUserMedia(mediaStreamConstraints,
  stream => {
    var track: MediaStreamTrack = stream.getTracks()[0];
    console.log('label:' + track.label);
    console.log('ended:' + track.readyState);
    track.onended = (event:Event) => console.log('Track ended');
    var objectUrl = URL.createObjectURL(stream);
  },
  error => {
    console.log('Error message: ' + error.message);
    console.log('Error name: ' + error.name);
  });

navigator.webkitGetUserMedia(mediaStreamConstraints,
  stream => {
    var track: MediaStreamTrack = stream.getTracks()[0];
    console.log('label:' + track.label);
    console.log('ended:' + track.readyState);
    track.onended = (event:Event) => console.log('Track ended');
    var objectUrl = URL.createObjectURL(stream);
  },
  error => {
    console.log('Error message: ' + error.message);
    console.log('Error name: ' + error.name);
  });


navigator.mozGetUserMedia(mediaStreamConstraints,
  stream => {
    var track: MediaStreamTrack = stream.getTracks()[0];
    console.log('label:' + track.label);
    console.log('ended:' + track.readyState);
    track.onended = (event:Event) => console.log('Track ended');
    var objectUrl = URL.createObjectURL(stream);
  },
  error => {
    console.log('Error message: ' + error.message);
    console.log('Error name: ' + error.name);
  });
