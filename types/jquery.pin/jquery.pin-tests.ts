import { Options } from "jquery.pin";

// basic usage
$(".pinned").pin();

// with options
const options: Options = {
    activeClass: 'active',
    minWidth: 940,
    containerSelector: '.container',
    padding: {
        top: 10,
        bottom: 10
    }
};

$(".pinned").pin(options);
