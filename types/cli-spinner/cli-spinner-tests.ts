import { Spinner } from 'cli-spinner';

let spinner: Spinner = new Spinner();
spinner.setSpinnerString('|/-\\');
spinner.start();

spinner = new Spinner('processing.. %s');

spinner = new Spinner({
    text: 'processing.. %s',
    stream: process.stderr,
    onTick(msg) {
        this.clearLine(this.stream);
        this.stream.write(msg);
    },
});

spinner = spinner.start();
spinner = spinner.stop().stop(true).stop(false);
spinner = spinner.clearLine(process.stdout);
spinner = spinner.setSpinnerDelay(100);
spinner = spinner.setSpinnerString('My spinner string');
spinner = spinner.setSpinnerTitle('My spinner title');

const isSpinning: boolean = spinner.isSpinning();

const Spinner2: typeof Spinner = Spinner.setDefaultSpinnerDelay(100).setDefaultSpinnerString('Other spinner string');
