import { ComponentType } from 'react';
import { SelectComponents, defaultComponents } from '../components/index';
import { default as AnimatedInput, AnimatedInputProps } from './Input';
import { default as AnimatedMultiValue, AnimatedMultiValueProps } from './MultiValue';
import { default as AnimatedPlaceholder, AnimatedPlaceholderProps } from './Placeholder';
import { default as AnimatedSingleValue, AnimatedSingleValueProps } from './SingleValue';
import { default as AnimatedValueContainer, AnimatedValueContainerProps } from './ValueContainer';

export function makeAnimated(externalComponents?: SelectComponents): SelectComponents;

export const Input: ComponentType<AnimatedInputProps>;
export const MultiValue: ComponentType<AnimatedMultiValueProps>;
export const Placeholder: ComponentType<AnimatedPlaceholderProps>;
export const SingleValue: ComponentType<AnimatedSingleValueProps>;
export const ValueContainer: ComponentType<AnimatedValueContainerProps>;

export default makeAnimated;
