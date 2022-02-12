import { isHotkey, isCodeHotkey, isKeyHotkey, parseHotkey, compareHotkey } from 'is-hotkey';
import * as React from 'react';

const component = (
    <button
        onKeyDown={event => {
            isHotkey('ctrl+a')(event); // $ExpectType boolean
            isCodeHotkey('ctrl+a')(event); // $ExpectType boolean
            isKeyHotkey('ctrl+a')(event); // $ExpectType boolean
            compareHotkey(parseHotkey('cmd+s'), event); // $ExpectType boolean
        }}
    ></button>
);
