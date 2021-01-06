declare module 'react-native-highlight-words' {
  import React from 'react';
  import { TextProps } from 'react-native';

  export interface HighlighterProps {
    autoEscape?: boolean;
    highlightStyle?: TextProps['style'];
    sanitize?: () => void;
    searchWords: string[];
    style?: TextProps['style'];
    textToHighlight: string;
  }

  export default class Highlighter extends React.Component<HighlighterProps> {}
}
