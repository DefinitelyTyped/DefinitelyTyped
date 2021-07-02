import MaskedInput, { conformToMask } from "react-text-mask";

// $ExpectType conformToMaskResult
conformToMask("123", ["(", /\d/, /\d/, ")"]);

// playground: https://codesandbox.io/s/falling-sun-xdthu?file=/src/App.js:67-353
function App() {
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
