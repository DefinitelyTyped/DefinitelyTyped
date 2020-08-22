import Filter from './Filter';
import LogicalNary from './LogicalNary';

export default class And extends LogicalNary {
    constructor(...conditions: Filter[]);
}
