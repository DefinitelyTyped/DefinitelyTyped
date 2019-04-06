import textToSpeech from "@google-cloud/text-to-speech";

const client = new textToSpeech.TextToSpeechClient({});

/* listVoices */

client.listVoices({});

client.listVoices({}, (err, res) => {
    if (res) {
        res.map(voice =>
            console.log(
                voice.language_codes,
                voice.name,
                voice.naturalSampleRateHertz,
                voice.ssmlGender
            )
        );
    }
});

client.listVoices({ languageCode: "en-GB" }).then(res => {
    res[0].map(voice =>
        console.log(
            voice.language_codes,
            voice.name,
            voice.naturalSampleRateHertz,
            voice.ssmlGender
        )
    );
});

/* synthesizeSpeech */

client.synthesizeSpeech(
    {
        input: { text: "Hello world." },
        audioConfig: { audioEncoding: "MP3" },
        voice: { name: "Alice" }
    },
    (err, res) => {
        if (res) {
            console.log(res.audioContent);
        }
    }
);

client
    .synthesizeSpeech({
        input: { ssml: "Hello world." },
        audioConfig: { audioEncoding: "OGG_OPUS" },
        voice: { name: "Bob", languageCode: "en-GB" }
    })
    .then(res => {
        console.log(res[0].audioContent);
    });
