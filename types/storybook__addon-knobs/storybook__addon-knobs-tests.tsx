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
  array,
  button,
  knob,
} from '@storybook/addon-knobs';

enum SomeEnum {
  Type1 = 1,
  Type2
}

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

  const genericSelect: X = select<X>('Some generic select', { a: 'type a', b: 'type b'}, 'b');

  const enumSelectOptions: { [s: number]: string } = {};
  enumSelectOptions[SomeEnum.Type1] = "Type 1";
  enumSelectOptions[SomeEnum.Type2] = "Type 2";
  const genericSelect2: SomeEnum = select<SomeEnum>('Some generic select', enumSelectOptions, SomeEnum.Type1);

  const genericArray: string[] = array<string>('Some generic array', ['red', 'green', 'blue']);

  const genericKnob: X = knob<X>('Some generic knob', { value: 'a', type: 'text' });

  button('Some button', () => console.log('Button knob clicked'));

  const style = {
    ...customStyle,
    fontWeight: bold ? 800 as 800 : 400 as 400, // tslint:disable-line no-unnecessary-type-assertion
    color: selectedColor,
    textDecoration
  };

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
