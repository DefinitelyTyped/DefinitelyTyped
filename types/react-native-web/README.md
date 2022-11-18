# `react-native-web`

> React Native for Web is an accessible implementation of React Native's Components and APIs that is interoperable with React DOM. https://necolas.github.io/react-native-web/

Because it is not an identical implemenation of `react-native`, it adds or modifies existing type signatures on exported components and APIs from `react-native`.

These types are an attempt to augment existing `react-native` types to match the behavior when `react-native-web` is implemented in a project.

## Accessibility

https://necolas.github.io/react-native-web/docs/accessibility/

Many of these props are web specific, so we add them based on the docs and [flow types in the repository](https://github.com/necolas/react-native-web/blob/fa47f80d34ee6cde2536b2a2241e326f84b633c4/packages/react-native-web/src/exports/View/types.js#L27-L91).

## Interactions

https://necolas.github.io/react-native-web/docs/interactions/

TODO

## Styling

https://necolas.github.io/react-native-web/docs/styling/

TODO

## Compatability

https://necolas.github.io/react-native-web/docs/react-native-compatibility/