# @types/rax [![npm](https://img.shields.io/npm/v/@types/rax.svg)](https://www.npmjs.com/package/@types/rax)

# Installation
```
npm install --save @types/rax
```

# Config

Add `node_modules/@types/rax` to your tsconifg.json file, like so:
```json
{
  "compilerOptions": {
    "typeRoots": [
      "types",
    ],
    "paths": {
      "rax": ["node_modules/@types/rax"]
    }
  }
}
```

# Usage

## Hooks

```tsx
import * as Rax from 'rax';

const createElement = Rax.createElement;

// FunctionComponent
interface PersonProps {
  name: string;
  age: number;
}
const Person: Rax.FunctionComponent<PersonProps> = (props) => {
  return (
    <text>
      hello! I'm {props.name} and I'm {props.age} years old!
    </text>
  );
};

// FunctionComponent With Ref
export interface FancyButtonProps {
  onClick: () => void;
  children?: Rax.RaxNode;
}
export interface FancyButton {
  getClickCount(): number;
}
export const FancyButton = Rax.forwardRef((props: FancyButtonProps, ref: Rax.Ref<FancyButton>) => {
  const [count, setCount] = Rax.useState(0);

  Rax.useImperativeHandle(ref, () => ({
    getClickCount() {
      return count;
    }
  }));

  return (
    <div
      onClick={() => {
        setCount(count + 1);
        props.onClick();
      }}
    >
      {props.children}
    </div>
  );
});

interface AppState {
  name: string;
  age: number;
}

type AppActions = { type: 'getOlder' } | { type: 'resetAge' };

function reducer(s: AppState, action: AppActions): AppState {
  switch (action.type) {
    case 'getOlder':
      return { ...s, age: s.age + 1 };
    case 'resetAge':
      return { ...s, age: 0 };
  }
}

const initialState = {
  name: 'Rax',
  age: 18
};

export function App() {
  const [state, dispatch] = Rax.useReducer(reducer, initialState);
  const birthdayRef = Rax.useRef<FancyButton>(null);

  Rax.useLayoutEffect(() => {
    if (birthdayRef.current !== null) {
      birthdayRef.current.getClickCount();
    } else {
      // this looks redundant but it ensures the type actually has "null" in it instead of "never"
      // $ExpectType null
      console.log(birthdayRef.current);
    }
  });

  return (
    <Rax.Fragment>
      <Person {...state} />
      <FancyButton
        onClick={() => {
          if (birthdayRef.current !== null) {
            console.log(birthdayRef.current.getClickCount());
          }
          dispatch({ type: 'getOlder' });
        }}
        ref={birthdayRef}
      >
        Birthday time!
      </FancyButton>
      <FancyButton onClick={() => dispatch({ type: 'resetAge' })}>Let's start over.</FancyButton>
    </Rax.Fragment>
  );
}

export default App;
```
