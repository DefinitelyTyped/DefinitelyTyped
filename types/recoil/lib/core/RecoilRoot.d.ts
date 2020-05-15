import { FC } from 'react';
import { RecoilState } from './recoilValue';

export interface RecoilRootProps {
    initializeState?: (options: {
        set: <T>(recoilVal: RecoilState<T>, newVal: T) => void;
        setUnvalidatedAtomValues: (atomMap: Map<string, unknown>) => void;
    }) => void;
}

export const RecoilRoot: FC<RecoilRootProps>;
