import Filter from './Filter';
import LogicalNary from './LogicalNary';

export default class Or extends LogicalNary {
    constructor(...conditions: Filter[]);
}
