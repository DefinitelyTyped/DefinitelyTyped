import halfmoon = require('halfmoon');

halfmoon.pageWrapper; // $ExpectType Element
halfmoon.stickyAlerts; // $ExpectType Element

halfmoon.darkModeOn; // $ExpectType "yes" | "no"

halfmoon.createCookie('darkModeOn', 'yes'); // $ExpectType void
halfmoon.createCookie('darkModeOn', 'yes', 10); // $ExpectType void

halfmoon.readCookie('darkModeOn'); // $ExpectType string | null

halfmoon.eraseCookie('darkModeOn'); // $ExpectType void

halfmoon.toggleDarkMode(); // $ExpectType void

halfmoon.toggleSidebar(); // $ExpectType void

halfmoon.deactivateAllDropdownToggles(); // $ExpectType void

halfmoon.toggleModal('modal'); // $ExpectType void

halfmoon.makeId(16); // $ExpectType string

halfmoon.toastAlert('alert'); // $ExpectType void
halfmoon.toastAlert('alert', 1000); // $ExpectType void

const stickyAlert = {
    content: '',
    title: '',
    alertType: '',
    fillType: '',
    hasDismissButton: true,
    timeShown: 1000,
};
halfmoon.initStickyAlert(stickyAlert); // $ExpectType void

halfmoon.clickHandler = event => {
    event.preventDefault();
};

halfmoon.keydownHandler = event => {
    event.preventDefault();
};

halfmoon.onDOMContentLoaded(); // $ExpectType void
