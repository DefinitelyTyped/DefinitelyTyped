import { Options } from "ez-plus";

$(document).ready(() => {
    // basic usage
    $('#image').ezPlus();

    // with options
    const options: Options = {
        zoomLens: true,
        zoomType: 'lens',
        cursor: 'crosshair'
    };
    $('#image').ezPlus(options);
});
