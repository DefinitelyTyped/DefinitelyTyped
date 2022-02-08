// Modified from https://github.com/w3c/webcodecs/blob/f13d044c05c574ba98103947703bb1dbeff66d53/samples/image-decoder/animated-gif-renderer.html

let imageDecoder: ImageDecoder | null = null;
let imageIndex = 0;

function log(str: string) {
  document.querySelector('textarea')!.value += str + '\n';
}

function renderImage(result: ImageDecodeResult) {
  const canvas = document.querySelector('canvas')!;
  const canvasContext = canvas.getContext('2d')!;

  // $ExpectType VideoFrame
  result.image;

  canvasContext.drawImage(result.image, 0, 0);

  const track: ImageTrack = imageDecoder!.tracks.selectedTrack!;

  // $ExpectType boolean
  imageDecoder!.complete;

  // We check complete here since `frameCount` won't be stable until all data
  // has been received. This may cause us to receive a RangeError during the
  // decode() call below which needs to be handled.
  if (imageDecoder!.complete) {
    // $ExpectType number
    track.frameCount;

    if (track.frameCount === 1)
      return;

    if (imageIndex + 1 >= track.frameCount)
      imageIndex = 0;
  }

  // Decode the next frame ahead of display so it's ready in time.
  imageDecoder!.decode({ frameIndex: ++imageIndex })
    .then(
      nextResult => setTimeout(
        () => {
          renderImage(nextResult);
        },
        result.image.duration! / 1000.0))
    .catch(e => {
      // We can end up requesting an imageIndex past the end since we're using
      // a ReadableStrem from fetch(), when this happens just wrap around.
      if (e instanceof RangeError) {
        imageIndex = 0;
        imageDecoder!.decode({ frameIndex: imageIndex }).then(renderImage);
      } else {
        throw e;
      }
    });
}

function logMetadata() {
  log('imageDecoder.type = ' + imageDecoder!.type);
  log('imageDecoder.tracks.length = ' + imageDecoder!.tracks.length);
  log('');

  function logTracks() {
    for (let i = 0; i < imageDecoder!.tracks.length; ++i) {
      const track = imageDecoder!.tracks[i];
      log(`track[${i}].frameCount = ` + track.frameCount);
      // $ExpectType number
      track.repetitionCount;
      log(`track[${i}].repetitionCount = ` + track.repetitionCount);
      // $ExpectType boolean
      track.animated;
      log(`track[${i}].animated = ` + track.animated);
      // $ExpectType boolean
      track.selected;
      log(`track[${i}].selected = ` + track.selected);
    }
  }

  if (!imageDecoder!.complete) {
    log('Partial metadata while still loading:');
    log('imageDecoder.complete = ' + imageDecoder!.complete);
    logTracks();
    log('');
  }

  imageDecoder!.completed.then(_ => {
    log('Final metadata after all data received:');
    log('imageDecoder.complete = ' + imageDecoder!.complete);
    logTracks();
  });
}

function decodeImage(imageByteStream: ReadableStream<Uint8Array>) {
  if (typeof ImageDecoder === 'undefined') {
    log('Your browser does not support the WebCodecs ImageDecoder API.');
    return;
  }

  imageDecoder = new ImageDecoder({ data: imageByteStream, type: 'image/gif' });
  imageDecoder.tracks.ready.then(logMetadata);
  imageDecoder.decode({ frameIndex: imageIndex }).then(renderImage);
}

fetch('giphy.gif').then(response => decodeImage(response.body!));

export { };
