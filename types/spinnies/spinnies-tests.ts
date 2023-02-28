import Spinnies = require("spinnies");

function spinniesClass() {
    const spinnies = new Spinnies({
        color: "white",
        succeedColor: "green",
        failColor: "red",
        spinnerColor: "greenBright",
        succeedPrefix: "✓",
        failPrefix: "✖",
        disableSpins: false
    });

    // $ExpectType Options
    spinnies.options;

    spinnies.add("spinner-1", {
        text: "I a another spinner"
    });

    spinnies.add("spinner-2", {
        text: "I am another spinner"
    });

    // $ExpectType SpinnerOptions
    spinnies.pick('spinner-1');

    // $ExpectType SpinnerOptions
    spinnies.update('spinner-1', {
        text: "Still spinning"
    });

    // $ExpectType SpinnerOptions
    spinnies.succeed('spinner-1', { text: "Success!" });

    // $ExpectType SpinnerOptions
    spinnies.fail('spinner-2', { text: "Fail :-(" });

    // $ExpectType SpinnerOptions
    spinnies.remove("spinner-1");

    // $ExpectType SpinnerOptions
    spinnies.remove("spinner-2");
}

function customSpinner() {
    const spinner: Spinnies.Spinner = {
        interval: 80,
        frames: ['🍇', '🍈', '🍉', '🍋']
    };

    const spinnies = new Spinnies({ color: 'blue', succeedColor: 'green', spinner });
}

function disableSpins() {
    const spinnies = new Spinnies({ disableSpins: true });
}
