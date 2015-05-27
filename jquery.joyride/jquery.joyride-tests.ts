/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="jquery.joyride.d.ts" />

var options: JoyrideOptions;
options.autoStart = true;
options.postStepCallback = (index, tip)=> {
    if (index == 2) {
        $(this).joyride('set_li', false, 1);
    }
};
options.modal = true;
options.expose = true;

$(window).load(()=> {
    $('#joyRideTipContent').joyride(options);
});