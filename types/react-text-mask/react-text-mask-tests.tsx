import MaskedInput, { conformToMask } from "react-text-mask";
import * as React from 'react';

const mask = ["(", /\d/, /\d/, ")"]

// $ExpectType ConformToMaskResult
conformToMask("123", mask, {
    currentCaretPosition: 0,
    placeholder: "",
    previousConformedValue: "",
    guide: false,
    keepCharPositions: false,
    placeholderChar: "#"
});

// playground: https://codesandbox.io/s/nifty-wiles-6uwlb?file=/src/App.tsx
function Test() {
    return (
        <div className="App">
            {/* throwing error after typing */}
            {/* @ts-expect-error */}
            <MaskedInput />
            {/* throwing error after render */}
            {/* @ts-expect-error */}
            <MaskedInput mask={true} />
            {/* works fine */}
            <MaskedInput mask={false} />

            <MaskedInput
                mask={mask}
                render={(setRef, props) => {
                    return <input {...props} ref={(ref) => ref && setRef(ref)}/>
                }}
            />
            <MaskedInput
                mask={mask}
                pipe={(conformedValue) => {
                   return conformedValue
                }}
           />
            <MaskedInput
                mask={mask}
                value="2"
                pipe={(conformedValue) => {
                    const newChar = {
                        index: 2,
                        value: "9",
                    }
                    const nextConformedValue = conformedValue.split("")
                    nextConformedValue.splice(newChar.index, 1, newChar.value)

                    return {value: nextConformedValue.join(""), indexesOfPipedChars: [newChar.index]}
                }}
            />
        </div>
    );
}
