import { Hyperdeck, Logger } from 'hyperdeck-js-lib';

const hyperdeck = new Hyperdeck('192.168.1.12');
hyperdeck
    .onConnected()
    .then(() => {
        // connected to hyperdeck
        // Note: you do not have to wait for the connection before you start making requests.
        // Requests are buffered until the connection completes. If the connection fails, any
        // buffered requests will be rejected.
        hyperdeck
            .makeRequest<Hyperdeck.DeviceInfo>('device info')
            .then(response => {
                console.log('Got response with code', response.code);
                console.log('Hyperdeck unique id:', response.params['unique id']);
            })
            .catch(error => {
                if (!error) {
                    console.error('The request failed because the hyperdeck connection was lost.');
                } else {
                    console.error(`The hyperdeck returned an error with status code ${error.code}.`);
                }
            });

        hyperdeck.getNotifier().on('asynchronousEvent', response => {
            console.log(`Got an asynchronous event with code ${response.code}.`);

            // @ts-expect-error invalid property
            response.asdasdasf;
        });

        hyperdeck.getNotifier().once('connectionLost', () => {
            console.error('Connection lost.');
        });
    })
    .catch(() => {
        console.error('Failed to connect to hyperdeck.');
    });

hyperdeck.play();
hyperdeck.play(35); // play at 35%
hyperdeck.stop();
hyperdeck.record();
hyperdeck.goTo('00:13:03:55'); // goes to timecode in format hh:mm:ss:ff
// @ts-expect-error invalid timecode string
hyperdeck.goTo('00:13:03');
// @ts-expect-error invalid timecode string
hyperdeck.goTo('00:1x:03:44');
hyperdeck.slotSelect(2);
hyperdeck.slotInfo(); // Gives info on currently selected slot
hyperdeck.slotInfo(1);
hyperdeck.clipsGet();
hyperdeck.nextClip();
hyperdeck.prevClip();
hyperdeck.transportInfo();
hyperdeck.format('asdasd');

Logger.setLevel(Logger.DEBUG);
Logger.setLevel(Logger.INFO);
Logger.setLevel(Logger.WARN);
Logger.setLevel(Logger.ERROR);
Logger.setLevel(Logger.OFF);

async function main() {
    await hyperdeck.onConnected();

    const response = await hyperdeck.transportInfo();
    // $ExpectType string
    response.text;

    const format = response.params['video format'];
    if (format === '1080i60') {
        //
    }

    // @ts-expect-error invalid format
    format === '1080i30';

    const clips = await hyperdeck.clipsGet();
    // $ExpectType string[]
    clips.params.clip_one.split(' ');
}

main();
