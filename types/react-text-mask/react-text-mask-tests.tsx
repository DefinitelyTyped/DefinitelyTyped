import MaskedInput, { conformToMask } from "react-text-mask";
import * as React from 'react';

// $ExpectType conformToMaskResult
conformToMask("123", ["(", /\d/, /\d/, ")"]);

// playground: https://codesandbox.io/s/falling-sun-xdthu?file=/src/App.js:67-353
const Test: React.FC = () => {
    return (
      <div className="App">
        {/* throwing error after typing */}
        <MaskedInput />
        {/* throwing error after render */}
        <MaskedInput mask={true} />
        {/* works fine */}
        <MaskedInput mask={false} />
      </div>
    );
  }
