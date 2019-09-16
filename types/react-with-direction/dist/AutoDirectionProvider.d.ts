import * as React from 'react';
import { Direction } from 'react-with-direction/dist/constants';

type AutoDirectionProviderProps = {
  children: React.ReactNode;
  inline?: boolean | null;
  text: string;
};

declare const AutoDirectionProvider: React.ComponentType<
  AutoDirectionProviderProps
>;

export default AutoDirectionProvider;
export { AutoDirectionProviderProps };
