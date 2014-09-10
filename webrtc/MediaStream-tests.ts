///<reference path="MediaStream.d.ts" />
var mediaStreamConstraints: MediaStreamConstraints = { audio: true, video: true };

var mediaTrackConstraintSet: MediaTrackConstraintSet = {};
var mediaTrackConstraintArray: MediaTrackConstraint[] = [];
var mediaTrackConstraints: MediaTrackConstraints = { mandatory: mediaTrackConstraintSet, optional: mediaTrackConstraintArray }

navigator.getUserMedia(mediaStreamConstraints,
  stream => {
    console.log('label:' + stream.label);
    console.log('ended:' + stream.ended);
    stream.onended = (event:Event) => console.log('Stream ended');
    var objectUrl = URL.createObjectURL(stream);
    var wkObjectUrl = webkitURL.createObjectURL(stream);
  },
  error => {
    console.log('Error message: ' + error.message);
    console.log('Error name: ' + error.name);
  });

navigator.webkitGetUserMedia(mediaStreamConstraints,
  stream => {
    console.log('label:' + stream.label);
    console.log('ended:' + stream.ended);
    stream.onended = (event:Event) => console.log('Stream ended');
    var objectUrl = URL.createObjectURL(stream);
    var wkObjectUrl = webkitURL.createObjectURL(stream);
  },
  error => {
    console.log('Error message: ' + error.message);
    console.log('Error name: ' + error.name);
  });


navigator.mozGetUserMedia(mediaStreamConstraints,
  stream => {
    console.log('label:' + stream.label);
    console.log('ended:' + stream.ended);
    stream.onended = (event:Event) => console.log('Stream ended');
    var objectUrl = URL.createObjectURL(stream);
    var wkObjectUrl = webkitURL.createObjectURL(stream);
  },
  error => {
    console.log('Error message: ' + error.message);
    console.log('Error name: ' + error.name);
  });
