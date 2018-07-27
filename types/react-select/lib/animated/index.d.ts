import { ComponentType } from 'react';
import { SelectComponents, defaultComponents } from '../components/index';
import { default as AnimatedInput } from './Input';
import { default as AnimatedMultiValue } from './MultiValue';
import { default as AnimatedPlaceholder } from './Placeholder';
import { default as AnimatedSingleValue } from './SingleValue';
import { default as AnimatedValueContainer } from './ValueContainer';
import { InputProps } from '../components/Input';
import { MultiValueProps } from '../components/MultiValue';
import { PlaceholderProps } from '../components/Placeholder';
import { SingleValueProps } from '../components/SingleValue';
import { ValueContainerProps } from '../components/containers';

declare const makeAnimated: (externalComponents?: SelectComponents) => SelectComponents;

declare const AnimatedComponents: SelectComponents;

export const Input: ComponentType<InputProps>;
export const MultiValue: ComponentType<MultiValueProps>;
export const Placeholder: ComponentType<PlaceholderProps>;
export const SingleValue: ComponentType<SingleValueProps>;
export const ValueContainer: ComponentType<ValueContainerProps>;

export default makeAnimated;
