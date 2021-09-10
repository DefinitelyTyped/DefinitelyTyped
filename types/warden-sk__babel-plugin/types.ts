/*
 * Copyright 2021 Marek Kobida
 */

// https://drafts.csswg.org/css-align/#typedef-content-distribution
export const ContentDistribution = ['space-around', 'space-between', 'space-evenly', 'stretch'] as const;
// https://drafts.csswg.org/css-align/#typedef-content-position
export const ContentPosition = ['center', 'end', 'flex-end', 'flex-start', 'start'] as const;
// https://drafts.csswg.org/css-display-3/#typedef-display-box
export const DisplayBox = ['none'] as const;
// https://drafts.csswg.org/css-display-3/#typedef-display-inside
export const DisplayInside = ['flex', 'grid'] as const;
// https://drafts.csswg.org/css-display-3/#typedef-display-legacy
export const DisplayLegacy = ['inline-block', 'inline-flex', 'inline-grid'] as const;
// https://drafts.csswg.org/css-display-3/#typedef-display-outside
export const DisplayOutside = ['block', 'inline'] as const;
// https://drafts.csswg.org/css-align/#typedef-self-position
export const SelfPosition = ['center', 'end', 'flex-end', 'flex-start', 'self-end', 'self-start', 'start'] as const;
//
// https://drafts.csswg.org/css-align/#propdef-align-content
export const AlignContent = ['baseline', ...ContentDistribution, ...ContentPosition] as const;
// https://drafts.csswg.org/css-align/#propdef-align-items
export const AlignItems = ['baseline', 'stretch', ...SelfPosition] as const;
// https://drafts.csswg.org/css-align/#propdef-align-self
export const AlignSelf = ['baseline', 'stretch', ...SelfPosition] as const;
// https://drafts.csswg.org/css-display-3/#propdef-display
export const Display = [...DisplayBox, ...DisplayInside, ...DisplayLegacy, ...DisplayOutside] as const;
// https://drafts.csswg.org/css-flexbox-1/#propdef-flex
export const Flex = ['1', 'none'] as const;
// https://drafts.csswg.org/css-flexbox-1/#propdef-flex-direction
export const FlexDirection = ['column', 'column-reverse', 'row', 'row-reverse'] as const;
// https://drafts.csswg.org/css-flexbox-1/#propdef-flex-wrap
export const FlexWrap = ['nowrap', 'wrap', 'wrap-reverse'] as const;
// https://drafts.csswg.org/css-align/#propdef-justify-content
export const JustifyContent = ['left', 'right', ...ContentDistribution, ...ContentPosition] as const;
// https://drafts.csswg.org/css-align/#propdef-justify-items
export const JustifyItems = ['baseline', 'stretch', ...SelfPosition] as const;
// https://drafts.csswg.org/css-align/#propdef-justify-self
export const JustifySelf = ['baseline', 'stretch', ...SelfPosition] as const;
//
export const S = [
  '!1',
  '!2',
  '!3',
  '!4',
  '!5',
  '!6',
  '!7',
  '!8',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  'auto',
] as const;
//
export const MarginLeft = [
  '1/12',
  '10/12',
  '11/12',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  ...S,
] as const;
export const Width = [
  '0',
  '1/12',
  '10/12',
  '100',
  '11/12',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  'auto',
] as const;
