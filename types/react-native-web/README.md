# `react-native-web`

> React Native for Web is an accessible implementation of React Native's Components and APIs that is interoperable with React DOM. https://necolas.github.io/react-native-web/
Because it is not an identical implementation of `react-native`, it adds or modifies existing type signatures on exported components and APIs from `react-native`.

These types are an attempt to augment existing `react-native` types to match the behavior when `react-native-web` is implemented in a project.

## Usage 

To enhance `react-native` types, users must import these specific types into any `.ts` or `.d.ts` file. By doing this, they are augmenting the underlying `react-native` types with web specific properties.

```ts
import '@types/react-native-web';
```

## Limitations

Not all properties can be augmented due to the nature of Typescript. Types of properties that are already defined inside an interface in `react-native` can't be overwritten, e.g.:

```ts
// react-native
interface ViewStyle {
  position: 'sticky' | 'absolute'
}

// react-native-web augmentation
interface ViewStyle {
  position: 'sticky' | 'absolute' | 'fixed' // that won't work
}
```

This essentially means that while new properties can be added, altering existing ones is not feasible.