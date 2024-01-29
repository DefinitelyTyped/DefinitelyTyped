import * as React from "react";
import ReactInputMask from "react-input-mask";

let ref: HTMLInputElement | null = null;

const firstLetter = /(?!.*[DFIOQU])[A-VXY]/i;
const letter = /(?!.*[DFIOQU])[A-Z]/i;
const digit = /[0-9]/;
const mask = [firstLetter, digit, letter, " ", digit, letter, digit];

<div>
    <ReactInputMask mask="+4\9 99 999 99" maskPlaceholder={null} />
    <ReactInputMask mask="+7 (999) 999-99-99" />
    <ReactInputMask mask="99-99-9999" defaultValue="11-01-2017" maskPlaceholder="mm/dd/yyyy" />
    <ReactInputMask mask="99/99/9999" placeholder="Enter birthdate" />
    <ReactInputMask mask="+7 (999) 999-99-99" />
    <ReactInputMask mask={mask} />
    <ReactInputMask mask="+7 (999) 999-99-99" inputRef={(node) => ref = node} />
</div>;
