import {resetDefaults, setDefaults, matchArray, matchObject} from "searchjs";


resetDefaults();

setDefaults({});

matchArray([{a: '1234', b: 56}, {a: 'Hello!', b: 11}], {a: 'Hello!'});

matchObject({stuff: "This is some awesome stuff"}, "some awesome stuff");