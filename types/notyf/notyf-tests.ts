import Notyf = require("notyf");

const options = {
    delay: 1000,
    alertIcon: 'fa fa-bell',
    confirmIcon: 'fa fa-exclamation'
};

const notyf = new Notyf(options);
notyf.alert('Danger!');
notyf.confirm('Success!');
