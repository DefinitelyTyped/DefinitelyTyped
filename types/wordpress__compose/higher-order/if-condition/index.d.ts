import { ComponentType, FC } from 'react';

declare function ifCondition<P = {}>(predicate: (props: P) => boolean): (component: ComponentType<P>) => FC<P>;

export default ifCondition;
