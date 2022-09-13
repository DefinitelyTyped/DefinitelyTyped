import offset = require('mouse-event-offset');
import type { MouseEvent, TouchEvent } from 'react';

declare const mouseEvent: MouseEvent;
// $ExpectType [number, number]
offset(mouseEvent);

declare const touchEvent: TouchEvent;
// $ExpectType [number, number]
offset(touchEvent);

const div = document.createElement('div');

offset(touchEvent, div);
