import Filter from './Filter';
import LogicalNary from './LogicalNary';

export default abstract class And extends LogicalNary {
    constructor(...conditions: Filter[]);
}
