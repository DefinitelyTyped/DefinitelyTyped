//
// Examples from https://github.com/abpetkov/switchery
//
import { default as Switchery } from "switchery";

function multipleSwitches() {

    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

    elems.forEach((html: Element) => {
        var switchery = new Switchery(html);
    });
}


function disabledSwitch() {

    var elem = document.querySelector('.js-switch')

    //inactive switch
    var switchery = new Switchery(elem, { disabled: true });

    //Customize the default opacity of the disabled switch, using the disabledOpacity option.
    switchery = new Switchery(elem, { disabled: true, disabledOpacity: 0.75 });
}


function coloredSwitch() {

    var elem = document.querySelector('.js-switch')

    //You can change the primary color of the switch to fit your design perfectly:
    var switchery = new Switchery(elem, { color: '#41b7f1' });

    //Or the secondary color, which will change the switch background color and border color:
    switchery = new Switchery(elem, { secondaryColor: '#bbf0f0' });

    //Since version 0.6.3, you're even allowed to change the jack color from JS, as follows:
    switchery = new Switchery(elem, { jackColor: '#fffc00', jackSecondaryColor: '#41b7f1' });
}

function switchSizes() {

    var elem = document.querySelector('.js-switch')

    var switchery = new Switchery(elem, { size: 'small' });
    switchery = new Switchery(elem, { size: 'large' });
}

function checkingState() {

    var elem = document.querySelector('.js-switch')

    //On click:

    var clickCheckbox = <HTMLInputElement> document.querySelector('.js-check-click')
    var clickButton = <HTMLInputElement> document.querySelector('.js-check-click-button');

    clickButton.addEventListener('click', () => {
        alert(clickCheckbox.checked);
    });

    //On change:

    var changeCheckbox = <HTMLInputElement> document.querySelector('.js-check-change');

    changeCheckbox.onchange = function() {
        alert(changeCheckbox.checked);
    };
}

function detached() {
    var elem = document.querySelector('.js-switch')
    var switchery = new Switchery(elem, { size: 'small' });

    switchery.destroy();
}

function toggleState() {
    var elem = document.querySelector('.js-switch')
    var switchery = new Switchery(elem, { size: 'small' });
    var isDisabled = switchery.isDisabled();

    switchery.enable();
    switchery.disable();
}
