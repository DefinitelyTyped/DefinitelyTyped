import { resetDefaults, setDefaults, matchArray, matchObject } from 'searchjs';

resetDefaults();

setDefaults({
    negator: false,
    joinAnd: "AND",
    text: false,
    word: false,
    start: false,
    end: false,
    separator: ".",
    propertySearch: false,
    propertySearchDepth: -1
});

matchArray(
    [
        { a: '1234', b: 56 },
        { a: 'Hello!', b: 11 },
    ],
    { a: 'Hello!' },
);

matchObject({ stuff: 'This is some awesome stuff' }, 'some awesome stuff');
