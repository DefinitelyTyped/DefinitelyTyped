import KOS from 'kos-core';

type IReactComponent<P = any, S = any> = React.ComponentClass<P, S>;
declare let RC: IReactComponent;

KOS.start(RC, "#root");
