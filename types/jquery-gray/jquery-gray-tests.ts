import { Options } from "jquery-gray";

// basic usage
$('.images').gray();

$('.images').toggleClass('grayscale-off');

// with options
const options: Options = {
    fade: true,
    classes: {
        fade: 'grayscale-fade'
    }
};

$('.images').gray(options);
