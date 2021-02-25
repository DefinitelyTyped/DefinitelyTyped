import { ProviderProps, ReactElement, ReactNode } from 'react';
import { IEnvironment, RelayContext } from 'relay-runtime';

export interface Props {
    children: ReactNode;
    environment: IEnvironment;
}

export function RelayEnvironmentProvider(props: Props): ReactElement<ProviderProps<RelayContext>>;
