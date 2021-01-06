import * as React from 'react';
import Highlighter from 'react-native-highlight-words';

export default class MyHighlightedText extends React.Component {
    render() {
        return (
          <Highlighter
            highlightStyle={{backgroundColor: 'yellow'}}
            searchWords={['and', 'or', 'the']}
            textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
          />
        );
    }
}
