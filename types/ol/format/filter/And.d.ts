import Filter from 'ol/format/filter/Filter';
import LogicalNary from 'ol/format/filter/LogicalNary';
export default class And extends LogicalNary {
    constructor(...conditions: Filter[]);
}
