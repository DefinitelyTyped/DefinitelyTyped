import * as React from 'react';
import { TextProps } from 'react-native';

export interface HighlighterProps {
  autoEscape?: boolean;
  highlightStyle?: TextProps['style'];
  sanitize?: () => void;
  searchWords: string[];
  style?: TextProps['style'];
  textToHighlight: string;
}

declare class Highlighter extends React.Component<HighlighterProps> {}

export default Highlighter;
