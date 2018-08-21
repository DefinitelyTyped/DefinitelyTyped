import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  withKnobsOptions,
  number,
  color,
  files,
  object,
  boolean,
  text,
  select,
  date,
  array,
  button,
  knob,
  selectV2,
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

  const genericSelect: X = select<X>('Some generic select', { a: 'type a', b: 'type b' }, 'b');

  const enumSelectOptions: { [s: number]: string } = {};
  enumSelectOptions[SomeEnum.Type1] = "Type 1";
  enumSelectOptions[SomeEnum.Type2] = "Type 2";
  const genericSelect2: SomeEnum = select<SomeEnum>('Some generic select', enumSelectOptions, SomeEnum.Type1);

  const genericSelectV2: X = selectV2<X>('Some generic select', { 'type a': 'a', 'type b': 'b' }, 'b');
  const genericSelectV2Enum: SomeEnum = selectV2<SomeEnum>('Some generic select v2', { 'type a': SomeEnum.Type1, 'type b': SomeEnum.Type2 }, SomeEnum.Type2);

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

const readonlyOptionsArray: ReadonlyArray<string> = ['hi'];
select('With readonly array', readonlyOptionsArray, readonlyOptionsArray[0]);

const genericArray = array('With regular array', ['hi', 'there']);

const userInputArray = array('With readonly array', readonlyOptionsArray);
userInputArray.push('Make sure that the output is still mutable although the input need not be!');

// groups
const groupId = 'GROUP-ID1';

text('label', 'default', groupId);
boolean('label', true, groupId);
number('label', 1, {}, groupId);
color('label', '#ffffff', groupId);
object('label', {}, groupId);
array('label', [], ',', groupId);
select<any>('label', { option: 'Option' }, null, groupId);
files('label', 'image/*', []);
date('label', new Date(), groupId);
button('label', () => undefined, groupId);
