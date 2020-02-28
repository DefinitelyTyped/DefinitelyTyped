import React, { FC } from 'react';
import { OnBlur, OnFocus, OnChange } from 'react-final-form-listeners';

const TestComponent: FC = () => (
  <div>
    <OnChange name="change">
      {(value, prevValue) => console.log(value, prevValue)}
    </OnChange>
    <OnBlur name="blur">
      {() => console.log('blur')}
    </OnBlur>
    <OnFocus name="focus">
      {() => console.log('focus')}
    </OnFocus>
  </div>
);

export default TestComponent;
