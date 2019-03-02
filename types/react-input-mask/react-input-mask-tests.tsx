import ReactInputMask from 'react-input-mask';
import * as React from 'react';

let ref: HTMLInputElement | null = null;

<div>
  <ReactInputMask mask="+4\9 99 999 99" maskChar={null} />
  <ReactInputMask mask="+7 (999) 999-99-99" />
  <ReactInputMask mask="99-99-9999" defaultValue="13-00-2017" />
  <ReactInputMask mask="99/99/9999" placeholder="Enter birthdate" />
  <ReactInputMask mask="+7 (999) 999-99-99" />
  <ReactInputMask mask="+7 (999) 999-99-99" inputRef={(node) => ref = node} />
</div>;
