import * as watson from 'watson-developer-cloud';
import * as fs from 'fs';

const speech_to_text = new watson.SpeechToTextV1({
  username: '<username>',
  password: '<password>'
});

const params = {
  // From file
  audio: fs.createReadStream('./resources/speech.wav'),
  content_type: 'audio/l16; rate=44100'
};

speech_to_text.recognize(params, (err: any, res: any) => {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(res, null, 2));
});

// or streaming
fs.createReadStream('./resources/speech.wav')
  .pipe(speech_to_text.createRecognizeStream({ content_type: 'audio/l16; rate=44100' }))
  .pipe(fs.createWriteStream('./transcription.txt'));
