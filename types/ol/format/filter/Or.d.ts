import Filter from 'ol/format/filter/Filter';
import LogicalNary from 'ol/format/filter/LogicalNary';
export default class Or extends LogicalNary {
    constructor(...conditions: Filter[]);
}
