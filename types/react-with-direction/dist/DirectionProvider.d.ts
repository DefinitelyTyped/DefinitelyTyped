import * as React from 'react';
import { Direction, DIRECTIONS } from 'react-with-direction/dist/constants';

type DirectionProviderProps = {
  children: React.ReactNode;
  direction: Direction;
  inline?: boolean | null;
};

const DirectionProvider: React.ComponentType<DirectionProviderProps>;

export default DirectionProvider;
export { DIRECTIONS };
