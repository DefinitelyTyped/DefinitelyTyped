import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  withKnobsOptions,
  number,
  color,
  object,
  boolean,
  text,
  select,
  date,
  knob,
} from '@storybook/addon-knobs';

const stories = storiesOf('Example of Knobs', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withKnobsOptions({ debounce: true, timestamps: true }));

stories.add('with all knobs', () => {
  const name = text('Name', 'Tom Cary');
  const dob = date('DOB', new Date('January 20 1887'));

  const bold = boolean('Bold', false);
  const selectedColor = color('Color', 'black');
  const favoriteNumber = number('Favorite Number', 42);
  const comfortTemp = number('Comfort Temp', 72, { range: true, min: 60, max: 90, step: 1 });
  const textDecoration = select('Decoration', {
    none: 'None',
    underline: 'Underline',
    'line-through': 'Line-Through'
  }, 'none');

  const customStyle = object('Style', {
    fontFamily: 'Arial',
    padding: 20,
  });

  const genericObject: string = object<string>('Some generic object', 'value');
  type X = 'a' | 'b';
  const genericSelect: X = select<X>('Some generic select', { a: 'a', b: 'b'}, 'b');
  const genericKnob: X = knob<X>('Some generic knob', { value: 'a', type: 'text' });

  const style = Object.assign({}, customStyle, {
    fontWeight: bold ? 800 : 400,
    color: selectedColor,
    textDecoration
  });

  return (
    <div style={style}>
      I'm {name} and I was born on "{dob}"
      <p>My favorite number is {favoriteNumber}.</p>
      <p>My most comfortable room temperature is {comfortTemp} degrees Fahrenheit.</p>
    </div>
  );
});

stories.add('dynamic knobs', () => {
  const showOptional = select('Show optional', ['yes', 'no'], 'yes');
  return (
    <div>
      <div>
        {text('compulsary', 'I must be here')}
      </div>
      { showOptional === 'yes' ? <div>{text('optional', 'I can disapear')}</div> : null }
    </div>
  );
});
