import MaskedInput, { conformToMask } from 'react-text-mask';
import * as React from 'react';

const mask = ['(', /\d/, /\d/, ')'];

// $ExpectType ConformToMaskResult
conformToMask('123', mask, {
    currentCaretPosition: 0,
    placeholder: '',
    previousConformedValue: '',
    guide: false,
    keepCharPositions: false,
    placeholderChar: '#',
});

// Playground: https://codesandbox.io/s/nifty-wiles-6uwlb?file=/src/App.tsx
function Test() {
    return (
        <div>
            {/* throwing error after typing */}
            {/* @ts-expect-error */}
            <MaskedInput />
            {/* throwing error after render */}
            {/* @ts-expect-error */}
            <MaskedInput mask={true} />
            {/* works fine */}
            <MaskedInput mask={false} />
            <MaskedInput
                mask={value => {
                    if (value.length) {
                        return mask.slice(-1);
                    }
                    return mask;
                }}
            />
            <MaskedInput
                showMask
                mask={mask}
                guide={false}
                keepCharPositions={false}
                value=""
                placeholderChar="#"
                render={(setRef, props) => {
                    return <input {...props} ref={ref => ref && setRef(ref)} />;
                }}
            />
            <MaskedInput
                mask={false}
                pipe={conformedValue => {
                    if (conformedValue.includes('1')) {
                        return false;
                    }
                    return conformedValue;
                }}
            />
            <MaskedInput
                mask={mask}
                value="2"
                pipe={conformedValue => {
                    const newChar = {
                        index: 2,
                        value: '9',
                    };
                    const nextConformedValue = conformedValue.split('');
                    nextConformedValue.splice(newChar.index, 1, newChar.value);

                    return { value: nextConformedValue.join(''), indexesOfPipedChars: [newChar.index] };
                }}
            />
        </div>
    );
}
