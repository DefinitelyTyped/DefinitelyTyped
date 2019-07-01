import { ComponentType, FC } from '@wordpress/element';

declare function ifCondition<P = {}>(predicate: (props: P) => boolean): (component: ComponentType<P>) => FC<P>;

export default ifCondition;
