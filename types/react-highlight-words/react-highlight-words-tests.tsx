import * as React from "react";
import Highlighter = require("react-highlight-words");

<Highlighter
  highlightClassName='YourHighlightClass'
  searchWords={['and', 'or', 'the']}
  textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
/>;
