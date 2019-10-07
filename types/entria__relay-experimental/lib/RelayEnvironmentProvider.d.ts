import { ReactNode } from 'react';
import { IEnvironment } from 'relay-runtime';

export interface Props {
    children: ReactNode;
    environment: IEnvironment;
}

export function RelayEnvironmentProvider(props: Props): JSX.Element;
