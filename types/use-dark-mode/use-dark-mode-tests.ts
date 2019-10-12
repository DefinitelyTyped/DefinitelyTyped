import useDarkMode from "use-dark-mode";

// $ExpectType DarkMode
const darkMode = useDarkMode(false);

darkMode.value; // $ExpectType boolean
darkMode.disable(); // $ExpectType void
darkMode.enable(); // $ExpectType void
darkMode.toggle(); // $ExpectType void

// $ExpectType DarkMode
useDarkMode(true, {
    classNameDark: 'dark-mode',
    classNameLight: 'light-mode',
    element: document.body,
    storageKey: 'darkMode',
    storageProvider: localStorage,
});

// $ExpectType DarkMode
useDarkMode(true, {
    onChange: (value) => {
        value; // $ExpectType: boolean
    },
    storageKey: null,
});
